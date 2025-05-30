import {Search} from "@mui/icons-material";
import {message} from "antd";
import React from "react";
import {useSearch} from "../context";

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
