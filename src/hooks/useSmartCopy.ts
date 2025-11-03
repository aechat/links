import {message} from "antd";

import {useEffect} from "react";

export const useSmartCopy = (isPageLoaded: boolean) => {
  useEffect(() => {
    if (!isPageLoaded) return;

    const handleCopy = (event: ClipboardEvent) => {
      const selection = window.getSelection();

      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        return;
      }

      const openDetails = document.querySelectorAll("details[open]");

      if (openDetails.length === 0) {
        return;
      }

      const sources: {title: string; url: string}[] = [];
      openDetails.forEach((detail) => {
        const contentSection = detail.querySelector(".faq-section");

        if (contentSection && selection.containsNode(contentSection, true)) {
          const summary = detail.querySelector("summary");

          const titleEl = summary?.querySelector("h3");

          const anchorId = summary?.id;

          const title =
            titleEl?.textContent?.replace(/^\d+\.\d+\.\s*/, "") || "Без названия";

          if (anchorId) {
            const url = new URL(window.location.href);
            url.hash = anchorId;
            sources.push({title, url: url.toString()});
          }
        }
      });

      if (sources.length === 0) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const range = selection.getRangeAt(0);

      const tempDiv = document.createElement("div");
      tempDiv.appendChild(range.cloneContents());

      const selectedHtml = tempDiv.innerHTML;

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
