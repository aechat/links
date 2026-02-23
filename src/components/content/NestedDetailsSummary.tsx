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

const NestedDetailsSummary: React.FC<NestedDetailsSummaryProperties> = ({
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

  const getParentSummaryId = useCallback(() => {
    const nestedDetails = detailsReference.current;

    if (!nestedDetails) {
      return "";
    }

    const parentDetails = nestedDetails.parentElement?.closest(
      'details:not([data-nested-details-summary="true"])'
    );

    if (!(parentDetails instanceof HTMLDetailsElement)) {
      return "";
    }

    const parentSummary = parentDetails.querySelector("summary");

    if (!(parentSummary instanceof HTMLElement)) {
      return "";
    }

    return parentSummary.id || "";
  }, []);

  const doScroll = useCallback(() => {
    const summary = detailsReference.current?.querySelector(
      `.${styles["details-nested-summary"]}`
    );

    if (summary) {
      setTimeout(() => {
        const {headerHeight, padding} = getScrollOffsets();

        const y =
          summary.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          padding;

        window.scrollTo({behavior: "smooth", top: y});
      }, constants.ACTION_DELAY);
    }
  }, []);

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

    if (justOpened && currentHash !== displayAnchorId) {
      updateUrlHash(`#${displayAnchorId}`);
    } else if (!isOpen && currentHash === displayAnchorId) {
      const parentSummaryId = getParentSummaryId();

      updateUrlHash(parentSummaryId ? `#${parentSummaryId}` : "");
    }
  }, [displayAnchorId, getParentSummaryId, isOpen, previousIsOpen, updateUrlHash]);

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

    const updateMaxHeight = () => {
      if (details.open) {
        const scrollHeight = innerContent.scrollHeight;

        contentWrapper.style.maxHeight = `${scrollHeight}px`;
      }
    };

    const openHeightDeadline = performance.now() + 1500;

    const applyOpenMaxHeight = () => {
      const scrollHeight = innerContent.scrollHeight;

      if (scrollHeight > 0 || performance.now() >= openHeightDeadline) {
        contentWrapper.style.maxHeight = `${scrollHeight}px`;

        return;
      }

      requestAnimationFrame(() => {
        applyOpenMaxHeight();
      });
    };

    const resizeObserver = new ResizeObserver(updateMaxHeight);

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== contentWrapper) return;

      if (isOpen) {
        resizeObserver.observe(innerContent);
        updateMaxHeight();
      }
    };

    contentWrapper.addEventListener("transitionend", handleTransitionEnd);

    if (isOpen) {
      details.open = true;
      applyOpenMaxHeight();
    } else {
      resizeObserver.unobserve(innerContent);

      const scrollHeight = innerContent.offsetHeight;

      contentWrapper.style.maxHeight = `${scrollHeight}px`;

      requestAnimationFrame(() => {
        contentWrapper.style.maxHeight = "0px";
      });

      const transitionDuration =
        Number.parseFloat(getComputedStyle(contentWrapper).transitionDuration) * 1000;

      setTimeout(() => {
        if (!isOpen) {
          details.open = false;
        }
      }, transitionDuration);
    }

    window.addEventListener("resize", updateMaxHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMaxHeight);
      contentWrapper.removeEventListener("transitionend", handleTransitionEnd);
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
        if (!displayAnchorId) {
          message.warning(
            "Дождитесь полной загрузки страницы, прежде чем копировать ссылку"
          );

          return;
        }

        if (globalThis.window !== undefined) {
          const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${displayAnchorId}`;

          const success = await copyText(anchorUrl);

          if (success) {
            message.success(`Ссылка на спойлер ${displayAnchorId} скопирована`);
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        }
      })();

      return true;
    },
    [displayAnchorId]
  );

  const summaryLongPressProperties = useLongPress(handleCopyAnchor);

  return (
    <NestedDetailsSummaryContext.Provider value={true}>
      <details
        ref={detailsReference}
        className={`${styles["details-nested"]} ${modifierClass || ""} ${
          isOpen ? styles["is-open"] : ""
        }`.trim()}
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
