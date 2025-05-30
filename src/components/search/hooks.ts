import {useCallback, useEffect, useMemo, useState} from "react";
import debounce from "lodash/debounce";
import {SearchResult} from "./types";
import {decodeHtmlEntities} from "./utils";

// константы для поиска комбинаций клавиш

const KEY_MODIFIERS = ["ctrl", "alt", "shift", "win", "cmd"] as const;

const KEY_MODIFIER_ALIASES: Record<string, string> = {
  control: "ctrl",
  windows: "win",
  command: "cmd",
};

// типы для работы с поиском

type SearchMatch = {
  result: string;
  matchCount: number;
};

// функция для удаления html-тегов из текста

const stripHtml = (html: string): string => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;

  return tmp.textContent || tmp.innerText || "";
};

const normalizeText = (text: string): string => {
  return (
    text
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/\s+/g, " ") // нормализация пробелов
      // сохраняем специальные символы для комбинаций клавиш

      .replace(/[.,!?;:()[\]{}"'`]/g, (match) => {
        // сохраняем символы, которые могут быть частью комбинаций клавиш

        if (
          match === "+" ||
          match === "-" ||
          match === "=" ||
          match === "(" ||
          match === ")"
        ) {
          return match;
        }

        return " ";
      })
      .trim()
  );
};

// функция для проверки, является ли текст комбинацией клавиш

const isKeyCombinationSearch = (text: string): boolean => {
  return KEY_MODIFIERS.some((modifier) => text.toLowerCase().includes(modifier));
};

// функция для нормализации комбинаций клавиш

const normalizeKeyCombination = (text: string): string => {
  let normalized = text.toLowerCase();

  // заменяем алиасы модификаторов

  Object.entries(KEY_MODIFIER_ALIASES).forEach(([alias, standard]) => {
    normalized = normalized.replace(new RegExp(alias, "g"), standard);
  });

  return normalized
    .replace(/\s*\+\s*/g, " ") // заменяем все плюсы и пробелы на один пробел
    .replace(/\s+/g, " ") // нормализуем пробелы
    .trim();
};

// функция для извлечения текста из mark.key элементов

const extractKeyCombinationText = (element: Element): string => {
  const keyElements = element.querySelectorAll("mark.key");
  if (keyElements.length > 0) {
    return Array.from(keyElements)
      .map((el) => el.textContent?.toLowerCase() || "")
      .join(" ");
  }

  return element.textContent?.toLowerCase() || "";
};

// функция для проверки совпадения в тексте

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

  const normalizedText = normalizeText(text);

  return searchWords.every((word) => normalizedText.includes(normalizeText(word)));
};

// функция для обработки текстового узла

const processTextNode = (
  node: Text,
  searchWords: string[],
  isKeyCombination: boolean
): string => {
  const text = node.textContent || "";

  return hasMatch(text, searchWords, isKeyCombination) ? text : "";
};

// функция для обработки элемента

const processElement = (
  element: Element,
  searchWords: string[],
  isKeyCombination: boolean
): SearchMatch => {
  // если это элемент списка или параграф, проверяем его целиком

  if (element.tagName === "LI" || element.tagName === "P") {
    const fullText = element.textContent || "";
    if (hasMatch(fullText, searchWords, isKeyCombination)) {
      // если это элемент списка с вложенными списками

      if (element.tagName === "LI" && element.querySelector("ul")) {
        const ul = element.querySelector("ul");
        if (ul) {
          // проверяем вложенные элементы

          const nestedItems = Array.from(ul.querySelectorAll("li"));

          const matchingNestedItems = nestedItems.filter((item) =>
            hasMatch(item.textContent || "", searchWords, isKeyCombination)
          );

          if (matchingNestedItems.length > 0) {
            // создаем новый ul только с совпадающими элементами

            const newUl = document.createElement("ul");
            matchingNestedItems.forEach((item) => {
              newUl.appendChild(item.cloneNode(true));
            });

            // создаем клон родительского элемента

            const clone = element.cloneNode(true) as Element;

            // заменяем старый ul на новый

            const oldUl = clone.querySelector("ul");
            if (oldUl) {
              oldUl.replaceWith(newUl);
            }

            return {
              result: clone.outerHTML,
              matchCount: matchingNestedItems.length + 1,
            };
          }
        }
      }

      return {
        result: element.outerHTML,
        matchCount: 1,
      };
    }

    return {result: "", matchCount: 0};
  }

  let result = "";
  let matchCount = 0;

  // обрабатываем все дочерние узлы

  Array.from(element.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const textResult = processTextNode(node as Text, searchWords, isKeyCombination);
      if (textResult) {
        result += textResult;
        matchCount += 1;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const elementResult = processElement(
        node as Element,
        searchWords,
        isKeyCombination
      );
      if (elementResult.result) {
        result += elementResult.result;
        matchCount += elementResult.matchCount;
      }
    }
  });

  return {result, matchCount};
};

// функция для обработки таблицы

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

const formatSearchResult = (text: string, searchWords: string[]): string => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = text;

  const isKeyCombination = isKeyCombinationSearch(searchWords.join(" "));

  // проверяем, есть ли совпадение в теге или заголовке

  const tagMatch = tempDiv.querySelector("[data-tags]")?.getAttribute("data-tags");

  const titleMatch = tempDiv.querySelector("summary h3")?.textContent;

  // если есть совпадение по тегу или заголовку, возвращаем первый параграф

  if (
    (tagMatch && hasMatch(tagMatch, searchWords, isKeyCombination)) ||
    (titleMatch && hasMatch(titleMatch, searchWords, isKeyCombination))
  ) {
    const firstParagraph = tempDiv.querySelector("details > p, details > div > p");
    if (firstParagraph) {
      return firstParagraph.outerHTML;
    }

    const firstElement = tempDiv.firstElementChild;
    if (firstElement) {
      return firstElement.outerHTML;
    }
  }

  // находим все элементы списка верхнего уровня

  const listItems = tempDiv.querySelectorAll("ul > li");
  let bestResult: SearchMatch = {result: "", matchCount: 0};

  // проверяем каждый элемент списка

  listItems.forEach((item) => {
    const itemResult = processElement(item, searchWords, isKeyCombination);
    if (itemResult.matchCount > bestResult.matchCount) {
      bestResult = itemResult;
    }
  });

  // если не нашли совпадений в списках, проверяем параграфы

  if (!bestResult.result) {
    const paragraphs = tempDiv.querySelectorAll("p");
    paragraphs.forEach((p) => {
      const pResult = processElement(p, searchWords, isKeyCombination);
      if (pResult.matchCount > bestResult.matchCount) {
        bestResult = pResult;
      }
    });
  }

  // если не нашли совпадений нигде, проверяем наличие таблиц

  if (!bestResult.result) {
    const tables = tempDiv.querySelectorAll("table");
    if (tables.length > 0) {
      // проверяем, является ли это таблицей с комбинациями клавиш

      const isKeyCombinationTable = Array.from(tables).some((table) => {
        const headers = Array.from(table.querySelectorAll("th"));

        return headers.some(
          (th) =>
            th.textContent?.toLowerCase().includes("комбинация") ||
            th.textContent?.toLowerCase().includes("действие")
        );
      });

      if (isKeyCombinationTable) {
        for (const table of Array.from(tables)) {
          const tableResult = processTable(table, searchWords, isKeyCombination);
          if (tableResult) {
            return tableResult;
          }
        }
      }

      // если не нашли совпадений в таблицах с комбинациями клавиш,
      // возвращаем первую таблицу

      return tables[0].outerHTML;
    }

    // если таблиц нет, возвращаем первый параграф

    const firstParagraph = tempDiv.querySelector("details > p, details > div > p");
    if (firstParagraph) {
      return firstParagraph.outerHTML;
    }

    // если не нашли параграф, возвращаем первый элемент

    const firstElement = tempDiv.firstElementChild;
    if (firstElement) {
      return firstElement.outerHTML;
    }

    return "";
  }

  return bestResult.result;
};

export const useSearchLogic = (query: string, isPageLoaded: boolean) => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

  // кэшируем dom-элементы для оптимизации

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

        // сохраняем оригинальный html для отображения

        const content = Array.from(detail.querySelectorAll<HTMLParagraphElement>("p"))
          .map((el) => el.outerHTML)
          .filter(Boolean)
          .join("\n");

        const tableGroups: Record<string, string[]> = {};
        Array.from(detail.querySelectorAll<HTMLTableElement>("table")).forEach(
          (table) => {
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

            const processedRows = allRows
              .map((row) => {
                const clonedRow = row.cloneNode(true) as HTMLTableRowElement;
                Array.from(clonedRow.cells).forEach((cell, index) => {
                  if (excludedColumns.includes(index)) {
                    cell.remove();
                  }
                });
                if (clonedRow.cells.length === 0) {
                  return null;
                }

                const rowHTML = clonedRow.innerHTML.toLowerCase();

                // проверяем, является ли поисковый запрос комбинацией клавиш

                const isKeyCombination = searchWords.some(
                  (word) =>
                    word.includes("ctrl") ||
                    word.includes("alt") ||
                    word.includes("shift") ||
                    word.includes("win") ||
                    word.includes("cmd")
                );

                let hasMatch;
                if (isKeyCombination) {
                  // для комбинаций клавиш используем новую функцию нормализации

                  const searchPattern = normalizeKeyCombination(searchWords.join(" "));

                  const rowText = Array.from(clonedRow.cells)
                    .map((cell) => {
                      // проверяем наличие mark.key элементов

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
                  // для обычного поиска проверяем каждое слово

                  hasMatch = searchWords.every((word) =>
                    rowHTML.includes(word.toLowerCase())
                  );
                }

                return hasMatch ? clonedRow.outerHTML : null;
              })
              .filter((row): row is string => row !== null);

            if (processedRows.length > 0) {
              tableGroups[headerKey] ??= [];
              tableGroups[headerKey].push(...processedRows);
            }
          }
        );

        const tableContent = Object.entries(tableGroups)
          .map(([headerKey, rows]) => {
            const headers = headerKey.split("|").filter(Boolean);

            const headerRow =
              headers.length > 0
                ? `<thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>`
                : "";

            return `<table>${headerRow}${rows.join("")}</table>`;
          })
          .join("");

        const listContent = Array.from(detail.querySelectorAll<HTMLUListElement>("ul"))
          .map((ul) => {
            // используем stripHtml только для поиска

            const ulText = stripHtml(ul.outerHTML);

            const normalizedUlText = normalizeText(ulText);

            const hasMatch =
              searchWords.length === 0 ||
              searchWords.some((word) => normalizedUlText.includes(normalizeText(word)));

            // возвращаем оригинальный html для отображения

            return hasMatch ? ul.outerHTML : "";
          })
          .filter(Boolean)
          .join("\n");

        const text = [content, tableContent, listContent].join("\n");
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

        // проверяем, является ли поисковый запрос комбинацией клавиш

        const isKeyCombination =
          text.toLowerCase().includes("ctrl") ||
          text.toLowerCase().includes("alt") ||
          text.toLowerCase().includes("shift") ||
          text.toLowerCase().includes("win") ||
          text.toLowerCase().includes("cmd");

        if (isKeyCombination) {
          // для комбинаций клавиш используем новую функцию нормализации

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

        // для обычного поиска используем стандартную логику

        return searchWords.every(
          (word) =>
            normalizedTitle.includes(word) ||
            normalizedContent.includes(word) ||
            normalizedTag.includes(word)
        );
      });

      const results = filtered
        .map((result) => {
          const isSingleParagraphMatch = result.content.split("\n").some((line) => {
            const normalizedLine = normalizeText(stripHtml(line));

            return searchWords.every((word) => normalizedLine.includes(word));
          });

          return {
            ...result,
            content: formatSearchResult(result.content, searchWords),
            isSingleParagraphMatch,
            hasTitleMatch: searchWords.some((word) =>
              normalizeText(result.title).includes(word)
            ),
            hasTagMatch: searchWords.some((word) =>
              normalizeText(result.tag || "").includes(word)
            ),
          };
        })
        .sort((a, b) => {
          if (a.hasTagMatch && !b.hasTagMatch) {
            return -1;
          }

          if (!a.hasTagMatch && b.hasTagMatch) {
            return 1;
          }

          if (a.hasTitleMatch && !b.hasTitleMatch) {
            return -1;
          }

          if (!a.hasTitleMatch && b.hasTitleMatch) {
            return 1;
          }

          if (a.isSingleParagraphMatch && !b.isSingleParagraphMatch) {
            return -1;
          }

          if (!a.isSingleParagraphMatch && b.isSingleParagraphMatch) {
            return 1;
          }

          return 0;
        });

      setResults(results);
    }, 300),
    [isPageLoaded, extractDetailsData]
  );

  useEffect(() => {
    handleSearch(query);

    return () => handleSearch.cancel();
  }, [query, handleSearch]);

  useEffect(() => {
    setSelectedResultIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  return {
    results,
    selectedResultIndex,
    setSelectedResultIndex,
  };
};
