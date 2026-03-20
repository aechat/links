import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {Tooltip} from "antd";

import {useLongPress} from "../../hooks/useLongPress";
import {useRipple} from "../../hooks/useRipple";
import {triggerDisclosureHaptic} from "../../utils/haptics";
import {scrollToElement} from "../../utils/scrollToAnchor";
import {CopyButton} from "../ui/CopyButton";

import {
  copyAnchorLink,
  isFirstAnchorOccurrence,
  normalizeAnchor,
  replaceUrlHash,
  throwDuplicateAnchorError,
} from "./anchorUtilities";
import styles from "./NestedDetailsSummary.module.scss";
import {
  DetailsSummaryContext,
  NestedDetailsSummaryContext,
  SpoilerContext,
} from "./spoilerContexts";

interface NestedDetailsSummaryProperties {
  anchor?: string;
  children: ReactNode;
  modifierClass?: string;
  startOpen?: boolean;
  title: string;
}

const usePrevious = <T,>(value: T): T | undefined => {
  const reference = useRef<T | undefined>(undefined);

  useEffect(() => {
    reference.current = value;
  });

  return reference.current;
};

const constants = {
  ACTION_DELAY: 150,
  MOUSE_ENTER_DELAY: 750,
} as const;

const NestedDetailsSummary: React.FC<NestedDetailsSummaryProperties> = ({
  anchor,
  children,
  modifierClass,
  startOpen = false,
  title,
}) => {
  const isInDetailsSummary = useContext(DetailsSummaryContext);

  const isParentOpen = useContext(SpoilerContext);

  if (!isInDetailsSummary) {
    console.error(
      "Ошибка: NestedDetailsSummary должен быть вложен только в DetailsSummary."
    );

    return;
  }

  const [isOpen, setIsOpen] = useState(startOpen);

  const [displayAnchorId, setDisplayAnchorId] = useState("");

  const isOpenReference = useRef(isOpen);

  const ripple = useRipple<HTMLElement>({haptic: false});

  const detailsReference = useRef<HTMLDetailsElement>(null);

  const contentWrapperReference = useRef<HTMLDivElement>(null);

  const innerContentReference = useRef<HTMLDivElement>(null);

  const scrollTimeoutReference = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const handleSummaryClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const updateUrlHash = useCallback((hash: string) => {
    replaceUrlHash(hash);
  }, []);

  const getParentAnchorData = useCallback(() => {
    const nestedDetails = detailsReference.current;

    if (!nestedDetails) {
      return {parentSummaryId: "", parentTextualAnchor: ""};
    }

    const parentDetails = nestedDetails.parentElement?.closest(
      'details:not([data-nested-details-summary="true"])'
    );

    if (!(parentDetails instanceof HTMLDetailsElement)) {
      return {parentSummaryId: "", parentTextualAnchor: ""};
    }

    const parentSummary = parentDetails.querySelector("summary");

    return {
      parentSummaryId: parentSummary instanceof HTMLElement ? parentSummary.id || "" : "",
      parentTextualAnchor: normalizeAnchor(parentDetails.dataset.anchor),
    };
  }, []);

  const getEffectiveAnchor = useCallback(() => {
    const generatedAnchor = displayAnchorId;

    const textualAnchor = normalizeAnchor(anchor);

    if (!textualAnchor) {
      return generatedAnchor;
    }

    const detailsElement = detailsReference.current;

    if (
      !(detailsElement instanceof HTMLDetailsElement) ||
      !isFirstAnchorOccurrence(detailsElement, textualAnchor)
    ) {
      throwDuplicateAnchorError(textualAnchor, "NestedDetailsSummary");

      return generatedAnchor;
    }

    const {parentSummaryId, parentTextualAnchor} = getParentAnchorData();

    if (textualAnchor === parentTextualAnchor || textualAnchor === parentSummaryId) {
      throwDuplicateAnchorError(textualAnchor, "NestedDetailsSummary");

      return generatedAnchor;
    }

    return textualAnchor;
  }, [anchor, displayAnchorId, getParentAnchorData]);

  useEffect(() => {
    const detailsElement = detailsReference.current;

    const textualAnchor = normalizeAnchor(anchor);

    if (
      detailsElement instanceof HTMLDetailsElement &&
      textualAnchor &&
      !isFirstAnchorOccurrence(detailsElement, textualAnchor)
    ) {
      throwDuplicateAnchorError(textualAnchor, "NestedDetailsSummary");
    }
  }, [anchor]);

  const doScroll = useCallback(() => {
    const summary = detailsReference.current?.querySelector(
      `.${styles["details-nested-summary"]}`
    );

    if (summary) {
      clearTimeout(scrollTimeoutReference.current);

      scrollTimeoutReference.current = setTimeout(() => {
        scrollToElement(summary);
      }, constants.ACTION_DELAY);
    }
  }, []);

  useEffect(
    () => () => {
      clearTimeout(scrollTimeoutReference.current);
    },
    []
  );

  const previousIsOpen = usePrevious(isOpen);

  useEffect(() => {
    triggerDisclosureHaptic(isOpen, previousIsOpen);
  }, [isOpen, previousIsOpen]);

  useEffect(() => {
    isOpenReference.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    const justOpened = isOpen && !previousIsOpen;

    if (justOpened) {
      doScroll();
    }
  }, [isOpen, previousIsOpen, doScroll]);

  useEffect(() => {
    if (globalThis.window === undefined || !displayAnchorId) {
      return;
    }

    const justOpened = isOpen && !previousIsOpen;

    const currentHash = globalThis.location.hash.slice(1);

    const resolvedAnchor = getEffectiveAnchor();

    if (justOpened && resolvedAnchor && currentHash !== resolvedAnchor) {
      updateUrlHash(`#${resolvedAnchor}`);
    } else if (!isOpen && currentHash === resolvedAnchor) {
      const {parentSummaryId, parentTextualAnchor} = getParentAnchorData();

      const parentAnchor = parentTextualAnchor || parentSummaryId;

      updateUrlHash(parentAnchor ? `#${parentAnchor}` : "");
    }
  }, [
    displayAnchorId,
    getParentAnchorData,
    getEffectiveAnchor,
    isOpen,
    previousIsOpen,
    updateUrlHash,
  ]);

  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const {id} = (event as CustomEvent<{id: string}>).detail;

      const summaryElement = detailsReference.current?.querySelector(
        `.${styles["details-nested-summary"]}`
      );

      if (summaryElement && summaryElement.id === id) {
        if (isOpenReference.current) {
          doScroll();
        } else {
          setIsOpen(true);
        }
      }
    };

    globalThis.addEventListener("open-spoiler-by-id", handleOpenEvent);

    return () => globalThis.removeEventListener("open-spoiler-by-id", handleOpenEvent);
  }, [doScroll]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const nestedContentElement = innerContentReference.current;

    const handleMouseEnter = () => {
      timeoutId = setTimeout(() => {
        if (!isOpenReference.current) {
          return;
        }

        const summaryId = detailsReference.current?.querySelector(
          `.${styles["details-nested-summary"]}`
        )?.id;

        const resolvedAnchor = getEffectiveAnchor();

        const anchorToSet = resolvedAnchor || summaryId;

        if (!anchorToSet || globalThis.window === undefined) {
          return;
        }

        if (globalThis.location.hash.slice(1) !== anchorToSet) {
          updateUrlHash(`#${anchorToSet}`);
        }
      }, constants.MOUSE_ENTER_DELAY);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId);
    };

    if (nestedContentElement) {
      nestedContentElement.addEventListener("mouseenter", handleMouseEnter);
      nestedContentElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (nestedContentElement) {
        nestedContentElement.removeEventListener("mouseenter", handleMouseEnter);
        nestedContentElement.removeEventListener("mouseleave", handleMouseLeave);
      }

      clearTimeout(timeoutId);
    };
  }, [getEffectiveAnchor, updateUrlHash]);

  useEffect(() => {
    const details = detailsReference.current;

    const contentWrapper = contentWrapperReference.current;

    const innerContent = innerContentReference.current;

    if (!details || !contentWrapper || !innerContent) return;

    let openRetryAnimationFrame: number | undefined;

    let transitionAnimationFrame: number | undefined;

    let closeFallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    const updateOpenHeight = (attempt = 0) => {
      const targetHeight = innerContent.scrollHeight;

      if (targetHeight > 0 || attempt >= 40) {
        contentWrapper.style.maxHeight = `${targetHeight}px`;

        return;
      }

      openRetryAnimationFrame = requestAnimationFrame(() => {
        updateOpenHeight(attempt + 1);
      });
    };

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== contentWrapper || event.propertyName !== "max-height") {
        return;
      }

      if (isOpen) {
        contentWrapper.style.maxHeight = "none";
      } else {
        details.open = false;
      }
    };

    contentWrapper.addEventListener("transitionend", onTransitionEnd);

    const resizeObserver = new ResizeObserver(() => {
      if (!isOpen) {
        return;
      }

      if (contentWrapper.style.maxHeight !== "none") {
        contentWrapper.style.maxHeight = `${innerContent.scrollHeight}px`;
      }
    });

    resizeObserver.observe(innerContent);

    const onWindowResize = () => {
      if (!isOpen) {
        return;
      }

      if (contentWrapper.style.maxHeight !== "none") {
        contentWrapper.style.maxHeight = `${innerContent.scrollHeight}px`;
      }
    };

    window.addEventListener("resize", onWindowResize);

    if (isOpen) {
      details.open = true;

      const currentHeight = contentWrapper.getBoundingClientRect().height;

      contentWrapper.style.maxHeight = `${currentHeight}px`;

      transitionAnimationFrame = requestAnimationFrame(() => {
        updateOpenHeight();
      });
    } else {
      const currentHeight =
        contentWrapper.style.maxHeight === "none"
          ? innerContent.scrollHeight
          : contentWrapper.getBoundingClientRect().height;

      contentWrapper.style.maxHeight = `${currentHeight}px`;

      transitionAnimationFrame = requestAnimationFrame(() => {
        contentWrapper.style.maxHeight = "0px";
      });

      const duration = Number.parseFloat(
        getComputedStyle(contentWrapper).transitionDuration
      );

      const durationMs = Number.isNaN(duration) ? 350 : duration * 1000;

      closeFallbackTimeout = setTimeout(() => {
        if (!isOpen) {
          details.open = false;
        }
      }, durationMs + 50);
    }

    return () => {
      if (openRetryAnimationFrame !== undefined) {
        cancelAnimationFrame(openRetryAnimationFrame);
      }

      if (transitionAnimationFrame !== undefined) {
        cancelAnimationFrame(transitionAnimationFrame);
      }

      if (closeFallbackTimeout) {
        clearTimeout(closeFallbackTimeout);
      }

      resizeObserver.disconnect();
      window.removeEventListener("resize", onWindowResize);
      contentWrapper.removeEventListener("transitionend", onTransitionEnd);
    };
  }, [isOpen, isParentOpen]);

  useEffect(() => {
    const summaryElement = detailsReference.current?.querySelector(
      `.${styles["details-nested-summary"]}`
    );

    if (!summaryElement) {
      return;
    }

    const checkId = () => {
      if (summaryElement.id) {
        setDisplayAnchorId(summaryElement.id);

        return true;
      }

      return false;
    };

    if (checkId()) {
      return;
    }

    const checkIdInterval = setInterval(() => {
      if (checkId()) {
        clearInterval(checkIdInterval);
      }
    }, 100);

    return () => clearInterval(checkIdInterval);
  }, []);

  const handleCopyAnchor = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.preventDefault();
      event.stopPropagation();

      (async () => {
        const summaryElement = detailsReference.current?.querySelector(
          `.${styles["details-nested-summary"]}`
        );

        const numericAnchor = summaryElement?.id ?? "";

        const anchorToCopy = getEffectiveAnchor() || numericAnchor;

        await copyAnchorLink({
          anchorToCopy,
          successMessage: `Ссылка на вложенную статью ${numericAnchor || anchorToCopy} скопирована в буфер обмена`,
        });
      })();

      return true;
    },
    [getEffectiveAnchor]
  );

  const summaryLongPressProperties = useLongPress(handleCopyAnchor);

  return (
    <NestedDetailsSummaryContext.Provider value={true}>
      <details
        ref={detailsReference}
        className={`${styles["details-nested"]} ${modifierClass || ""} ${
          isOpen ? styles["is-open"] : ""
        }`.trim()}
        data-anchor={anchor}
        data-nested-details-summary="true"
      >
        <summary
          className={styles["details-nested-summary"]}
          onClick={handleSummaryClick}
          onMouseDown={ripple.onMouseDown}
          {...summaryLongPressProperties}
        >
          <div className={styles["details-nested-summary-left"]}>
            <span className={styles["details-nested-summary-icon"]}>+</span>
            <div className={styles["details-nested-summary-text-content"]}>
              <h3>{title}</h3>
            </div>
          </div>
          <Tooltip title="Скопировать ссылку">
            <CopyButton
              disabled={!displayAnchorId}
              onClick={handleCopyAnchor}
            />
          </Tooltip>
        </summary>
        <div
          ref={contentWrapperReference}
          className={styles["details-nested-content-wrapper"]}
        >
          <section
            ref={innerContentReference}
            className={styles["details-nested-section"]}
          >
            {children}
          </section>
        </div>
      </details>
    </NestedDetailsSummaryContext.Provider>
  );
};

export default NestedDetailsSummary;
