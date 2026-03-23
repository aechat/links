const escapeCssClassName = (className: string): string => {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(className);
  }

  return className.replaceAll(/[^a-zA-Z0-9_-]/g, String.raw`\$&`);
};

const ADDITION_STYLE_KEYS = [
  "addition-danger",
  "addition-info",
  "addition-tldr",
  "addition-warning",
] as const;

export const getAdditionContainerSelector = (
  additionStyles: Record<string, string | undefined>
): string => {
  const classNames = ADDITION_STYLE_KEYS.map((key) => additionStyles[key]).filter(
    Boolean
  );

  return classNames.map((className) => `.${escapeCssClassName(className)}`).join(", ");
};

export const wrapSnippetWithClosestAddition = (
  element: Element,
  snippetHtml: string,
  additionContainerSelector: string
): string => {
  const additionContainer = element.closest(additionContainerSelector);

  if (!additionContainer) {
    return snippetHtml;
  }

  const containerTag = additionContainer.tagName.toLowerCase();

  const containerClassName = additionContainer.getAttribute("class") || "";

  const containerAttributes = containerClassName ? ` class="${containerClassName}"` : "";

  return `<${containerTag}${containerAttributes}><div>${snippetHtml}</div></${containerTag}>`;
};

export const wrapSnippetWithAdditionContainer = (
  additionContainer: Element,
  snippetHtml: string
): string => {
  const containerTag = additionContainer.tagName.toLowerCase();

  const containerClassName = additionContainer.getAttribute("class") || "";

  const containerAttributes = containerClassName ? ` class="${containerClassName}"` : "";

  return `<${containerTag}${containerAttributes}><div>${snippetHtml}</div></${containerTag}>`;
};

export const applyAdditionSnippetStyles = (
  html: string,
  additionContainerSelector: string
): string => {
  if (!html || !additionContainerSelector) {
    return html;
  }

  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = html;

  for (const element of temporaryDiv.querySelectorAll(additionContainerSelector)) {
    if (element instanceof HTMLElement) {
      element.style.fontSize = "0.9rem";
      element.style.margin = "10px";

      if (element.closest("li")) {
        element.style.marginInline = "0";
      }
    }
  }

  return temporaryDiv.innerHTML;
};

export const getTopLevelAdditionContainer = (
  element: Element,
  rootDetail: Element,
  additionContainerSelector: string
): Element | undefined => {
  let additionContainer: Element | null = element.closest(additionContainerSelector);

  if (additionContainer === null) {
    return;
  }

  while (additionContainer.parentElement !== null) {
    const parentAdditionContainer: Element | null =
      additionContainer.parentElement.closest(additionContainerSelector);

    if (!parentAdditionContainer || !rootDetail.contains(parentAdditionContainer)) {
      break;
    }

    additionContainer = parentAdditionContainer;
  }

  return additionContainer ?? undefined;
};

export const buildAdditionsHtml = (
  detail: Element,
  additionContainerSelector: string
): string => {
  const additions = [...detail.querySelectorAll(additionContainerSelector)].filter(
    (addition) => {
      const parentAddition = addition.parentElement?.closest(additionContainerSelector);

      return !parentAddition || !detail.contains(parentAddition);
    }
  );

  const htmlParts: string[] = [];

  for (const addition of additions) {
    const clone = addition.cloneNode(true) as Element;

    removeFigureContainers(clone);
    htmlParts.push(clone.outerHTML);
  }

  return htmlParts.filter(Boolean).join("\n");
};

const removeFigureContainers = (root: Element): void => {
  for (const element of root.querySelectorAll('[class*="media-figure"]')) {
    element.remove();
  }
};
