import {useEffect, useRef} from "react";

import {message} from "antd";

import {useLocation} from "react-router-dom";

import {resolveDetailsByAnchor} from "../utilities/anchorResolvers";

import {scrollToAnchorById} from "../utilities/scrollToAnchor";

import {replaceCurrentUrlHash} from "../utilities/urlHashUtilities";

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

  const lastValidatedHashReference = useRef<string>("");

  useEffect(() => {
    if (!isPageLoaded) return;

    const currentAnchor = hash.slice(1);

    if (!currentAnchor) {
      lastValidatedHashReference.current = "";

      return;
    }

    if (lastValidatedHashReference.current === hash) {
      return;
    }

    lastValidatedHashReference.current = hash;

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

    let attempts = 0;

    const MAX_ATTEMPTS = 15;

    const ATTEMPT_INTERVAL = 200;

    let validationTimeout: ReturnType<typeof setTimeout> | undefined;

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

      if (attempts < MAX_ATTEMPTS) {
        attempts++;
        validationTimeout = setTimeout(validateAnchors, ATTEMPT_INTERVAL);

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

    validationTimeout = setTimeout(validateAnchors, ANCHOR_VALIDATION_DELAY);

    return () => {
      if (validationTimeout !== undefined) {
        clearTimeout(validationTimeout);
      }

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
