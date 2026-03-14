import {useEffect} from "react";

import {message} from "antd";
import {useLocation} from "react-router-dom";

import {resolveDetailsByAnchor} from "../utils/anchorResolvers";
import {scrollToAnchorById} from "../utils/scrollToAnchor";

interface Section {
  id: string;
}

export const useAnchorValidation = (sections: Section[], isPageLoaded: boolean) => {
  const {hash} = useLocation();

  useEffect(() => {
    if (!isPageLoaded) return;

    const validateAnchors = () => {
      const currentAnchor = hash.slice(1);

      if (!currentAnchor) return;

      if (resolveDetailsByAnchor(currentAnchor)) {
        return;
      }

      const isCategoryAnchor = sections.some((section) => section.id === currentAnchor);

      if (isCategoryAnchor) {
        scrollToAnchorById(currentAnchor);

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
