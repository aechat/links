import React, {useCallback, useEffect, useRef, useState} from "react";

import {
  openSearchAnchorRuntime,
  scrollSelectedResultIntoViewRuntime,
} from "./searchInteractionUtilities";
import {
  getHorizontalNeighborIndex as getHorizontalNeighborIndexRuntime,
  getPositionedResults as getPositionedResultsRuntime,
  getVisualNeighborIndex as getVisualNeighborIndexRuntime,
} from "./searchNavigationUtilities";

import type {SearchResult} from "./searchTypes";

type SearchModalBehaviorParameters = {
  handleLinkClick: (anchorValue: string) => void;
  isModalOpen: boolean;
  resultLinkClassName: string;
  resultReferences: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  results: SearchResult[];
  selectedResultIndex: number;
  setSelectedResultIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const useSearchLinkNavigation = (closeModal: () => void) => {
  return useCallback(
    (anchorValue: string) => {
      openSearchAnchorRuntime({anchorValue, closeModal});
    },
    [closeModal]
  );
};

export const useSearchViewState = (
  isPageLoaded: boolean,
  resultsLength: number,
  setQuery: React.Dispatch<React.SetStateAction<string>>
) => {
  const [isSearching, setIsSearching] = useState(false);

  const [isResultsProcessed, setIsResultsProcessed] = useState(false);

  useEffect(() => {
    if (isPageLoaded) {
      const timeout = setTimeout(() => {
        setIsResultsProcessed(true);
      }, 100);

      return () => clearTimeout(timeout);
    }

    setIsResultsProcessed(false);
  }, [isPageLoaded, resultsLength]);

  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value);

      if (value.trim() === "") {
        setIsSearching(false);
        setIsResultsProcessed(false);
      } else {
        setIsSearching(true);
        setIsResultsProcessed(false);
      }
    },
    [setQuery]
  );

  const resetSearchState = useCallback(() => {
    setQuery("");
    setIsSearching(false);
    setIsResultsProcessed(false);
  }, [setQuery]);

  return {
    handleQueryChange,
    isResultsProcessed,
    isSearching,
    resetSearchState,
  };
};

export const useSearchModalBehavior = ({
  handleLinkClick,
  isModalOpen,
  resultLinkClassName,
  resultReferences,
  results,
  selectedResultIndex,
  setSelectedResultIndex,
}: SearchModalBehaviorParameters) => {
  const inputReference = useRef<HTMLInputElement>(null);

  const resultsContainerReference = useRef<HTMLDivElement>(null);

  const wasModalOpenReference = useRef(false);

  const [isFadeVisible, setIsFadeVisible] = useState(false);

  const columnTolerance = 40;

  useEffect(() => {
    if (isModalOpen) {
      const timeout = setTimeout(() => {
        inputReference.current?.focus();
        inputReference.current?.select();
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const element = resultsContainerReference.current;

    if (!element) {
      return;
    }

    const checkFadeVisibility = () => {
      setIsFadeVisible(
        element.scrollHeight > element.clientHeight &&
          element.scrollTop + element.clientHeight < element.scrollHeight - 1
      );
    };

    checkFadeVisibility();
    element.addEventListener("scroll", checkFadeVisibility);
    globalThis.addEventListener("resize", checkFadeVisibility);

    return () => {
      element.removeEventListener("scroll", checkFadeVisibility);
      globalThis.removeEventListener("resize", checkFadeVisibility);
    };
  }, [results]);

  const getPositionedResults = useCallback(() => {
    return getPositionedResultsRuntime(resultReferences.current);
  }, [resultReferences]);

  const getVisualNeighborIndex = useCallback(
    (currentIndex: number, direction: "down" | "up"): number => {
      return getVisualNeighborIndexRuntime({
        columnTolerance,
        currentIndex,
        direction,
        positionedResults: getPositionedResults(),
        resultsLength: results.length,
      });
    },
    [columnTolerance, getPositionedResults, results.length]
  );

  const getHorizontalNeighborIndex = useCallback(
    (currentIndex: number, direction: "left" | "right"): number => {
      return getHorizontalNeighborIndexRuntime({
        columnTolerance,
        currentIndex,
        direction,
        positionedResults: getPositionedResults(),
      });
    },
    [columnTolerance, getPositionedResults]
  );

  const scrollSelectedResultIntoView = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      scrollSelectedResultIntoViewRuntime({
        behavior,
        resultReferences: resultReferences.current,
        resultsContainer: resultsContainerReference.current,
        selectedResultIndex,
      });
    },
    [resultReferences, selectedResultIndex]
  );

  useEffect(() => {
    const handleKeyDown = (event_: KeyboardEvent) => {
      if (!isModalOpen || results.length === 0) {
        return;
      }

      switch (event_.key) {
        case "ArrowDown": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getVisualNeighborIndex(previousIndex, "down")
          );

          break;
        }

        case "ArrowUp": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getVisualNeighborIndex(previousIndex, "up")
          );

          break;
        }

        case "ArrowLeft": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getHorizontalNeighborIndex(previousIndex, "left")
          );

          break;
        }

        case "ArrowRight": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getHorizontalNeighborIndex(previousIndex, "right")
          );

          break;
        }

        case "Enter": {
          event_.preventDefault();

          if (selectedResultIndex >= 0 && selectedResultIndex < results.length) {
            handleLinkClick(
              results[selectedResultIndex].anchor || results[selectedResultIndex].id
            );
          }

          break;
        }
      }
    };

    if (!isModalOpen) {
      return;
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    getHorizontalNeighborIndex,
    getVisualNeighborIndex,
    handleLinkClick,
    isModalOpen,
    results,
    selectedResultIndex,
    setSelectedResultIndex,
  ]);

  useEffect(() => {
    if (!isModalOpen || selectedResultIndex < 0) {
      wasModalOpenReference.current = false;

      return;
    }

    const justOpened = !wasModalOpenReference.current;

    wasModalOpenReference.current = true;

    if (!justOpened) {
      scrollSelectedResultIntoView("smooth");

      return;
    }

    let rafId = 0;

    let previousRelativeTop: number | undefined;

    let stableFrames = 0;

    let frameCount = 0;

    const requiredStableFrames = 1;

    const maxFrames = 10;

    const waitForStableLayoutAndScroll = () => {
      const container = resultsContainerReference.current;

      const selectedElement = resultReferences.current[selectedResultIndex];

      frameCount += 1;

      if (!container || !selectedElement) {
        if (frameCount < maxFrames) {
          rafId = globalThis.requestAnimationFrame(waitForStableLayoutAndScroll);
        } else {
          scrollSelectedResultIntoView("smooth");
        }

        return;
      }

      const containerRect = container.getBoundingClientRect();

      const elementRect = selectedElement.getBoundingClientRect();

      const relativeTop = elementRect.top - containerRect.top;

      if (
        previousRelativeTop !== undefined &&
        Math.abs(relativeTop - previousRelativeTop) < 1
      ) {
        stableFrames += 1;
      } else {
        stableFrames = 0;
      }

      previousRelativeTop = relativeTop;

      if (stableFrames >= requiredStableFrames || frameCount >= maxFrames) {
        scrollSelectedResultIntoView("smooth");

        return;
      }

      rafId = globalThis.requestAnimationFrame(waitForStableLayoutAndScroll);
    };

    rafId = globalThis.requestAnimationFrame(waitForStableLayoutAndScroll);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
    };
  }, [isModalOpen, resultReferences, scrollSelectedResultIntoView, selectedResultIndex]);

  useEffect(() => {
    const container = resultsContainerReference.current;

    if (!container) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && event.target.tagName === "MARK") {
        event.stopPropagation();

        const button = event.target.closest(
          `.${resultLinkClassName}`
        ) as HTMLButtonElement | null;

        if (button) {
          button.click();
        }
      }
    };

    container.addEventListener("click", handleClick, true);

    return () => {
      container.removeEventListener("click", handleClick, true);
    };
  }, [resultLinkClassName]);

  return {
    inputReference,
    isFadeVisible,
    resultsContainerReference,
  };
};

export {
  type SearchContextType,
  type SearchResult,
  type SearchSection,
} from "./searchTypes";

export {SearchProvider, useSearch} from "./searchContext";

export {useSearchLogic} from "./useSearchLogic";
