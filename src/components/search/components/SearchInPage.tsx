import {BackspaceOutlined, CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";
import {motion} from "framer-motion";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useSearch} from "../context";
import {useSearchLogic} from "../hooks";
import {SearchSection} from "../types";
import {getFoundWord, getResultWord} from "../utils";

export const SearchInPage: React.FC<{sections: SearchSection[]}> = ({sections}) => {
  const {isOpen, closeModal, isPageLoaded} = useSearch();

  const [query, setQuery] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  const [isResultsProcessed, setIsResultsProcessed] = useState(false);

  const resultRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const {results, selectedResultIndex, setSelectedResultIndex} = useSearchLogic(
    query,
    isPageLoaded
  );

  // эффект для отслеживания обработки результатов

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

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

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

      window.history.pushState({}, "", `#${id}`);
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
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

  const renderContent = () => {
    if (!isSearching) {
      return (
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
      );
    }

    if (results.length > 0) {
      return (
        <>
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
          {results.map(({title, content, id, tag}, index) => (
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
                Спросить у Perplexity
              </button>
            </div>
            <p className="search-no-results-tip">
              Perplexity может выдавать недостоверную информацию, не
              используйте его в качестве самоучителя
            </p>
          </div>
        </>
      );
    }

    // показываем плашку "ничего не найдено" только если результаты полностью обработаны

    if (query.trim() !== "" && results.length === 0 && isResultsProcessed) {
      return (
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
              Попробуйте перефразировать свой запрос или выполните поиск в другом месте
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
            Perplexity может выдавать недостоверную информацию, не используйте
            его в качестве самоучителя
          </p>
        </div>
      );
    }

    // во время поиска показываем категории

    return (
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
    );
  };

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
            onChange={(e) => handleQueryChange(e.target.value)}
          />
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
        <div className="modal-content">
          <div className="search-results">
            {renderContent()}
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
