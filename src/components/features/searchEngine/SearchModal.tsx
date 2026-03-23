import React from "react";

import {BackspaceOutlined, CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";
import {RemoveScroll} from "react-remove-scroll";

import modalStyles from "../../modals/Modal.module.scss";

import searchStyles from "./SearchEngine.module.scss";

type SearchModalProperties = {
  children: React.ReactNode;
  closeModal: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  isFadeVisible: boolean;
  isOpen: boolean;
  onChangeQuery: (value: string) => void;
  onClearQuery: () => void;
  onCloseMouseDown: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  onInputClearMouseDown: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  query: string;
  resultWord: string;
  resultsContainerRef: React.RefObject<HTMLDivElement | null>;
  resultsCount: number;
};

export const SearchModal: React.FC<SearchModalProperties> = ({
  children,
  closeModal,
  inputRef,
  isFadeVisible,
  isOpen,
  onChangeQuery,
  onClearQuery,
  onCloseMouseDown,
  onInputClearMouseDown,
  query,
  resultsContainerRef,
  resultsCount,
  resultWord,
}) => {
  const resultsClassName = [
    searchStyles["search-results"],
    isFadeVisible ? searchStyles["show-fade"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <RemoveScroll enabled={isOpen}>
      <Modal
        closeIcon={false}
        footer={<></>}
        open={isOpen}
        width={1000}
        onCancel={closeModal}
      >
        <div className={searchStyles["search"]}>
          <div className={modalStyles["modal-content"]}>
            <div className={searchStyles["search-input-wrapper"]}>
              <input
                ref={inputRef}
                className={searchStyles["search-input"]}
                placeholder="Введите что-нибудь для поиска..."
                style={{cursor: "text"}}
                type="search"
                value={query}
                onChange={(event_) => onChangeQuery(event_.target.value)}
              />
              <p className={searchStyles["search-counter"]}>
                <span
                  style={{
                    color: "var(--color-surface-primary-text)",
                    fontSize: "1.05em",
                    fontWeight: 500,
                  }}
                >
                  {resultsCount}
                </span>{" "}
                {resultWord}
              </p>
              {query.trim() !== "" && (
                <button
                  className={searchStyles["search-input-clear"]}
                  style={{cursor: "pointer"}}
                  onClick={onClearQuery}
                  onMouseDown={onInputClearMouseDown}
                >
                  <BackspaceOutlined fontSize="small" />
                </button>
              )}
              <button
                className={searchStyles["search-input-close"]}
                onClick={closeModal}
                onMouseDown={onCloseMouseDown}
              >
                <CloseRounded />
              </button>
            </div>
            <div
              ref={resultsContainerRef}
              className={resultsClassName}
            >
              {children}
              {isFadeVisible}
            </div>
          </div>
        </div>
      </Modal>
    </RemoveScroll>
  );
};
