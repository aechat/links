import React, {useCallback, useRef, useState} from "react";

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
  RecentQueries,
  SearchCategories,
  SearchModal,
  SearchResults,
} from "./SearchUi";

export type {SearchResult, SearchSection} from "./SearchState";

export {extractMatchingLine, getResultWord} from "./searchContentUtilities";

export {type SearchContextType, SearchProvider, useSearch} from "./SearchState";

export const SearchInPage: React.FC<{sections: SearchSection[]}> = ({sections}) => {
  const {clearQueryHistory, closeModal, isModalOpen, isPageLoaded, queryHistory} =
    useSearch();

  const [query, setQuery] = useState("");

  const resultReferences = useRef<(HTMLButtonElement | null)[]>([]);

  const ripple = useRipple<HTMLButtonElement>();

  const {
    debouncedQuery,
    results,
    resultsQuery,
    selectedResultIndex,
    setSelectedResultIndex,
    totalResultsCount,
  } = useSearchLogic(query, isPageLoaded);

  const {handleQueryChange, isSearching, resetSearchState} = useSearchViewState(
    isPageLoaded,
    results.length,
    setQuery
  );

  const navigateToLink = useSearchLinkNavigation(closeModal);

  const handleLinkClick = useCallback(
    (anchorValue: string) => navigateToLink(anchorValue),
    [navigateToLink]
  );

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

  const handleRecentQuerySelect = useCallback(
    (historyQuery: string) => {
      handleQueryChange(historyQuery);
      inputReference.current?.focus({preventScroll: true});
    },
    [handleQueryChange, inputReference]
  );

  const getModalContent = () => {
    if (!isSearching) {
      return {
        content: (
          <>
            <RecentQueries
              history={queryHistory}
              onClear={clearQueryHistory}
              onSelect={handleRecentQuerySelect}
            />
            <SearchCategories
              sections={sections}
              onLinkClick={handleLinkClick}
            />
          </>
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

    if (query.trim() !== "" && results.length === 0 && resultsQuery === query) {
      return {
        content: <NoResults query={query} />,
        isScrollableContent: true,
      };
    }

    return {
      content: (
        <>
          <RecentQueries
            history={queryHistory}
            onClear={clearQueryHistory}
            onSelect={handleRecentQuerySelect}
          />
          <SearchCategories
            sections={sections}
            onLinkClick={handleLinkClick}
          />
        </>
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
      resultsCount={totalResultsCount}
      resultWord={getResultWord(totalResultsCount)}
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
