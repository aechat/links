import {BackspaceOutlined, CloseRounded} from "@mui/icons-material";

import {Modal} from "antd";

import React, {useCallback, useEffect, useRef, useState} from "react";

import {useSearch} from "../context";

import {useSearchLogic} from "../hooks";

import {SearchSection} from "../types";

import {getResultWord} from "../utils";

const SearchCategories: React.FC<{
  onLinkClick: (id: string) => void;
  sections: SearchSection[];
}> = ({onLinkClick, sections}) => (
  <div className="search-category">
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => onLinkClick(section.id)}
      >
        {section.icon}
        {section.title}
      </button>
    ))}
  </div>
);

const SearchResults: React.FC<{
  query: string;
  onLinkClick: (id: string) => void;
  resultRefs: React.RefObject<(HTMLButtonElement | null)[]>;
  results: Array<{content: string; id: string; tag?: string; title: string}>;
  selectedResultIndex: number;
}> = ({query, onLinkClick, resultRefs, results, selectedResultIndex}) => {
  const getMatchingTags = (tag: string | undefined, query: string) => {
    if (!tag || tag.trim() === "") {
      return [];
    }

    const allTags = tag.split(", ");

    const lowerCaseQuery = query.toLowerCase().trim();

    return allTags.filter((t) => t.toLowerCase().includes(lowerCaseQuery));
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {results.map(({title, content, id, tag}, index) => {
        const tagsToDisplay = getMatchingTags(tag, query);

        const isSelected = index === selectedResultIndex;

        const isHovered = hoveredIndex === index;

        return (
          <div key={id}>
            <button
              ref={(el) => {
                if (resultRefs.current) {
                  resultRefs.current[index] = el;
                }
              }}
              className={`search-link ${isSelected ? "search-selected" : ""}`}
              style={(() => {
                if (isMobile) {
                  return {opacity: 1, filter: "none"};
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
    const path = window.location.pathname;
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
            window.open(
              `https://yandex.com/search/?text=${encodeURIComponent(getSearchQuery())}`,
              "_blank"
            );
          }}
        >
          Найти в Яндексе
        </button>
        <button
          onClick={() => {
            window.open(
              `https://www.perplexity.ai/search?q=${encodeURIComponent(getSearchQuery())}`,
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
  const {isOpen, closeModal, isPageLoaded} = useSearch();

  const [query, setQuery] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  const [isResultsProcessed, setIsResultsProcessed] = useState(false);

  const resultRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const resultsContainerRef = useRef<HTMLDivElement>(null);

  const [showFade, setShowFade] = useState(false);

  const {
    results,
    selectedResultIndex,
    setSelectedResultIndex,
    debouncedQuery,
    resultsQuery,
  } = useSearchLogic(query, isPageLoaded);
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);
  useEffect(() => {
    const el = resultsContainerRef.current;

    if (!el) {
      return;
    }

    const checkFade = () => {
      setShowFade(
        el.scrollHeight > el.clientHeight &&
          el.scrollTop + el.clientHeight < el.scrollHeight - 1
      );
    };
    checkFade();
    el.addEventListener("scroll", checkFade);
    window.addEventListener("resize", checkFade);

    return () => {
      el.removeEventListener("scroll", checkFade);
      window.removeEventListener("resize", checkFade);
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
        window.pageYOffset -
        headerHeight -
        padding;
      window.scrollTo({top: y, behavior: "smooth"});

      const event = new CustomEvent("open-spoiler-by-id", {detail: {id}});
      window.dispatchEvent(event);
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
            handleLinkClick(results[selectedResultIndex].id);
          }

          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);

      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, results, selectedResultIndex, handleLinkClick]);
  useEffect(() => {
    if (selectedResultIndex >= 0) {
      const isMobile = window.innerWidth <= 768;

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
    const container = resultsContainerRef.current;

    if (!container) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && event.target.tagName === "MARK") {
        event.stopPropagation();

        const button = (event.target as HTMLElement).closest(
          ".search-link"
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
            resultRefs={resultRefs}
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
    <Modal
      closeIcon={null}
      footer={null}
      forceRender={true}
      open={isOpen}
      width={850}
      onCancel={closeModal}
    >
      <div className="search">
        <div className="modal-content">
          <div className="search-input-wrapper">
            <input
              ref={inputRef}
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
                  fontWeight: 500,
                  fontSize: "1.05em",
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
            ref={resultsContainerRef}
            className={`search-results${showFade ? " show-fade" : ""}`}
          >
            {renderContent()}
            {showFade}
          </div>
        </div>
      </div>
    </Modal>
  );
};
