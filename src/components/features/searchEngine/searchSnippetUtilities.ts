import type {CompiledSearchQuery} from "./searchQueryCore";

type SearchMatch = {
  result: string;
  matchCount: number;
};

type SnippetFormattingDependencies = {
  additionContainerSelector: string;
  applyAdditionSnippetStyles: (html: string, additionContainerSelector: string) => string;
  extractKeyCombinationText: (element: Element) => string;
  extractMatchingLine: (content: string, query: string) => string;
  getCompactSnippetScore: (html: string, compiledQuery: CompiledSearchQuery) => number;
  hasMatch: (text: string, compiledQuery: CompiledSearchQuery) => boolean;
  stripHtml: (html: string) => string;
  wrapSnippetWithAdditionContainer: (
    additionContainer: Element,
    snippetHtml: string
  ) => string;
  wrapSnippetWithClosestAddition: (
    element: Element,
    snippetHtml: string,
    additionContainerSelector: string
  ) => string;
};

const MAX_COMPACT_SNIPPET_TEXT_LENGTH = 780;

const processTextNode = (
  node: Text,
  compiledQuery: CompiledSearchQuery,
  hasMatch: SnippetFormattingDependencies["hasMatch"]
): string => {
  const text = node.textContent || "";

  return hasMatch(text, compiledQuery) ? text : "";
};

const isListOrParagraph = (element: Element): boolean => {
  const tag = element.tagName;

  return tag === "LI" || tag === "P";
};

const removeNestedDetailsContainers = (root: Element): void => {
  for (const nestedDetails of root.querySelectorAll(
    'details[data-nested-details-summary="true"], details.details-nested, .details-nested'
  )) {
    nestedDetails.remove();
  }
};

const cloneWithoutFigures = (element: Element): Element => {
  const clone = element.cloneNode(true) as Element;

  for (const element_ of clone.querySelectorAll('[class*="media-figure"]')) {
    element_.remove();
  }

  removeNestedDetailsContainers(clone);

  return clone;
};

const handleListWithNestedMatches = (
  element: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): SearchMatch => {
  const ul = element.querySelector("ul");

  if (!ul) {
    const clone = cloneWithoutFigures(element);

    return {
      matchCount: 1,
      result: dependencies.wrapSnippetWithClosestAddition(
        element,
        clone.outerHTML,
        dependencies.additionContainerSelector
      ),
    };
  }

  const nestedItems = [...ul.querySelectorAll("li")];

  const matchingNestedItems = nestedItems.filter((item) =>
    dependencies.hasMatch(item.textContent || "", compiledQuery)
  );

  const clone = cloneWithoutFigures(element);

  if (matchingNestedItems.length === 0) {
    return {
      matchCount: 1,
      result: dependencies.wrapSnippetWithClosestAddition(
        element,
        clone.outerHTML,
        dependencies.additionContainerSelector
      ),
    };
  }

  const newUl = document.createElement("ul");

  for (const item of matchingNestedItems) {
    const nestedItemClone = cloneWithoutFigures(item);

    newUl.append(nestedItemClone);
  }

  const oldUl = clone.querySelector("ul");

  if (oldUl) {
    oldUl.replaceWith(newUl);
  }

  return {
    matchCount: matchingNestedItems.length + 1,
    result: dependencies.wrapSnippetWithClosestAddition(
      element,
      clone.outerHTML,
      dependencies.additionContainerSelector
    ),
  };
};

const processContainerChildren = (
  element: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): SearchMatch => {
  let result = "";

  let matchCount = 0;

  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const textResult = processTextNode(
        node as Text,
        compiledQuery,
        dependencies.hasMatch
      );

      if (textResult) {
        result += textResult;
        matchCount += 1;
      }

      continue;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const elementNode = node as Element;

      if (elementNode.classList.toString().includes("media-figure")) {
        continue;
      }

      const elementResult = processElement(elementNode, compiledQuery, dependencies);

      if (elementResult.result) {
        result += elementResult.result;
        matchCount += elementResult.matchCount;
      }
    }
  }

  return {matchCount, result};
};

const processElement = (
  element: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): SearchMatch => {
  if (isListOrParagraph(element)) {
    const sanitizedElement = cloneWithoutFigures(element);

    const fullText = (sanitizedElement as HTMLElement).textContent || "";

    if (!dependencies.hasMatch(fullText, compiledQuery)) {
      return {matchCount: 0, result: ""};
    }

    if (element.tagName === "LI") {
      return handleListWithNestedMatches(element, compiledQuery, dependencies);
    }

    return {
      matchCount: 1,
      result: dependencies.wrapSnippetWithClosestAddition(
        element,
        sanitizedElement.outerHTML,
        dependencies.additionContainerSelector
      ),
    };
  }

  return processContainerChildren(element, compiledQuery, dependencies);
};

const processTable = (
  table: HTMLTableElement,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): string | undefined => {
  const rows = [...table.querySelectorAll("tr")];

  const matchingRows = rows.filter((row) => {
    const cells = [...row.querySelectorAll("td")];

    return cells.some((cell) => {
      const cellText = dependencies.extractKeyCombinationText(cell);

      return dependencies.hasMatch(cellText, compiledQuery);
    });
  });

  if (matchingRows.length > 0) {
    const newTable = document.createElement("table");

    const thead = table.querySelector("thead");

    if (thead) {
      newTable.append(thead.cloneNode(true));
    }

    const tbody = document.createElement("tbody");

    for (const row of matchingRows) {
      tbody.append(row.cloneNode(true));
    }

    newTable.append(tbody);

    return newTable.outerHTML;
  }

  return undefined;
};

const getFirstCleanParagraphOrElement = (root: Element): string => {
  const firstParagraph = root.querySelector("details > p, details > div > p");

  if (firstParagraph) {
    const cleanedParagraph = firstParagraph.cloneNode(true) as Element;

    for (const element of cleanedParagraph.querySelectorAll('[class*="media-figure"]')) {
      element.remove();
    }

    return cleanedParagraph.outerHTML;
  }

  const firstElement = root.firstElementChild;

  if (firstElement) {
    const cleanedElement = firstElement.cloneNode(true) as Element;

    for (const element of cleanedElement.querySelectorAll('[class*="media-figure"]')) {
      element.remove();
    }

    return cleanedElement.outerHTML;
  }

  return "";
};

const isKeyCombinationTablePresent = (tables: NodeListOf<HTMLTableElement>): boolean => {
  return [...tables].some((table) => {
    const headers = [...table.querySelectorAll("th")];

    return headers.some((th) => {
      const text = th.textContent?.toLowerCase() || "";

      return text.includes("комбинация") || text.includes("действие");
    });
  });
};

const pickBestListOrParagraphMatch = (
  root: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): SearchMatch => {
  let bestResult: SearchMatch = {matchCount: 0, result: ""};

  const listItems = root.querySelectorAll("ul > li");

  for (const item of listItems) {
    const itemResult = processElement(item, compiledQuery, dependencies);

    if (itemResult.matchCount > bestResult.matchCount) {
      bestResult = itemResult;
    }
  }

  if (!bestResult.result) {
    const paragraphs = root.querySelectorAll("p");

    for (const paragraph of paragraphs) {
      const paragraphResult = processElement(paragraph, compiledQuery, dependencies);

      if (paragraphResult.matchCount > bestResult.matchCount) {
        bestResult = paragraphResult;
      }
    }
  }

  return bestResult;
};

const pickTableOrFallback = (
  root: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): string => {
  const tables = root.querySelectorAll("table");

  if (tables.length > 0) {
    if (compiledQuery.isKeyCombination && isKeyCombinationTablePresent(tables)) {
      for (const table of tables) {
        const tableResult = processTable(table, compiledQuery, dependencies);

        if (tableResult) {
          return tableResult;
        }
      }
    }

    return tables[0].outerHTML;
  }

  return getFirstCleanParagraphOrElement(root);
};

const pickBestCompactSnippet = (
  root: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): string | undefined => {
  const candidates = root.querySelectorAll("p, li");

  let bestHtml: string | undefined;

  let bestScore = Number.NEGATIVE_INFINITY;

  for (const candidate of candidates) {
    const processedCandidate = processElement(candidate, compiledQuery, dependencies);

    if (!processedCandidate.result) {
      continue;
    }

    let candidateHtml = processedCandidate.result;

    const additionContainer = candidate.closest(dependencies.additionContainerSelector);

    if (additionContainer) {
      candidateHtml = dependencies.wrapSnippetWithAdditionContainer(
        additionContainer,
        candidateHtml
      );
    }

    if (dependencies.stripHtml(candidateHtml).length > MAX_COMPACT_SNIPPET_TEXT_LENGTH) {
      const compactLineHtml = dependencies.extractMatchingLine(
        candidateHtml,
        compiledQuery.searchWords.join(" ")
      );

      candidateHtml = additionContainer
        ? dependencies.wrapSnippetWithAdditionContainer(
            additionContainer,
            compactLineHtml
          )
        : compactLineHtml;
    }

    const candidateScore = dependencies.getCompactSnippetScore(
      candidateHtml,
      compiledQuery
    );

    if (candidateScore > bestScore) {
      bestScore = candidateScore;
      bestHtml = candidateHtml;
    }
  }

  return bestHtml;
};

export const formatSearchSnippetResult = (
  text: string,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): string => {
  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = text;

  for (const element of temporaryDiv.querySelectorAll(
    ".ant-divider, .ant-divider-inner-text"
  )) {
    element.remove();
  }

  const tagMatch = (temporaryDiv.querySelector("[data-tags]") as HTMLElement)?.dataset
    .tags;

  const titleMatch = temporaryDiv.querySelector("summary h2")?.textContent;

  if (
    (tagMatch && dependencies.hasMatch(tagMatch, compiledQuery)) ||
    (titleMatch && dependencies.hasMatch(titleMatch, compiledQuery))
  ) {
    return dependencies.applyAdditionSnippetStyles(
      getFirstCleanParagraphOrElement(temporaryDiv),
      dependencies.additionContainerSelector
    );
  }

  const bestCompactSnippet = pickBestCompactSnippet(
    temporaryDiv,
    compiledQuery,
    dependencies
  );

  if (bestCompactSnippet) {
    return dependencies.applyAdditionSnippetStyles(
      bestCompactSnippet,
      dependencies.additionContainerSelector
    );
  }

  const bestResult = pickBestListOrParagraphMatch(
    temporaryDiv,
    compiledQuery,
    dependencies
  );

  if (!bestResult.result) {
    return dependencies.applyAdditionSnippetStyles(
      pickTableOrFallback(temporaryDiv, compiledQuery, dependencies),
      dependencies.additionContainerSelector
    );
  }

  return dependencies.applyAdditionSnippetStyles(
    bestResult.result,
    dependencies.additionContainerSelector
  );
};
