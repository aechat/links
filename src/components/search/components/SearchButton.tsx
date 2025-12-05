import {Search} from "@mui/icons-material";

import {message} from "antd";

import React from "react";

import {useSearch} from "../context";

interface SearchButtonProps {
  wide?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const SearchButton: React.FC<SearchButtonProps> = ({
  wide = false,
  className = "",
  style = {},
}) => {
  const {openModal, isPageLoaded} = useSearch();

  return (
    <button
      className={`search-button ${className}`.trim()}
      style={{
        opacity: isPageLoaded ? 1 : 0.5,
        filter: isPageLoaded ? "saturate(100%)" : "saturate(0%)",
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
