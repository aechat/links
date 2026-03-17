import {useEffect} from "react";

import {message} from "antd";

export const useSmartCopy = (isPageLoaded: boolean) => {
  useEffect(() => {
    if (!isPageLoaded) return;

    const getClosestElement = (node: Node | null): Element | undefined => {
      if (!node) {
        return undefined;
      }

      return node instanceof Element ? node : node.parentElement || undefined;
    };

    const isNonSummaryMarkSelection = (range: Range): boolean => {
      const startElement = getClosestElement(range.startContainer);

      const endElement = getClosestElement(range.endContainer);

      const startMark = startElement?.closest("mark");

      const endMark = endElement?.closest("mark");

      if (
        startMark &&
        endMark &&
        startMark === endMark &&
        !startMark.closest("summary")
      ) {
        return true;
      }

      const temporaryDiv = document.createElement("div");

      temporaryDiv.append(range.cloneContents());

      const marks = [...temporaryDiv.querySelectorAll("mark")].filter(
        (markElement) => !markElement.closest("summary")
      );

      if (marks.length === 0) {
        return false;
      }

      const cleanedSelection = temporaryDiv.cloneNode(true) as HTMLDivElement;

      for (const markElement of cleanedSelection.querySelectorAll("mark")) {
        if (!markElement.closest("summary")) {
          markElement.remove();
        }
      }

      const remainingText = (cleanedSelection.textContent || "").replaceAll(/\s+/g, "");

      return remainingText.length === 0;
    };

    const collectSources = (selection: Selection): {url: string}[] => {
      const openDetails = document.querySelectorAll("details[open]");

      if (openDetails.length === 0) {
        return [];
      }

      const sources: {url: string}[] = [];

      for (const detail of openDetails) {
        const contentSection = detail.querySelector(".details-nested-section");

        if (contentSection && selection.containsNode(contentSection, true)) {
          const summary = detail.querySelector("summary");

          const numericAnchor = summary?.id;

          const textualAnchor = (detail as HTMLElement).dataset.anchor;

          const anchorToUse = textualAnchor || numericAnchor;

          if (anchorToUse) {
            const url = new URL(globalThis.location.href);

            url.hash = anchorToUse;
            sources.push({url: url.toString()});
          }
        }
      }

      return sources;
    };

    const buildClipboardContent = (
      selectedHtml: string,
      selectedText: string,
      sources: {url: string}[]
    ): {html: string; plainText: string} => {
      const separatorPlain = "\n---\n";

      const separatorHtml = "<hr>";

      if (sources.length === 1) {
        const source = sources[0];

        return {
          html: `
          ${selectedHtml}
          ${separatorHtml}
          <p>Взято из статьи <a href="${source.url}">${source.url}</a>.</p>
        `,
          plainText: `${selectedText}${separatorPlain}Взято из статьи ${source.url}`,
        };
      }

      const sourcesText = sources.map((source) => source.url).join("\n");

      const sourcesHtml = sources
        .map((source) => `<li><a href="${source.url}">${source.url}</a></li>`)
        .join("");

      return {
        html: `
          ${selectedHtml}
          ${separatorHtml}
          <p>Взято из статей:</p>
          <ul>${sourcesHtml}</ul>
        `,
        plainText: `${selectedText}${separatorPlain}Взято из статей:\n${sourcesText}`,
      };
    };

    const applySmartCopy = (
      event: ClipboardEvent,
      selection: Selection,
      range: Range
    ) => {
      const sources = collectSources(selection);

      if (sources.length === 0) {
        return false;
      }

      event.preventDefault();
      event.stopPropagation();

      const temporaryDiv = document.createElement("div");

      temporaryDiv.append(range.cloneContents());

      const selectedHtml = temporaryDiv.innerHTML;

      const selectedText = selection.toString().trim();

      const {html, plainText} = buildClipboardContent(
        selectedHtml,
        selectedText,
        sources
      );

      event.clipboardData?.setData("text/plain", plainText);
      event.clipboardData?.setData("text/html", html);

      return true;
    };

    const handleCopy = (event: ClipboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      let shouldShowCopySuccess = false;

      const selection = globalThis.getSelection();

      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        return;
      }

      const range = selection.getRangeAt(0);

      shouldShowCopySuccess = isNonSummaryMarkSelection(range)
        ? true
        : applySmartCopy(event, selection, range);

      if (shouldShowCopySuccess) {
        message.success("Выделенный текст скопирован в буфер обмена");
      }
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, [isPageLoaded]);
};
