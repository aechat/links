import React from "react";

import {Search} from "@mui/icons-material";
import {message} from "antd";

import {useRipple} from "../../../hooks/useRipple";

import {useSearch} from "./searchContext";
import searchStyles from "./SearchEngine.module.scss";

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
