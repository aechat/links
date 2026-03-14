import {useEffect} from "react";

import {message} from "antd";
import {useLocation} from "react-router-dom";

interface Section {
  id: string;
}

const scrollToAnchorTarget = (targetElement: HTMLElement) => {
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

  const padding = 14;

  const y =
    targetElement.getBoundingClientRect().top +
    globalThis.pageYOffset -
    headerHeight -
    padding;

  globalThis.scrollTo({behavior: "smooth", top: y});
};

export const useAnchorValidation = (sections: Section[], isPageLoaded: boolean) => {
  const {hash} = useLocation();

  useEffect(() => {
    if (!isPageLoaded) return;

    const validateAnchors = () => {
      const currentAnchor = hash.slice(1);

      if (!currentAnchor) return;

      const spoilerByTextualAnchor = document.querySelector<HTMLDetailsElement>(
        `details[data-anchor="${currentAnchor}"]`
      );

      if (spoilerByTextualAnchor) {
        return;
      }

      const spoilerByNumericAnchor = document
        .getElementById(currentAnchor)
        ?.closest("details");

      if (spoilerByNumericAnchor) {
        return;
      }

      const isCategoryAnchor = sections.some((section) => section.id === currentAnchor);

      if (isCategoryAnchor) {
        const categoryElement = document.getElementById(currentAnchor);

        if (categoryElement) {
          scrollToAnchorTarget(categoryElement);
        }

        return;
      }

      const faqContainer = document.querySelector(".article-content");

      if (faqContainer) {
        message.error(
          "Не удалось найти статью по ссылке, возможно, она была перемещена или удалена."
        );

        history.replaceState(
          undefined,
          "",
          globalThis.location.pathname + globalThis.location.search
        );
      }
    };

    const validationTimeout = setTimeout(validateAnchors, 1000);

    return () => clearTimeout(validationTimeout);
  }, [hash, sections, isPageLoaded]);
};
