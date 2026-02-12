import {useEffect, useState} from "react";

import {generateAnchorId} from "../components/content/DetailsSummary";
import {useLoading} from "../context/LoadingContext";

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

      const startedAt = Date.now();

      const waitForAnchors = () => {
        if (cancelled) return;

        generateAnchorId();

        const summaries = document.querySelectorAll(
          ".article-content details:not(.details-nested) > summary"
        );

        let allAnchorsReady = summaries.length > 0;

        for (const summary of summaries) {
          if (!summary.id) {
            allAnchorsReady = false;
            break;
          }
        }

        if (allAnchorsReady || Date.now() - startedAt >= 500) {
          finishFaqLoading();

          return;
        }

        animationFrameId = requestAnimationFrame(waitForAnchors);
      };

      waitForAnchors();
    }, 100);

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
