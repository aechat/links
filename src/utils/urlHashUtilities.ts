export const getPagePathWithSearch = (): string => {
  return `${globalThis.location.pathname}${globalThis.location.search}`;
};

export const getCurrentHashAnchor = (): string => {
  if (globalThis.window === undefined) {
    return "";
  }

  return globalThis.location.hash.slice(1);
};

export const replaceCurrentUrlHash = (hash: string): void => {
  if (globalThis.window === undefined) {
    return;
  }

  history.replaceState(undefined, "", `${getPagePathWithSearch()}${hash}`);
};
