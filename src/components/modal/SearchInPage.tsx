import {BackspaceOutlined, CloseRounded, Search} from "@mui/icons-material";
import {Modal, message} from "antd";
import {motion} from "framer-motion";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
interface SearchContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isPageLoaded: boolean;
}

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
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPageLoaded]);

  const value = useMemo(
    () => ({isOpen, openModal, closeModal, isPageLoaded}),
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

export const SearchButton: React.FC = () => {
  const {openModal, isPageLoaded} = useSearch();

  return (
    <button
      style={{
        opacity: isPageLoaded ? 1 : 0.5,
        filter: isPageLoaded ? "saturate(100%)" : "saturate(0%)",
      }}
      onClick={() => {
        if (!isPageLoaded) {
          message.warning(
            "Прежде чем воспользоваться поиском по странице - дождитесь полной загрузки страницы"
          );
        } else {
          openModal();
        }
      }}
    >
      <Search />
    </button>
  );
};

export const WideSearchButton: React.FC = () => {
  const {openModal, isPageLoaded} = useSearch();

  return (
    <button
      style={{
        opacity: isPageLoaded ? 1 : 0.5,
        filter: isPageLoaded ? "saturate(100%)" : "saturate(0%)",
      }}
      onClick={() => {
        if (!isPageLoaded) {
          message.warning(
            "Прежде чем воспользоваться поиском по странице - дождитесь полной загрузки страницы"
          );
        } else {
          openModal();
        }
      }}
    >
      <div className="wide-search-button">
        {" "}
        <Search />
        Поиск по странице <mark>Ctrl + F</mark>
      </div>
    </button>
  );
};

const getResultWord = (count: number) => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "результат";
  } else if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  ) {
    return "результата";
  } else {
    return "результатов";
  }
};

const getFoundWord = (count: number) => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "Найден";
  } else if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  ) {
    return "Найдены";
  } else {
    return "Найдено";
  }
};

export const SearchInPage: React.FC<{sections: Array<{id: string; title: string}>}> = ({
  sections,
}) => {
  const {isOpen, closeModal, isPageLoaded} = useSearch();

  const [query, setQuery] = useState("");

  const [results, setResults] = useState<
    {
      title: string;
      content: string;
      id: string;
      tag?: string;
      isSingleParagraphMatch: boolean;
      hasTitleMatch: boolean;
      hasTagMatch: boolean;
    }[]
  >([]);

  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);

  const resultRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);

      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);
  useEffect(() => {
    setSelectedResultIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  const decodeHtmlEntities = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;

    return textArea.value;
  };

  const extractDetailsData = (searchWords: string[]) => {
    const details = document.querySelectorAll("details");

    const data: {title: string; content: string; id: string; tag?: string}[] = [];
    details.forEach((detail) => {
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

      const content = Array.from(detail.querySelectorAll<HTMLParagraphElement>("p"))
        .map((el) => el.outerHTML)
        .filter(Boolean)
        .join("\n");

      const tableGroups: Record<string, string[]> = {};
      Array.from(detail.querySelectorAll<HTMLTableElement>("table")).forEach((table) => {
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

            const hasMatch = searchWords.every((word) =>
              rowHTML.includes(word.toLowerCase())
            );

            return hasMatch ? clonedRow.outerHTML : null;
          })
          .filter((row): row is string => row !== null);
        if (processedRows.length > 0) {
          tableGroups[headerKey] ??= [];
          tableGroups[headerKey].push(...processedRows);
        }
      });

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
          const ulHTML = ul.outerHTML.toLowerCase();

          const hasMatch =
            searchWords.length === 0 ||
            searchWords.some((word) => ulHTML.includes(word.toLowerCase()));

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
  };

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!isPageLoaded || !text.trim()) {
      setResults([]);

      return;
    }

    const searchWords = text
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const detailsData = extractDetailsData(searchWords);

    const filtered = detailsData.filter(({title, content, tag}) => {
      const titleLower = title.toLowerCase();

      const contentLower = content?.toLowerCase() || "";

      const tagLower = tag?.toLowerCase() ?? "";

      return searchWords.every(
        (word) =>
          titleLower.includes(word) ||
          contentLower.includes(word) ||
          tagLower.includes(word)
      );
    });

    const results = filtered
      .map((result) => {
        const isSingleParagraphMatch = result.content.split("\n").some((line) => {
          const lineLower = line.toLowerCase();

          return searchWords.every((word) => lineLower.includes(word));
        });

        return {
          ...result,
          content: extractMatchingLine(result.content, text),
          isSingleParagraphMatch,
          hasTitleMatch: searchWords.some((word) =>
            result.title.toLowerCase().includes(word)
          ),
          hasTagMatch: searchWords.some((word) =>
            result.tag?.toLowerCase().includes(word)
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
  };

  const extractMatchingLine = (content: string, query: string) => {
    if (!content || !query.trim()) {
      return content;
    }

    const searchWords = query
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    const findFirstListMatch = (ulElement: HTMLUListElement) => {
      const firstMatch = Array.from(ulElement.querySelectorAll("li")).find((li) => {
        const liText = li.textContent?.toLowerCase() || "";

        return searchWords.every((word) => liText.includes(word));
      });
      if (firstMatch) {
        const newUl = document.createElement("ul");
        newUl.appendChild(firstMatch.cloneNode(true));

        return newUl.outerHTML;
      }

      return null;
    };

    const ulElements = Array.from(tempDiv.querySelectorAll("ul"));
    for (const ul of ulElements) {
      const matchedList = findFirstListMatch(ul);
      if (matchedList) {
        return matchedList;
      }
    }

    const allElements = Array.from(tempDiv.querySelectorAll("*"));
    for (const element of allElements) {
      const elementHTML = element.innerHTML.toLowerCase();
      if (searchWords.every((word) => elementHTML.includes(word))) {
        return element.outerHTML;
      }
    }

    const firstElement = tempDiv.firstElementChild;

    return firstElement?.outerHTML || content;
  };

  const handleLinkClick = (id: string) => {
    const summaryElement = document.getElementById(id);
    if (!summaryElement) {
      return;
    }

    const detailsElement = summaryElement.closest("details");
    if (detailsElement) {
      if (!detailsElement.hasAttribute("open")) {
        detailsElement.setAttribute("open", "true");
      }
    }

    const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

    const padding = 14;

    const y =
      summaryElement.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      padding;
    window.history.pushState({}, "", `#${id}`);
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    closeModal();
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) {
        return;
      }
      inputRef.current?.focus();
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedResultIndex((prevIndex) =>
            prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedResultIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
          break;
        case "Enter":
          e.preventDefault();
          if (selectedResultIndex >= 0 && selectedResultIndex < results.length) {
            const selectedResult = results[selectedResultIndex];
            handleLinkClick(selectedResult.id);
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, results, selectedResultIndex, handleLinkClick]);
  useEffect(() => {
    if (selectedResultIndex >= 0) {
      const resultContainer = document.querySelector(".search-results");

      const selectedResultElements = resultContainer?.querySelectorAll(".search-link");
      if (selectedResultElements && selectedResultElements[selectedResultIndex]) {
        (selectedResultElements[selectedResultIndex] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [selectedResultIndex]);
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen, results, selectedResultIndex]);

  return (
    <Modal
      closeIcon={null}
      footer={null}
      forceRender={true}
      getContainer={false}
      open={isOpen}
      width={850}
      onCancel={closeModal}
    >
      <div>
        <div className="search-input-wrapper">
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Введите что-нибудь для поиска..."
            style={{cursor: "text"}}
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {query.trim() !== "" && (
            <button
              className="search-input-clear"
              style={{cursor: "pointer"}}
              onClick={() => {
                setQuery("");
                setResults([]);
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
        <div className="modal-content">
          {query.trim() === ""
            ? null
            : query.trim() !== "" &&
              results.length > 0 && (
                <p className="search-modal-title">
                  {getFoundWord(results.length)}{" "}
                  <span
                    style={{
                      color: "var(--summary-text)",
                      fontWeight: 800,
                      fontSize: "1.05em",
                    }}
                  >
                    {results.length}
                  </span>{" "}
                  {getResultWord(results.length)}
                </p>
              )}
          <div className="search-results">
            {query.trim() === "" && (
              <div>
                <div className="search-category">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleLinkClick(section.id)}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
                <p className="search-category-tip">
                  Для открытия браузерного окна поиска по странице - нажмите на{" "}
                  <mark className="key">F3</mark>
                </p>
              </div>
            )}
            {results.length > 0 &&
              results.map(({title, content, id, tag}, index) => (
                <div key={id}>
                  <motion.button
                    ref={(el) => {
                      resultRefs.current[index] = el;
                    }}
                    animate={{
                      scale: index === selectedResultIndex ? 1 : 0.98,
                    }}
                    className={`search-link ${index === selectedResultIndex ? "search-selected" : ""}`}
                    initial={{scale: 1}}
                    tabIndex={0}
                    transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(id);
                    }}
                  >
                    <div
                      className={`search-header ${index === selectedResultIndex ? "search-selected" : ""}`}
                    >
                      <p className="search-title">{title.replace(/^[+-]+/, "").trim()}</p>
                      {tag && tag.trim() !== "" && (
                        <span className="faq-tags">
                          {tag.split(", ").map((t, index) => (
                            <mark
                              key={index}
                              className="tag"
                            >
                              {t}
                            </mark>
                          ))}
                        </span>
                      )}
                    </div>
                    <div
                      className="search-content faq-content"
                      dangerouslySetInnerHTML={{__html: content}}
                    />
                  </motion.button>
                </div>
              ))}
            {query.trim() !== "" && results.length === 0 && (
              <div>
                <div className="search-no-results">
                  <p className="search-no-results-title">
                    По вашему запросу на этой странице{" "}
                    <span
                      style={{
                        color: "var(--summary-text)",
                        fontWeight: 800,
                        fontStyle: "italic",
                        marginInlineEnd: "3px",
                      }}
                    >
                      ничего
                    </span>{" "}
                    не нашлось
                  </p>
                  <p className="search-no-results-message">
                    Попробуйте перефразировать свой запрос или выполните поиск в другом
                    месте
                  </p>
                </div>
                <div className="search-category">
                  <button
                    onClick={() => {
                      window.open(
                        `https://yandex.com/search/?text=${encodeURIComponent(query)} ${window.location.pathname.includes("aefaq") ? "after effects" : window.location.pathname.includes("prfaq") ? "premiere pro" : window.location.pathname.includes("psfaq") ? "photoshop" : window.location.pathname.includes("aeexpr") ? "after effects expression" : ""}`,
                        "_blank"
                      );
                    }}
                  >
                    Найти в Яндексе
                  </button>
                  <button
                    onClick={() => {
                      window.open(
                        `https://www.perplexity.ai/search?q=${encodeURIComponent(query)} ${window.location.pathname.includes("aefaq") ? "after effects" : window.location.pathname.includes("prfaq") ? "premiere pro" : window.location.pathname.includes("psfaq") ? "photoshop" : window.location.pathname.includes("aeexpr") ? "after effects expression" : ""}`,
                        "_blank"
                      );
                    }}
                  >
                    Спросить у Perplexity*
                  </button>
                </div>
                <p className="search-no-results-tip">
                  <sup>*</sup>Perplexity может выдавать недостоверную информацию, не
                  используйте его в качестве самоучителя
                </p>
              </div>
            )}
            {results.length > 0 && (
              <div style={{paddingInline: "10px"}}>
                <div className="search-no-results">
                  <p className="search-no-results-message">
                    Если вы не нашли то, что вам нужно, то попробуйте перефразировать свой
                    запрос или выполните поиск в другом месте
                  </p>
                </div>
                <div className="search-category">
                  <button
                    onClick={() => {
                      window.open(
                        `https://yandex.com/search/?text=${encodeURIComponent(query)} ${window.location.pathname.includes("aefaq") ? "after effects" : window.location.pathname.includes("prfaq") ? "premiere pro" : window.location.pathname.includes("psfaq") ? "photoshop" : window.location.pathname.includes("aeexpr") ? "after effects expression" : ""}`,
                        "_blank"
                      );
                    }}
                  >
                    Найти в Яндексе
                  </button>
                  <button
                    onClick={() => {
                      window.open(
                        `https://www.perplexity.ai/search?q=${encodeURIComponent(query)} ${window.location.pathname.includes("aefaq") ? "after effects" : window.location.pathname.includes("prfaq") ? "premiere pro" : window.location.pathname.includes("psfaq") ? "photoshop" : window.location.pathname.includes("aeexpr") ? "after effects expression" : ""}`,
                        "_blank"
                      );
                    }}
                  >
                    Спросить у Perplexity*
                  </button>
                </div>
                <p className="search-no-results-tip">
                  <sup>*</sup>Perplexity может выдавать недостоверную информацию, не
                  используйте его в качестве самоучителя
                </p>
              </div>
            )}
            {!isPageLoaded && (
              <p style={{textAlign: "center", fontSize: "1rem", margin: "20px"}}>
                Страница ещё загружается, а поиск всё ещё недоступен. Пожалуйста,
                подождите...
              </p>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
