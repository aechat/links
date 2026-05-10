import {useEffect, useState} from "react";

import {generateAnchorId} from "../components/detailsSummary/DetailsSummary";
import {useLoading} from "../context/LoadingContext";

const PAGE_LOAD_DELAY = 100;

export const usePageLoad = (isFaqPage = false) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const {canDismiss, setIsLoading} = useLoading();

  useEffect(() => {
    let cancelled = false;

    const finishLoading = () => {
      if (cancelled) return;

      setIsPageLoaded(true);

      if (canDismiss) {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(async () => {
      if (cancelled) return;

      if (!isFaqPage) {
        finishLoading();

        return;
      }

      await generateAnchorId();

      if (cancelled) return;

      setIsPageLoaded(true);

      if (canDismiss) {
        setIsLoading(false);
      }
    }, PAGE_LOAD_DELAY);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [setIsLoading, isFaqPage, canDismiss]);

  return isPageLoaded;
};
