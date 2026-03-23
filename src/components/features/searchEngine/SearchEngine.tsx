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

import {copyText} from "../../../hooks/useCopyToClipboard";
import {useLongPress} from "../../../hooks/useLongPress";
import {useRipple} from "../../../hooks/useRipple";
import {resolveDetailsByAnchor} from "../../../utils/anchorResolvers";
import {isMobileDevice} from "../../../utils/browserDetection";
import {withSelectionHaptic} from "../../../utils/haptics";
import {scrollToElement} from "../../../utils/scrollToAnchor";
import {formatNestedQuotes} from "../../../utils/stringUtilities";
import additionStyles from "../../content/Addition.module.scss";

import searchStyles from "./SearchEngine.module.scss";
import {
  extractMatchingLine,
  highlightMatchedTokens,
  isTokenMatchingWordFeatures,
  renderHighlightedText,
} from "./searchHighlightUtilities";
import {SearchModal} from "./SearchModal";
import {
  getConsonantSignature,
  getWordFeatures,
  getWordStem,
  MIN_CONSONANT_SIGNATURE_LENGTH,
  MIN_PREFIX_LENGTH,
  MIN_STEM_LENGTH,
  normalizeLatinPhonetics,
  WORD_MATCH_PRIORITY,
  type WordFeatures,
} from "./searchPhoneticUtilities";
import {
  compileSearchQuery,
  searchDetails,
  type SearchWorkerDetail,
  type WorkerRankedResult,
} from "./searchQueryCore";
import {SearchResultCard} from "./SearchResultCard";
import {
  getFieldMatchTypeScore,
  getProximityBonus,
  type SearchScoringDependencies,
} from "./searchScoringUtilities";
import {
  normalizeKeyCombination,
  normalizeText,
  normalizeWord,
} from "./searchTextUtilities";

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

type SearchMatch = {
  result: string;
  matchCount: number;
};

const stripHtml = (html: string): string => {
  const temporary = document.createElement("div");

  temporary.innerHTML = html;

  return temporary.textContent || "";
};

type TextSearchIndex = {
  consonantPrefixSet: Set<string>;
  consonantSet: Set<string>;
  foldedPrefixSet: Set<string>;
  normalizedText: string;
  normalizedPrefixSet: Set<string>;
  normalizedWordSet: Set<string>;
  stemSet: Set<string>;
  foldedText: string;
  foldedWordSet: Set<string>;
  foldedStemSet: Set<string>;
};

type WordMatchType = "exact" | "prefix" | "folded" | "consonant" | "stem";

type CompiledSearchWord = {
  features: WordFeatures;
  normalizedWord: string;
};

type CompiledSearchQuery = {
  isKeyCombination: boolean;
  normalizedQuery: string;
  originalText: string;
  searchWords: string[];
  words: CompiledSearchWord[];
};

type FieldMatchInfo = {
  highestPriority: number;
  longestMatchedWordLength: number;
  matchedWords: string[];
  totalMatched: number;
  typeCounts: Record<WordMatchType, number>;
};

const createEmptyTypeCounts = (): Record<WordMatchType, number> => ({
  consonant: 0,
  exact: 0,
  folded: 0,
  prefix: 0,
  stem: 0,
});

const buildWordPrefixSet = (words: string[]): Set<string> => {
  const prefixSet = new Set<string>();

  for (const word of words) {
    for (let index = MIN_PREFIX_LENGTH; index < word.length; index += 1) {
      prefixSet.add(word.slice(0, index));
    }
  }

  return prefixSet;
};

const buildSearchIndex = (text: string): TextSearchIndex => {
  const normalizedText = normalizeText(text);

  const foldedText = normalizeLatinPhonetics(normalizedText);

  const words = normalizedText.split(" ").filter(Boolean);

  const foldedWords = foldedText.split(" ").filter(Boolean);

  const normalizedWordSet = new Set(words);

  const foldedWordSet = new Set(foldedWords);

  const normalizedPrefixSet = buildWordPrefixSet(words);

  const foldedPrefixSet = buildWordPrefixSet(foldedWords);

  const stemSet = new Set(
    words
      .map((word) => getWordStem(word))
      .filter((stem) => stem.length >= MIN_STEM_LENGTH)
  );

  const foldedStemSet = new Set(
    foldedWords
      .map((word) => getWordStem(word))
      .filter((stem) => stem.length >= MIN_STEM_LENGTH)
  );

  const consonantSignatures = [
    ...new Set(
      [...words, ...foldedWords]
        .map((word) => getConsonantSignature(word))
        .filter((signature) => signature.length >= MIN_CONSONANT_SIGNATURE_LENGTH)
    ),
  ];

  const consonantSet = new Set(consonantSignatures);

  const consonantPrefixSet = new Set<string>();

  for (const signature of consonantSignatures) {
    for (
      let index = MIN_CONSONANT_SIGNATURE_LENGTH;
      index < signature.length;
      index += 1
    ) {
      consonantPrefixSet.add(signature.slice(0, index));
    }
  }

  return {
    consonantPrefixSet,
    consonantSet,
    foldedPrefixSet,
    foldedStemSet,
    foldedText,
    foldedWordSet,
    normalizedPrefixSet,
    normalizedText,
    normalizedWordSet,
    stemSet,
  };
};

const hasExactVariantMatch = (
  variants: string[],
  text: string,
  wordSet: Set<string>
): boolean => {
  return variants.some((variant) => text.includes(variant) || wordSet.has(variant));
};

const hasPrefixVariantMatch = (variants: string[], prefixSet: Set<string>): boolean => {
  return variants.some(
    (variant) => variant.length >= MIN_PREFIX_LENGTH && prefixSet.has(variant)
  );
};

const hasConsonantSignatureMatch = (
  signatures: string[],
  consonantSet: Set<string>,
  consonantPrefixSet: Set<string>
): boolean => {
  return signatures.some(
    (signature) => consonantSet.has(signature) || consonantPrefixSet.has(signature)
  );
};

const hasStemMatch = (
  stems: string[],
  stemSet: Set<string>,
  foldedStemSet: Set<string>
): boolean => {
  return stems.some((stem) => stemSet.has(stem) || foldedStemSet.has(stem));
};

const getWordMatchType = (
  wordFeatures: WordFeatures,
  index: TextSearchIndex
): WordMatchType | undefined => {
  if (
    hasExactVariantMatch(
      wordFeatures.variants,
      index.normalizedText,
      index.normalizedWordSet
    )
  ) {
    return "exact";
  }

  if (hasPrefixVariantMatch(wordFeatures.variants, index.normalizedPrefixSet)) {
    return "prefix";
  }

  if (
    hasExactVariantMatch(
      wordFeatures.foldedVariants,
      index.foldedText,
      index.foldedWordSet
    )
  ) {
    return "folded";
  }

  if (hasPrefixVariantMatch(wordFeatures.foldedVariants, index.foldedPrefixSet)) {
    return "prefix";
  }

  if (
    hasConsonantSignatureMatch(
      wordFeatures.consonantSignatures,
      index.consonantSet,
      index.consonantPrefixSet
    )
  ) {
    return "consonant";
  }

  if (hasStemMatch(wordFeatures.stemVariants, index.stemSet, index.foldedStemSet)) {
    return "stem";
  }

  return undefined;
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

const hasWordMatch = (searchWord: string, index: TextSearchIndex): boolean => {
  const normalizedWord = normalizeWord(searchWord);

  if (!normalizedWord) {
    return false;
  }

  return Boolean(getWordMatchType(getWordFeatures(normalizedWord), index));
};

const hasAllQueryWordsMatch = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): boolean => {
  for (const {normalizedWord} of compiledQuery.words) {
    if (!hasWordMatch(normalizedWord, textSearchIndex)) {
      return false;
    }
  }

  return true;
};

const hasAnyQueryWordMatch = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): boolean => {
  for (const {normalizedWord} of compiledQuery.words) {
    if (hasWordMatch(normalizedWord, textSearchIndex)) {
      return true;
    }
  }

  return false;
};

const matchTextWithCompiledQuery = (
  text: string,
  compiledQuery: CompiledSearchQuery,
  mode: "all" | "any" = "all"
): boolean => {
  const textSearchIndex = buildSearchIndex(text);

  if (mode === "any") {
    return hasAnyQueryWordMatch(textSearchIndex, compiledQuery);
  }

  return hasAllQueryWordsMatch(textSearchIndex, compiledQuery);
};

const getFieldMatchInfo = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): FieldMatchInfo => {
  const typeCounts = createEmptyTypeCounts();

  const matchedWords: string[] = [];

  let highestPriority = 0;

  let longestMatchedWordLength = 0;

  for (const {features, normalizedWord} of compiledQuery.words) {
    const matchType = getWordMatchType(features, textSearchIndex);

    if (!matchType) {
      continue;
    }

    matchedWords.push(normalizedWord);
    typeCounts[matchType] += 1;
    highestPriority = Math.max(highestPriority, WORD_MATCH_PRIORITY[matchType]);
    longestMatchedWordLength = Math.max(longestMatchedWordLength, normalizedWord.length);
  }

  return {
    highestPriority,
    longestMatchedWordLength,
    matchedWords,
    totalMatched: matchedWords.length,
    typeCounts,
  };
};

const hasMatch = (text: string, compiledQuery: CompiledSearchQuery): boolean => {
  if (compiledQuery.isKeyCombination) {
    const normalizedText = normalizeKeyCombination(text);

    const normalizedSearch = normalizeKeyCombination(compiledQuery.originalText);

    return normalizedText.includes(normalizedSearch);
  }

  return matchTextWithCompiledQuery(text, compiledQuery);
};

const processTextNode = (node: Text, compiledQuery: CompiledSearchQuery): string => {
  const text = node.textContent || "";

  return hasMatch(text, compiledQuery) ? text : "";
};

const isListOrParagraph = (element: Element): boolean => {
  const tag = element.tagName;

  return tag === "LI" || tag === "P";
};

const removeNestedDetailsContainers = (root: Element): void => {
  for (const nestedDetails of root.querySelectorAll(
    'details[data-nested-details-summary="true"], details.details-nested, .details-nested'
  )) {
    nestedDetails.remove();
  }
};

const cloneWithoutFigures = (element: Element): Element => {
  const clone = element.cloneNode(true) as Element;

  for (const element_ of clone.querySelectorAll('[class*="media-figure"]'))
    element_.remove();

  removeNestedDetailsContainers(clone);

  return clone;
};

const wrapSnippetWithClosestAddition = (
  element: Element,
  snippetHtml: string
): string => {
  const additionContainer = element.closest(ADDITION_CONTAINER_SELECTOR);

  if (!additionContainer) {
    return snippetHtml;
  }

  const containerTag = additionContainer.tagName.toLowerCase();

  const containerClassName = additionContainer.getAttribute("class") || "";

  const containerAttributes = containerClassName ? ` class="${containerClassName}"` : "";

  return `<${containerTag}${containerAttributes}><div>${snippetHtml}</div></${containerTag}>`;
};

const wrapSnippetWithAdditionContainer = (
  additionContainer: Element,
  snippetHtml: string
): string => {
  const containerTag = additionContainer.tagName.toLowerCase();

  const containerClassName = additionContainer.getAttribute("class") || "";

  const containerAttributes = containerClassName ? ` class="${containerClassName}"` : "";

  return `<${containerTag}${containerAttributes}><div>${snippetHtml}</div></${containerTag}>`;
};

const handleListWithNestedMatches = (
  element: Element,
  compiledQuery: CompiledSearchQuery
): SearchMatch => {
  const ul = element.querySelector("ul");

  if (!ul) {
    const clone = cloneWithoutFigures(element);

    return {
      matchCount: 1,
      result: wrapSnippetWithClosestAddition(element, clone.outerHTML),
    };
  }

  const nestedItems = [...ul.querySelectorAll("li")];

  const matchingNestedItems = nestedItems.filter((item) =>
    hasMatch(item.textContent || "", compiledQuery)
  );

  const clone = cloneWithoutFigures(element);

  if (matchingNestedItems.length === 0) {
    return {
      matchCount: 1,
      result: wrapSnippetWithClosestAddition(element, clone.outerHTML),
    };
  }

  const newUl = document.createElement("ul");

  for (const item of matchingNestedItems) {
    const nestedItemClone = cloneWithoutFigures(item);

    newUl.append(nestedItemClone);
  }

  const oldUl = clone.querySelector("ul");

  if (oldUl) {
    oldUl.replaceWith(newUl);
  }

  return {
    matchCount: matchingNestedItems.length + 1,
    result: wrapSnippetWithClosestAddition(element, clone.outerHTML),
  };
};

const processContainerChildren = (
  element: Element,
  compiledQuery: CompiledSearchQuery
): SearchMatch => {
  let result = "";

  let matchCount = 0;

  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const textResult = processTextNode(node as Text, compiledQuery);

      if (textResult) {
        result += textResult;
        matchCount += 1;
      }

      continue;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const elementNode = node as Element;

      if (elementNode.classList.toString().includes("media-figure")) {
        continue;
      }

      const elementResult = processElement(elementNode, compiledQuery);

      if (elementResult.result) {
        result += elementResult.result;
        matchCount += elementResult.matchCount;
      }
    }
  }

  return {matchCount, result};
};

const processElement = (
  element: Element,
  compiledQuery: CompiledSearchQuery
): SearchMatch => {
  if (isListOrParagraph(element)) {
    const sanitizedElement = cloneWithoutFigures(element);

    const fullText = (sanitizedElement as HTMLElement).textContent || "";

    if (!hasMatch(fullText, compiledQuery)) {
      return {matchCount: 0, result: ""};
    }

    if (element.tagName === "LI") {
      return handleListWithNestedMatches(element, compiledQuery);
    }

    return {
      matchCount: 1,
      result: wrapSnippetWithClosestAddition(element, sanitizedElement.outerHTML),
    };
  }

  return processContainerChildren(element, compiledQuery);
};

const processTable = (
  table: HTMLTableElement,
  compiledQuery: CompiledSearchQuery
): string | undefined => {
  const rows = [...table.querySelectorAll("tr")];

  const matchingRows = rows.filter((row) => {
    const cells = [...row.querySelectorAll("td")];

    return cells.some((cell) => {
      const cellText = extractKeyCombinationText(cell);

      return hasMatch(cellText, compiledQuery);
    });
  });

  if (matchingRows.length > 0) {
    const newTable = document.createElement("table");

    const thead = table.querySelector("thead");

    if (thead) {
      newTable.append(thead.cloneNode(true));
    }

    const tbody = document.createElement("tbody");

    for (const row of matchingRows) tbody.append(row.cloneNode(true));

    newTable.append(tbody);

    return newTable.outerHTML;
  }

  return undefined;
};

const getFirstCleanParagraphOrElement = (root: Element): string => {
  const firstParagraph = root.querySelector("details > p, details > div > p");

  if (firstParagraph) {
    const cleanedParagraph = firstParagraph.cloneNode(true) as Element;

    for (const element of cleanedParagraph.querySelectorAll('[class*="media-figure"]'))
      element.remove();

    return cleanedParagraph.outerHTML;
  }

  const firstElement = root.firstElementChild;

  if (firstElement) {
    const cleanedElement = firstElement.cloneNode(true) as Element;

    for (const element of cleanedElement.querySelectorAll('[class*="media-figure"]'))
      element.remove();

    return cleanedElement.outerHTML;
  }

  return "";
};

const isKeyCombinationTablePresent = (tables: NodeListOf<HTMLTableElement>): boolean => {
  return [...tables].some((table) => {
    const headers = [...table.querySelectorAll("th")];

    return headers.some((th) => {
      const text = th.textContent?.toLowerCase() || "";

      return text.includes("комбинация") || text.includes("действие");
    });
  });
};

const pickBestListOrParagraphMatch = (
  root: Element,
  compiledQuery: CompiledSearchQuery
): SearchMatch => {
  let bestResult: SearchMatch = {matchCount: 0, result: ""};

  const listItems = root.querySelectorAll("ul > li");

  for (const item of listItems) {
    const itemResult = processElement(item, compiledQuery);

    if (itemResult.matchCount > bestResult.matchCount) {
      bestResult = itemResult;
    }
  }

  if (!bestResult.result) {
    const paragraphs = root.querySelectorAll("p");

    for (const p of paragraphs) {
      const pResult = processElement(p, compiledQuery);

      if (pResult.matchCount > bestResult.matchCount) {
        bestResult = pResult;
      }
    }
  }

  return bestResult;
};

const pickTableOrFallback = (
  root: Element,
  compiledQuery: CompiledSearchQuery
): string => {
  const tables = root.querySelectorAll("table");

  if (tables.length > 0) {
    if (compiledQuery.isKeyCombination && isKeyCombinationTablePresent(tables)) {
      for (const table of tables) {
        const tableResult = processTable(table, compiledQuery);

        if (tableResult) {
          return tableResult;
        }
      }
    }

    return tables[0].outerHTML;
  }

  return getFirstCleanParagraphOrElement(root);
};

const MAX_COMPACT_SNIPPET_TEXT_LENGTH = 780;

const escapeCssClassName = (className: string): string => {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(className);
  }

  return className.replaceAll(/[^a-zA-Z0-9_-]/g, String.raw`\$&`);
};

const ADDITION_STYLE_CLASS_NAMES = [
  additionStyles["addition-danger"],
  additionStyles["addition-info"],
  additionStyles["addition-tldr"],
  additionStyles["addition-warning"],
].filter(Boolean);

const ADDITION_CONTAINER_SELECTOR = ADDITION_STYLE_CLASS_NAMES.map(
  (className) => `.${escapeCssClassName(className)}`
).join(", ");

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

const removeFigureContainers = (root: Element): void => {
  for (const element of root.querySelectorAll('[class*="media-figure"]'))
    element.remove();
};

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

const hasCompiledQueryMatchInIndexes = (
  fieldIndexes: TextSearchIndex[],
  compiledQuery: CompiledSearchQuery,
  mode: "all" | "any" = "all"
): boolean => {
  if (fieldIndexes.length === 0) {
    return false;
  }

  if (mode === "any") {
    return fieldIndexes.some((fieldIndex) =>
      hasAnyQueryWordMatch(fieldIndex, compiledQuery)
    );
  }

  for (const {features} of compiledQuery.words) {
    const hasWordMatchInAnyField = fieldIndexes.some((fieldIndex) =>
      Boolean(getWordMatchType(features, fieldIndex))
    );

    if (!hasWordMatchInAnyField) {
      return false;
    }
  }

  return true;
};

const hasCompiledQueryMatchInFields = (
  fields: string[],
  compiledQuery: CompiledSearchQuery,
  mode: "all" | "any" = "all"
): boolean => {
  const fieldIndexes = fields
    .map((field) => field.trim())
    .filter(Boolean)
    .map((field) => buildSearchIndex(field));

  return hasCompiledQueryMatchInIndexes(fieldIndexes, compiledQuery, mode);
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

const pickBestCompactSnippet = (
  root: Element,
  compiledQuery: CompiledSearchQuery
): string | undefined => {
  const candidates = root.querySelectorAll("p, li");

  let bestHtml: string | undefined;

  let bestScore = Number.NEGATIVE_INFINITY;

  for (const candidate of candidates) {
    const processedCandidate = processElement(candidate, compiledQuery);

    if (!processedCandidate.result) {
      continue;
    }

    let candidateHtml = processedCandidate.result;

    const additionContainer = candidate.closest(ADDITION_CONTAINER_SELECTOR);

    if (additionContainer) {
      candidateHtml = wrapSnippetWithAdditionContainer(additionContainer, candidateHtml);
    }

    if (stripHtml(candidateHtml).length > MAX_COMPACT_SNIPPET_TEXT_LENGTH) {
      const compactLineHtml = extractMatchingLine(
        candidateHtml,
        compiledQuery.searchWords.join(" ")
      );

      candidateHtml = additionContainer
        ? wrapSnippetWithAdditionContainer(additionContainer, compactLineHtml)
        : compactLineHtml;
    }

    const candidateScore = getCompactSnippetScore(candidateHtml, compiledQuery);

    if (candidateScore > bestScore) {
      bestScore = candidateScore;
      bestHtml = candidateHtml;
    }
  }

  return bestHtml;
};

const applyAdditionSnippetStyles = (html: string): string => {
  if (!html || !ADDITION_CONTAINER_SELECTOR) {
    return html;
  }

  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = html;

  for (const element of temporaryDiv.querySelectorAll(ADDITION_CONTAINER_SELECTOR)) {
    if (element instanceof HTMLElement) {
      element.style.fontSize = "0.9rem";
      element.style.margin = "10px";

      if (element.closest("li")) {
        element.style.marginInline = "0";
      }
    }
  }

  return temporaryDiv.innerHTML;
};

const formatSearchResult = (text: string, compiledQuery: CompiledSearchQuery): string => {
  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = text;

  for (const element of temporaryDiv.querySelectorAll(
    ".ant-divider, .ant-divider-inner-text"
  ))
    element.remove();

  const tagMatch = (temporaryDiv.querySelector("[data-tags]") as HTMLElement)?.dataset
    .tags;

  const titleMatch = temporaryDiv.querySelector("summary h2")?.textContent;

  if (
    (tagMatch && hasMatch(tagMatch, compiledQuery)) ||
    (titleMatch && hasMatch(titleMatch, compiledQuery))
  ) {
    return applyAdditionSnippetStyles(getFirstCleanParagraphOrElement(temporaryDiv));
  }

  const bestCompactSnippet = pickBestCompactSnippet(temporaryDiv, compiledQuery);

  if (bestCompactSnippet) {
    return applyAdditionSnippetStyles(bestCompactSnippet);
  }

  const bestResult = pickBestListOrParagraphMatch(temporaryDiv, compiledQuery);

  if (!bestResult.result) {
    return applyAdditionSnippetStyles(pickTableOrFallback(temporaryDiv, compiledQuery));
  }

  return applyAdditionSnippetStyles(bestResult.result);
};

const collectDividerTexts = (detail: Element): string[] => {
  return [...detail.querySelectorAll(".ant-divider-inner-text")]
    .map((element) => element.textContent?.trim() || "")
    .filter(Boolean);
};

const collectFlexibleLinksTexts = (detail: Element): string[] => {
  return [...detail.querySelectorAll(".flexible-links a")]
    .map((element) => element.textContent?.trim() || "")
    .filter(Boolean);
};

const getTopLevelAdditionContainer = (
  element: Element,
  rootDetail: Element
): Element | undefined => {
  let additionContainer: Element | null = element.closest(ADDITION_CONTAINER_SELECTOR);

  if (additionContainer === null) {
    return;
  }

  while (additionContainer.parentElement !== null) {
    const parentAdditionContainer: Element | null =
      additionContainer.parentElement.closest(ADDITION_CONTAINER_SELECTOR);

    if (!parentAdditionContainer || !rootDetail.contains(parentAdditionContainer)) {
      break;
    }

    additionContainer = parentAdditionContainer;
  }

  return additionContainer ?? undefined;
};

const buildAdditionsHtml = (detail: Element): string => {
  const additions = [...detail.querySelectorAll(ADDITION_CONTAINER_SELECTOR)].filter(
    (addition) => {
      const parentAddition = addition.parentElement?.closest(ADDITION_CONTAINER_SELECTOR);

      return !parentAddition || !detail.contains(parentAddition);
    }
  );

  const htmlParts: string[] = [];

  for (const addition of additions) {
    const clone = addition.cloneNode(true) as Element;

    removeFigureContainers(clone);
    htmlParts.push(clone.outerHTML);
  }

  return htmlParts.filter(Boolean).join("\n");
};

const collectLinkHrefs = (detail: Element): string[] => {
  return [...detail.querySelectorAll("a[href]")]
    .map((element) => element.getAttribute("href")?.trim() || "")
    .filter(Boolean);
};

const buildParagraphsHtml = (detail: Element): string => {
  const paragraphs = [...detail.querySelectorAll<HTMLParagraphElement>("p")];

  const htmlParts: string[] = [];

  for (const p of paragraphs) {
    const clone = p.cloneNode(true) as Element;

    removeFigureContainers(clone);
    htmlParts.push(clone.outerHTML);
  }

  return htmlParts.filter(Boolean).join("\n");
};

const isKeyCombinationWords = (searchWords: string[]): boolean => {
  return searchWords.some(
    (word) =>
      word.includes("ctrl") ||
      word.includes("alt") ||
      word.includes("shift") ||
      word.includes("win") ||
      word.includes("cmd")
  );
};

const checkKeyCombinationMatch = (
  clonedRow: HTMLTableRowElement,
  searchWords: string[]
): boolean => {
  const searchPattern = normalizeKeyCombination(searchWords.join(" "));

  const rowText = [...clonedRow.cells]
    .map((cell) => {
      const keyElements = cell.querySelectorAll("mark.key");

      if (keyElements.length > 0) {
        return [...keyElements]
          .map((element) => element.textContent?.toLowerCase() || "")
          .join(" ");
      }

      return cell.textContent?.toLowerCase() || "";
    })
    .join(" ");

  const normalizedRowText = normalizeKeyCombination(rowText);

  return normalizedRowText.includes(searchPattern);
};

const checkGeneralMatch = (
  clonedRow: HTMLTableRowElement,
  searchWords: string[]
): boolean => {
  const rowHTML = clonedRow.innerHTML.toLowerCase();

  return searchWords.every((word) => rowHTML.includes(word.toLowerCase()));
};

const getExcludedColumnIndices = (table: HTMLTableElement): Set<number> => {
  return new Set(
    [...table.querySelectorAll("th")]
      .map((th, index) =>
        th.textContent?.toLowerCase().includes("описание") ? index : -1
      )
      .filter((index) => index !== -1)
  );
};

const getFilteredTableRows = (table: HTMLTableElement): HTMLTableRowElement[] => {
  return [...table.querySelectorAll("tr")].filter((row) => {
    let parent = row.parentElement;

    while (parent) {
      if (parent.tagName.toLowerCase() === "thead") {
        return false;
      }

      parent = parent.parentElement;
    }

    return true;
  }) as HTMLTableRowElement[];
};

const extractTableHeaders = (table: HTMLTableElement): string[] => {
  return [...table.querySelectorAll("th")]
    .map((th) => decodeHtmlEntities(th.textContent?.trim() ?? ""))
    .filter((header) => !header.toLowerCase().includes("описание"));
};

const processTableRow = (
  row: HTMLTableRowElement,
  excludedColumns: Set<number>,
  keyCombo: boolean,
  searchWords: string[]
): string | undefined => {
  const clonedRow = row.cloneNode(true) as HTMLTableRowElement;

  for (const [index, cell] of [...clonedRow.cells].entries()) {
    if (excludedColumns.has(index)) {
      cell.remove();
    }
  }

  if (clonedRow.cells.length === 0) {
    return undefined;
  }

  const hasMatch = keyCombo
    ? checkKeyCombinationMatch(clonedRow, searchWords)
    : checkGeneralMatch(clonedRow, searchWords);

  return hasMatch ? clonedRow.outerHTML : undefined;
};

const buildTableGroupsHtml = (detail: Element, searchWords: string[]): string => {
  const tableGroups: Record<string, string[]> = {};

  const tables = [...detail.querySelectorAll<HTMLTableElement>("table")];

  const keyCombo = isKeyCombinationWords(searchWords);

  for (const table of tables) {
    const headers = extractTableHeaders(table);

    const headerKey = headers.join("|");

    const allRows = getFilteredTableRows(table);

    const excludedColumns = getExcludedColumnIndices(table);

    const processedRows = allRows
      .map((row) => processTableRow(row, excludedColumns, keyCombo, searchWords))
      .filter(Boolean) as string[];

    if (processedRows.length > 0) {
      tableGroups[headerKey] ??= [];
      tableGroups[headerKey].push(...processedRows);
    }
  }

  return Object.entries(tableGroups)
    .map(([headerKey, rows]) => {
      const headers = headerKey.split("|").filter(Boolean);

      let headerRow = "";

      if (headers.length > 0) {
        const headersHtml = headers.map((h) => `<th>${h}</th>`).join("");

        headerRow = `<thead><tr>${headersHtml}</tr></thead>`;
      }

      return `<table>${headerRow}${rows.join("")}</table>`;
    })
    .join("");
};

const buildListContentHtml = (detail: Element, searchWords: string[]): string => {
  const uls = [...detail.querySelectorAll<HTMLUListElement>("ul")];

  const parts: string[] = [];

  const addedParts = new Set<string>();

  for (const ul of uls) {
    const ulClone = ul.cloneNode(true) as Element;

    removeFigureContainers(ulClone);

    const ulText = stripHtml(ulClone.outerHTML);

    const normalizedUlText = normalizeText(ulText);

    const hasMatch =
      searchWords.length === 0 ||
      searchWords.some((word) => normalizedUlText.includes(normalizeText(word)));

    if (hasMatch) {
      const additionContainer = getTopLevelAdditionContainer(ul, detail);

      if (additionContainer) {
        const additionClone = additionContainer.cloneNode(true) as Element;

        removeFigureContainers(additionClone);

        const additionHtml = additionClone.outerHTML;

        if (!addedParts.has(additionHtml)) {
          parts.push(additionHtml);
          addedParts.add(additionHtml);
        }

        continue;
      }

      const ulHtml = ulClone.outerHTML;

      if (!addedParts.has(ulHtml)) {
        parts.push(ulHtml);
        addedParts.add(ulHtml);
      }
    }
  }

  return parts.filter(Boolean).join("\n");
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

      const additionsContent = buildAdditionsHtml(detail);

      const linkHrefs = collectLinkHrefs(detail);

      const content = buildParagraphsHtml(detail);

      const tableContent = buildTableGroupsHtml(detail, []);

      const listContent = buildListContentHtml(detail, []);

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
      const compiledQuery = compileSearchQuery(queryText);

      const mappedResults: SearchResult[] = [];

      for (const workerResult of rankedResults) {
        const detail = cachedDetailsByKey.get(
          `${workerResult.id}::${workerResult.sourceOrder}`
        );

        if (!detail) {
          continue;
        }

        mappedResults.push({
          ...(detail.anchor ? {anchor: detail.anchor} : {}),
          ...(detail.tag ? {tag: detail.tag} : {}),
          content: formatSearchResult(detail.content, compiledQuery),
          hasTagMatch: workerResult.hasTagMatch,
          hasTitleMatch: workerResult.hasTitleMatch,
          id: detail.id,
          isSingleParagraphMatch: workerResult.isSingleParagraphMatch,
          title: detail.title,
        });
      }

      return mappedResults;
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

const SearchCategories: React.FC<{
  onLinkClick: (id: string, matchText?: string) => void;
  sections: SearchSection[];
}> = ({onLinkClick, sections}) => {
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

const getMatchingTags = (tag: string | undefined, compiledQuery: CompiledSearchQuery) => {
  if (!tag || tag.trim() === "") {
    return [];
  }

  if (compiledQuery.searchWords.length === 0) {
    return [];
  }

  const allTags = tag
    .split(",")
    .map((tag_) => tag_.trim())
    .filter(Boolean);

  return allTags.filter((tag_) =>
    hasCompiledQueryMatchInFields([tag_], compiledQuery, "any")
  );
};

const SearchResults: React.FC<{
  onLinkClick: (id: string) => void;
  query: string;
  resultRefs: React.RefObject<(HTMLButtonElement | null)[]>;
  results: SearchResult[];
  selectedResultIndex: number;
  setSelectedResultIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({
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

    const tagsToDisplay = getMatchingTags(tag, compiledQuery);

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

const ExternalSearch: React.FC<{query: string}> = ({query}) => {
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
              `https://www.perplexity.ai/search?q=${encodeURIComponent(
                getSearchQuery()
              )}`,
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

const NoResults: React.FC<{query: string}> = ({query}) => (
  <div>
    <div className={searchStyles["search-no-results"]}>
      <p className={searchStyles["search-no-results-title"]}>
        По вашему запросу на этой странице{" "}
        <span
          style={{
            color: "var(--color-surface-primary-text)",
            fontWeight: 600,
          }}
        >
          ничего
        </span>{" "}
        не нашлось
      </p>
      <p className={searchStyles["search-no-results-message"]}>
        Попробуйте перефразировать свой запрос или выполните поиск в Яндексе или
        Perplexity<sup>1</sup>
      </p>
    </div>
    <ExternalSearch query={query} />
  </div>
);

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
    return resultReferences.current
      .map((element, index) => ({
        element,
        index,
        rect: element?.getBoundingClientRect(),
      }))
      .filter(
        (item): item is {element: HTMLButtonElement; index: number; rect: DOMRect} =>
          !!item.element && !!item.rect
      );
  }, [resultReferences]);

  const getColumnCenters = useCallback(
    (positionedResults: Array<{index: number; rect: DOMRect}>) => {
      const centers: number[] = [];

      for (const item of positionedResults) {
        const centerX = item.rect.left + item.rect.width / 2;

        const matchingCenterIndex = centers.findIndex(
          (value) => Math.abs(value - centerX) <= columnTolerance
        );

        if (matchingCenterIndex === -1) {
          centers.push(centerX);
        } else {
          centers[matchingCenterIndex] = (centers[matchingCenterIndex] + centerX) / 2;
        }
      }

      return centers;
    },
    [columnTolerance]
  );

  const getVisualNeighborIndex = useCallback(
    (currentIndex: number, direction: "down" | "up"): number => {
      const positionedResults = getPositionedResults();

      if (positionedResults.length === 0) {
        return currentIndex;
      }

      const currentResult = positionedResults.find((item) => item.index === currentIndex);

      if (!currentResult) {
        return positionedResults[0].index;
      }

      const currentCenterX = currentResult.rect.left + currentResult.rect.width / 2;

      const currentCenterY = currentResult.rect.top + currentResult.rect.height / 2;

      const columnCenters = getColumnCenters(positionedResults);

      if (columnCenters.length <= 1) {
        if (direction === "down") {
          return Math.min(currentIndex + 1, results.length - 1);
        }

        return Math.max(currentIndex - 1, 0);
      }

      const currentColumnCenter =
        columnCenters
          .toSorted((a, b) => Math.abs(a - currentCenterX) - Math.abs(b - currentCenterX))
          .at(0) ?? currentCenterX;

      const directionalCandidates = positionedResults
        .map((candidate) => ({
          centerX: candidate.rect.left + candidate.rect.width / 2,
          centerY: candidate.rect.top + candidate.rect.height / 2,
          index: candidate.index,
        }))
        .filter((candidate) => candidate.index !== currentIndex)
        .filter(
          (candidate) =>
            Math.abs(candidate.centerX - currentColumnCenter) <= columnTolerance
        )
        .filter((candidate) =>
          direction === "down"
            ? candidate.centerY > currentCenterY + 2
            : candidate.centerY < currentCenterY - 2
        );

      const bestCandidate = directionalCandidates.toSorted((a, b) => {
        const scoreA =
          Math.abs(a.centerY - currentCenterY) * 12 +
          Math.abs(a.centerX - currentCenterX);

        const scoreB =
          Math.abs(b.centerY - currentCenterY) * 12 +
          Math.abs(b.centerX - currentCenterX);

        return scoreA - scoreB;
      })[0];

      return bestCandidate?.index ?? currentIndex;
    },
    [columnTolerance, getColumnCenters, getPositionedResults, results.length]
  );

  const getHorizontalNeighborIndex = useCallback(
    (currentIndex: number, direction: "left" | "right"): number => {
      const positionedResults = getPositionedResults();

      if (positionedResults.length === 0) {
        return currentIndex;
      }

      const currentResult = positionedResults.find((item) => item.index === currentIndex);

      if (!currentResult) {
        return positionedResults[0].index;
      }

      const currentCenterX = currentResult.rect.left + currentResult.rect.width / 2;

      const currentCenterY = currentResult.rect.top + currentResult.rect.height / 2;

      const candidateColumns = positionedResults
        .map((item) => ({
          centerX: item.rect.left + item.rect.width / 2,
          index: item.index,
          rect: item.rect,
        }))
        .filter((item) =>
          direction === "left"
            ? item.centerX < currentCenterX - columnTolerance
            : item.centerX > currentCenterX + columnTolerance
        );

      if (candidateColumns.length === 0) {
        return currentIndex;
      }

      let bestCandidate: {index: number; score: number} | undefined;

      for (const candidate of candidateColumns) {
        const candidateCenterY = candidate.rect.top + candidate.rect.height / 2;

        const deltaY = Math.abs(candidateCenterY - currentCenterY);

        const deltaX = Math.abs(candidate.centerX - currentCenterX);

        const score = deltaX * 12 + deltaY;

        if (!bestCandidate || score < bestCandidate.score) {
          bestCandidate = {index: candidate.index, score};
        }
      }

      return bestCandidate?.index ?? currentIndex;
    },
    [columnTolerance, getPositionedResults]
  );

  const scrollSelectedResultIntoView = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      if (selectedResultIndex < 0) {
        return;
      }

      if (isMobileDevice()) {
        return;
      }

      const container = resultsContainerReference.current;

      const selectedElement = resultReferences.current[selectedResultIndex];

      if (!container || !selectedElement) {
        return;
      }

      const containerRect = container.getBoundingClientRect();

      const elementRect = selectedElement.getBoundingClientRect();

      const absoluteElementTop =
        elementRect.top - containerRect.top + container.scrollTop;

      const centeredTop =
        absoluteElementTop - (container.clientHeight - elementRect.height) / 2;

      const maxScrollTop = Math.max(0, container.scrollHeight - container.clientHeight);

      const targetTop = Math.min(maxScrollTop, Math.max(0, centeredTop));

      container.scrollTo({
        behavior,
        top: targetTop,
      });

      // Chromium can keep stale anchor-based offset after masonry reflow.
      // If element is still clipped after manual scroll, use native alignment fallback.
      const verifyAndFallback = () => {
        const currentContainer = resultsContainerReference.current;

        const currentElement = resultReferences.current[selectedResultIndex];

        if (!currentContainer || !currentElement) {
          return;
        }

        const currentContainerRect = currentContainer.getBoundingClientRect();

        const currentElementRect = currentElement.getBoundingClientRect();

        const topGap = currentElementRect.top - currentContainerRect.top;

        const bottomGap = currentContainerRect.bottom - currentElementRect.bottom;

        const isOutOfView = topGap < 8 || bottomGap < 8;

        if (isOutOfView) {
          currentElement.scrollIntoView({
            behavior,
            block: "center",
            inline: "nearest",
          });
        }
      };

      globalThis.requestAnimationFrame(verifyAndFallback);
    },
    [selectedResultIndex]
  );

  const handleLinkClick = useCallback(
    (anchorValue: string) => {
      const resolvedDetails = resolveDetailsByAnchor(anchorValue);

      if (resolvedDetails) {
        const summaryElement = resolvedDetails.querySelector("summary");

        if (!(summaryElement instanceof HTMLElement) || !summaryElement.id) {
          return;
        }

        if (!resolvedDetails.hasAttribute("open")) {
          resolvedDetails.setAttribute("open", "true");
        }

        scrollToElement(summaryElement);

        const event = new CustomEvent("open-spoiler-by-id", {
          detail: {id: summaryElement.id},
        });

        globalThis.dispatchEvent(event);

        setTimeout(() => {
          closeModal();
        }, 0);

        return;
      }

      const targetElement = document.getElementById(anchorValue);

      if (!targetElement) {
        return;
      }

      scrollToElement(targetElement);

      setTimeout(() => {
        closeModal();
      }, 0);
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
      return <NoResults query={query} />;
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
