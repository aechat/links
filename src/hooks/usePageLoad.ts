import {useEffect, useState} from "react";

import {generateAnchorId} from "../components/content/DetailsSummary";
import {useLoading} from "../context/LoadingContext";

export const usePageLoad = (isFaqPage = false) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const {setIsLoading} = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      if (isFaqPage) {
        setIsPageLoaded(true);
        generateAnchorId();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [setIsLoading, isFaqPage]);

  return isPageLoaded;
};
