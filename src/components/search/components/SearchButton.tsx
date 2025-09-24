import {Search} from "@mui/icons-material";

import {message} from "antd";

import React from "react";

import {useSearch} from "../context";

interface SearchButtonProps {
  wide?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const SearchButton: React.FC<SearchButtonProps> = ({wide = false, style = {}}) => {
  const {openModal, isPageLoaded} = useSearch();

  return (
    <button
      style={{
        opacity: isPageLoaded ? 1 : 0.5,
        filter: isPageLoaded ? "saturate(100%)" : "saturate(0%)",
        ...style,
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
      {wide ? (
        <div className="wide-search-button">
          <Search /> Поиск по странице <mark>Ctrl + F</mark>
        </div>
      ) : (
        <div className="wide-search-button">
          <Search /> <span>Поиск</span>
        </div>
      )}
    </button>
  );
};
