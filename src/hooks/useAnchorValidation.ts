import {useEffect} from "react";

import {useLocation} from "react-router-dom";

import {message} from "antd";

interface Section {
  id: string;
}

export const useAnchorValidation = (sections: Section[], isPageLoaded: boolean) => {
  const {hash} = useLocation();
  useEffect(() => {
    if (!isPageLoaded) return;

    const currentAnchor = hash.slice(1);

    if (!currentAnchor) return;

    const isCategoryAnchor = sections.some((section) => section.id === currentAnchor);

    if (isCategoryAnchor) {
      return;
    }

    const isSpoilerAnchor =
      document.getElementById(currentAnchor) ||
      document.querySelector(`details[data-anchor="${currentAnchor}"]`);

    if (isSpoilerAnchor) {
      return;
    }

    const faqContainer = document.querySelector(".faq-content");

    if (faqContainer) {
      message.error(
        "Не удалось найти статью по ссылке, возможно, она была перемещена или удалена."
      );
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, [hash, sections, isPageLoaded]);
};
