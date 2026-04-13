import React, {useRef, useState} from "react";

import {useRipple} from "../../../hooks/useRipple";

import {getResultWord} from "./searchContentUtilities";
import searchStyles from "./SearchEngine.module.scss";
import {
  type SearchSection,
  useSearch,
  useSearchLinkNavigation,
  useSearchLogic,
  useSearchModalBehavior,
  useSearchViewState,
} from "./SearchState";
import {
  ExternalSearch,
  NoResults,
  SearchCategories,
  SearchModal,
  SearchResults,
} from "./SearchUi";

export type {SearchResult, SearchSection} from "./SearchState";

export {extractMatchingLine, getResultWord} from "./searchContentUtilities";

export {type SearchContextType, SearchProvider, useSearch} from "./SearchState";

export const SearchInPage: React.FC<{sections: SearchSection[]}> = ({sections}) => {
  const {closeModal, isModalOpen, isPageLoaded} = useSearch();

  const [query, setQuery] = useState("");

  const resultReferences = useRef<(HTMLButtonElement | null)[]>([]);

  const ripple = useRipple<HTMLButtonElement>();

  const {
    debouncedQuery,
    results,
    resultsQuery,
    selectedResultIndex,
    setSelectedResultIndex,
  } = useSearchLogic(query, isPageLoaded);

  const {handleQueryChange, isResultsProcessed, isSearching, resetSearchState} =
    useSearchViewState(isPageLoaded, results.length, setQuery);

  const handleLinkClick = useSearchLinkNavigation(closeModal);

  const {inputReference, isFadeVisible, resultsContainerReference} =
    useSearchModalBehavior({
      handleLinkClick,
      isModalOpen,
      resultLinkClassName: searchStyles["search-link"],
      resultReferences,
      results,
      selectedResultIndex,
      setSelectedResultIndex,
    });

  const getModalContent = () => {
    if (!isSearching) {
      return {
        content: (
          <SearchCategories
            sections={sections}
            onLinkClick={handleLinkClick}
          />
        ),
        isScrollableContent: false,
      };
    }

    if (results.length > 0) {
      return {
        content: (
          <>
            <SearchResults
              query={resultsQuery}
              resultRefs={resultReferences}
              results={results}
              selectedResultIndex={selectedResultIndex}
              setSelectedResultIndex={setSelectedResultIndex}
              onLinkClick={handleLinkClick}
            />
            <ExternalSearch query={debouncedQuery} />
          </>
        ),
        isScrollableContent: true,
      };
    }

    if (query.trim() !== "" && results.length === 0 && isResultsProcessed) {
      return {
        content: <NoResults query={query} />,
        isScrollableContent: true,
      };
    }

    return {
      content: (
        <SearchCategories
          sections={sections}
          onLinkClick={handleLinkClick}
        />
      ),
      isScrollableContent: false,
    };
  };

  const {content, isScrollableContent} = getModalContent();

  return (
    <SearchModal
      closeModal={closeModal}
      inputRef={inputReference}
      isFadeVisible={isFadeVisible}
      isOpen={isModalOpen}
      isScrollableContent={isScrollableContent}
      query={query}
      resultsContainerRef={resultsContainerReference}
      resultsCount={results.length}
      resultWord={getResultWord(results.length)}
      onChangeQuery={handleQueryChange}
      onClearQuery={resetSearchState}
      onCloseMouseDown={ripple.onMouseDown}
      onInputClearMouseDown={ripple.onMouseDown}
    >
      {content}
    </SearchModal>
  );
};

export {SearchButton} from "./SearchUi";
