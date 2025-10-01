import {useEffect} from "react";

export const useExternalLinks = () => {
  useEffect(() => {
    const processLinks = () => {
      const containers = Array.from(
        document.querySelectorAll(".faq-container, .ant-modal")
      );
      containers.forEach((container) => {
        const links = Array.from(container.querySelectorAll("a[href]"));
        links.forEach((link) => {
          const a = link as HTMLAnchorElement;

          const href = a.getAttribute("href");

          if (!href) {
            return;
          }

          if (/^https?:\/\//.test(href)) {
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noreferrer");
          }
        });
      });
    };
    processLinks();

    const observer = new MutationObserver(processLinks);
    observer.observe(document.body, {childList: true, subtree: true});

    return () => observer.disconnect();
  }, []);
};
