import {useLocation} from "react-router-dom";

import {useCallback, useEffect} from "react";

const constants = {
  SCROLL_DELAY: 300,
  PADDING: {
    MIN: 10,
    MAX: 14,
    SCREEN: {
      MIN: 320,
      MAX: 768,
    },
  },
} as const;

const getScrollOffsets = () => {
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

  const padding = Math.min(
    constants.PADDING.MIN +
      (constants.PADDING.MAX - constants.PADDING.MIN) *
        ((window.innerWidth - constants.PADDING.SCREEN.MIN) /
          (constants.PADDING.SCREEN.MAX - constants.PADDING.SCREEN.MIN)),
    constants.PADDING.MAX
  );

  return {headerHeight, padding};
};

const debounce = (func: (hash: string) => void, delay: number) => {
  let timeout: NodeJS.Timeout;

  return (hash: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(hash), delay);
  };
};

export const useAnchorScroll = (isPageLoaded: boolean = true) => {
  const {hash} = useLocation();

  const debouncedReplaceState = useCallback(
    debounce((hash: string) => {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search + hash
      );
    }, 50),
    []
  );
  useEffect(() => {
    if (hash && isPageLoaded) {
      setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          const {headerHeight, padding} = getScrollOffsets();

          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            padding;
          window.scrollTo({top: y, behavior: "smooth"});
          setTimeout(() => {
            history.replaceState(
              null,
              "",
              window.location.pathname + window.location.search
            );
          }, 5000);
        } else {
          console.warn(`Элемент с якорем ${hash} не найден`);
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
          );
        }
      }, constants.SCROLL_DELAY);
    }
  }, [hash, isPageLoaded, debouncedReplaceState]);
};
