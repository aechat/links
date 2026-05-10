import {applyInteractiveScaleVariables} from "../../../utilities/interactiveScaleUtilities";

import {type SearchResult} from "./SearchState";

export const hasTableInContent = (contentHtml: string): boolean => {
  return contentHtml.includes("<table");
};

export const applySearchResultScaleVariables = (element: HTMLButtonElement): void => {
  applyInteractiveScaleVariables(element);
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
