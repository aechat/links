import React, {
  createContext,
  type ReactNode,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {message} from "antd";

import {resolveDetailsByAnchor} from "../../../utilities/anchorResolvers";

import {isMobileDevice} from "../../../utilities/browserDetection";

import {scrollToElement} from "../../../utilities/scrollToAnchor";

export interface SearchContextType {
  addQueryToHistory: (query: string) => void;
  clearQueryHistory: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  isPageLoaded: boolean;
  openModal: () => void;
  queryHistory: string[];
}

export interface SearchResult {
  anchor?: string;
  content: string;
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  isSingleParagraphMatch: boolean;
  tag?: string;
  title: string;
}

export type SearchSection = {
  id: string;
  title: string;
  icon?: ReactNode;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SEARCH_HISTORY_STORAGE_KEY = "searchEngineHistory";

const SEARCH_HISTORY_LIMIT = 24;

const normalizeHistoryQuery = (value: string) => value.replaceAll(/\s+/g, " ").trim();

export const SearchProvider: React.FC<{
  children: React.ReactNode;
  isPageLoaded: boolean;
}> = ({children, isPageLoaded}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  const openModal = () => {
    if (isPageLoaded) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const saveHistoryToStorage = useCallback((history: string[]) => {
    globalThis.localStorage.setItem(SEARCH_HISTORY_STORAGE_KEY, JSON.stringify(history));
  }, []);

  useEffect(() => {
    const rawHistory = globalThis.localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY);

    if (!rawHistory) {
      return;
    }

    try {
      const parsedHistory: unknown = JSON.parse(rawHistory);

      if (!Array.isArray(parsedHistory)) {
        return;
      }

      const sanitizedHistory = parsedHistory
        .filter((entry): entry is string => typeof entry === "string")
        .map((entry) => normalizeHistoryQuery(entry))
        .filter(Boolean)
        .slice(0, SEARCH_HISTORY_LIMIT);

      setQueryHistory(sanitizedHistory);
    } catch {
      globalThis.localStorage.removeItem(SEARCH_HISTORY_STORAGE_KEY);
    }
  }, []);

  const addQueryToHistory = useCallback(
    (rawQuery: string) => {
      const normalizedQuery = normalizeHistoryQuery(rawQuery);

      if (!normalizedQuery) {
        return;
      }

      setQueryHistory((previousHistory) => {
        const hasMoreSpecific = previousHistory.some((entry) =>
          entry.startsWith(normalizedQuery + " ")
        );

        if (hasMoreSpecific) {
          return previousHistory;
        }

        const filteredHistory = previousHistory.filter(
          (entry) => entry !== normalizedQuery && !normalizedQuery.startsWith(entry + " ")
        );

        const nextHistory = [normalizedQuery, ...filteredHistory].slice(
          0,
          SEARCH_HISTORY_LIMIT
        );

        saveHistoryToStorage(nextHistory);

        return nextHistory;
      });
    },
    [saveHistoryToStorage]
  );

  const clearQueryHistory = useCallback(() => {
    setQueryHistory([]);
    globalThis.localStorage.removeItem(SEARCH_HISTORY_STORAGE_KEY);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey && event.key === "f") || (event.ctrlKey && event.key === "а")) {
        event.preventDefault();

        if (isPageLoaded) {
          openModal();
        } else {
          message.warning(
            "Прежде чем воспользоваться поиском по странице - дождитесь полной загрузки страницы"
          );
        }
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);

    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPageLoaded]);

  const value = useMemo(
    () => ({
      addQueryToHistory,
      clearQueryHistory,
      closeModal,
      isModalOpen,
      isPageLoaded,
      openModal,
      queryHistory,
    }),
    [
      addQueryToHistory,
      clearQueryHistory,
      closeModal,
      isModalOpen,
      isPageLoaded,
      openModal,
      queryHistory,
    ]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must use with SearchProvider.");
  }

  return context;
};

type PositionedResult = {
  element: HTMLButtonElement;
  index: number;
  rect: DOMRect;
};

const getPositionedResultsRuntime = (
  resultReferences: Array<HTMLButtonElement | null>
): PositionedResult[] => {
  return resultReferences
    .map((element, index) => ({
      element,
      index,
      rect: element?.getBoundingClientRect(),
    }))
    .filter(
      (item): item is PositionedResult => Boolean(item.element) && Boolean(item.rect)
    );
};

const getColumnCenters = (
  positionedResults: Array<{index: number; rect: DOMRect}>,
  columnTolerance: number
): number[] => {
  const centers: number[] = [];

  for (const item of positionedResults) {
    const centerX = item.rect.left + item.rect.width / 2;

    const matchingCenterIndex = centers.findIndex(
      (value) => Math.abs(value - centerX) <= columnTolerance
    );

    if (matchingCenterIndex === -1) {
      centers.push(centerX);
    } else {
      centers[matchingCenterIndex] = (centers[matchingCenterIndex] + centerX) / 2;
    }
  }

  return centers;
};

const getVisualNeighborIndexRuntime = ({
  columnTolerance,
  currentIndex,
  direction,
  positionedResults,
  resultsLength,
}: {
  columnTolerance: number;
  currentIndex: number;
  direction: "down" | "up";
  positionedResults: PositionedResult[];
  resultsLength: number;
}): number => {
  if (positionedResults.length === 0) {
    return currentIndex;
  }

  const currentResult = positionedResults.find((item) => item.index === currentIndex);

  if (!currentResult) {
    return positionedResults[0].index;
  }

  const currentCenterX = currentResult.rect.left + currentResult.rect.width / 2;

  const currentCenterY = currentResult.rect.top + currentResult.rect.height / 2;

  const columnCenters = getColumnCenters(positionedResults, columnTolerance);

  if (columnCenters.length <= 1) {
    if (direction === "down") {
      return Math.min(currentIndex + 1, resultsLength - 1);
    }

    return Math.max(currentIndex - 1, 0);
  }

  const currentColumnCenter =
    columnCenters
      .toSorted((a, b) => Math.abs(a - currentCenterX) - Math.abs(b - currentCenterX))
      .at(0) ?? currentCenterX;

  const directionalCandidates = positionedResults
    .map((candidate) => ({
      centerX: candidate.rect.left + candidate.rect.width / 2,
      centerY: candidate.rect.top + candidate.rect.height / 2,
      index: candidate.index,
    }))
    .filter((candidate) => candidate.index !== currentIndex)
    .filter(
      (candidate) => Math.abs(candidate.centerX - currentColumnCenter) <= columnTolerance
    )
    .filter((candidate) =>
      direction === "down"
        ? candidate.centerY > currentCenterY + 2
        : candidate.centerY < currentCenterY - 2
    );

  const bestCandidate = directionalCandidates.toSorted((a, b) => {
    const scoreA =
      Math.abs(a.centerY - currentCenterY) * 12 + Math.abs(a.centerX - currentCenterX);

    const scoreB =
      Math.abs(b.centerY - currentCenterY) * 12 + Math.abs(b.centerX - currentCenterX);

    return scoreA - scoreB;
  })[0];

  return bestCandidate?.index ?? currentIndex;
};

const getHorizontalNeighborIndexRuntime = ({
  columnTolerance,
  currentIndex,
  direction,
  positionedResults,
}: {
  columnTolerance: number;
  currentIndex: number;
  direction: "left" | "right";
  positionedResults: PositionedResult[];
}): number => {
  if (positionedResults.length === 0) {
    return currentIndex;
  }

  const currentResult = positionedResults.find((item) => item.index === currentIndex);

  if (!currentResult) {
    return positionedResults[0].index;
  }

  const currentCenterX = currentResult.rect.left + currentResult.rect.width / 2;

  const currentCenterY = currentResult.rect.top + currentResult.rect.height / 2;

  const candidateColumns = positionedResults
    .map((item) => ({
      centerX: item.rect.left + item.rect.width / 2,
      index: item.index,
      rect: item.rect,
    }))
    .filter((item) =>
      direction === "left"
        ? item.centerX < currentCenterX - columnTolerance
        : item.centerX > currentCenterX + columnTolerance
    );

  if (candidateColumns.length === 0) {
    return currentIndex;
  }

  let bestCandidate: {index: number; score: number} | undefined;

  for (const candidate of candidateColumns) {
    const candidateCenterY = candidate.rect.top + candidate.rect.height / 2;

    const deltaY = Math.abs(candidateCenterY - currentCenterY);

    const deltaX = Math.abs(candidate.centerX - currentCenterX);

    const score = deltaX * 12 + deltaY;

    if (!bestCandidate || score < bestCandidate.score) {
      bestCandidate = {index: candidate.index, score};
    }
  }

  return bestCandidate?.index ?? currentIndex;
};

const scrollSelectedResultIntoViewRuntime = ({
  behavior = "smooth",
  resultReferences,
  resultsContainer,
  selectedResultIndex,
}: {
  behavior?: ScrollBehavior;
  resultReferences: Array<HTMLButtonElement | null>;
  resultsContainer: HTMLDivElement | undefined;
  selectedResultIndex: number;
}): void => {
  if (selectedResultIndex < 0) {
    return;
  }

  const resolvedBehavior: ScrollBehavior = isMobileDevice() ? "auto" : behavior;

  const selectedElement = resultReferences[selectedResultIndex];

  if (!resultsContainer || !selectedElement) {
    return;
  }

  const containerRect = resultsContainer.getBoundingClientRect();

  const elementRect = selectedElement.getBoundingClientRect();

  const absoluteElementTop =
    elementRect.top - containerRect.top + resultsContainer.scrollTop;

  const centeredTop =
    absoluteElementTop - (resultsContainer.clientHeight - elementRect.height) / 2;

  const maxScrollTop = Math.max(
    0,
    resultsContainer.scrollHeight - resultsContainer.clientHeight
  );

  const targetTop = Math.min(maxScrollTop, Math.max(0, centeredTop));

  resultsContainer.scrollTo({
    behavior: resolvedBehavior,
    top: targetTop,
  });

  const verifyAndFallback = () => {
    const currentElement = resultReferences[selectedResultIndex];

    if (!resultsContainer || !currentElement) {
      return;
    }

    const currentContainerRect = resultsContainer.getBoundingClientRect();

    const currentElementRect = currentElement.getBoundingClientRect();

    const topGap = currentElementRect.top - currentContainerRect.top;

    const bottomGap = currentContainerRect.bottom - currentElementRect.bottom;

    const isOutOfView = topGap < 8 || bottomGap < 8;

    if (isOutOfView) {
      currentElement.scrollIntoView({
        behavior: resolvedBehavior,
        block: "center",
        inline: "nearest",
      });
    }
  };

  globalThis.requestAnimationFrame(verifyAndFallback);
};

const openSearchAnchorRuntime = ({
  anchorValue,
  closeModal,
}: {
  anchorValue: string;
  closeModal: () => void;
}): void => {
  const resolvedDetails = resolveDetailsByAnchor(anchorValue);

  if (resolvedDetails) {
    const summaryElement = resolvedDetails.querySelector("summary");

    if (!(summaryElement instanceof HTMLElement) || !summaryElement.id) {
      return;
    }

    if (!resolvedDetails.hasAttribute("open")) {
      resolvedDetails.setAttribute("open", "true");
    }

    scrollToElement(summaryElement);

    const event = new CustomEvent("open-spoiler-by-id", {
      detail: {id: summaryElement.id},
    });

    globalThis.dispatchEvent(event);
    globalThis.setTimeout(closeModal, 0);

    return;
  }

  const targetElement = document.getElementById(anchorValue);

  if (!targetElement) {
    return;
  }

  scrollToElement(targetElement);
  globalThis.setTimeout(closeModal, 0);
};

type SearchModalBehaviorParameters = {
  handleLinkClick: (anchorValue: string) => void;
  isModalOpen: boolean;
  resultLinkClassName: string;
  resultReferences: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  results: SearchResult[];
  selectedResultIndex: number;
  setSelectedResultIndex: React.Dispatch<React.SetStateAction<number>>;
  resultsLimit?: number;
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
      if (value.trim() === "") {
        setIsSearching(false);
        setIsResultsProcessed(false);

        startTransition(() => {
          setQuery(value);
        });
      } else {
        setIsSearching(true);
        setIsResultsProcessed(false);

        startTransition(() => {
          setQuery(value);
        });
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
  resultsLimit,
  selectedResultIndex,
  setSelectedResultIndex,
}: SearchModalBehaviorParameters) => {
  const inputReference = useRef<HTMLInputElement>(null);

  const [resultsContainer, setResultsContainer] = useState<HTMLDivElement | undefined>();

  const resultsContainerReference = useCallback((element: HTMLDivElement | null) => {
    setResultsContainer(element ?? undefined);
  }, []);

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
    const element = resultsContainer;

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
  }, [resultsContainer]);

  useEffect(() => {
    const element = resultsContainer;

    if (!element) {
      return;
    }

    setIsFadeVisible(
      element.scrollHeight > element.clientHeight &&
        element.scrollTop + element.clientHeight < element.scrollHeight - 1
    );
  }, [results, resultsContainer]);

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
        resultsContainer,
        selectedResultIndex,
      });
    },
    [resultReferences, selectedResultIndex, resultsContainer]
  );

  const resultsSignature = useMemo(
    () => results.map((result) => result.id).join("|"),
    [results]
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
      const container = resultsContainer;

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
    if (resultsLimit === Number.MAX_SAFE_INTEGER) {
      return;
    }

    if (!isModalOpen || selectedResultIndex < 0 || results.length === 0) {
      return;
    }

    const rafId = globalThis.requestAnimationFrame(() => {
      scrollSelectedResultIntoView("smooth");
    });

    return () => {
      globalThis.cancelAnimationFrame(rafId);
    };
  }, [
    isModalOpen,
    results.length,
    resultsSignature,
    scrollSelectedResultIntoView,
    selectedResultIndex,
    resultsLimit,
  ]);

  useEffect(() => {
    const container = resultsContainer;

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
  }, [resultLinkClassName, results, resultsContainer]);

  return {
    inputReference,
    isFadeVisible,
    resultsContainerReference,
  };
};

export {useSearchLogic} from "./useSearchLogic";
