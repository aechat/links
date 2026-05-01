import {useEffect, useState} from "react";

import {generateAnchorId} from "../components/detailsSummary/DetailsSummary";
import {useLoading} from "../context/LoadingContext";

const PAGE_LOAD_DELAY = 100;

const ANCHOR_WAIT_TIMEOUT = 500;

const getTopLevelSummaryElements = () => {
  return document.querySelectorAll(
    ".article-content details:not(.details-nested) > summary"
  );
};

const areGeneratedAnchorsReady = () => {
  const summaries = getTopLevelSummaryElements();

  if (summaries.length === 0) {
    return false;
  }

  for (const summary of summaries) {
    if (!summary.id) {
      return false;
    }
  }

  return true;
};

export const usePageLoad = (isFaqPage = false) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const {setIsLoading} = useLoading();

  useEffect(() => {
    let cancelled = false;

    let animationFrameId: number | undefined;

    const finishLoading = () => {
      if (cancelled) return;

      setIsLoading(false);
    };

    const finishFaqLoading = () => {
      if (cancelled) return;

      setIsPageLoaded(true);
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      if (cancelled) return;

      if (!isFaqPage) {
        finishLoading();

        return;
      }

      const waitStartedAt = Date.now();

      const waitForAnchors = () => {
        if (cancelled) return;

        generateAnchorId();

        const hasTimedOut = Date.now() - waitStartedAt >= ANCHOR_WAIT_TIMEOUT;

        if (areGeneratedAnchorsReady() || hasTimedOut) {
          finishFaqLoading();

          return;
        }

        animationFrameId = requestAnimationFrame(waitForAnchors);
      };

      waitForAnchors();
    }, PAGE_LOAD_DELAY);

    return () => {
      cancelled = true;
      clearTimeout(timer);

      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [setIsLoading, isFaqPage]);

  return isPageLoaded;
};
