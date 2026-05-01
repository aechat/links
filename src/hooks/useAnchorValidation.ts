import {useEffect} from "react";

import {message} from "antd";
import {useLocation} from "react-router-dom";

import {resolveDetailsByAnchor} from "../utils/anchorResolvers";
import {scrollToAnchorById} from "../utils/scrollToAnchor";
import {replaceCurrentUrlHash} from "../utils/urlHashUtilities";

interface Section {
  id: string;
}

const ANCHOR_VALIDATION_DELAY = 1000;

const ANCHOR_ALIGN_FALLBACK_DELAY = 450;

const isSectionAnchor = (sections: Section[], anchorId: string): boolean => {
  return sections.some((section) => section.id === anchorId);
};

export const useAnchorValidation = (sections: Section[], isPageLoaded: boolean) => {
  const {hash} = useLocation();

  useEffect(() => {
    if (!isPageLoaded) return;

    let firstAlignFrameId: number | undefined;

    let secondAlignFrameId: number | undefined;

    let alignFallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    let pendingAnchorId = "";

    const alignToPendingAnchor = () => {
      if (!pendingAnchorId) {
        return;
      }

      scrollToAnchorById(pendingAnchorId, {updateHash: false});
    };

    const scheduleSecondFrameAlign = () => {
      secondAlignFrameId = requestAnimationFrame(alignToPendingAnchor);
    };

    const alignAnchorAfterLayoutStabilization = (anchorId: string) => {
      pendingAnchorId = anchorId;

      firstAlignFrameId = requestAnimationFrame(scheduleSecondFrameAlign);

      alignFallbackTimeout = setTimeout(
        alignToPendingAnchor,
        ANCHOR_ALIGN_FALLBACK_DELAY
      );
    };

    const validateAnchors = () => {
      const currentAnchor = hash.slice(1);

      if (!currentAnchor) return;

      if (resolveDetailsByAnchor(currentAnchor)) {
        alignAnchorAfterLayoutStabilization(currentAnchor);

        return;
      }

      if (isSectionAnchor(sections, currentAnchor)) {
        scrollToAnchorById(currentAnchor);

        return;
      }

      const faqContainer = document.querySelector(".article-content");

      if (faqContainer) {
        message.error(
          "Не удалось найти статью по ссылке, возможно, она была перемещена или удалена."
        );

        replaceCurrentUrlHash("");
      }
    };

    const validationTimeout = setTimeout(validateAnchors, ANCHOR_VALIDATION_DELAY);

    return () => {
      clearTimeout(validationTimeout);

      if (firstAlignFrameId !== undefined) {
        cancelAnimationFrame(firstAlignFrameId);
      }

      if (secondAlignFrameId !== undefined) {
        cancelAnimationFrame(secondAlignFrameId);
      }

      if (alignFallbackTimeout !== undefined) {
        clearTimeout(alignFallbackTimeout);
      }
    };
  }, [hash, sections, isPageLoaded]);
};
