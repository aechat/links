import React, {useCallback, useEffect, useRef, useState} from "react";

import {useRipple} from "../../../hooks/useRipple";

import {getResultWord} from "./searchContentUtilities";

import searchStyles from "./SearchEngine.module.scss";

import {
  type SearchResult,
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

type SearchContentType = "categories" | "results" | "no-results";

export const SearchInPage: React.FC<{sections: SearchSection[]}> = ({sections}) => {
  const {
    addQueryToHistory,
    clearQueryHistory,
    closeModal,
    isModalOpen,
    isPageLoaded,
    queryHistory,
  } = useSearch();

  const [query, setQuery] = useState("");

  const resultReferences = useRef<(HTMLButtonElement | null)[]>([]);

  const ripple = useRipple<HTMLButtonElement>();

  const {
    debouncedQuery,
    results,
    resultsLimit,
    resultsQuery,
    selectedResultIndex,
    setResultsLimit,
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
    (anchorValue: string) => {
      if (results.length > 0) {
        addQueryToHistory(query);
      }

      navigateToLink(anchorValue);
    },
    [addQueryToHistory, navigateToLink, query, results]
  );

  const {inputReference, isFadeVisible, resultsContainerReference} =
    useSearchModalBehavior({
      handleLinkClick,
      isModalOpen,
      resultLinkClassName: searchStyles["search-link"],
      resultReferences,
      results,
      resultsLimit,
      selectedResultIndex,
      setSelectedResultIndex,
    });

  useEffect(() => {
    if (!query.trim()) {
      return;
    }

    const timeout = globalThis.setTimeout(() => {
      if (results.length > 0 && resultsQuery === query) {
        addQueryToHistory(query);
      }
    }, 5000);

    return () => globalThis.clearTimeout(timeout);
  }, [query, addQueryToHistory, results, resultsQuery]);

  const handleRecentQuerySelect = useCallback(
    (historyQuery: string) => {
      handleQueryChange(historyQuery);
      inputReference.current?.focus({preventScroll: true});
    },
    [handleQueryChange, inputReference]
  );

  const [displayedContentType, setDisplayedContentType] =
    useState<SearchContentType>("categories");

  const [contentTransitionPhase, setContentTransitionPhase] = useState<
    "idle" | "exit" | "enter"
  >("idle");

  const [previousTargetContentType, setPreviousTargetContentType] =
    useState<SearchContentType>("categories");

  const [displayedResults, setDisplayedResults] = useState<SearchResult[]>(results);

  const [displayedResultsQuery, setDisplayedResultsQuery] = useState(resultsQuery);

  const [displayedResultsCount, setDisplayedResultsCount] = useState(totalResultsCount);

  useEffect(() => {
    if (contentTransitionPhase !== "exit") {
      setDisplayedResults(results);
      setDisplayedResultsQuery(resultsQuery);
      setDisplayedResultsCount(totalResultsCount);
    }
  }, [results, resultsQuery, totalResultsCount, contentTransitionPhase]);

  const getTargetContentType = (): SearchContentType => {
    if (!isSearching) {
      return "categories";
    }

    if (results.length > 0) {
      return "results";
    }

    if (query.trim() !== "" && results.length === 0 && resultsQuery === query) {
      return "no-results";
    }

    return previousTargetContentType === "no-results"
      ? "categories"
      : previousTargetContentType;
  };

  const targetContentType = getTargetContentType();

  if (targetContentType !== previousTargetContentType) {
    setPreviousTargetContentType(targetContentType);
    setContentTransitionPhase("exit");
  }

  useEffect(() => {
    if (contentTransitionPhase !== "exit") {
      return;
    }

    const timeout = globalThis.setTimeout(() => {
      setDisplayedContentType(previousTargetContentType);
      setContentTransitionPhase("enter");
    }, 350);

    return () => globalThis.clearTimeout(timeout);
  }, [contentTransitionPhase, previousTargetContentType]);

  useEffect(() => {
    if (contentTransitionPhase !== "enter") {
      return;
    }

    const timeout = globalThis.setTimeout(() => {
      setContentTransitionPhase("idle");
    }, 300);

    return () => globalThis.clearTimeout(timeout);
  }, [contentTransitionPhase]);

  const getModalContent = () => {
    if (displayedContentType === "results") {
      return {
        content: (
          <>
            <SearchResults
              query={displayedResultsQuery}
              resultRefs={resultReferences}
              results={displayedResults}
              selectedResultIndex={selectedResultIndex}
              setSelectedResultIndex={setSelectedResultIndex}
              onLinkClick={handleLinkClick}
            />
            <ExternalSearch
              query={debouncedQuery}
              resultsLength={displayedResults.length}
              setResultsLimit={setResultsLimit}
              totalResultsCount={displayedResultsCount}
            />
          </>
        ),
        isScrollableContent: true,
      };
    }

    if (displayedContentType === "no-results") {
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
      contentTransitionPhase={contentTransitionPhase}
      inputRef={inputReference}
      isFadeVisible={isFadeVisible}
      isOpen={isModalOpen}
      isScrollableContent={isScrollableContent}
      query={query}
      resultsContainerRef={resultsContainerReference}
      resultsCount={displayedResultsCount}
      resultWord={getResultWord(displayedResultsCount)}
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
