import {message} from "antd";

import {copyText} from "../../utilities/copyUtilities";

import {replaceCurrentUrlHash} from "../../utilities/urlHashUtilities";

export const normalizeAnchor = (anchor?: string): string => anchor?.trim() ?? "";

let lastCacheTime = 0;

const cachedFirstOccurrences = new Map<string, HTMLDetailsElement>();

export const isElementHiddenByFilter = (element: HTMLElement): boolean => {
  const filterContainer = element.closest<HTMLElement>('[class*="change-os-content"]');

  if (filterContainer) {
    return filterContainer.style.display === "none";
  }

  return false;
};

export const isFirstAnchorOccurrence = (
  detailsElement: HTMLDetailsElement,
  textualAnchor: string
): boolean => {
  const normalizedTextualAnchor = normalizeAnchor(textualAnchor);

  if (!normalizedTextualAnchor) {
    return false;
  }

  const now = performance.now();

  if (now - lastCacheTime > 50) {
    cachedFirstOccurrences.clear();

    const elements =
      document.querySelectorAll<HTMLDetailsElement>("details[data-anchor]");

    for (const element of elements) {
      const normalizedElementAnchor = normalizeAnchor(element.dataset.anchor);

      if (isElementHiddenByFilter(element)) {
        continue;
      }

      if (
        normalizedElementAnchor &&
        !cachedFirstOccurrences.has(normalizedElementAnchor)
      ) {
        cachedFirstOccurrences.set(normalizedElementAnchor, element);
      }
    }

    lastCacheTime = now;
  }

  if (isElementHiddenByFilter(detailsElement)) {
    return true;
  }

  return cachedFirstOccurrences.get(normalizedTextualAnchor) === detailsElement;
};

export const throwDuplicateAnchorError = (anchor: string, componentName: string) => {
  const normalizedAnchor = normalizeAnchor(anchor);

  if (!normalizedAnchor) {
    return;
  }

  throw new Error(
    `Дублирующийся anchor "${normalizedAnchor}" в ${componentName}. Якорь должен быть уникальным.`
  );
};

export const replaceUrlHash = (hash: string) => {
  replaceCurrentUrlHash(hash);
};

interface CopyAnchorLinkOptions {
  anchorToCopy: string;
  successMessage: string;
}

export const copyAnchorLink = async ({
  anchorToCopy,
  successMessage,
}: CopyAnchorLinkOptions): Promise<boolean> => {
  if (!anchorToCopy) {
    message.warning("Дождитесь полной загрузки страницы, прежде чем копировать ссылку");

    return false;
  }

  if (globalThis.window === undefined) {
    return false;
  }

  const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${anchorToCopy}`;

  const success = await copyText(anchorUrl);

  if (success) {
    message.success(successMessage);
  } else {
    message.error("Не удалось скопировать ссылку");
  }

  return success;
};
