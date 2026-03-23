type ListContentDependencies = {
  additionContainerSelector: string;
  getTopLevelAdditionContainer: (
    element: Element,
    rootDetail: Element,
    additionContainerSelector: string
  ) => Element | undefined;
  normalizeText: (text: string) => string;
  stripHtml: (html: string) => string;
};

type TableContentDependencies = {
  decodeHtmlEntities: (text: string) => string;
  normalizeKeyCombination: (text: string) => string;
};

export const collectDividerTexts = (detail: Element): string[] => {
  return [...detail.querySelectorAll(".ant-divider-inner-text")]
    .map((element) => element.textContent?.trim() || "")
    .filter(Boolean);
};

export const collectFlexibleLinksTexts = (detail: Element): string[] => {
  return [...detail.querySelectorAll(".flexible-links a")]
    .map((element) => element.textContent?.trim() || "")
    .filter(Boolean);
};

export const collectLinkHrefs = (detail: Element): string[] => {
  return [...detail.querySelectorAll("a[href]")]
    .map((element) => element.getAttribute("href")?.trim() || "")
    .filter(Boolean);
};

export const buildParagraphsHtml = (detail: Element): string => {
  const paragraphs = [...detail.querySelectorAll<HTMLParagraphElement>("p")];

  const htmlParts: string[] = [];

  for (const paragraph of paragraphs) {
    const clone = paragraph.cloneNode(true) as Element;

    removeFigureContainers(clone);
    htmlParts.push(clone.outerHTML);
  }

  return htmlParts.filter(Boolean).join("\n");
};

const isKeyCombinationWords = (searchWords: string[]): boolean => {
  return searchWords.some(
    (word) =>
      word.includes("ctrl") ||
      word.includes("alt") ||
      word.includes("shift") ||
      word.includes("win") ||
      word.includes("cmd")
  );
};

const checkKeyCombinationMatch = (
  clonedRow: HTMLTableRowElement,
  searchWords: string[],
  normalizeKeyCombination: (text: string) => string
): boolean => {
  const searchPattern = normalizeKeyCombination(searchWords.join(" "));

  const rowText = [...clonedRow.cells]
    .map((cell) => {
      const keyElements = cell.querySelectorAll("mark.key");

      if (keyElements.length > 0) {
        return [...keyElements]
          .map((element) => element.textContent?.toLowerCase() || "")
          .join(" ");
      }

      return cell.textContent?.toLowerCase() || "";
    })
    .join(" ");

  const normalizedRowText = normalizeKeyCombination(rowText);

  return normalizedRowText.includes(searchPattern);
};

const checkGeneralMatch = (
  clonedRow: HTMLTableRowElement,
  searchWords: string[]
): boolean => {
  const rowHtml = clonedRow.innerHTML.toLowerCase();

  return searchWords.every((word) => rowHtml.includes(word.toLowerCase()));
};

const getExcludedColumnIndices = (table: HTMLTableElement): Set<number> => {
  return new Set(
    [...table.querySelectorAll("th")]
      .map((th, index) =>
        th.textContent?.toLowerCase().includes("описание") ? index : -1
      )
      .filter((index) => index !== -1)
  );
};

const getFilteredTableRows = (table: HTMLTableElement): HTMLTableRowElement[] => {
  return [...table.querySelectorAll("tr")].filter((row) => {
    let parent = row.parentElement;

    while (parent) {
      if (parent.tagName.toLowerCase() === "thead") {
        return false;
      }

      parent = parent.parentElement;
    }

    return true;
  }) as HTMLTableRowElement[];
};

const extractTableHeaders = (
  table: HTMLTableElement,
  decodeHtmlEntities: (text: string) => string
): string[] => {
  return [...table.querySelectorAll("th")]
    .map((th) => decodeHtmlEntities(th.textContent?.trim() ?? ""))
    .filter((header) => !header.toLowerCase().includes("описание"));
};

const processTableRow = (
  row: HTMLTableRowElement,
  excludedColumns: Set<number>,
  keyCombo: boolean,
  searchWords: string[],
  normalizeKeyCombination: (text: string) => string
): string | undefined => {
  const clonedRow = row.cloneNode(true) as HTMLTableRowElement;

  for (const [index, cell] of [...clonedRow.cells].entries()) {
    if (excludedColumns.has(index)) {
      cell.remove();
    }
  }

  if (clonedRow.cells.length === 0) {
    return undefined;
  }

  const hasMatch = keyCombo
    ? checkKeyCombinationMatch(clonedRow, searchWords, normalizeKeyCombination)
    : checkGeneralMatch(clonedRow, searchWords);

  return hasMatch ? clonedRow.outerHTML : undefined;
};

export const buildTableGroupsHtml = (
  detail: Element,
  searchWords: string[],
  dependencies: TableContentDependencies
): string => {
  const tableGroups: Record<string, string[]> = {};

  const tables = [...detail.querySelectorAll<HTMLTableElement>("table")];

  const keyCombo = isKeyCombinationWords(searchWords);

  for (const table of tables) {
    const headers = extractTableHeaders(table, dependencies.decodeHtmlEntities);

    const headerKey = headers.join("|");

    const allRows = getFilteredTableRows(table);

    const excludedColumns = getExcludedColumnIndices(table);

    const processedRows = allRows
      .map((row) =>
        processTableRow(
          row,
          excludedColumns,
          keyCombo,
          searchWords,
          dependencies.normalizeKeyCombination
        )
      )
      .filter(Boolean) as string[];

    if (processedRows.length > 0) {
      tableGroups[headerKey] ??= [];
      tableGroups[headerKey].push(...processedRows);
    }
  }

  return Object.entries(tableGroups)
    .map(([headerKey, rows]) => {
      const headers = headerKey.split("|").filter(Boolean);

      let headerRow = "";

      if (headers.length > 0) {
        const headersHtml = headers.map((header) => `<th>${header}</th>`).join("");

        headerRow = `<thead><tr>${headersHtml}</tr></thead>`;
      }

      return `<table>${headerRow}${rows.join("")}</table>`;
    })
    .join("");
};

export const buildListContentHtml = (
  detail: Element,
  searchWords: string[],
  dependencies: ListContentDependencies
): string => {
  const uls = [...detail.querySelectorAll<HTMLUListElement>("ul")];

  const parts: string[] = [];

  const addedParts = new Set<string>();

  for (const ul of uls) {
    const ulClone = ul.cloneNode(true) as Element;

    removeFigureContainers(ulClone);

    const ulText = dependencies.stripHtml(ulClone.outerHTML);

    const normalizedUlText = dependencies.normalizeText(ulText);

    const hasMatch =
      searchWords.length === 0 ||
      searchWords.some((word) =>
        normalizedUlText.includes(dependencies.normalizeText(word))
      );

    if (!hasMatch) {
      continue;
    }

    const additionContainer = dependencies.getTopLevelAdditionContainer(
      ul,
      detail,
      dependencies.additionContainerSelector
    );

    if (additionContainer) {
      const additionClone = additionContainer.cloneNode(true) as Element;

      removeFigureContainers(additionClone);

      const additionHtml = additionClone.outerHTML;

      if (!addedParts.has(additionHtml)) {
        parts.push(additionHtml);
        addedParts.add(additionHtml);
      }

      continue;
    }

    const ulHtml = ulClone.outerHTML;

    if (!addedParts.has(ulHtml)) {
      parts.push(ulHtml);
      addedParts.add(ulHtml);
    }
  }

  return parts.filter(Boolean).join("\n");
};

const removeFigureContainers = (root: Element): void => {
  for (const element of root.querySelectorAll('[class*="media-figure"]')) {
    element.remove();
  }
};
