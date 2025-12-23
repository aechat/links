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

export interface SearchContextType {
  closeModal: () => void;
  isOpen: boolean;
  isPageLoaded: boolean;
  openModal: () => void;
}

export interface SearchResult {
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
  string_.replaceAll(/[.*+?^${}()|[\\]/g, String.raw`\$& `);

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
  const findFirstListMatch = (ulElement: HTMLUListElement): string | null => {
    const firstMatch = [...ulElement.querySelectorAll("li")].find((li) => {
      const liText = li.textContent?.toLowerCase() || "";

      return searchWords.every((word) => liText.includes(word));
    });

    if (firstMatch) {
      const newUl = document.createElement("ul");

      newUl.append(firstMatch.cloneNode(true));

      return newUl.outerHTML;
    }

    return null;
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

type SearchMatch = {
  result: string;
  matchCount: number;
};
const stripHtml = (html: string): string => {
  const temporary = document.createElement("div");

  temporary.innerHTML = html;

  return temporary.textContent || temporary.innerText || "";
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
    normalized = normalized.replaceAll(new RegExp(alias, "g"), standard);
  }

  return normalized
    .replaceAll(/\s*\+\s*/g, " ")
    .replaceAll(/\s+/g, " ")
    .trim();
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
const matchCache = new Map<string, RegExp>();
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

  const cacheKey = searchWords.join("|");

  if (!matchCache.has(cacheKey)) {
    const pattern = searchWords
      .map((word) => `(?=.*${escapeRegExp(normalizeText(word))})`)
      .join("");

    matchCache.set(cacheKey, new RegExp(`^${pattern}.*$`));
  }

  const regex = matchCache.get(cacheKey)!;

  return regex.test(normalizeText(text));
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

  for (const element_ of clone.querySelectorAll(".figure-container")) element_.remove();

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

      if (elementNode.classList.contains("figure-container")) {
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
    const fullText = (element as HTMLElement).innerText || "";

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
): string | null => {
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

  return null;
};
const getFirstCleanParagraphOrElement = (root: Element): string => {
  const firstParagraph = root.querySelector("details > p, details > div > p");

  if (firstParagraph) {
    const cleanedParagraph = firstParagraph.cloneNode(true) as Element;

    for (const element of cleanedParagraph.querySelectorAll(".figure-container"))
      element.remove();

    return cleanedParagraph.outerHTML;
  }

  const firstElement = root.firstElementChild;

  if (firstElement) {
    const cleanedElement = firstElement.cloneNode(true) as Element;

    for (const element of cleanedElement.querySelectorAll(".figure-container"))
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
  const titleMatch = temporaryDiv.querySelector("summary h3")?.textContent;

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
  for (const element of root.querySelectorAll(".figure-container")) element.remove();
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
const buildTableGroupsHtml = (detail: Element, searchWords: string[]): string => {
  const tableGroups: Record<string, string[]> = {};
  const tables = [...detail.querySelectorAll<HTMLTableElement>("table")];
  const keyCombo = isKeyCombinationWords(searchWords);

  for (const table of tables) {
    const headers = [...table.querySelectorAll("th")]
      .map((th) => decodeHtmlEntities(th.textContent?.trim() ?? ""))
      .filter((header) => !header.toLowerCase().includes("описание"));
    const headerKey = headers.join("|");
    const allRows = [...table.querySelectorAll("tr")].filter((row) => {
      let parent = row.parentElement;

      while (parent) {
        if (parent.tagName.toLowerCase() === "thead") {
          return false;
        }

        parent = parent.parentElement;
      }

      return true;
    });
    const excludedColumns = new Set(
      [...table.querySelectorAll("th")]
        .map((th, index) =>
          th.textContent?.toLowerCase().includes("описание") ? index : -1
        )
        .filter((index) => index !== -1)
    );
    const processedRows: string[] = [];

    for (const row of allRows) {
      const clonedRow = row.cloneNode(true) as HTMLTableRowElement;

      for (const [index, cell] of [...clonedRow.cells].entries()) {
        if (excludedColumns.has(index)) {
          cell.remove();
        }
      }

      if (clonedRow.cells.length === 0) {
        continue;
      }

      let hasMatch: boolean;

      if (keyCombo) {
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

        hasMatch = normalizedRowText.includes(searchPattern);
      } else {
        const rowHTML = clonedRow.innerHTML.toLowerCase();

        hasMatch = searchWords.every((word) => rowHTML.includes(word.toLowerCase()));
      }

      if (hasMatch) {
        processedRows.push(clonedRow.outerHTML);
      }
    }

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
const transformSearchResult = (
  result: BaseSearchResult,
  searchWords: string[]
): SearchResult & {
  score: number;
} => {
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

export const useSearchLogic = (query: string, isPageLoaded: boolean) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [resultsQuery, setResultsQuery] = useState("");
  const cachedDetails = useMemo(() => {
    if (!isPageLoaded) {
      return null;
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

        const titleElement = summary.querySelector("h3");
        const title = titleElement ? (titleElement.textContent ?? "") : "";
        const tag = detail.dataset.tags ?? "";
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
          data.push({content: text.trim(), id, tag: tag.trim(), title});
        }
      }

      return data;
    },
    [cachedDetails]
  );
  const handleSearch = useCallback(
    debounce((text: string) => {
      if (!isPageLoaded || !text.trim()) {
        setResults([]);
        setResultsQuery("");

        return;
      }

      const searchWords = text
        .split(/\s+/)
        .filter((word) => word.length > 0)
        .map(normalizeText);
      const detailsData = extractDetailsData(searchWords);
      const filtered = detailsData.filter(({content, tag, title}) => {
        const normalizedTitle = normalizeText(title);
        const normalizedContent = normalizeText(stripHtml(content || ""));
        const normalizedTag = normalizeText(tag || "");
        const isKeyCombination =
          text.toLowerCase().includes("ctrl") ||
          text.toLowerCase().includes("alt") ||
          text.toLowerCase().includes("shift") ||
          text.toLowerCase().includes("win") ||
          text.toLowerCase().includes("cmd");

        if (isKeyCombination) {
          const searchPattern = normalizeKeyCombination(text);
          const normalizedTitleComb = normalizeKeyCombination(title);
          const normalizedContentComb = normalizeKeyCombination(stripHtml(content || ""));
          const normalizedTagComb = normalizeKeyCombination(tag || "");

          return (
            normalizedTitleComb.includes(searchPattern) ||
            normalizedContentComb.includes(searchPattern) ||
            normalizedTagComb.includes(searchPattern)
          );
        }

        return searchWords.every(
          (word) =>
            normalizedTitle.includes(word) ||
            normalizedContent.includes(word) ||
            normalizedTag.includes(word)
        );
      });
      const results = filtered
        .map((result) => transformSearchResult(result, searchWords))
        .sort((a, b) => {
          if (b.score !== a.score) {
            return b.score - a.score;
          }

          return 0;
        });

      setResults(results);
      setResultsQuery(text);
    }, 300),
    [isPageLoaded, extractDetailsData]
  );

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 100);

    handleSearch(query);

    return () => {
      clearTimeout(handler);
      handleSearch.cancel();
    };
  }, [query, handleSearch]);
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
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    if (isPageLoaded) {
      setIsOpen(true);
    }
  };
  const closeModal = () => setIsOpen(false);

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

    globalThis.addEventListener("keydown", handleKeyDown);

    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPageLoaded]);
  const value = useMemo(
    () => ({closeModal, isOpen, isPageLoaded, openModal}),
    [isOpen, isPageLoaded]
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

  return (
    <button
      className={`search-button ${className}`.trim()}
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
    >
      {wide ? (
        <>
          <Search />
          <span>Поиск по странице</span>
          <mark>Ctrl + F</mark>
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
  const touchStartTime = useRef(0);
  const isPotentialLongPress = useRef(false);
  const touchStartCoords = useRef({x: 0, y: 0});
  const isTouchEventInProgress = useRef(false);
  const copyToClipboard = async (id: string, title: string) => {
    const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${id}`;
    const success = await copyText(anchorUrl);

    if (success) {
      message.success(`Ссылка на категорию «${title}» скопирована`);
    } else {
      message.error("Не удалось скопировать ссылку");
    }
  };
  const handleContextMenu = (e: React.MouseEvent, id: string, title: string) => {
    e.preventDefault();

    if (isTouchEventInProgress.current) {
      return;
    }

    copyToClipboard(id, title);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchEventInProgress.current = true;
    isPotentialLongPress.current = true;
    touchStartTime.current = Date.now();
    const touch = e.touches[0];

    touchStartCoords.current = {x: touch.clientX, y: touch.clientY};
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPotentialLongPress.current) return;

    const touch = e.touches[0];
    const moveThreshold = 10;
    const deltaX = Math.abs(touch.clientX - touchStartCoords.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartCoords.current.y);

    if (deltaX > moveThreshold || deltaY > moveThreshold) {
      isPotentialLongPress.current = false;
    }
  };
  const handleTouchEnd = (e: React.TouchEvent, id: string, title: string) => {
    if (isPotentialLongPress.current) {
      const pressDuration = Date.now() - touchStartTime.current;

      if (pressDuration > 500) {
        e.preventDefault();
        copyToClipboard(id, title);
      }
    }

    setTimeout(() => {
      isTouchEventInProgress.current = false;
    }, 300);
    isPotentialLongPress.current = false;
  };

  return (
    <div className="search-category">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onLinkClick(section.id)}
          onContextMenu={(e) => handleContextMenu(e, section.id, section.title)}
          onTouchEnd={(e) => handleTouchEnd(e, section.id, section.title)}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        >
          {section.icon}
          {section.title}
        </button>
      ))}
    </div>
  );
};
const SearchResults: React.FC<{
  query: string;
  onLinkClick: (id: string) => void;
  resultRefs: React.RefObject<(HTMLButtonElement | null)[]>;
  results: Array<{content: string; id: string; tag?: string; title: string}>;
  selectedResultIndex: number;
}> = ({onLinkClick, query, resultRefs, results, selectedResultIndex}) => {
  const getMatchingTags = (tag: string | undefined, query: string) => {
    if (!tag || tag.trim() === "") {
      return [];
    }

    const allTags = tag.split(", ");
    const lowerCaseQuery = query.toLowerCase().trim();

    return allTags.filter((t) => t.toLowerCase().includes(lowerCaseQuery));
  };
  const isMobile = typeof globalThis !== "undefined" && globalThis.innerWidth <= 768;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {results.map(({content, id, tag, title}, index) => {
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
              className={`search-link ${isSelected ? "search-selected" : ""}`}
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
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(id);
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`search-header ${isSelected ? "search-selected" : ""}`}>
                <p className="search-title">{title.replace(/^[+-]+/, "").trim()}</p>
                {tagsToDisplay.length > 0 && (
                  <span className="faq-tags">
                    {tagsToDisplay.map((t) => (
                      <mark key={t}>{t}</mark>
                    ))}
                  </span>
                )}
              </div>
              <div
                className="search-content faq-content no-copy"
                dangerouslySetInnerHTML={{__html: content}}
              />
            </button>
          </div>
        );
      })}
    </>
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

  return (
    <div>
      <div className="search-external-links">
        <button
          onClick={() => {
            globalThis.open(
              `https://yandex.com/search/?text=${encodeURIComponent(getSearchQuery())}`,
              "_blank"
            );
          }}
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
        >
          Спросить у Perplexity<sup>1</sup>
        </button>
      </div>
      <p className="search-no-results-tip">
        <sup>1</sup> Perplexity и другие чат-боты с использованием нейросетевых моделей
        могут выдавать недостоверную информацию
      </p>
    </div>
  );
};
const NoResults: React.FC<{query: string}> = ({query}) => (
  <div>
    <div className="search-no-results">
      <p className="search-no-results-title">
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
      <p className="search-no-results-message">
        Попробуйте перефразировать свой запрос или выполните поиск в Яндексе или
        Perplexity<sup>1</sup>
      </p>
    </div>
    <ExternalSearch query={query} />
  </div>
);

export const SearchInPage: React.FC<{sections: SearchSection[]}> = ({sections}) => {
  const {closeModal, isOpen, isPageLoaded} = useSearch();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isResultsProcessed, setIsResultsProcessed] = useState(false);
  const resultReferences = useRef<(HTMLButtonElement | null)[]>([]);
  const inputReference = useRef<HTMLInputElement>(null);
  const resultsContainerReference = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(false);
  const {
    debouncedQuery,
    results,
    resultsQuery,
    selectedResultIndex,
    setSelectedResultIndex,
  } = useSearchLogic(query, isPageLoaded);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        inputReference.current?.focus();
        inputReference.current?.select();
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);
  useEffect(() => {
    const element = resultsContainerReference.current;

    if (!element) {
      return;
    }

    const checkFade = () => {
      setShowFade(
        element.scrollHeight > element.clientHeight &&
          element.scrollTop + element.clientHeight < element.scrollHeight - 1
      );
    };

    checkFade();
    element.addEventListener("scroll", checkFade);
    globalThis.addEventListener("resize", checkFade);

    return () => {
      element.removeEventListener("scroll", checkFade);
      globalThis.removeEventListener("resize", checkFade);
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
      closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) {
        return;
      }

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          setSelectedResultIndex((previousIndex) =>
            previousIndex < results.length - 1 ? previousIndex + 1 : previousIndex
          );
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          setSelectedResultIndex((previousIndex) =>
            previousIndex > 0 ? previousIndex - 1 : previousIndex
          );
          break;
        }
        case "Enter": {
          e.preventDefault();

          if (selectedResultIndex >= 0 && selectedResultIndex < results.length) {
            handleLinkClick(results[selectedResultIndex].id);
          }

          break;
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);

      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, results, selectedResultIndex, handleLinkClick]);
  useEffect(() => {
    if (selectedResultIndex >= 0) {
      const isMobile = globalThis.innerWidth <= 768;

      if (isMobile) {
        return;
      }

      const resultContainer = document.querySelector(".search-results");
      const selectedResultElements = resultContainer?.querySelectorAll(".search-link");

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
        const button = event.target.closest(".search-link") as HTMLButtonElement | null;

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
    <RemoveScroll enabled={isOpen}>
      <Modal
        closeIcon={null}
        footer={null}
        open={isOpen}
        width={850}
        onCancel={closeModal}
      >
        <div className="search">
          <div className="modal-content">
            <div className="search-input-wrapper">
              <input
                ref={inputReference}
                className="search-input"
                placeholder="Введите что-нибудь для поиска..."
                style={{cursor: "text"}}
                type="search"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
              />
              <p className="search-counter">
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
                  className="search-input-clear"
                  style={{cursor: "pointer"}}
                  onClick={() => {
                    setQuery("");
                    setIsSearching(false);
                  }}
                >
                  <BackspaceOutlined fontSize="small" />
                </button>
              )}
              <button
                className="search-input-close"
                onClick={closeModal}
              >
                <CloseRounded />
              </button>
            </div>
            <div
              ref={resultsContainerReference}
              className={`search-results${showFade ? " show-fade" : ""}`}
            >
              {renderContent()}
              {showFade}
            </div>
          </div>
        </div>
      </Modal>
    </RemoveScroll>
  );
};
