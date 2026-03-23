import {resolveDetailsByAnchor} from "../../../utils/anchorResolvers";
import {isMobileDevice} from "../../../utils/browserDetection";
import {scrollToElement} from "../../../utils/scrollToAnchor";

export const scrollSelectedResultIntoViewRuntime = ({
  behavior = "smooth",
  resultReferences,
  resultsContainer,
  selectedResultIndex,
}: {
  behavior?: ScrollBehavior;
  resultReferences: Array<HTMLButtonElement | null>;
  resultsContainer: HTMLDivElement | null;
  selectedResultIndex: number;
}): void => {
  if (selectedResultIndex < 0) {
    return;
  }

  if (isMobileDevice()) {
    return;
  }

  const selectedElement = resultReferences[selectedResultIndex];

  if (!resultsContainer || !selectedElement) {
    return;
  }

  const containerRect = resultsContainer.getBoundingClientRect();

  const elementRect = selectedElement.getBoundingClientRect();

  const absoluteElementTop =
    elementRect.top - containerRect.top + resultsContainer.scrollTop;

  const centeredTop =
    absoluteElementTop - (resultsContainer.clientHeight - elementRect.height) / 2;

  const maxScrollTop = Math.max(
    0,
    resultsContainer.scrollHeight - resultsContainer.clientHeight
  );

  const targetTop = Math.min(maxScrollTop, Math.max(0, centeredTop));

  resultsContainer.scrollTo({
    behavior,
    top: targetTop,
  });

  const verifyAndFallback = () => {
    const currentElement = resultReferences[selectedResultIndex];

    if (!resultsContainer || !currentElement) {
      return;
    }

    const currentContainerRect = resultsContainer.getBoundingClientRect();

    const currentElementRect = currentElement.getBoundingClientRect();

    const topGap = currentElementRect.top - currentContainerRect.top;

    const bottomGap = currentContainerRect.bottom - currentElementRect.bottom;

    const isOutOfView = topGap < 8 || bottomGap < 8;

    if (isOutOfView) {
      currentElement.scrollIntoView({
        behavior,
        block: "center",
        inline: "nearest",
      });
    }
  };

  globalThis.requestAnimationFrame(verifyAndFallback);
};

export const openSearchAnchorRuntime = ({
  anchorValue,
  closeModal,
}: {
  anchorValue: string;
  closeModal: () => void;
}): void => {
  const resolvedDetails = resolveDetailsByAnchor(anchorValue);

  if (resolvedDetails) {
    const summaryElement = resolvedDetails.querySelector("summary");

    if (!(summaryElement instanceof HTMLElement) || !summaryElement.id) {
      return;
    }

    if (!resolvedDetails.hasAttribute("open")) {
      resolvedDetails.setAttribute("open", "true");
    }

    scrollToElement(summaryElement);

    const event = new CustomEvent("open-spoiler-by-id", {
      detail: {id: summaryElement.id},
    });

    globalThis.dispatchEvent(event);

    setTimeout(() => {
      closeModal();
    }, 0);

    return;
  }

  const targetElement = document.getElementById(anchorValue);

  if (!targetElement) {
    return;
  }

  scrollToElement(targetElement);

  setTimeout(() => {
    closeModal();
  }, 0);
};
