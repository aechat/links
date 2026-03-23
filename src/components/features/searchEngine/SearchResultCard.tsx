import React from "react";

import searchStyles from "./SearchEngine.module.scss";

type SearchResultCardProperties = {
  anchor?: string;
  content: string;
  highlightedTags: React.ReactNode[];
  highlightedTitle: React.ReactNode;
  id: string;
  isContentOverflowing: boolean;
  isHovered: boolean;
  isMobile: boolean;
  isSelected: boolean;
  onClick: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  setContentRef: (element: HTMLDivElement | null) => void;
  setResultRef: (element: HTMLButtonElement | null) => void;
  tagsToDisplay: string[];
};

export const SearchResultCard: React.FC<SearchResultCardProperties> = ({
  anchor,
  content,
  highlightedTags,
  highlightedTitle,
  id,
  isContentOverflowing,
  isHovered,
  isMobile,
  isSelected,
  onClick,
  onMouseEnter,
  onMouseLeave,
  setContentRef,
  setResultRef,
  tagsToDisplay,
}) => {
  return (
    <div
      key={id}
      className={searchStyles["search-results-item"]}
    >
      <button
        ref={setResultRef}
        className={`${searchStyles["search-link"]} ${isSelected ? searchStyles["search-selected"] : ""}`}
        data-anchor={anchor}
        data-id={id}
        style={(() => {
          if (isMobile) {
            return {filter: "none", opacity: 1};
          }

          if (isSelected || isHovered) {
            return {filter: "none"};
          }

          return {filter: "saturate(0.25)"};
        })()}
        tabIndex={0}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`${searchStyles["search-header"]} ${
            isSelected ? searchStyles["search-header-selected"] : ""
          }`}
        >
          <p className={searchStyles["search-title"]}>{highlightedTitle}</p>
          {tagsToDisplay.length > 0 && (
            <span className={searchStyles["search-tags"]}>
              {tagsToDisplay.map((tag_, tagIndex) => (
                <span
                  key={`${tag_}-${tagIndex}`}
                  className={searchStyles["search-tag-item"]}
                >
                  {highlightedTags[tagIndex]}
                </span>
              ))}
            </span>
          )}
        </div>
        <div
          ref={setContentRef}
          className={`${searchStyles["search-content"]} ${
            isContentOverflowing ? searchStyles["search-content-truncated"] : ""
          } ${isSelected ? searchStyles["search-content-selected"] : ""} article-content no-copy`}
          dangerouslySetInnerHTML={{__html: content}}
        />
      </button>
    </div>
  );
};
