import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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

  const detailsReference = useRef<HTMLDetailsElement>(null);

  const contentWrapperReference = useRef<HTMLDivElement>(null);

  const innerContentReference = useRef<HTMLDivElement>(null);

  const handleSummaryClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

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
    const justOpened = isOpen && !previousIsOpen;

    if (justOpened) {
      doScroll();
    }
  }, [isOpen, previousIsOpen, doScroll]);

  useEffect(() => {
    const details = detailsReference.current;

    const contentWrapper = contentWrapperReference.current;

    const innerContent = innerContentReference.current;

    if (!details || !contentWrapper || !innerContent) return;

    const updateMaxHeight = () => {
      if (details.open) {
        const scrollHeight = innerContent.offsetHeight;

        contentWrapper.style.maxHeight = `${scrollHeight}px`;
      }
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

      const scrollHeight = innerContent.offsetHeight;

      contentWrapper.style.maxHeight = `${scrollHeight}px`;
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

  return (
    <NestedDetailsSummaryContext.Provider value={true}>
      <details
        ref={detailsReference}
        className={`${styles["details-nested"]} ${modifierClass || ""} ${
          isOpen ? styles["is-open"] : ""
        }`.trim()}
        open={startOpen}
      >
        <summary
          className={styles["details-nested-summary"]}
          onClick={handleSummaryClick}
        >
          <div className={styles["details-nested-summary-left"]}>
            <span className={styles["details-nested-summary-icon"]}>+</span>
            <div className={styles["details-nested-summary-text-content"]}>
              <h3>{title}</h3>
            </div>
          </div>
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
