import debounce from "lodash/debounce";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

import additionStyles from "../../content/Addition.module.scss";

import {
  applyAdditionSnippetStyles,
  buildAdditionsHtml,
  getAdditionContainerSelector,
  getTopLevelAdditionContainer,
  wrapSnippetWithAdditionContainer,
  wrapSnippetWithClosestAddition,
} from "./searchAdditionUtilities";
import {
  buildListContentHtml,
  buildParagraphsHtml,
  buildTableGroupsHtml,
  collectDividerTexts,
  collectFlexibleLinksTexts,
  collectLinkHrefs,
} from "./searchContentExtractionUtilities";
import {
  extractMatchingLine,
  isTokenMatchingWordFeatures,
} from "./searchHighlightUtilities";
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
import {
  getFieldMatchTypeScore,
  getProximityBonus,
  type SearchScoringDependencies,
} from "./searchScoringUtilities";
import {formatSearchSnippetResult} from "./searchSnippetUtilities";
import {normalizeKeyCombination, normalizeText} from "./searchTextUtilities";

import type {SearchResult} from "./searchTypes";

const decodeHtmlEntities = (text: string): string => {
  const textArea = document.createElement("textarea");

  textArea.innerHTML = text;

  return textArea.value;
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

  const summaryId = summary.getAttribute("id")?.trim() ?? "";

  const baseTitle = titleElement?.textContent?.trim()
    ? titleElement.textContent.trim()
    : (summary.textContent || "").replaceAll(/\s+/g, " ").trim();

  if (!summaryId || !baseTitle) {
    return baseTitle;
  }

  const normalizedBaseTitle = baseTitle.replaceAll(/\s+/g, " ").trim();

  const expectedPrefix = `${summaryId}.`;

  if (normalizedBaseTitle.startsWith(expectedPrefix)) {
    return normalizedBaseTitle;
  }

  return `${summaryId}. ${normalizedBaseTitle}`;
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
