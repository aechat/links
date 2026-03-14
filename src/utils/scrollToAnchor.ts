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

export const scrollToAnchorById = (anchorId: string): boolean => {
  if (globalThis.window === undefined) {
    return false;
  }

  const target = document.getElementById(anchorId);

  if (!target) {
    return false;
  }

  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

  const padding = getScrollPadding();

  const y =
    target.getBoundingClientRect().top + window.pageYOffset - headerHeight - padding;

  history.replaceState(
    undefined,
    "",
    `${globalThis.location.pathname}${globalThis.location.search}#${anchorId}`
  );

  window.scrollTo({behavior: "smooth", top: y});

  return true;
};
