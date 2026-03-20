import {message} from "antd";

import {copyText} from "../../hooks/useCopyToClipboard";

export const normalizeAnchor = (anchor?: string): string => anchor?.trim() ?? "";

export const isFirstAnchorOccurrence = (
  detailsElement: HTMLDetailsElement,
  textualAnchor: string
): boolean => {
  const normalizedTextualAnchor = normalizeAnchor(textualAnchor);

  if (!normalizedTextualAnchor) {
    return false;
  }

  const detailsWithSameAnchor = [
    ...document.querySelectorAll<HTMLDetailsElement>("details[data-anchor]"),
  ].find(
    (details) => normalizeAnchor(details.dataset.anchor) === normalizedTextualAnchor
  );

  return detailsWithSameAnchor === detailsElement;
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
  if (globalThis.window === undefined) {
    return;
  }

  history.replaceState(
    undefined,
    "",
    globalThis.location.pathname + globalThis.location.search + hash
  );
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
