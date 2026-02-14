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

import {BackspaceOutlined, CloseRounded, Search} from "@mui/icons-material";
import {message, Modal} from "antd";
import {RemoveScroll} from "react-remove-scroll";

import {copyText} from "../../hooks/useCopyToClipboard";
import {useLongPress} from "../../hooks/useLongPress";
import {useRipple} from "../../hooks/useRipple";
import {isMobileDevice} from "../../utils/browserDetection";
import {formatNestedQuotes} from "../../utils/stringUtilities";
import modalStyles from "../modals/Modal.module.scss";

import searchStyles from "./SearchEngine.module.scss";

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

export const extractMatchingLine = (content: string, query: string): string => {
  if (!content || !query.trim()) {
    return content;
  }

  const searchWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = content;

  const findFirstListMatch = (ulElement: HTMLUListElement): string | undefined => {
    const firstMatch = [...ulElement.querySelectorAll("li")].find((li) => {
      const liText = li.textContent?.toLowerCase() || "";

      return searchWords.every((word) => liText.includes(word));
    });

    if (firstMatch) {
      const newUl = document.createElement("ul");

      newUl.append(firstMatch.cloneNode(true));

      return newUl.outerHTML;
    }

    return undefined;
  };

  const ulElements = [...temporaryDiv.querySelectorAll("ul")];

  for (const ul of ulElements) {
    const matchedList = findFirstListMatch(ul);

    if (matchedList) {
      return matchedList;
    }
  }

  const allElements = [...temporaryDiv.querySelectorAll("*")];

  for (const element of allElements) {
    const elementHTML = element.innerHTML.toLowerCase();

    if (searchWords.every((word) => elementHTML.includes(word))) {
      return element.outerHTML;
    }
  }

  const firstElement = temporaryDiv.firstElementChild;

  return firstElement?.outerHTML || content;
};

const KEY_MODIFIERS = ["ctrl", "alt", "shift", "win", "cmd"] as const;

const KEY_MODIFIER_ALIASES: Record<string, string> = {
  command: "cmd",
  control: "ctrl",
  windows: "win",
};

const ALIAS_REGEXES: Record<string, RegExp> = Object.fromEntries(
  Object.entries(KEY_MODIFIER_ALIASES).map(([alias]) => [
    alias,
    new RegExp(escapeRegExp(alias), "g"),
  ])
);

type SearchMatch = {
  result: string;
  matchCount: number;
};

const stripHtml = (html: string): string => {
  const temporary = document.createElement("div");

  temporary.innerHTML = html;

  return temporary.textContent || "";
};

const normalizationRegex = /[^a-zа-яё0-9+\-=()]/gi;

const replaceCharsRegex = /ё/gi;

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replaceAll(replaceCharsRegex, "е")
    .replaceAll(normalizationRegex, " ")
    .replaceAll(/\s+/g, " ")
    .trim();
};

const isKeyCombinationSearch = (text: string): boolean => {
  return KEY_MODIFIERS.some((modifier) => text.toLowerCase().includes(modifier));
};

const normalizeKeyCombination = (text: string): string => {
  let normalized = text.toLowerCase();

  for (const [alias, standard] of Object.entries(KEY_MODIFIER_ALIASES)) {
    normalized = normalized.replaceAll(ALIAS_REGEXES[alias], standard);
  }

  return normalized.replaceAll("+", " ").replaceAll(/\s+/g, " ").trim();
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

const hasMatch = (
  text: string,
  searchWords: string[],
  isKeyCombination: boolean
): boolean => {
  if (isKeyCombination) {
    const normalizedText = normalizeKeyCombination(text);

    const normalizedSearch = normalizeKeyCombination(searchWords.join(" "));

    return normalizedText.includes(normalizedSearch);
  }

  const normalizedTextToSearch = normalizeText(text);

  for (const searchWord of searchWords) {
    if (!normalizedTextToSearch.includes(searchWord)) {
      return false;
    }
  }

  return true;
};

const processTextNode = (
  node: Text,
  searchWords: string[],
  isKeyCombination: boolean
): string => {
  const text = node.textContent || "";

  return hasMatch(text, searchWords, isKeyCombination) ? text : "";
};

const isListOrParagraph = (element: Element): boolean => {
  const tag = element.tagName;

  return tag === "LI" || tag === "P";
};

const cloneWithoutFigures = (element: Element): Element => {
  const clone = element.cloneNode(true) as Element;

  for (const element_ of clone.querySelectorAll('[class*="media-figure"]'))
    element_.remove();

  return clone;
};

const handleListWithNestedMatches = (
  element: Element,
  searchWords: string[],
  isKeyCombination: boolean
): SearchMatch => {
  const ul = element.querySelector("ul");

  if (!ul) {
    const clone = cloneWithoutFigures(element);

    return {matchCount: 1, result: clone.outerHTML};
  }

  const nestedItems = [...ul.querySelectorAll("li")];

  const matchingNestedItems = nestedItems.filter((item) =>
    hasMatch(item.textContent || "", searchWords, isKeyCombination)
  );

  const clone = cloneWithoutFigures(element);

  if (matchingNestedItems.length === 0) {
    return {matchCount: 1, result: clone.outerHTML};
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
    result: clone.outerHTML,
  };
};

const processContainerChildren = (
  element: Element,
  searchWords: string[],
  isKeyCombination: boolean
): SearchMatch => {
  let result = "";

  let matchCount = 0;

  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const textResult = processTextNode(node as Text, searchWords, isKeyCombination);

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

      const elementResult = processElement(elementNode, searchWords, isKeyCombination);

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
  searchWords: string[],
  isKeyCombination: boolean
): SearchMatch => {
  if (isListOrParagraph(element)) {
    const fullText = (element as HTMLElement).textContent || "";

    if (!hasMatch(fullText, searchWords, isKeyCombination)) {
      return {matchCount: 0, result: ""};
    }

    if (element.tagName === "LI") {
      return handleListWithNestedMatches(element, searchWords, isKeyCombination);
    }

    const clone = cloneWithoutFigures(element);

    return {matchCount: 1, result: clone.outerHTML};
  }

  return processContainerChildren(element, searchWords, isKeyCombination);
};

const processTable = (
  table: HTMLTableElement,
  searchWords: string[],
  isKeyCombination: boolean
): string | undefined => {
  const rows = [...table.querySelectorAll("tr")];

  const matchingRows = rows.filter((row) => {
    const cells = [...row.querySelectorAll("td")];

    return cells.some((cell) => {
      const cellText = extractKeyCombinationText(cell);

      return hasMatch(cellText, searchWords, isKeyCombination);
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
  searchWords: string[],
  isKeyCombination: boolean
): SearchMatch => {
  let bestResult: SearchMatch = {matchCount: 0, result: ""};

  const listItems = root.querySelectorAll("ul > li");

  for (const item of listItems) {
    const itemResult = processElement(item, searchWords, isKeyCombination);

    if (itemResult.matchCount > bestResult.matchCount) {
      bestResult = itemResult;
    }
  }

  if (!bestResult.result) {
    const paragraphs = root.querySelectorAll("p");

    for (const p of paragraphs) {
      const pResult = processElement(p, searchWords, isKeyCombination);

      if (pResult.matchCount > bestResult.matchCount) {
        bestResult = pResult;
      }
    }
  }

  return bestResult;
};

const pickTableOrFallback = (
  root: Element,
  searchWords: string[],
  isKeyCombination: boolean
): string => {
  const tables = root.querySelectorAll("table");

  if (tables.length > 0) {
    if (isKeyCombinationTablePresent(tables)) {
      for (const table of tables) {
        const tableResult = processTable(table, searchWords, isKeyCombination);

        if (tableResult) {
          return tableResult;
        }
      }
    }

    return tables[0].outerHTML;
  }

  return getFirstCleanParagraphOrElement(root);
};

const formatSearchResult = (text: string, searchWords: string[]): string => {
  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = text;

  for (const element of temporaryDiv.querySelectorAll(
    ".ant-divider, .ant-divider-inner-text"
  ))
    element.remove();

  const isKeyCombination = isKeyCombinationSearch(searchWords.join(" "));

  const tagMatch = (temporaryDiv.querySelector("[data-tags]") as HTMLElement)?.dataset
    .tags;

  const titleMatch = temporaryDiv.querySelector("summary h2")?.textContent;

  if (
    (tagMatch && hasMatch(tagMatch, searchWords, isKeyCombination)) ||
    (titleMatch && hasMatch(titleMatch, searchWords, isKeyCombination))
  ) {
    return getFirstCleanParagraphOrElement(temporaryDiv);
  }

  const bestResult = pickBestListOrParagraphMatch(
    temporaryDiv,
    searchWords,
    isKeyCombination
  );

  if (!bestResult.result) {
    return pickTableOrFallback(temporaryDiv, searchWords, isKeyCombination);
  }

  return bestResult.result;
};

const removeFigureContainers = (root: Element): void => {
  for (const element of root.querySelectorAll('[class*="media-figure"]'))
    element.remove();
};

const computeTitleTagContentMatches = (
  searchWords: string[],
  normalizedTitle: string,
  normalizedTag: string,
  normalizedContent: string
) => {
  const titleMatches = searchWords.filter((word) => normalizedTitle.includes(word));

  const tagMatches = searchWords.filter((word) => normalizedTag.includes(word));

  const contentMatches = searchWords.filter((word) => normalizedContent.includes(word));

  return {contentMatches, tagMatches, titleMatches};
};

const computeScore = (
  searchWords: string[],
  normalizedTitle: string,
  normalizedTag: string,
  titleMatchesCount: number,
  tagMatchesCount: number,
  contentMatchesCount: number
) => {
  let score = 0;

  if (titleMatchesCount && tagMatchesCount) {
    score += 100;
  } else if (titleMatchesCount || tagMatchesCount) {
    score += 50;
  }

  score += Math.max(
    ...searchWords.map((word) =>
      Math.max(
        normalizedTitle.includes(word) ? word.length : 0,
        normalizedTag.includes(word) ? word.length : 0
      )
    ),
    0
  );

  score += 10 * (titleMatchesCount + tagMatchesCount - 1);
  score += 5 * contentMatchesCount;

  if (!titleMatchesCount && !tagMatchesCount && contentMatchesCount) {
    score -= 10;
  }

  return score;
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

  for (const ul of uls) {
    const ulClone = ul.cloneNode(true) as Element;

    removeFigureContainers(ulClone);

    const ulText = stripHtml(ulClone.outerHTML);

    const normalizedUlText = normalizeText(ulText);

    const hasMatch =
      searchWords.length === 0 ||
      searchWords.some((word) => normalizedUlText.includes(normalizeText(word)));

    if (hasMatch) {
      parts.push(ulClone.outerHTML);
    }
  }

  return parts.filter(Boolean).join("\n");
};

type BaseSearchResult = Omit<
  SearchResult,
  "isSingleParagraphMatch" | "hasTitleMatch" | "hasTagMatch"
>;

const isSingleParagraphMatchForResult = (
  resultContent: string,
  searchWords: string[]
): boolean => {
  const lines = resultContent.split("\n");

  for (const line of lines) {
    const normalizedLine = normalizeText(stripHtml(line));

    let allIncluded = true;

    for (const word of searchWords) {
      if (!normalizedLine.includes(word)) {
        allIncluded = false;
        break;
      }
    }

    if (allIncluded) {
      return true;
    }
  }

  return false;
};

type TransformedSearchResult = SearchResult & {
  score: number;
};

const transformSearchResult = (
  result: BaseSearchResult,
  searchWords: string[]
): TransformedSearchResult => {
  const isSingleParagraphMatch = isSingleParagraphMatchForResult(
    result.content,
    searchWords
  );

  const normalizedTitle = normalizeText(result.title);

  const normalizedTag = normalizeText(result.tag || "");

  const normalizedContent = normalizeText(stripHtml(result.content || ""));

  const {contentMatches, tagMatches, titleMatches} = computeTitleTagContentMatches(
    searchWords,
    normalizedTitle,
    normalizedTag,
    normalizedContent
  );

  const score = computeScore(
    searchWords,
    normalizedTitle,
    normalizedTag,
    titleMatches.length,
    tagMatches.length,
    contentMatches.length
  );

  return {
    ...result,
    content: formatSearchResult(result.content, searchWords),
    hasTagMatch: tagMatches.length > 0,
    hasTitleMatch: titleMatches.length > 0,
    isSingleParagraphMatch,
    score,
  };
};

type FilteredSearchResult = Omit<
  SearchResult,
  "id" | "anchor" | "isSingleParagraphMatch" | "hasTitleMatch" | "hasTagMatch"
>;

const filterByKeyCombination = (
  {content, tag, title}: FilteredSearchResult,
  originalText: string
): boolean => {
  const searchPattern = normalizeKeyCombination(originalText);

  const fieldsToSearch = [title, tag || "", stripHtml(content || "")];

  return fieldsToSearch
    .map((field) => normalizeKeyCombination(field))
    .some((normalizedField) => normalizedField.includes(searchPattern));
};

const filterByWords = (
  {content, tag, title}: FilteredSearchResult,
  searchWords: string[]
): boolean => {
  const textToSearch = [
    normalizeText(title),
    normalizeText(tag || ""),
    normalizeText(stripHtml(content || "")),
  ].join(" ");

  return searchWords.every((word) => textToSearch.includes(word));
};

const filterDetail = (
  detail: FilteredSearchResult,
  searchWords: string[],
  originalText: string
): boolean => {
  if (isKeyCombinationSearch(originalText)) {
    return filterByKeyCombination(detail, originalText);
  }

  return filterByWords(detail, searchWords);
};

export const useSearchLogic = (query: string, isPageLoaded: boolean) => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const [selectedResultIndex, setSelectedResultIndex] = useState(0);

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const [resultsQuery, setResultsQuery] = useState("");

  const cachedDetails = useMemo(() => {
    if (!isPageLoaded) {
      return;
    }

    return document.querySelectorAll("details");
  }, [isPageLoaded]);

  const extractDetailsData = useCallback(
    (searchWords: string[]) => {
      if (!cachedDetails) {
        return [];
      }

      const data: Omit<
        SearchResult,
        "isSingleParagraphMatch" | "hasTitleMatch" | "hasTagMatch"
      >[] = [];

      for (const detail of cachedDetails) {
        const summary = detail.querySelector("summary");

        if (!summary) {
          continue;
        }

        const id = summary.getAttribute("id");

        if (!id) {
          continue;
        }

        const titleElement = summary.querySelector("h2");

        const title = titleElement ? (titleElement.textContent ?? "") : "";

        const tag = detail.dataset.tags ?? "";

        const anchor = detail.dataset.anchor;

        const dividerTexts = collectDividerTexts(detail);

        const flexibleLinksTexts = collectFlexibleLinksTexts(detail);

        const content = buildParagraphsHtml(detail);

        const tableContent = buildTableGroupsHtml(detail, searchWords);

        const listContent = buildListContentHtml(detail, searchWords);

        const text = [
          content,
          tableContent,
          listContent,
          ...dividerTexts,
          ...flexibleLinksTexts,
        ].join("\n");

        if (title || text) {
          data.push({anchor, content: text.trim(), id, tag: tag.trim(), title});
        }
      }

      return data;
    },
    [cachedDetails]
  );

  const handleSearch = useCallback(
    debounce((text: string) => {
      if (text.trim()) {
        const searchWords = text
          .split(/\s+/)
          .filter((word) => word.length > 0)
          .map((word) => normalizeText(word));

        const detailsData = extractDetailsData(searchWords);

        const filtered = detailsData.filter((detail) =>
          filterDetail(detail, searchWords, text)
        );

        const results = filtered
          .map((result) => transformSearchResult(result, searchWords))
          .toSorted((a, b) => {
            if (b.score !== a.score) {
              return b.score - a.score;
            }

            return 0;
          });

        setResults(results);
        setResultsQuery(text);
      } else {
        setResults([]);
        setResultsQuery("");
      }
    }, 300),
    [extractDetailsData]
  );

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 100);

    if (isPageLoaded) {
      handleSearch(query);
    } else {
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
            Поиск по странице <mark>Ctrl + F</mark>
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
  onLinkClick: (id: string) => void;
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

const getMatchingTags = (tag: string | undefined, query: string) => {
  if (!tag || tag.trim() === "") {
    return [];
  }

  const allTags = tag.split(", ");

  const lowerCaseQuery = query.toLowerCase().trim();

  return allTags.filter((t) => t.toLowerCase().includes(lowerCaseQuery));
};

const SearchResults: React.FC<{
  onLinkClick: (id: string) => void;
  query: string;
  resultRefs: React.RefObject<(HTMLButtonElement | null)[]>;
  results: SearchResult[];
  selectedResultIndex: number;
}> = ({onLinkClick, query, resultRefs, results, selectedResultIndex}) => {
  const isMobile = isMobileDevice();

  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>();

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

  return (
    <div {...longPressProperties}>
      {results.map(({anchor, content, id, tag, title}, index) => {
        const tagsToDisplay = getMatchingTags(tag, query);

        const isSelected = index === selectedResultIndex;

        const isHovered = hoveredIndex === index;

        return (
          <div key={id}>
            <button
              ref={(element) => {
                if (resultRefs.current) {
                  resultRefs.current[index] = element;
                }
              }}
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
              onClick={(event_) => {
                event_.preventDefault();
                onLinkClick(id);
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(undefined)}
            >
              <div
                className={`${searchStyles["search-header"]} ${isSelected ? searchStyles["search-selected"] : ""}`}
              >
                <p className={searchStyles["search-title"]}>
                  {title.replace(/^[+-]+/, "").trim()}
                </p>
                {tagsToDisplay.length > 0 && (
                  <span className={searchStyles["search-tags"]}>
                    {tagsToDisplay.map((t) => (
                      <mark key={t}>{t}</mark>
                    ))}
                  </span>
                )}
              </div>
              <div
                className={`${searchStyles["search-content"]} article-content no-copy`}
                dangerouslySetInnerHTML={{__html: content}}
              />
            </button>
          </div>
        );
      })}
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
            color: "var(--summary-text)",
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

  const handleLinkClick = useCallback(
    (id: string) => {
      const summaryElement = document.getElementById(id);

      if (!summaryElement) {
        return;
      }

      const detailsElement = summaryElement.closest("details");

      if (detailsElement && !detailsElement.hasAttribute("open")) {
        detailsElement.setAttribute("open", "true");
      }

      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

      const padding = 14;

      const y =
        summaryElement.getBoundingClientRect().top +
        globalThis.pageYOffset -
        headerHeight -
        padding;

      globalThis.scrollTo({behavior: "smooth", top: y});

      const event = new CustomEvent("open-spoiler-by-id", {detail: {id}});

      globalThis.dispatchEvent(event);

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
            previousIndex < results.length - 1 ? previousIndex + 1 : previousIndex
          );

          break;
        }

        case "ArrowUp": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            previousIndex > 0 ? previousIndex - 1 : previousIndex
          );

          break;
        }

        case "Enter": {
          event_.preventDefault();

          if (selectedResultIndex >= 0 && selectedResultIndex < results.length) {
            handleLinkClick(results[selectedResultIndex].id);
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
  }, [isModalOpen, results, selectedResultIndex, handleLinkClick]);

  useEffect(() => {
    if (selectedResultIndex >= 0) {
      const isMobile = isMobileDevice();

      if (isMobile) {
        return;
      }

      const resultContainer = document.querySelector(
        `.${searchStyles["search-results"]}`
      );

      const selectedResultElements = resultContainer?.querySelectorAll(
        `.${searchStyles["search-link"]}`
      );

      selectedResultElements?.[selectedResultIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedResultIndex]);

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
    <RemoveScroll enabled={isModalOpen}>
      <Modal
        closeIcon={false}
        footer={<></>}
        open={isModalOpen}
        width={850}
        onCancel={closeModal}
      >
        <div className={searchStyles["search"]}>
          <div className={modalStyles["modal-content"]}>
            <div className={searchStyles["search-input-wrapper"]}>
              <input
                ref={inputReference}
                className={searchStyles["search-input"]}
                placeholder="Введите что-нибудь для поиска..."
                style={{cursor: "text"}}
                type="search"
                value={query}
                onChange={(event_) => handleQueryChange(event_.target.value)}
              />
              <p className={searchStyles["search-counter"]}>
                <span
                  style={{
                    color: "var(--summary-text)",
                    fontSize: "1.05em",
                    fontWeight: 500,
                  }}
                >
                  {results.length}
                </span>{" "}
                {getResultWord(results.length)}
              </p>
              {query.trim() !== "" && (
                <button
                  className={searchStyles["search-input-clear"]}
                  style={{cursor: "pointer"}}
                  onClick={() => {
                    setQuery("");
                    setIsSearching(false);
                  }}
                  onMouseDown={ripple.onMouseDown}
                >
                  <BackspaceOutlined fontSize="small" />
                </button>
              )}
              <button
                className={searchStyles["search-input-close"]}
                onClick={closeModal}
                onMouseDown={ripple.onMouseDown}
              >
                <CloseRounded />
              </button>
            </div>
            <div
              ref={resultsContainerReference}
              className={`${searchStyles["search-results"]}${isFadeVisible ? " " + searchStyles["show-fade"] : ""}`}
            >
              {renderContent()}
              {isFadeVisible}
            </div>
          </div>
        </div>
      </Modal>
    </RemoveScroll>
  );
};
