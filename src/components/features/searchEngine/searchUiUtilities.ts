import {type SearchResult} from "./SearchState";

export const hasTableInContent = (contentHtml: string): boolean => {
  return contentHtml.includes("<table");
};

const HOVER_GROWTH_PX = 6;

const ACTIVE_GROWTH_PX = 3;

const getScaleValue = (dimension: number, growthPx: number): number => {
  const safeDimension = Math.max(dimension, 1);

  return (safeDimension + growthPx) / safeDimension;
};

export const applySearchResultScaleVariables = (element: HTMLButtonElement): void => {
  const width = element.offsetWidth;

  const height = element.offsetHeight;

  const baseDimension = Math.max(width, height);

  const hoverScale = getScaleValue(baseDimension, HOVER_GROWTH_PX);

  const activeScale = getScaleValue(baseDimension, ACTIVE_GROWTH_PX);

  element.style.setProperty("--links-hover-scale-x", hoverScale.toFixed(6));
  element.style.setProperty("--links-hover-scale-y", hoverScale.toFixed(6));
  element.style.setProperty("--links-active-scale-x", activeScale.toFixed(6));
  element.style.setProperty("--links-active-scale-y", activeScale.toFixed(6));
};

export const getRippleButtonTarget = (
  event: React.MouseEvent | React.TouchEvent
): HTMLElement | undefined => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const button = target.closest("button");

  if (button instanceof HTMLElement) {
    return button;
  }
};

export type SearchResultEntry = {
  index: number;
  result: SearchResult;
};

export const getSearchResultColumns = (
  resultEntries: SearchResultEntry[],
  isSingleColumnLayout: boolean
): SearchResultEntry[][] => {
  if (isSingleColumnLayout) {
    return [resultEntries];
  }

  const columns: SearchResultEntry[][] = [[], []];

  for (const [entryIndex, entry] of resultEntries.entries()) {
    columns[entryIndex % 2].push(entry);
  }

  return columns;
};
