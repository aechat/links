import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {message, Tooltip} from "antd";

import {copyText} from "../../hooks/useCopyToClipboard";
import {useLongPress} from "../../hooks/useLongPress";
import {useRipple} from "../../hooks/useRipple";
import {CopyButton} from "../ui/CopyButton/CopyButton";

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
  PADDING: {MAX: 14, MIN: 10, SCREEN: {MAX: 768, MIN: 320}},
} as const;

const getScrollOffsets = () => {
  if (globalThis.window === undefined) return {headerHeight: 0, padding: 0};

  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

  const padding = Math.min(
    constants.PADDING.MIN +
      (constants.PADDING.MAX - constants.PADDING.MIN) *
        ((window.innerWidth - constants.PADDING.SCREEN.MIN) /
          (constants.PADDING.SCREEN.MAX - constants.PADDING.SCREEN.MIN)),
    constants.PADDING.MAX
  );

  return {headerHeight, padding};
};

const normalizeAnchor = (anchor?: string): string => anchor?.trim() ?? "";

const isFirstAnchorOccurrence = (
  detailsElement: HTMLDetailsElement,
  textualAnchor: string
): boolean => {
  const normalizedTextualAnchor = normalizeAnchor(textualAnchor);

  if (!normalizedTextualAnchor) {
    return false;
  }

  const detailsWithSameAnchor = [
    ...document.querySelectorAll<HTMLDetailsElement>("details[data-anchor]"),
  ].find(
    (details) => normalizeAnchor(details.dataset.anchor) === normalizedTextualAnchor
  );

  return detailsWithSameAnchor === detailsElement;
};

const reportDuplicateAnchorError = (anchor: string) => {
  const normalizedAnchor = normalizeAnchor(anchor);

  if (!normalizedAnchor) {
    return;
  }

  throw new Error(
    `Дублирующийся anchor "${normalizedAnchor}" в NestedDetailsSummary. Якорь должен быть уникальным.`
  );
};

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

  const ripple = useRipple<HTMLElement>();

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
    if (globalThis.window === undefined) {
      return;
    }

    history.replaceState(
      undefined,
      "",
      globalThis.location.pathname + globalThis.location.search + hash
    );
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
      reportDuplicateAnchorError(textualAnchor);

      return generatedAnchor;
    }

    const {parentSummaryId, parentTextualAnchor} = getParentAnchorData();

    if (textualAnchor === parentTextualAnchor || textualAnchor === parentSummaryId) {
      reportDuplicateAnchorError(textualAnchor);

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
      reportDuplicateAnchorError(textualAnchor);
    }
  }, [anchor]);

  const doScroll = useCallback(() => {
    const summary = detailsReference.current?.querySelector(
      `.${styles["details-nested-summary"]}`
    );

    if (summary) {
      clearTimeout(scrollTimeoutReference.current);

      const {headerHeight, padding} = getScrollOffsets();

      scrollTimeoutReference.current = setTimeout(() => {
        const y =
          summary.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          padding;

        window.scrollTo({behavior: "smooth", top: y});
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

    const detailsElement = detailsReference.current;

    const handleMouseEnter = () => {
      timeoutId = setTimeout(() => {
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

    if (detailsElement) {
      detailsElement.addEventListener("mouseenter", handleMouseEnter);
      detailsElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (detailsElement) {
        detailsElement.removeEventListener("mouseenter", handleMouseEnter);
        detailsElement.removeEventListener("mouseleave", handleMouseLeave);
      }

      clearTimeout(timeoutId);
    };
  }, [getEffectiveAnchor, updateUrlHash]);

  useEffect(() => {
    if (!isOpen) return;

    const contentElement = innerContentReference.current;

    if (!contentElement) {
      return;
    }

    const handleMediaLoad = (event: Event) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const tagName = target.tagName;

      if (tagName !== "IMG" && tagName !== "VIDEO" && tagName !== "IFRAME") {
        return;
      }

      requestAnimationFrame(() => {
        if (isOpen) {
          doScroll();
        }
      });
    };

    contentElement.addEventListener("load", handleMediaLoad, true);
    contentElement.addEventListener("loadeddata", handleMediaLoad, true);

    return () => {
      contentElement.removeEventListener("load", handleMediaLoad, true);
      contentElement.removeEventListener("loadeddata", handleMediaLoad, true);
    };
  }, [doScroll, isOpen]);

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
      event.stopPropagation();

      (async () => {
        const resolvedAnchor = getEffectiveAnchor();

        if (!resolvedAnchor) {
          message.warning(
            "Дождитесь полной загрузки страницы, прежде чем копировать ссылку"
          );

          return;
        }

        if (globalThis.window !== undefined) {
          const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${resolvedAnchor}`;

          const success = await copyText(anchorUrl);

          if (success) {
            message.success(`Ссылка на спойлер ${resolvedAnchor} скопирована`);
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        }
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
