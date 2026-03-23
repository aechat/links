import debounce from "lodash/debounce";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {Search} from "@mui/icons-material";
import {message} from "antd";

import {useRipple} from "../../../hooks/useRipple";
import additionStyles from "../../content/Addition.module.scss";

import {
  applyAdditionSnippetStyles,
  buildAdditionsHtml,
  getAdditionContainerSelector,
  getTopLevelAdditionContainer,
  wrapSnippetWithAdditionContainer,
  wrapSnippetWithClosestAddition,
} from "./searchAdditionUtilities";
import {SearchCategories} from "./SearchCategories";
import {
  buildListContentHtml,
  buildParagraphsHtml,
  buildTableGroupsHtml,
  collectDividerTexts,
  collectFlexibleLinksTexts,
  collectLinkHrefs,
} from "./searchContentExtractionUtilities";
import searchStyles from "./SearchEngine.module.scss";
import {
  extractMatchingLine,
  isTokenMatchingWordFeatures,
} from "./searchHighlightUtilities";
import {
  openSearchAnchorRuntime,
  scrollSelectedResultIntoViewRuntime,
} from "./searchInteractionUtilities";
import {SearchModal} from "./SearchModal";
import {
  getHorizontalNeighborIndex as getHorizontalNeighborIndexRuntime,
  getPositionedResults as getPositionedResultsRuntime,
  getVisualNeighborIndex as getVisualNeighborIndexRuntime,
} from "./searchNavigationUtilities";
import {ExternalSearch, SearchNoResults} from "./SearchNoResults";
import {normalizeLatinPhonetics, type WordFeatures} from "./searchPhoneticUtilities";
import {
  buildSearchIndex,
  type CompiledSearchQuery,
  getFieldMatchInfo,
  hasCompiledQueryMatchInIndexes,
  searchDetails,
  type SearchWorkerDetail,
  type TextSearchIndex,
  type WorkerRankedResult,
} from "./searchQueryCore";
import {mapRankedResultsToSearchResults as mapRankedResultsToSearchResultsRuntime} from "./searchResultRuntimeUtilities";
import {SearchResults} from "./SearchResults";
import {
  getFieldMatchTypeScore,
  getProximityBonus,
  type SearchScoringDependencies,
} from "./searchScoringUtilities";
import {formatSearchSnippetResult} from "./searchSnippetUtilities";
import {normalizeKeyCombination, normalizeText} from "./searchTextUtilities";

export interface SearchContextType {
  closeModal: () => void;
  isModalOpen: boolean;
  isPageLoaded: boolean;
  openModal: () => void;
}

export interface SearchResult {
  anchor?: string;
  content: string;
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  isSingleParagraphMatch: boolean;
  tag?: string;
  title: string;
}

export type SearchSection = {
  id: string;
  title: string;
  icon?: React.ReactNode;
};

export const escapeRegExp = (string_: string) =>
  string_.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);

export const decodeHtmlEntities = (text: string): string => {
  const textArea = document.createElement("textarea");

  textArea.innerHTML = text;

  return textArea.value;
};

export const getResultWord = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "результат";
  }

  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return "результата";
  }

  return "результатов";
};

const stripHtml = (html: string): string => {
  const temporary = document.createElement("div");

  temporary.innerHTML = html;

  return temporary.textContent || "";
};

const extractKeyCombinationText = (element: Element): string => {
  const keyElements = element.querySelectorAll("mark.key");

  if (keyElements.length > 0) {
    return [...keyElements]
      .map((element_) => element_.textContent?.toLowerCase() || "")
      .join(" ");
  }

  return element.textContent?.toLowerCase() || "";
};

const hasMatch = (text: string, compiledQuery: CompiledSearchQuery): boolean => {
  if (compiledQuery.isKeyCombination) {
    const normalizedText = normalizeKeyCombination(text);

    const normalizedSearch = normalizeKeyCombination(compiledQuery.originalText);

    return normalizedText.includes(normalizedSearch);
  }

  return hasCompiledQueryMatchInIndexes([buildSearchIndex(text)], compiledQuery);
};

const MAX_COMPACT_SNIPPET_TEXT_LENGTH = 780;

const ADDITION_CONTAINER_SELECTOR = getAdditionContainerSelector(additionStyles);

const ENTITY_MARK_SELECTORS = [
  "mark.app",
  "mark.plugin",
  "mark.file",
  "mark.key",
  "mark.select",
  "mark.video",
  "mark.audio",
  "mark.image",
  "mark.path",
  "mark.word",
  "mark.tag",
] as const;

const TAG_SCORING_TOKEN_CAP = 48;

const toNormalizedWords = (text: string): string[] =>
  normalizeText(text).split(" ").filter(Boolean);

const getTagScoringText = (normalizedTag: string): string => {
  const tagWords = normalizedTag.split(" ").filter(Boolean);

  return tagWords.slice(0, TAG_SCORING_TOKEN_CAP).join(" ");
};

const extractEntityTextFromContent = (content: string): string => {
  if (!content.trim()) {
    return "";
  }

  const root = document.createElement("div");

  root.innerHTML = content;

  return ENTITY_MARK_SELECTORS.flatMap((selector) => {
    return [...root.querySelectorAll(selector)]
      .map((element) => element.textContent?.trim() || "")
      .filter(Boolean);
  }).join(" ");
};

const getTokenPositionsForWord = (
  normalizedTokens: string[],
  foldedTokens: string[],
  wordFeatures: WordFeatures
): number[] => {
  const positions: number[] = [];

  for (const [tokenIndex, token] of normalizedTokens.entries()) {
    const foldedToken = foldedTokens[tokenIndex] || normalizeLatinPhonetics(token);

    if (isTokenMatchingWordFeatures(token, foldedToken, wordFeatures)) {
      positions.push(tokenIndex);
    }
  }

  return positions;
};

const searchScoringDependencies: SearchScoringDependencies<WordFeatures> = {
  getTokenPositionsForWord,
  normalizeLatinPhonetics,
  toNormalizedWords,
};

const getCompactSnippetScore = (
  html: string,
  compiledQuery: CompiledSearchQuery
): number => {
  const plainText = stripHtml(html);

  if (!plainText.trim()) {
    return Number.NEGATIVE_INFINITY;
  }

  const matchInfo = getFieldMatchInfo(buildSearchIndex(plainText), compiledQuery);

  if (!matchInfo.totalMatched) {
    return Number.NEGATIVE_INFINITY;
  }

  let score = getFieldMatchTypeScore(matchInfo, 1);

  score += matchInfo.totalMatched * 8;
  score += getProximityBonus(plainText, compiledQuery, 0.4, searchScoringDependencies);

  if (plainText.length > MAX_COMPACT_SNIPPET_TEXT_LENGTH) {
    score -= Math.min(
      40,
      Math.round((plainText.length - MAX_COMPACT_SNIPPET_TEXT_LENGTH) / 40)
    );
  }

  return score;
};

const getSummaryTitle = (summary: Element): string => {
  const titleElement = summary.querySelector("h2");

  if (titleElement?.textContent?.trim()) {
    return titleElement.textContent.trim();
  }

  return (summary.textContent || "").replaceAll(/\s+/g, " ").trim();
};

type BaseSearchResult = Omit<
  SearchResult,
  "isSingleParagraphMatch" | "hasTitleMatch" | "hasTagMatch"
> & {
  contentText: string;
  entityText: string;
  fieldIndexes: TextSearchIndex[];
  lineSearchIndexes: TextSearchIndex[];
  normalizedContent: string;
  normalizedEntityText: string;
  normalizedKeyFields: string[];
  normalizedTag: string;
  normalizedTitle: string;
  searchIndexes: {
    content: TextSearchIndex;
    entity: TextSearchIndex;
    tag: TextSearchIndex;
    tagScoring: TextSearchIndex;
    title: TextSearchIndex;
  };
  sourceOrder: number;
  tagTokenCount: number;
};

type SearchWorkerResponse = {
  query: string;
  requestId: number;
  results: WorkerRankedResult[];
  type: "results";
};

export const useSearchLogic = (query: string, isPageLoaded: boolean) => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const [selectedResultIndex, setSelectedResultIndex] = useState(0);

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const [resultsQuery, setResultsQuery] = useState("");

  const cachedDetailsData = useMemo(() => {
    if (!isPageLoaded) {
      return [];
    }

    const cachedDetails = [...document.querySelectorAll("details")].filter((detail) => {
      return !detail.parentElement?.closest("details");
    });

    const data: BaseSearchResult[] = [];

    for (const [sourceOrder, detail] of cachedDetails.entries()) {
      const summary = detail.querySelector(":scope > summary");

      if (!summary) {
        continue;
      }

      const id = summary.getAttribute("id");

      if (!id) {
        continue;
      }

      const title = getSummaryTitle(summary);

      const tag = detail.dataset.tags?.trim() ?? "";

      const anchor = detail.dataset.anchor;

      const dividerTexts = collectDividerTexts(detail);

      const flexibleLinksTexts = collectFlexibleLinksTexts(detail);

      const additionsContent = buildAdditionsHtml(detail, ADDITION_CONTAINER_SELECTOR);

      const linkHrefs = collectLinkHrefs(detail);

      const content = buildParagraphsHtml(detail);

      const tableContent = buildTableGroupsHtml(detail, [], {
        decodeHtmlEntities,
        normalizeKeyCombination,
      });

      const listContent = buildListContentHtml(detail, [], {
        additionContainerSelector: ADDITION_CONTAINER_SELECTOR,
        getTopLevelAdditionContainer,
        normalizeText,
        stripHtml,
      });

      const text = [
        content,
        additionsContent,
        tableContent,
        listContent,
        ...dividerTexts,
        ...flexibleLinksTexts,
      ].join("\n");

      const trimmedText = text.trim();

      if (!title && !trimmedText) {
        continue;
      }

      const contentText = stripHtml(trimmedText);

      const entityText = [extractEntityTextFromContent(trimmedText), ...linkHrefs]
        .join(" ")
        .trim();

      const normalizedTitle = normalizeText(title);

      const normalizedTag = normalizeText(tag);

      const normalizedContent = normalizeText(contentText);

      const normalizedEntityText = normalizeText(entityText);

      const searchIndexes = {
        content: buildSearchIndex(normalizedContent),
        entity: buildSearchIndex(normalizedEntityText),
        tag: buildSearchIndex(normalizedTag),
        tagScoring: buildSearchIndex(getTagScoringText(normalizedTag)),
        title: buildSearchIndex(normalizedTitle),
      };

      const lineSearchIndexes = trimmedText
        .split("\n")
        .map((line) => stripHtml(line))
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => buildSearchIndex(line));

      data.push({
        anchor,
        content: trimmedText,
        contentText,
        entityText,
        fieldIndexes: [
          searchIndexes.title,
          searchIndexes.tag,
          searchIndexes.entity,
          searchIndexes.content,
        ],
        id,
        lineSearchIndexes,
        normalizedContent,
        normalizedEntityText,
        normalizedKeyFields: [title, tag, entityText, contentText].map((field) =>
          normalizeKeyCombination(field)
        ),
        normalizedTag,
        normalizedTitle,
        searchIndexes,
        sourceOrder,
        tag,
        tagTokenCount: normalizedTag.split(" ").filter(Boolean).length,
        title,
      });
    }

    return data;
  }, [isPageLoaded]);

  const cachedDetailsByKey = useMemo(
    () =>
      new Map(
        cachedDetailsData.map((detail) => [`${detail.id}::${detail.sourceOrder}`, detail])
      ),
    [cachedDetailsData]
  );

  const workerDetailsData = useMemo<SearchWorkerDetail[]>(
    () =>
      cachedDetailsData.map(
        ({
          fieldIndexes,
          id,
          lineSearchIndexes,
          normalizedContent,
          normalizedEntityText,
          normalizedKeyFields,
          normalizedTag,
          normalizedTitle,
          searchIndexes,
          sourceOrder,
          tagTokenCount,
        }) => ({
          fieldIndexes,
          id,
          lineSearchIndexes,
          normalizedContent,
          normalizedEntityText,
          normalizedKeyFields,
          normalizedTag,
          normalizedTitle,
          searchIndexes,
          sourceOrder,
          tagTokenCount,
        })
      ),
    [cachedDetailsData]
  );

  const searchWorkerReference = useRef<Worker | undefined>(undefined);

  const workerRequestIdReference = useRef(0);

  const mapRankedResultsToSearchResults = useCallback(
    (queryText: string, rankedResults: WorkerRankedResult[]): SearchResult[] => {
      return mapRankedResultsToSearchResultsRuntime(queryText, rankedResults, {
        cachedDetailsByKey,
        formatContent: (content, compiledQuery) =>
          formatSearchSnippetResult(content, compiledQuery, {
            additionContainerSelector: ADDITION_CONTAINER_SELECTOR,
            applyAdditionSnippetStyles,
            extractKeyCombinationText,
            extractMatchingLine,
            getCompactSnippetScore,
            hasMatch,
            stripHtml,
            wrapSnippetWithAdditionContainer,
            wrapSnippetWithClosestAddition,
          }),
      });
    },
    [cachedDetailsByKey]
  );

  const runSearchOnMainThread = useCallback(
    (text: string) => {
      const rankedResults = searchDetails(workerDetailsData, text);

      setResults(mapRankedResultsToSearchResults(text, rankedResults));

      setResultsQuery(text);
    },
    [mapRankedResultsToSearchResults, workerDetailsData]
  );

  useEffect(() => {
    if (
      !isPageLoaded ||
      workerDetailsData.length === 0 ||
      typeof Worker === "undefined"
    ) {
      searchWorkerReference.current?.terminate();
      searchWorkerReference.current = undefined;

      return;
    }

    const worker = new Worker(new URL("searchWorker.ts", import.meta.url), {
      type: "module",
    });

    searchWorkerReference.current = worker;
    worker.postMessage({details: workerDetailsData, type: "init"});

    const handleWorkerMessage = (event: MessageEvent<SearchWorkerResponse>) => {
      const message_ = event.data;

      if (message_.type !== "results") {
        return;
      }

      if (message_.requestId !== workerRequestIdReference.current) {
        return;
      }

      setResults(mapRankedResultsToSearchResults(message_.query, message_.results));

      setResultsQuery(message_.query);
    };

    worker.addEventListener("message", handleWorkerMessage);

    return () => {
      worker.removeEventListener("message", handleWorkerMessage);
      worker.terminate();

      if (searchWorkerReference.current === worker) {
        searchWorkerReference.current = undefined;
      }
    };
  }, [isPageLoaded, mapRankedResultsToSearchResults, workerDetailsData]);

  const handleSearch = useCallback(
    debounce((text: string) => {
      if (text.trim()) {
        workerRequestIdReference.current += 1;

        const requestId = workerRequestIdReference.current;

        if (searchWorkerReference.current) {
          searchWorkerReference.current.postMessage({
            query: text,
            requestId,
            type: "search",
          });
        } else {
          runSearchOnMainThread(text);
        }
      } else {
        workerRequestIdReference.current += 1;
        setResults([]);
        setResultsQuery("");
      }
    }, 300),
    [runSearchOnMainThread]
  );

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 100);

    if (isPageLoaded) {
      if (query.trim()) {
        handleSearch(query);
      } else {
        workerRequestIdReference.current += 1;
        handleSearch.cancel();
        setResults([]);
        setResultsQuery("");
      }
    } else {
      workerRequestIdReference.current += 1;
      setResults([]);
      setResultsQuery("");
    }

    return () => {
      clearTimeout(handler);
      handleSearch.cancel();
    };
  }, [query, handleSearch, isPageLoaded]);

  useEffect(() => {
    setSelectedResultIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  return {
    debouncedQuery,
    results,
    resultsQuery,
    selectedResultIndex,
    setSelectedResultIndex,
  };
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{
  children: React.ReactNode;
  isPageLoaded: boolean;
}> = ({children, isPageLoaded}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (isPageLoaded) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey && event.key === "f") || (event.ctrlKey && event.key === "а")) {
        event.preventDefault();

        if (isPageLoaded) {
          openModal();
        } else {
          message.warning(
            "Прежде чем воспользоваться поиском по странице - дождитесь полной загрузки страницы"
          );
        }
      }
    };

    if (globalThis) {
      globalThis.addEventListener("keydown", handleKeyDown);

      return () => {
        globalThis.removeEventListener("keydown", handleKeyDown);
      };
    }

    return () => {};
  }, [isPageLoaded]);

  const value = useMemo(
    () => ({closeModal, isModalOpen, isPageLoaded, openModal}),
    [isModalOpen, isPageLoaded]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must use with SearchProvider.");
  }

  return context;
};

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

export const SearchInPage: React.FC<{sections: SearchSection[]}> = ({sections}) => {
  const {closeModal, isModalOpen, isPageLoaded} = useSearch();

  const [query, setQuery] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  const [isResultsProcessed, setIsResultsProcessed] = useState(false);

  const resultReferences = useRef<(HTMLButtonElement | null)[]>([]);

  const inputReference = useRef<HTMLInputElement>(null);

  const resultsContainerReference = useRef<HTMLDivElement>(null);

  const wasModalOpenReference = useRef(false);

  const [isFadeVisible, setIsFadeVisible] = useState(false);

  const ripple = useRipple<HTMLButtonElement>();

  const {
    debouncedQuery,
    results,
    resultsQuery,
    selectedResultIndex,
    setSelectedResultIndex,
  } = useSearchLogic(query, isPageLoaded);

  useEffect(() => {
    if (isModalOpen) {
      const timeout = setTimeout(() => {
        inputReference.current?.focus();
        inputReference.current?.select();
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const element = resultsContainerReference.current;

    if (!element) {
      return;
    }

    const checkFadeVisibility = () => {
      setIsFadeVisible(
        element.scrollHeight > element.clientHeight &&
          element.scrollTop + element.clientHeight < element.scrollHeight - 1
      );
    };

    checkFadeVisibility();
    element.addEventListener("scroll", checkFadeVisibility);
    globalThis.addEventListener("resize", checkFadeVisibility);

    return () => {
      element.removeEventListener("scroll", checkFadeVisibility);
      globalThis.removeEventListener("resize", checkFadeVisibility);
    };
  }, [results]);

  useEffect(() => {
    if (isPageLoaded) {
      const timeout = setTimeout(() => {
        setIsResultsProcessed(true);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setIsResultsProcessed(false);
    }
  }, [isPageLoaded, results]);

  const handleQueryChange = (value: string) => {
    setQuery(value);

    if (value.trim() === "") {
      setIsSearching(false);
      setIsResultsProcessed(false);
    } else {
      setIsSearching(true);
      setIsResultsProcessed(false);
    }
  };

  const columnTolerance = 40;

  const getPositionedResults = useCallback(() => {
    return getPositionedResultsRuntime(resultReferences.current);
  }, [resultReferences]);

  const getVisualNeighborIndex = useCallback(
    (currentIndex: number, direction: "down" | "up"): number => {
      return getVisualNeighborIndexRuntime({
        columnTolerance,
        currentIndex,
        direction,
        positionedResults: getPositionedResults(),
        resultsLength: results.length,
      });
    },
    [columnTolerance, getPositionedResults, results.length]
  );

  const getHorizontalNeighborIndex = useCallback(
    (currentIndex: number, direction: "left" | "right"): number => {
      return getHorizontalNeighborIndexRuntime({
        columnTolerance,
        currentIndex,
        direction,
        positionedResults: getPositionedResults(),
      });
    },
    [columnTolerance, getPositionedResults]
  );

  const scrollSelectedResultIntoView = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      scrollSelectedResultIntoViewRuntime({
        behavior,
        resultReferences: resultReferences.current,
        resultsContainer: resultsContainerReference.current,
        selectedResultIndex,
      });
    },
    [selectedResultIndex]
  );

  const handleLinkClick = useCallback(
    (anchorValue: string) => {
      openSearchAnchorRuntime({anchorValue, closeModal});
    },
    [closeModal]
  );

  useEffect(() => {
    const handleKeyDown = (event_: KeyboardEvent) => {
      if (!isModalOpen || results.length === 0) {
        return;
      }

      switch (event_.key) {
        case "ArrowDown": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getVisualNeighborIndex(previousIndex, "down")
          );

          break;
        }

        case "ArrowUp": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getVisualNeighborIndex(previousIndex, "up")
          );

          break;
        }

        case "ArrowLeft": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getHorizontalNeighborIndex(previousIndex, "left")
          );

          break;
        }

        case "ArrowRight": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getHorizontalNeighborIndex(previousIndex, "right")
          );

          break;
        }

        case "Enter": {
          event_.preventDefault();

          if (selectedResultIndex >= 0 && selectedResultIndex < results.length) {
            handleLinkClick(
              results[selectedResultIndex].anchor || results[selectedResultIndex].id
            );
          }

          break;
        }
      }
    };

    if (!isModalOpen) {
      return;
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    getVisualNeighborIndex,
    getHorizontalNeighborIndex,
    handleLinkClick,
    isModalOpen,
    results,
    selectedResultIndex,
  ]);

  useEffect(() => {
    if (!isModalOpen || selectedResultIndex < 0) {
      wasModalOpenReference.current = false;

      return;
    }

    const justOpened = !wasModalOpenReference.current;

    wasModalOpenReference.current = true;

    if (!justOpened) {
      scrollSelectedResultIntoView("smooth");

      return;
    }

    let rafId = 0;

    let previousRelativeTop: number | undefined;

    let stableFrames = 0;

    let frameCount = 0;

    const requiredStableFrames = 1;

    const maxFrames = 10;

    const waitForStableLayoutAndScroll = () => {
      const container = resultsContainerReference.current;

      const selectedElement = resultReferences.current[selectedResultIndex];

      frameCount += 1;

      if (!container || !selectedElement) {
        if (frameCount < maxFrames) {
          rafId = globalThis.requestAnimationFrame(waitForStableLayoutAndScroll);
        } else {
          scrollSelectedResultIntoView("smooth");
        }

        return;
      }

      const containerRect = container.getBoundingClientRect();

      const elementRect = selectedElement.getBoundingClientRect();

      const relativeTop = elementRect.top - containerRect.top;

      if (
        previousRelativeTop !== undefined &&
        Math.abs(relativeTop - previousRelativeTop) < 1
      ) {
        stableFrames += 1;
      } else {
        stableFrames = 0;
      }

      previousRelativeTop = relativeTop;

      if (stableFrames >= requiredStableFrames || frameCount >= maxFrames) {
        scrollSelectedResultIntoView("smooth");

        return;
      }

      rafId = globalThis.requestAnimationFrame(waitForStableLayoutAndScroll);
    };

    rafId = globalThis.requestAnimationFrame(waitForStableLayoutAndScroll);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
    };
  }, [isModalOpen, scrollSelectedResultIntoView, selectedResultIndex]);

  useEffect(() => {
    const container = resultsContainerReference.current;

    if (!container) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && event.target.tagName === "MARK") {
        event.stopPropagation();

        const button = event.target.closest(
          `.${searchStyles["search-link"]}`
        ) as HTMLButtonElement | null;

        if (button) {
          button.click();
        }
      }
    };

    container.addEventListener("click", handleClick, true);

    return () => {
      container.removeEventListener("click", handleClick, true);
    };
  }, []);

  const renderContent = () => {
    if (!isSearching) {
      return (
        <SearchCategories
          sections={sections}
          onLinkClick={handleLinkClick}
        />
      );
    }

    if (results.length > 0) {
      return (
        <>
          <SearchResults
            query={resultsQuery}
            resultRefs={resultReferences}
            results={results}
            selectedResultIndex={selectedResultIndex}
            setSelectedResultIndex={setSelectedResultIndex}
            onLinkClick={handleLinkClick}
          />
          <ExternalSearch query={debouncedQuery} />
        </>
      );
    }

    if (query.trim() !== "" && results.length === 0 && isResultsProcessed) {
      return <SearchNoResults query={query} />;
    }

    return (
      <SearchCategories
        sections={sections}
        onLinkClick={handleLinkClick}
      />
    );
  };

  return (
    <SearchModal
      closeModal={closeModal}
      inputRef={inputReference}
      isFadeVisible={isFadeVisible}
      isOpen={isModalOpen}
      query={query}
      resultsContainerRef={resultsContainerReference}
      resultsCount={results.length}
      resultWord={getResultWord(results.length)}
      onChangeQuery={handleQueryChange}
      onClearQuery={() => {
        setQuery("");
        setIsSearching(false);
      }}
      onCloseMouseDown={ripple.onMouseDown}
      onInputClearMouseDown={ripple.onMouseDown}
    >
      {renderContent()}
    </SearchModal>
  );
};
