import debounce from "lodash/debounce";

import {decodeHtmlEntities, escapeRegExp} from "./utils";

import {useCallback, useEffect, useMemo, useState} from "react";

import {SearchResult} from "./types";

const KEY_MODIFIERS = ["ctrl", "alt", "shift", "win", "cmd"] as const;

const KEY_MODIFIER_ALIASES: Record<string, string> = {
  control: "ctrl",
  windows: "win",
  command: "cmd",
};
type SearchMatch = {
  result: string;
  matchCount: number;
};

const stripHtml = (html: string): string => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;

  return tmp.textContent || tmp.innerText || "";
};

const normalizationRegex = /[^a-zа-яё0-9+\-=()]/gi;

const replaceCharsRegex = /ё/gi;

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(replaceCharsRegex, "е")
    .replace(normalizationRegex, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const isKeyCombinationSearch = (text: string): boolean => {
  return KEY_MODIFIERS.some((modifier) => text.toLowerCase().includes(modifier));
};

const normalizeKeyCombination = (text: string): string => {
  let normalized = text.toLowerCase();
  Object.entries(KEY_MODIFIER_ALIASES).forEach(([alias, standard]) => {
    normalized = normalized.replace(new RegExp(alias, "g"), standard);
  });

  return normalized
    .replace(/\s*\+\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const extractKeyCombinationText = (element: Element): string => {
  const keyElements = element.querySelectorAll("mark.key");

  if (keyElements.length > 0) {
    return Array.from(keyElements)
      .map((el) => el.textContent?.toLowerCase() || "")
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
  clone.querySelectorAll(".figure-container").forEach((el) => el.remove());

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

    return {result: clone.outerHTML, matchCount: 1};
  }

  const nestedItems = Array.from(ul.querySelectorAll("li"));

  const matchingNestedItems = nestedItems.filter((item) =>
    hasMatch(item.textContent || "", searchWords, isKeyCombination)
  );

  const clone = cloneWithoutFigures(element);

  if (matchingNestedItems.length === 0) {
    return {result: clone.outerHTML, matchCount: 1};
  }

  const newUl = document.createElement("ul");
  matchingNestedItems.forEach((item) => {
    const nestedItemClone = cloneWithoutFigures(item);
    newUl.appendChild(nestedItemClone);
  });

  const oldUl = clone.querySelector("ul");

  if (oldUl) {
    oldUl.replaceWith(newUl);
  }

  return {result: clone.outerHTML, matchCount: matchingNestedItems.length + 1};
};

const processContainerChildren = (
  element: Element,
  searchWords: string[],
  isKeyCombination: boolean
): SearchMatch => {
  let result = "";
  let matchCount = 0;
  Array.from(element.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const textResult = processTextNode(node as Text, searchWords, isKeyCombination);

      if (textResult) {
        result += textResult;
        matchCount += 1;
      }

      return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const elNode = node as Element;

      if (elNode.classList.contains("figure-container")) {
        return;
      }

      const elementResult = processElement(elNode, searchWords, isKeyCombination);

      if (elementResult.result) {
        result += elementResult.result;
        matchCount += elementResult.matchCount;
      }
    }
  });

  return {result, matchCount};
};

const processElement = (
  element: Element,
  searchWords: string[],
  isKeyCombination: boolean
): SearchMatch => {
  if (isListOrParagraph(element)) {
    const fullText = (element as HTMLElement).innerText || "";

    if (!hasMatch(fullText, searchWords, isKeyCombination)) {
      return {result: "", matchCount: 0};
    }

    if (element.tagName === "LI") {
      return handleListWithNestedMatches(element, searchWords, isKeyCombination);
    }

    const clone = cloneWithoutFigures(element);

    return {result: clone.outerHTML, matchCount: 1};
  }

  return processContainerChildren(element, searchWords, isKeyCombination);
};

const processTable = (
  table: HTMLTableElement,
  searchWords: string[],
  isKeyCombination: boolean
): string | null => {
  const rows = Array.from(table.querySelectorAll("tr"));

  const matchingRows = rows.filter((row) => {
    const cells = Array.from(row.querySelectorAll("td"));

    return cells.some((cell) => {
      const cellText = extractKeyCombinationText(cell);

      return hasMatch(cellText, searchWords, isKeyCombination);
    });
  });

  if (matchingRows.length > 0) {
    const newTable = document.createElement("table");

    const thead = table.querySelector("thead");

    if (thead) {
      newTable.appendChild(thead.cloneNode(true));
    }

    const tbody = document.createElement("tbody");
    matchingRows.forEach((row) => tbody.appendChild(row.cloneNode(true)));
    newTable.appendChild(tbody);

    return newTable.outerHTML;
  }

  return null;
};

const getFirstCleanParagraphOrElement = (root: Element): string => {
  const firstParagraph = root.querySelector("details > p, details > div > p");

  if (firstParagraph) {
    const cleanedParagraph = firstParagraph.cloneNode(true) as Element;
    cleanedParagraph.querySelectorAll(".figure-container").forEach((el) => el.remove());

    return cleanedParagraph.outerHTML;
  }

  const firstElement = root.firstElementChild;

  if (firstElement) {
    const cleanedElement = firstElement.cloneNode(true) as Element;
    cleanedElement.querySelectorAll(".figure-container").forEach((el) => el.remove());

    return cleanedElement.outerHTML;
  }

  return "";
};

const isKeyCombinationTablePresent = (tables: NodeListOf<HTMLTableElement>): boolean => {
  return Array.from(tables).some((table) => {
    const headers = Array.from(table.querySelectorAll("th"));

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
  let bestResult: SearchMatch = {result: "", matchCount: 0};

  const listItems = root.querySelectorAll("ul > li");
  listItems.forEach((item) => {
    const itemResult = processElement(item, searchWords, isKeyCombination);

    if (itemResult.matchCount > bestResult.matchCount) {
      bestResult = itemResult;
    }
  });

  if (!bestResult.result) {
    const paragraphs = root.querySelectorAll("p");
    paragraphs.forEach((p) => {
      const pResult = processElement(p, searchWords, isKeyCombination);

      if (pResult.matchCount > bestResult.matchCount) {
        bestResult = pResult;
      }
    });
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
      for (const table of Array.from(tables)) {
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
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = text;
  tempDiv
    .querySelectorAll(".ant-divider, .ant-divider-inner-text")
    .forEach((el) => el.remove());

  const isKeyCombination = isKeyCombinationSearch(searchWords.join(" "));

  const tagMatch = tempDiv.querySelector("[data-tags]")?.getAttribute("data-tags");

  const titleMatch = tempDiv.querySelector("summary h3")?.textContent;

  if (
    (tagMatch && hasMatch(tagMatch, searchWords, isKeyCombination)) ||
    (titleMatch && hasMatch(titleMatch, searchWords, isKeyCombination))
  ) {
    return getFirstCleanParagraphOrElement(tempDiv);
  }

  const bestResult = pickBestListOrParagraphMatch(tempDiv, searchWords, isKeyCombination);

  if (!bestResult.result) {
    return pickTableOrFallback(tempDiv, searchWords, isKeyCombination);
  }

  return bestResult.result;
};

const removeFigureContainers = (root: Element): void => {
  root.querySelectorAll(".figure-container").forEach((el) => el.remove());
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

  return {titleMatches, tagMatches, contentMatches};
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
  return Array.from(detail.querySelectorAll(".ant-divider-inner-text"))
    .map((el) => el.textContent?.trim() || "")
    .filter(Boolean);
};

const buildParagraphsHtml = (detail: Element): string => {
  const paragraphs = Array.from(detail.querySelectorAll<HTMLParagraphElement>("p"));

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

  const tables = Array.from(detail.querySelectorAll<HTMLTableElement>("table"));

  const keyCombo = isKeyCombinationWords(searchWords);

  for (const table of tables) {
    const headers = Array.from(table.querySelectorAll("th"))
      .map((th) => decodeHtmlEntities(th.textContent?.trim() ?? ""))
      .filter((header) => !header.toLowerCase().includes("описание"));

    const headerKey = headers.join("|");

    const allRows = Array.from(table.querySelectorAll("tr")).filter((row) => {
      let parent = row.parentElement;

      while (parent) {
        if (parent.tagName.toLowerCase() === "thead") {
          return false;
        }

        parent = parent.parentElement;
      }

      return true;
    });

    const excludedColumns = Array.from(table.querySelectorAll("th"))
      .map((th, index) =>
        th.textContent?.toLowerCase().includes("описание") ? index : -1
      )
      .filter((index) => index !== -1);

    const processedRows: string[] = [];

    for (const row of allRows) {
      const clonedRow = row.cloneNode(true) as HTMLTableRowElement;
      Array.from(clonedRow.cells).forEach((cell, index) => {
        if (excludedColumns.includes(index)) {
          cell.remove();
        }
      });

      if (clonedRow.cells.length === 0) {
        continue;
      }

      let hasMatch: boolean;

      if (keyCombo) {
        const searchPattern = normalizeKeyCombination(searchWords.join(" "));

        const rowText = Array.from(clonedRow.cells)
          .map((cell) => {
            const keyElements = cell.querySelectorAll("mark.key");

            if (keyElements.length > 0) {
              return Array.from(keyElements)
                .map((el) => el.textContent?.toLowerCase() || "")
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
  const uls = Array.from(detail.querySelectorAll<HTMLUListElement>("ul"));

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

  const {titleMatches, tagMatches, contentMatches} = computeTitleTagContentMatches(
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
    isSingleParagraphMatch,
    hasTitleMatch: titleMatches.length > 0,
    hasTagMatch: tagMatches.length > 0,
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
      cachedDetails.forEach((detail) => {
        const summary = detail.querySelector("summary");

        if (!summary) {
          return;
        }

        const id = summary.getAttribute("id");

        if (!id) {
          return;
        }

        const titleElement = summary.querySelector("h3");

        const title = titleElement ? (titleElement.textContent ?? "") : "";

        const tag = detail.getAttribute("data-tags") ?? "";

        const dividerTexts = collectDividerTexts(detail);

        const content = buildParagraphsHtml(detail);

        const tableContent = buildTableGroupsHtml(detail, searchWords);

        const listContent = buildListContentHtml(detail, searchWords);

        const text = [content, tableContent, listContent, ...dividerTexts].join("\n");

        if (title || text) {
          data.push({title, content: text.trim(), id, tag: tag.trim()});
        }
      });

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

      const filtered = detailsData.filter(({title, content, tag}) => {
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
    results,
    selectedResultIndex,
    setSelectedResultIndex,
    debouncedQuery,
    resultsQuery,
  };
};
