import React, {ReactNode, useContext, useEffect, useRef, useState} from "react";

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
        contentWrapper.style.maxHeight = "none";
        resizeObserver.observe(innerContent);
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
        className={`nested-details-summary ${modifierClass || ""} ${
          isOpen ? "is-open" : ""
        }`.trim()}
        open={startOpen}
      >
        <summary
          className="nested-details-summary-summary"
          onClick={handleSummaryClick}
        >
          <div className="nested-details-summary-summary-left">
            <span className="nested-details-summary-summary-icon">+</span>
            <div className="nested-details-summary-summary-text-content">
              <h3>{title}</h3>
            </div>
          </div>
        </summary>
        <div
          ref={contentWrapperReference}
          className="nested-details-summary-details-content-wrapper"
        >
          <div
            ref={innerContentReference}
            className="nested-details-summary-details-content-inner"
          >
            <section className="nested-details-summary-section">{children}</section>
          </div>
        </div>
      </details>
    </NestedDetailsSummaryContext.Provider>
  );
};

export default NestedDetailsSummary;
