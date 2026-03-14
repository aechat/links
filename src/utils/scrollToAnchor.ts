const constants = {
  PADDING: {
    MAX: 14,
    MIN: 10,
    SCREEN: {
      MAX: 768,
      MIN: 320,
    },
  },
} as const;

interface ScrollToAnchorOptions {
  updateHash?: boolean;
}

interface AnchorClickEvent {
  preventDefault: () => void;
}

const getScrollPadding = () => {
  if (globalThis.window === undefined) {
    return 0;
  }

  return Math.min(
    constants.PADDING.MIN +
      (constants.PADDING.MAX - constants.PADDING.MIN) *
        ((window.innerWidth - constants.PADDING.SCREEN.MIN) /
          (constants.PADDING.SCREEN.MAX - constants.PADDING.SCREEN.MIN)),
    constants.PADDING.MAX
  );
};

const getScrollTop = (target: Element) => {
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

  const padding = getScrollPadding();

  return target.getBoundingClientRect().top + window.pageYOffset - headerHeight - padding;
};

export const scrollToElement = (target: Element): boolean => {
  if (globalThis.window === undefined) {
    return false;
  }

  window.scrollTo({behavior: "smooth", top: getScrollTop(target)});

  return true;
};

export const scrollToAnchorById = (
  anchorId: string,
  options?: ScrollToAnchorOptions
): boolean => {
  if (globalThis.window === undefined) {
    return false;
  }

  const target = document.getElementById(anchorId);

  if (!target) {
    return false;
  }

  if (options?.updateHash !== false) {
    history.replaceState(
      undefined,
      "",
      `${globalThis.location.pathname}${globalThis.location.search}#${anchorId}`
    );
  }

  return scrollToElement(target);
};

export const scrollToAnchorFromClick = (
  event: AnchorClickEvent,
  anchorId: string,
  options?: ScrollToAnchorOptions
): boolean => {
  event.preventDefault();

  return scrollToAnchorById(anchorId, options);
};
