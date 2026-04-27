import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {BackspaceOutlined, CloseRounded, Search} from "@mui/icons-material";
import {message, Modal} from "antd";
import {RemoveScroll} from "react-remove-scroll";

import {copyText} from "../../../hooks/useCopyToClipboard";
import {useLongPress} from "../../../hooks/useLongPress";
import {useRipple} from "../../../hooks/useRipple";
import {isMobileDevice} from "../../../utils/browserDetection";
import {withSelectionHaptic} from "../../../utils/haptics";
import {formatNestedQuotes} from "../../../utils/stringUtilities";
import modalStyles from "../../modals/Modal.module.scss";

import {getMatchingTagsByQuery} from "./searchContentUtilities";
import searchStyles from "./SearchEngine.module.scss";
import {highlightMatchedTokens, renderHighlightedText} from "./searchHighlightUtilities";
import {compileSearchQuery} from "./searchQueryCore";
import {type SearchResult, type SearchSection, useSearch} from "./SearchState";

interface SearchButtonProperties {
  className?: string;
  style?: React.CSSProperties;
  wide?: boolean;
}

export const SearchButton: React.FC<SearchButtonProperties> = ({
  className = "",
  style = {},
  wide = false,
}) => {
  const {isPageLoaded, openModal} = useSearch();

  const ripple = useRipple<HTMLButtonElement>();

  return (
    <button
      className={`${searchStyles["search-button"]} ${className}`.trim()}
      style={{
        filter: isPageLoaded ? "saturate(100%)" : "saturate(0%)",
        opacity: isPageLoaded ? 1 : 0.5,
        ...style,
      }}
      onClick={() => {
        if (isPageLoaded) {
          openModal();
        } else {
          message.warning(
            "Прежде чем воспользоваться поиском по странице - дождитесь полной загрузки страницы"
          );
        }
      }}
      onMouseDown={ripple.onMouseDown}
    >
      {wide ? (
        <>
          <Search />
          <span>
            Навигация по странице <mark>Ctrl + F</mark>
          </span>
        </>
      ) : (
        <>
          <Search />
          <span>Поиск</span>
        </>
      )}
    </button>
  );
};

type SearchCategoriesProperties = {
  onLinkClick: (id: string, matchText?: string) => void;
  sections: SearchSection[];
};

export const SearchCategories: React.FC<SearchCategoriesProperties> = ({
  onLinkClick,
  sections,
}) => {
  const handleCopy = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const target = event.target as HTMLElement;

    const button = target.closest("button");

    if (button) {
      const id = button.dataset.id;

      const title = button.dataset.title;

      if (id && title) {
        (async () => {
          const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${id}`;

          const success = await copyText(anchorUrl);

          if (success) {
            message.success(
              `Ссылка на категорию «${formatNestedQuotes(title)}» скопирована`
            );
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

  const ripple = useRipple<HTMLButtonElement>();

  return (
    <div
      className={searchStyles["search-category"]}
      {...longPressProperties}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          data-id={section.id}
          data-title={section.title}
          onClick={() => onLinkClick(section.id)}
          onMouseDown={ripple.onMouseDown}
        >
          {section.icon}
          {section.title}
        </button>
      ))}
    </div>
  );
};

type SearchModalProperties = {
  children: React.ReactNode;
  closeModal: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  isFadeVisible: boolean;
  isScrollableContent: boolean;
  isOpen: boolean;
  onChangeQuery: (value: string) => void;
  onClearQuery: () => void;
  onCloseMouseDown: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  onInputClearMouseDown: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  query: string;
  resultWord: string;
  resultsContainerRef: React.RefObject<HTMLDivElement | null>;
  resultsCount: number;
};

export const SearchModal: React.FC<SearchModalProperties> = ({
  children,
  closeModal,
  inputRef,
  isFadeVisible,
  isOpen,
  isScrollableContent,
  onChangeQuery,
  onClearQuery,
  onCloseMouseDown,
  onInputClearMouseDown,
  query,
  resultsContainerRef,
  resultsCount,
  resultWord,
}) => {
  const KEYBOARD_OPEN_THRESHOLD_PX = 120;

  const keyboardBaselineViewportHeightReference = useRef(0);

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const updateKeyboardState = useCallback(() => {
    const viewport = globalThis.visualViewport;

    if (!viewport) {
      setIsKeyboardOpen(false);

      return;
    }

    const currentViewportHeight = viewport.height;

    if (
      keyboardBaselineViewportHeightReference.current === 0 ||
      currentViewportHeight > keyboardBaselineViewportHeightReference.current
    ) {
      keyboardBaselineViewportHeightReference.current = currentViewportHeight;
    }

    const currentActiveElement = document.activeElement;

    const isSearchInputFocused =
      inputRef.current !== null && currentActiveElement === inputRef.current;

    const keyboardHeightDelta =
      keyboardBaselineViewportHeightReference.current - currentViewportHeight;

    setIsKeyboardOpen(
      isSearchInputFocused && keyboardHeightDelta > KEYBOARD_OPEN_THRESHOLD_PX
    );
  }, [inputRef]);

  const handleDocumentFocusIn = useCallback(
    (event_: FocusEvent) => {
      if (inputRef.current !== null && event_.target === inputRef.current) {
        setIsKeyboardOpen(true);
      }

      updateKeyboardState();
    },
    [inputRef, updateKeyboardState]
  );

  const handleDocumentFocusOut = useCallback(() => {
    updateKeyboardState();
  }, [updateKeyboardState]);

  useEffect(() => {
    if (!isOpen) {
      keyboardBaselineViewportHeightReference.current = 0;
      setIsKeyboardOpen(false);

      return;
    }

    updateKeyboardState();

    const viewport = globalThis.visualViewport;

    if (!viewport) {
      return;
    }

    viewport.addEventListener("resize", updateKeyboardState);
    document.addEventListener("focusin", handleDocumentFocusIn);
    document.addEventListener("focusout", handleDocumentFocusOut);

    return () => {
      viewport.removeEventListener("resize", updateKeyboardState);
      document.removeEventListener("focusin", handleDocumentFocusIn);
      document.removeEventListener("focusout", handleDocumentFocusOut);
    };
  }, [handleDocumentFocusIn, handleDocumentFocusOut, isOpen, updateKeyboardState]);

  const scrollShellClassName = [
    searchStyles["search-results-shell"],
    isKeyboardOpen ? searchStyles["search-results-keyboard-open"] : "",
    isFadeVisible ? searchStyles["show-fade"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <RemoveScroll enabled={isOpen}>
      <Modal
        closeIcon={false}
        footer={<></>}
        open={isOpen}
        width={1000}
        onCancel={closeModal}
      >
        <div className={searchStyles["modal"]}>
          <div className={modalStyles["modal-header"]}>
            <input
              ref={inputRef}
              className={searchStyles["search-input"]}
              placeholder="Введите что-нибудь для поиска..."
              type="search"
              value={query}
              onChange={(event_) => onChangeQuery(event_.target.value)}
            />
            {resultsCount > 0 && (
              <span className={searchStyles["search-counter"]}>
                <span className={searchStyles["search-counter-value"]}>
                  {resultsCount}
                </span>{" "}
                {resultWord}
              </span>
            )}
            {query.trim() !== "" && (
              <button
                className={modalStyles["modal-header-button"]}
                onClick={onClearQuery}
                onMouseDown={onInputClearMouseDown}
              >
                <BackspaceOutlined fontSize="small" />
              </button>
            )}
            <button
              className={modalStyles["modal-header-button"]}
              onClick={closeModal}
              onMouseDown={onCloseMouseDown}
            >
              <CloseRounded />
            </button>
          </div>
          {isScrollableContent ? (
            <div className={scrollShellClassName}>
              <div
                ref={resultsContainerRef}
                className={searchStyles["search-results-scroll"]}
              >
                {children}
              </div>
            </div>
          ) : (
            <div
              ref={resultsContainerRef}
              className={searchStyles["search-static"]}
            >
              {children}
            </div>
          )}
        </div>
      </Modal>
    </RemoveScroll>
  );
};

export const ExternalSearch: React.FC<{query: string}> = ({query}) => {
  const getSearchQuery = () => {
    const path = globalThis.location.pathname;

    let context = "";

    if (path.includes("aefaq")) {
      context = "after effects";
    } else if (path.includes("prfaq")) {
      context = "premiere pro";
    } else if (path.includes("psfaq")) {
      context = "photoshop";
    } else if (path.includes("aeexpr")) {
      context = "after effects expression";
    }

    return `${query} ${context}`;
  };

  const ripple = useRipple<HTMLButtonElement>();

  return (
    <div>
      <div className={searchStyles["search-external-links"]}>
        <button
          onClick={() => {
            globalThis.open(
              `https://yandex.com/search/?text=${encodeURIComponent(getSearchQuery())}`,
              "_blank"
            );
          }}
          onMouseDown={ripple.onMouseDown}
        >
          Найти в Яндексе
        </button>
        <button
          onClick={() => {
            globalThis.open(
              `https://www.perplexity.ai/search?q=${encodeURIComponent(getSearchQuery())}`,
              "_blank"
            );
          }}
          onMouseDown={ripple.onMouseDown}
        >
          Спросить у Perplexity<sup>1</sup>
        </button>
      </div>
      <p className={searchStyles["search-no-results-tip"]}>
        <sup>1</sup> Perplexity и другие чат-боты с использованием нейросетевых моделей
        могут выдавать недостоверную информацию
      </p>
    </div>
  );
};

export const NoResults: React.FC<{query: string}> = ({query}) => (
  <div>
    <div className={searchStyles["search-no-results"]}>
      <p className={searchStyles["search-no-results-title"]}>
        По вашему запросу на этой странице{" "}
        <span className={searchStyles["search-no-results-highlight"]}>ничего</span> не
        нашлось
      </p>
      <p className={searchStyles["search-no-results-message"]}>
        Попробуйте перефразировать свой запрос или выполните поиск в Яндексе или
        Perplexity<sup>1</sup>
      </p>
    </div>
    <ExternalSearch query={query} />
  </div>
);

type SearchResultCardProperties = {
  anchor?: string;
  content: string;
  isContentUnclamped: boolean;
  highlightedTags: React.ReactNode[];
  highlightedTitle: React.ReactNode;
  id: string;
  isContentOverflowing: boolean;
  isHovered: boolean;
  isMobile: boolean;
  isSelected: boolean;
  onClick: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  setContentRef: (element: HTMLDivElement | null) => void;
  setResultRef: (element: HTMLButtonElement | null) => void;
  tagsToDisplay: string[];
};

const SearchResultCard: React.FC<SearchResultCardProperties> = ({
  anchor,
  content,
  highlightedTags,
  highlightedTitle,
  id,
  isContentOverflowing,
  isContentUnclamped,
  isHovered,
  isMobile,
  isSelected,
  onClick,
  onMouseEnter,
  onMouseLeave,
  setContentRef,
  setResultRef,
  tagsToDisplay,
}) => {
  return (
    <div className={searchStyles["search-results-item"]}>
      <button
        ref={setResultRef}
        className={`${searchStyles["search-link"]} ${isSelected ? searchStyles["search-selected"] : ""}`}
        data-anchor={anchor}
        data-id={id}
        style={(() => {
          if (isMobile) {
            return {filter: "none", opacity: 1};
          }

          if (isSelected || isHovered) {
            return {filter: "none"};
          }

          return {filter: "saturate(0.25)"};
        })()}
        tabIndex={0}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`${searchStyles["search-header"]} ${
            isSelected ? searchStyles["search-header-selected"] : ""
          }`}
        >
          <p className={searchStyles["search-title"]}>{highlightedTitle}</p>
          {tagsToDisplay.length > 0 && (
            <span className={searchStyles["search-tags"]}>
              {tagsToDisplay.map((tag_, tagIndex) => (
                <span
                  key={`${tag_}-${tagIndex}`}
                  className={searchStyles["search-tag-item"]}
                >
                  {highlightedTags[tagIndex]}
                </span>
              ))}
            </span>
          )}
        </div>
        <div
          ref={setContentRef}
          className={`${searchStyles["search-content"]} ${
            isContentOverflowing ? searchStyles["search-content-truncated"] : ""
          } ${isContentUnclamped ? searchStyles["search-content-unclamped"] : ""} ${
            isSelected ? searchStyles["search-content-selected"] : ""
          } article-content no-copy`}
          dangerouslySetInnerHTML={{__html: content}}
        />
      </button>
    </div>
  );
};

const hasTableInContent = (contentHtml: string): boolean => {
  return contentHtml.includes("<table");
};

const HOVER_GROWTH_PX = 6;

const ACTIVE_GROWTH_PX = 3;

const getScaleValue = (dimension: number, growthPx: number): number => {
  const safeDimension = Math.max(dimension, 1);

  return (safeDimension + growthPx) / safeDimension;
};

const applySearchResultScaleVariables = (element: HTMLButtonElement): void => {
  const width = element.offsetWidth;

  const height = element.offsetHeight;

  const baseDimension = Math.max(width, height);

  const hoverScale = getScaleValue(baseDimension, HOVER_GROWTH_PX);

  const activeScale = getScaleValue(baseDimension, ACTIVE_GROWTH_PX);

  element.style.setProperty("--links-hover-scale-x", hoverScale.toFixed(6));
  element.style.setProperty("--links-hover-scale-y", hoverScale.toFixed(6));
  element.style.setProperty("--links-active-scale-x", activeScale.toFixed(6));
  element.style.setProperty("--links-active-scale-y", activeScale.toFixed(6));
};

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
      `.${searchStyles["search-results-scroll"]}`
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

  const masonryColumns = useMemo(() => {
    if (isSingleColumnLayout) {
      return [resultEntries];
    }

    const columns: Array<Array<{index: number; result: SearchResult}>> = [[], []];

    for (const [entryIndex, entry] of resultEntries.entries()) {
      columns[entryIndex % 2].push(entry);
    }

    return columns;
  }, [isSingleColumnLayout, resultEntries]);

  const resultById = useMemo(
    () => new Map(results.map((result) => [result.id, result])),
    [results]
  );

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
    const updateResultScales = () => {
      for (const resultElement of resultRefs.current ?? []) {
        if (!resultElement) {
          continue;
        }

        applySearchResultScaleVariables(resultElement);
      }
    };

    const rafId = globalThis.requestAnimationFrame(updateResultScales);

    const observer =
      "ResizeObserver" in globalThis
        ? new ResizeObserver(() => {
            updateResultScales();
          })
        : undefined;

    for (const resultElement of resultRefs.current ?? []) {
      if (!resultElement) {
        continue;
      }

      observer?.observe(resultElement);
    }

    globalThis.addEventListener("resize", updateResultScales);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      observer?.disconnect();
      globalThis.removeEventListener("resize", updateResultScales);
    };
  }, [isSingleColumnLayout, resultRefs, results]);

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

    const isContentUnclamped = hasTableInContent(content);

    const isSelected = index === selectedResultIndex;

    const isHovered = hoveredIndex === index;

    return (
      <SearchResultCard
        anchor={anchor}
        content={highlightedContent}
        highlightedTags={highlightedTags}
        highlightedTitle={highlightedTitle}
        id={id}
        isContentOverflowing={!isContentUnclamped && overflowingResultIds.has(id)}
        isContentUnclamped={isContentUnclamped}
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
        {masonryColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={searchStyles["search-results-column"]}
          >
            {column.map((entry) => (
              <React.Fragment key={entry.result.id}>{renderResult(entry)}</React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
