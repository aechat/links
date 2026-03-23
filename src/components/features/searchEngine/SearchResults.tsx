import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {message} from "antd";

import {copyText} from "../../../hooks/useCopyToClipboard";
import {useLongPress} from "../../../hooks/useLongPress";
import {isMobileDevice} from "../../../utils/browserDetection";
import {withSelectionHaptic} from "../../../utils/haptics";

import searchStyles from "./SearchEngine.module.scss";
import {highlightMatchedTokens, renderHighlightedText} from "./searchHighlightUtilities";
import {compileSearchQuery} from "./searchQueryCore";
import {SearchResultCard} from "./SearchResultCard";
import {getMatchingTagsByQuery} from "./searchResultRuntimeUtilities";

import type {SearchResult} from "./SearchEngine";

type SearchResultsProperties = {
  onLinkClick: (id: string) => void;
  query: string;
  resultRefs: React.RefObject<(HTMLButtonElement | null)[]>;
  results: SearchResult[];
  selectedResultIndex: number;
  setSelectedResultIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const SearchResults: React.FC<SearchResultsProperties> = ({
  onLinkClick,
  query,
  resultRefs,
  results,
  selectedResultIndex,
  setSelectedResultIndex,
}) => {
  const MASONRY_COLUMN_MIN_WIDTH = 400;

  const MASONRY_COLUMN_GAP = 10;

  const HIGHLIGHT_BUFFER_VIEWPORTS = 2;

  const HIGHLIGHT_DELAY_MS = 220;

  const MASONRY_SINGLE_COLUMN_BREAKPOINT =
    MASONRY_COLUMN_MIN_WIDTH * 2 + MASONRY_COLUMN_GAP;

  const RESULT_CONTENT_MAX_HEIGHT = 400;

  const isMobile = isMobileDevice();

  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>();

  const [overflowingResultIds, setOverflowingResultIds] = useState<Set<string>>(
    new Set()
  );

  const resultContentReferences = useRef<Record<string, HTMLDivElement | null>>({});

  const masonryContainerReference = useRef<HTMLDivElement>(null);

  const [isSingleColumnLayout, setIsSingleColumnLayout] = useState(false);

  const compiledQuery = useMemo(() => compileSearchQuery(query), [query]);

  const [isHighlightReady, setIsHighlightReady] = useState(false);

  const [highlightEligibleIds, setHighlightEligibleIds] = useState<Set<string>>(
    new Set()
  );

  const highlightedContentCacheReference = useRef<Map<string, string>>(new Map());

  const [, setHighlightCacheVersion] = useState(0);

  useEffect(() => {
    setIsHighlightReady(false);

    const timeout = globalThis.setTimeout(() => {
      setIsHighlightReady(true);
    }, HIGHLIGHT_DELAY_MS);

    return () => globalThis.clearTimeout(timeout);
  }, [HIGHLIGHT_DELAY_MS, query]);

  useEffect(() => {
    highlightedContentCacheReference.current.clear();
  }, [query]);

  const updateHighlightEligibility = useCallback(() => {
    if (!isHighlightReady) {
      setHighlightEligibleIds(new Set());

      return;
    }

    const viewportHeight = globalThis.innerHeight || 0;

    const viewportBuffer = viewportHeight * HIGHLIGHT_BUFFER_VIEWPORTS;

    const nextEligibleIds = new Set<string>();

    for (const [index, result] of results.entries()) {
      const element = resultRefs.current?.[index];

      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();

      const isInBufferedViewport =
        rect.bottom >= -viewportBuffer && rect.top <= viewportHeight + viewportBuffer;

      if (isInBufferedViewport) {
        nextEligibleIds.add(result.id);
      }
    }

    if (
      selectedResultIndex >= 0 &&
      selectedResultIndex < results.length &&
      results[selectedResultIndex]
    ) {
      nextEligibleIds.add(results[selectedResultIndex].id);
    }

    setHighlightEligibleIds(nextEligibleIds);
  }, [
    HIGHLIGHT_BUFFER_VIEWPORTS,
    isHighlightReady,
    resultRefs,
    results,
    selectedResultIndex,
  ]);

  useEffect(() => {
    const rafId = globalThis.requestAnimationFrame(updateHighlightEligibility);

    const scrollContainer = document.querySelector(
      `.${searchStyles["search-results"]}`
    ) as HTMLElement | null;

    scrollContainer?.addEventListener("scroll", updateHighlightEligibility, {
      passive: true,
    });

    globalThis.addEventListener("resize", updateHighlightEligibility);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      scrollContainer?.removeEventListener("scroll", updateHighlightEligibility);
      globalThis.removeEventListener("resize", updateHighlightEligibility);
    };
  }, [results, updateHighlightEligibility]);

  useEffect(() => {
    updateHighlightEligibility();
  }, [selectedResultIndex, updateHighlightEligibility]);

  useEffect(() => {
    const updateLayout = () => {
      const containerWidth =
        masonryContainerReference.current?.clientWidth ?? globalThis.innerWidth;

      setIsSingleColumnLayout(containerWidth < MASONRY_SINGLE_COLUMN_BREAKPOINT);
    };

    updateLayout();

    const observer = new ResizeObserver(() => {
      updateLayout();
    });

    if (masonryContainerReference.current) {
      observer.observe(masonryContainerReference.current);
    }

    globalThis.addEventListener("resize", updateLayout);

    return () => {
      observer.disconnect();
      globalThis.removeEventListener("resize", updateLayout);
    };
  }, [MASONRY_SINGLE_COLUMN_BREAKPOINT]);

  const handleCopy = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const target = event.target as HTMLElement;

    const button = target.closest("button");

    if (button) {
      const id = button.dataset.id;

      const anchor = button.dataset.anchor;

      if (id) {
        (async () => {
          const anchorToCopy = anchor || id;

          const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${anchorToCopy}`;

          const success = await copyText(anchorUrl);

          if (success) {
            message.success(`Ссылка на статью ${id} скопирована`);
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        })();

        return true;
      }
    }

    return false;
  }, []);

  const getRippleTarget = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("button");

    if (button instanceof HTMLElement) {
      return button;
    }
  }, []);

  const longPressProperties = useLongPress(handleCopy, 500, {getRippleTarget});

  const handleResultClick = withSelectionHaptic(
    (event_: React.MouseEvent<HTMLButtonElement>, id: string) => {
      event_.preventDefault();
      onLinkClick(id);
    }
  );

  const resultEntries = useMemo(
    () => results.map((result, index) => ({index, result})),
    [results]
  );

  const resultById = useMemo(
    () => new Map(results.map((result) => [result.id, result])),
    [results]
  );

  const masonryColumns = useMemo(() => {
    if (isSingleColumnLayout) {
      return [resultEntries];
    }

    const columns: Array<Array<{index: number; result: SearchResult}>> = [[], []];

    for (const [index, entry] of resultEntries.entries()) {
      columns[index % 2].push(entry);
    }

    return columns;
  }, [isSingleColumnLayout, resultEntries]);

  const checkResultOverflow = useCallback(() => {
    const overflowedIds = new Set<string>();

    for (const {id} of results) {
      const contentElement = resultContentReferences.current[id];

      if (!contentElement) {
        continue;
      }

      if (contentElement.scrollHeight > RESULT_CONTENT_MAX_HEIGHT) {
        overflowedIds.add(id);
      }
    }

    setOverflowingResultIds(overflowedIds);
  }, [results]);

  useEffect(() => {
    const rafId = globalThis.requestAnimationFrame(checkResultOverflow);

    const handleResize = () => {
      checkResultOverflow();
    };

    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      globalThis.removeEventListener("resize", handleResize);
    };
  }, [checkResultOverflow, isSingleColumnLayout]);

  useEffect(() => {
    if (
      !isHighlightReady ||
      !query.trim() ||
      compiledQuery.words.length === 0 ||
      compiledQuery.isKeyCombination
    ) {
      return;
    }

    const idsToPrecompute = [
      ...new Set(
        results.map((result) => result.id).filter((id) => highlightEligibleIds.has(id))
      ),
    ].filter((id) => !highlightedContentCacheReference.current.has(`${id}::${query}`));

    if (idsToPrecompute.length === 0) {
      return;
    }

    let isCancelled = false;

    let timeoutId: ReturnType<typeof globalThis.setTimeout> | undefined;

    let currentIndex = 0;

    const processChunk = () => {
      if (isCancelled) {
        return;
      }

      const startedAt = performance.now();

      let didUpdateCache = false;

      while (currentIndex < idsToPrecompute.length && performance.now() - startedAt < 8) {
        const resultId = idsToPrecompute[currentIndex];

        currentIndex += 1;

        const resultItem = resultById.get(resultId);

        if (!resultItem) {
          continue;
        }

        const cacheKey = `${resultId}::${query}`;

        if (highlightedContentCacheReference.current.has(cacheKey)) {
          continue;
        }

        highlightedContentCacheReference.current.set(
          cacheKey,
          highlightMatchedTokens(resultItem.content, compiledQuery)
        );

        didUpdateCache = true;
      }

      if (didUpdateCache) {
        setHighlightCacheVersion((previous) => previous + 1);
      }

      if (currentIndex < idsToPrecompute.length) {
        timeoutId = globalThis.setTimeout(processChunk, 0);
      }
    };

    timeoutId = globalThis.setTimeout(processChunk, 0);

    return () => {
      isCancelled = true;

      if (timeoutId !== undefined) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, [compiledQuery, highlightEligibleIds, isHighlightReady, query, resultById, results]);

  const renderResult = ({index, result}: {index: number; result: SearchResult}) => {
    const {anchor, content, id, tag, title} = result;

    const tagsToDisplay = getMatchingTagsByQuery(tag, compiledQuery);

    const displayTitle = title.replace(/^[+-]+/, "").trim();

    const isCurrentSelectedResult =
      selectedResultIndex >= 0 &&
      selectedResultIndex < results.length &&
      results[selectedResultIndex]?.id === id;

    const shouldHighlight =
      isCurrentSelectedResult || (isHighlightReady && highlightEligibleIds.has(id));

    const highlightedTitle = shouldHighlight
      ? renderHighlightedText(displayTitle, compiledQuery)
      : displayTitle;

    const highlightedTags = shouldHighlight
      ? tagsToDisplay.map((tag_) => renderHighlightedText(tag_, compiledQuery))
      : tagsToDisplay;

    const cacheKey = `${id}::${query}`;

    const cachedHighlightedContent =
      highlightedContentCacheReference.current.get(cacheKey);

    let highlightedContent = content;

    if (shouldHighlight && query.trim() !== "") {
      if (cachedHighlightedContent !== undefined) {
        highlightedContent = cachedHighlightedContent;
      } else if (isCurrentSelectedResult) {
        const renderedContent = highlightMatchedTokens(content, compiledQuery);

        highlightedContentCacheReference.current.set(cacheKey, renderedContent);
        highlightedContent = renderedContent;
      }
    }

    const isSelected = index === selectedResultIndex;

    const isHovered = hoveredIndex === index;

    return (
      <SearchResultCard
        anchor={anchor}
        content={highlightedContent}
        highlightedTags={highlightedTags}
        highlightedTitle={highlightedTitle}
        id={id}
        isContentOverflowing={overflowingResultIds.has(id)}
        isHovered={isHovered}
        isMobile={isMobile}
        isSelected={isSelected}
        setContentRef={(element) => {
          resultContentReferences.current[id] = element;
        }}
        setResultRef={(element) => {
          if (resultRefs.current) {
            resultRefs.current[index] = element;
          }
        }}
        tagsToDisplay={tagsToDisplay}
        onClick={(event_) => {
          setSelectedResultIndex(index);
          handleResultClick(event_, anchor || id);
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(undefined)}
      />
    );
  };

  return (
    <div
      ref={masonryContainerReference}
      {...longPressProperties}
    >
      <div
        className={`${searchStyles["search-results-layout"]} ${
          isSingleColumnLayout
            ? searchStyles["search-results-layout-single"]
            : searchStyles["search-results-layout-masonry"]
        }`}
      >
        {isSingleColumnLayout
          ? masonryColumns[0].map((entry) => renderResult(entry))
          : masonryColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={searchStyles["search-results-column"]}
              >
                {column.map((entry) => renderResult(entry))}
              </div>
            ))}
      </div>
    </div>
  );
};
