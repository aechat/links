import {useEffect} from "react";

import {message} from "antd";

export const useSmartCopy = (isPageLoaded: boolean) => {
  useEffect(() => {
    if (!isPageLoaded) return;

    const handleCopy = (event: ClipboardEvent) => {
      const selection = globalThis.getSelection();

      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        return;
      }

      const openDetails = document.querySelectorAll("details[open]");

      if (openDetails.length === 0) {
        return;
      }

      const sources: {title: string; url: string}[] = [];

      for (const detail of openDetails) {
        const contentSection = detail.querySelector(".faq-section");

        if (contentSection && selection.containsNode(contentSection, true)) {
          const summary = detail.querySelector("summary");

          const titleElement = summary?.querySelector("h3");

          const numericAnchor = summary?.id;

          const textualAnchor = (detail as HTMLElement).dataset.anchor;

          const anchorToUse = textualAnchor || numericAnchor;

          const title =
            titleElement?.textContent?.replace(/^\d+\.\d+\.\s*/, "") || "Без названия";

          if (anchorToUse) {
            const url = new URL(globalThis.location.href);

            url.hash = anchorToUse;
            sources.push({title, url: url.toString()});
          }
        }
      }

      if (sources.length === 0) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const range = selection.getRangeAt(0);

      const temporaryDiv = document.createElement("div");

      temporaryDiv.append(range.cloneContents());

      const selectedHtml = temporaryDiv.innerHTML;

      const selectedText = selection.toString().trim();

      const pageTitle = document.title;

      let plainText: string;

      let html: string;

      const separatorPlain = "\n---\n";

      const separatorHtml = "<hr>";

      if (sources.length === 1) {
        const source = sources[0];

        plainText = `«${selectedText}»${separatorPlain}Взято из статьи «${source.title}» (${pageTitle})\n${source.url}`;
        html = `
          «${selectedHtml}»
          ${separatorHtml}
          <p>
            Взято из статьи <a href="${source.url}">«${source.title}»</a> (${pageTitle}).
          </p>
        `;
      } else {
        const sourcesText = sources.map((s) => `— «${s.title}»: ${s.url}`).join("\n");

        const sourcesHtml = sources
          .map((s) => `<li><a href="${s.url}">«${s.title}»</a></li>`)
          .join("");

        plainText = `«${selectedText}»${separatorPlain}Источники (${pageTitle}):\n${sourcesText}`;
        html = `
          «${selectedHtml}»
          ${separatorHtml}
          <p>Источники (${pageTitle}):</p>
          <ul>${sourcesHtml}</ul>
        `;
      }

      event.clipboardData?.setData("text/plain", plainText);
      event.clipboardData?.setData("text/html", html);
      message.success("Выделенный текст скопирован в буфер обмена");
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, [isPageLoaded]);
};
