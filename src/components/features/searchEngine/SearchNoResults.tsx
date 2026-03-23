import React from "react";

import {useRipple} from "../../../hooks/useRipple";

import searchStyles from "./SearchEngine.module.scss";

export const ExternalSearch: React.FC<{query: string}> = ({query}) => {
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
              `https://www.perplexity.ai/search?q=${encodeURIComponent(getSearchQuery())}`,
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

export const SearchNoResults: React.FC<{query: string}> = ({query}) => (
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
