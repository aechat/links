import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from "react";

import {message, Tooltip} from "antd";

import {copyText} from "../../hooks/useCopyToClipboard";
import {useExternalLinkHandler} from "../../hooks/useExternalLinks";
import {useInternalLinkHandler} from "../../hooks/useInternalLinks";
import {useLongPress} from "../../hooks/useLongPress";
import {useRipple} from "../../hooks/useRipple";
import {formatNestedQuotes} from "../../utils/stringUtilities";
import {useTheme} from "../modals/ThemeChanger";
import {CopyButton} from "../ui/CopyButton/CopyButton";

import styles from "./DetailsSummary.module.scss";
import {DetailsSummaryContext, SpoilerContext} from "./spoilerContexts";

const usePrevious = <T,>(value: T): T | undefined => {
  const reference = useRef<T | undefined>(undefined);

  useEffect(() => {
    reference.current = value;
  });

  return reference.current;
};

interface DetailsSummaryProperties {
  anchor: string;
  children: ReactNode;
  tag?: string;
  title: string;
}

const TAG_LIMIT = 4;

const getPluralizedTags = (count: number): string => {
  const lastDigit = count % 10;

  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "тегов";

  if (lastDigit === 1) return "тег";

  if ([2, 3, 4].includes(lastDigit)) return "тега";

  return "тегов";
};

const TagList: React.FC<{tags: string}> = ({tags}) => {
  const [expanded, setExpanded] = useState(false);

  const allTags = useMemo(() => tags.split(", ").filter(Boolean), [tags]);

  const isOverflowing = allTags.length > TAG_LIMIT;

  const [randomizedTags, setRandomizedTags] = useState<string[]>([]);

  useEffect(() => {
    if (isOverflowing) {
      const shuffled = [...allTags];

      for (let index = shuffled.length - 1; index > 0; index--) {
        const randomValues = new Uint32Array(1);

        crypto.getRandomValues(randomValues);

        const index_ = Math.floor((randomValues[0] / (0xff_ff_ff_ff + 1)) * (index + 1));

        [shuffled[index], shuffled[index_]] = [shuffled[index_], shuffled[index]];
      }

      setRandomizedTags(shuffled.slice(0, TAG_LIMIT));
    }
  }, [allTags, isOverflowing]);

  if (allTags.length === 0) {
    return <></>;
  }

  let visibleTags;

  if (expanded) {
    visibleTags = allTags;
  } else if (isOverflowing) {
    visibleTags = randomizedTags;
  } else {
    visibleTags = allTags;
  }

  const hiddenCount = allTags.length - TAG_LIMIT;

  const toggleTags = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setExpanded((previous) => !previous);
  };

  return (
    <span className={styles["details-tags"]}>
      {visibleTags.map((t) => (
        <mark key={t}>{t}</mark>
      ))}
      {isOverflowing && (
        <mark
          className={styles["details-tags-toggle"]}
          onClick={toggleTags}
        >
          {expanded ? "скрыть" : `и ещё ${hiddenCount} ${getPluralizedTags(hiddenCount)}`}
        </mark>
      )}
    </span>
  );
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

export const generateAnchorId = () => {
  if (globalThis.window === undefined) return;

  const containers = [...document.querySelectorAll(".article-content")];

  const currentHash = globalThis.location.hash.slice(1);

  for (const [blockIndex, container] of containers.entries()) {
    const summaries = [
      ...container.querySelectorAll(
        `details:not(.details-nested) > .${styles["details-summary"]}`
      ),
    ];

    for (const [summaryIndex, summary] of summaries.entries()) {
      const generatedAnchor = `${blockIndex + 1}.${summaryIndex + 1}`;

      if (!summary.hasAttribute("id")) {
        summary.setAttribute("id", generatedAnchor);
      }

      const detailsElement = summary.closest("details");

      const textualAnchor = detailsElement?.dataset.anchor;

      if (currentHash && (summary.id === currentHash || textualAnchor === currentHash)) {
        setTimeout(() => {
          const event = new CustomEvent("open-spoiler-by-id", {
            detail: {id: summary.id},
          });

          globalThis.dispatchEvent(event);
        }, constants.ACTION_DELAY);
      }
    }
  }
};

const DetailsSummary: React.FC<DetailsSummaryProperties> = ({
  anchor,
  children,
  tag,
  title,
}) => {
  const {handleLinkClick: handleInternalLinkClick, InternalLinkModal} =
    useInternalLinkHandler();

  const {ExternalLinkModal, handleLinkClick: handleExternalLinkClick} =
    useExternalLinkHandler();

  const {isAnimationDisabled} = useTheme();

  const hasScrolledAfterOpening = useRef(false);

  const handleSectionClick = (event: React.MouseEvent<HTMLElement>) => {
    handleInternalLinkClick(event);
    handleExternalLinkClick(event);
  };

  const [isOpen, setIsOpen] = useState(false);

  const previousIsOpen = usePrevious(isOpen);

  const [displayAnchorId, setDisplayAnchorId] = useState("");

  const detailsReference = useRef<HTMLDetailsElement>(null);

  const sectionReference = useRef<HTMLElement>(null);

  const updateDynamicStyles = useCallback(() => {
    const details = detailsReference.current;

    if (details?.open) {
      const contentWrapper = details.querySelector<HTMLElement>(
        `.${styles["details-content-wrapper"]}`
      );

      const innerContent = contentWrapper?.querySelector<HTMLElement>(
        `.${styles["details-content-inner"]}`
      );

      if (contentWrapper && innerContent) {
        contentWrapper.style.maxHeight = `${innerContent.scrollHeight}px`;
        details.style.marginBottom = `${details.offsetHeight * 0.01 + 10}px`;
      }
    }
  }, []);

  const updateUrlHash = useCallback((hash: string) => {
    if (globalThis.window !== undefined) {
      history.replaceState(
        undefined,
        "",
        globalThis.location.pathname + globalThis.location.search + hash
      );
    }
  }, []);

  const updateDimmingEffect = useCallback(() => {
    if (globalThis.window === undefined) return;

    const openDetailsElements = document.querySelectorAll(
      `.${styles["details-summary-root"]}[open]`
    );

    document.body.classList.toggle(
      "body-has-any-spoiler-open",
      openDetailsElements.length > 0
    );

    if (openDetailsElements.length > 0) {
      const viewportHeight = window.innerHeight;

      const isAnyInMainView = [...openDetailsElements].some((details) => {
        const rect = details.getBoundingClientRect();

        const isOutOfMainView =
          rect.bottom < viewportHeight * 0.15 || rect.top > viewportHeight * 0.9;

        return !isOutOfMainView;
      });

      document.body.classList.toggle("has-open-details", isAnyInMainView);
    } else {
      document.body.classList.remove("has-open-details");
    }
  }, []);

  const doScroll = useCallback(() => {
    const summary = detailsReference.current?.querySelector(
      `.${styles["details-summary"]}`
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

  useEffect(() => {
    if (globalThis.window === undefined || !isAnimationDisabled) return;

    const details = detailsReference.current;

    if (!details) return;

    const contentWrapper = details.querySelector<HTMLElement>(
      `.${styles["details-content-wrapper"]}`
    );

    if (!contentWrapper) return;

    const innerContent = contentWrapper.querySelector<HTMLElement>(
      `.${styles["details-content-inner"]}`
    );

    if (!innerContent) return;

    const resizeObserver = new ResizeObserver(updateDynamicStyles);

    window.addEventListener("resize", updateDynamicStyles);

    if (isOpen) {
      details.open = true;
      contentWrapper.style.maxHeight = `${innerContent.scrollHeight}px`;
      resizeObserver.observe(innerContent);
      updateDynamicStyles();
      updateDimmingEffect();
      setTimeout(updateDimmingEffect, 100);
    } else if (details.open) {
      resizeObserver.unobserve(innerContent);
      details.open = false;
      contentWrapper.style.maxHeight = "0px";
      details.style.marginBottom = "";
      updateDimmingEffect();
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDynamicStyles);
    };
  }, [isOpen, isAnimationDisabled, updateDimmingEffect, updateDynamicStyles]);

  useEffect(() => {
    if (globalThis.window === undefined || isAnimationDisabled) return;

    const details = detailsReference.current;

    if (!details) return;

    const contentWrapper = details.querySelector<HTMLElement>(
      `.${styles["details-content-wrapper"]}`
    );

    if (!contentWrapper) return;

    const innerContent = contentWrapper.querySelector<HTMLElement>(
      `.${styles["details-content-inner"]}`
    );

    if (!innerContent) return;

    const justOpened = isOpen && !previousIsOpen;

    const justClosed = !isOpen && previousIsOpen;

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    const scrollLockOptions: AddEventListenerOptions = {passive: false};

    const enableScroll = () => {
      window.removeEventListener("wheel", preventScroll, scrollLockOptions);
      globalThis.removeEventListener("touchmove", preventScroll, scrollLockOptions);
    };

    const disableScroll = () => {
      window.addEventListener("wheel", preventScroll, scrollLockOptions);
      globalThis.addEventListener("touchmove", preventScroll, scrollLockOptions);
    };

    const resizeObserver = new ResizeObserver(updateDynamicStyles);

    window.addEventListener("resize", updateDynamicStyles);

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== contentWrapper) return;

      if (isOpen) {
        resizeObserver.observe(innerContent);
        updateDynamicStyles();

        if (justOpened && !hasScrolledAfterOpening.current) {
          doScroll();
          hasScrolledAfterOpening.current = true;
        }

        enableScroll();
      } else {
        details.open = false;
        updateDimmingEffect();
        hasScrolledAfterOpening.current = false;
        enableScroll();
      }
    };

    contentWrapper.addEventListener("transitionend", handleTransitionEnd);

    if (justOpened || (justClosed && details.open)) {
      disableScroll();
    }

    if (isOpen) {
      details.open = true;

      const scrollHeight = innerContent.scrollHeight;

      const viewportHeight = window.innerHeight;

      contentWrapper.style.maxHeight =
        justOpened && scrollHeight > viewportHeight
          ? `${viewportHeight}px`
          : `${scrollHeight}px`;

      updateDimmingEffect();
      setTimeout(updateDimmingEffect, 100);
    } else if (details.open) {
      resizeObserver.unobserve(innerContent);
      contentWrapper.style.maxHeight = "0px";
      details.style.marginBottom = "";
    }

    return () => {
      resizeObserver.disconnect();
      contentWrapper.removeEventListener("transitionend", handleTransitionEnd);
      window.removeEventListener("resize", updateDynamicStyles);
      enableScroll();
    };
  }, [
    isOpen,
    previousIsOpen,
    updateDimmingEffect,
    isAnimationDisabled,
    doScroll,
    updateDynamicStyles,
  ]);

  useEffect(() => {
    const summaryId = displayAnchorId;

    if (!summaryId || globalThis.window === undefined) return;

    const justOpened = isOpen && !previousIsOpen;

    const currentHash = globalThis.location.hash.slice(1);

    const textualAnchor = anchor;

    if (justOpened) {
      if (textualAnchor && currentHash === textualAnchor) {
        setTimeout(() => {
          updateUrlHash(`#${summaryId}`);
        }, 500);
      } else if (currentHash !== summaryId) {
        updateUrlHash(`#${summaryId}`);
      }
    } else if (!isOpen && currentHash === summaryId) {
      updateUrlHash("");
    }
  }, [isOpen, previousIsOpen, displayAnchorId, updateUrlHash, anchor]);

  useEffect(() => {
    const justOpened = isOpen && !previousIsOpen;

    if (justOpened) {
      doScroll();
    }
  }, [isOpen, previousIsOpen, doScroll]);

  useEffect(() => {
    if (!detailsReference.current) {
      return;
    }

    const summaryElement = detailsReference.current.querySelector(
      `.${styles["details-summary"]}`
    );

    if (!summaryElement) {
      return;
    }

    const checkId = () => {
      const currentSummaryId = summaryElement.id;

      if (currentSummaryId) {
        setDisplayAnchorId(currentSummaryId);

        return true;
      }

      return false;
    };

    if (checkId()) {
      return;
    }

    const checkIdInterval = setInterval(() => {
      if (checkId()) clearInterval(checkIdInterval);
    }, 100);

    return () => clearInterval(checkIdInterval);
  }, []);

  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const {id} = (event as CustomEvent<{id: string}>).detail;

      const summaryElement = detailsReference.current?.querySelector(
        `.${styles["details-summary"]}`
      );

      if (summaryElement && summaryElement.id === id) {
        if (isOpen) {
          doScroll();
        } else {
          setIsOpen(true);
        }
      }
    };

    globalThis.addEventListener("open-spoiler-by-id", handleOpenEvent);

    return () => globalThis.removeEventListener("open-spoiler-by-id", handleOpenEvent);
  }, [isOpen, doScroll]);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    const globalWithFlag = globalThis as typeof globalThis & {
      detailsSummaryScrollListenerAttached?: boolean;
    };

    if (!globalWithFlag.detailsSummaryScrollListenerAttached) {
      window.addEventListener("scroll", updateDimmingEffect, {passive: true});
      globalWithFlag.detailsSummaryScrollListenerAttached = true;
    }
  }, [updateDimmingEffect]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const section = sectionReference.current;

    const handleMouseEnter = () => {
      timeoutId = setTimeout(() => {
        const summaryId = detailsReference.current?.querySelector(
          `.${styles["details-summary"]}`
        )?.id;

        if (summaryId && globalThis.window !== undefined) {
          history.replaceState(
            undefined,
            "",
            `${globalThis.location.pathname}${globalThis.location.search}#${summaryId}`
          );
        }
      }, constants.MOUSE_ENTER_DELAY);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId);
    };

    if (section) {
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }

      clearTimeout(timeoutId);
    };
  }, []);

  const handleSummaryClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (detailsReference.current) setIsOpen(!detailsReference.current.open);
  };

  const handleCopyAnchor = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.stopPropagation();

      (async () => {
        const summaryElement = detailsReference.current?.querySelector(
          `.${styles["details-summary"]}`
        );

        const numericAnchor = summaryElement?.id ?? "";

        const anchorToCopy = anchor || numericAnchor;

        if (!anchorToCopy) {
          message.warning(
            "Дождитесь полной загрузки страницы, прежде чем копировать ссылку"
          );

          return;
        }

        if (globalThis.window !== undefined) {
          const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${anchorToCopy}`;

          const success = await copyText(anchorUrl);

          if (success) {
            message.success(`Ссылка на статью ${numericAnchor} скопирована`);
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        }
      })();

      return true;
    },
    [anchor]
  );

  const summaryLongPressProperties = useLongPress(handleCopyAnchor);

  const rippleProperties = useRipple<HTMLElement>();

  const handleFlexibleLinkCopy = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      const target = event.target as HTMLElement;

      const link = target.closest<HTMLAnchorElement>(".flexible-links a");

      if (link) {
        (async () => {
          const success = await copyText(link.href);

          const displayName = link.textContent || link.href;

          if (success) {
            message.success(`Ссылка на «${formatNestedQuotes(displayName)}» скопирована`);
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        })();

        return true;
      }

      return false;
    },
    []
  );

  const sectionLongPressProperties = useLongPress(handleFlexibleLinkCopy);

  const headingText = (displayAnchorId ? `${displayAnchorId}. ` : "") + title;

  return (
    <>
      <details
        ref={detailsReference}
        className={`${styles["details-summary-root"]} ${isOpen ? styles["is-open"] : ""}`}
        data-anchor={anchor}
        data-tags={tag}
      >
        <summary
          className={styles["details-summary"]}
          onClick={handleSummaryClick}
          {...summaryLongPressProperties}
          {...rippleProperties}
        >
          <div className={styles["details-summary-left"]}>
            <span className={styles["details-summary-icon"]}>+</span>
            <div className={styles["details-summary-text-content"]}>
              <h2>{headingText}</h2>
              {tag && <TagList tags={tag} />}
            </div>
          </div>
          <Tooltip title="Скопировать ссылку">
            <CopyButton
              disabled={!displayAnchorId}
              onClick={handleCopyAnchor}
            />
          </Tooltip>
        </summary>
        <div className={styles["details-content-wrapper"]}>
          <div className={styles["details-content-inner"]}>
            <SpoilerContext.Provider value={isOpen}>
              <DetailsSummaryContext.Provider value={true}>
                <section
                  ref={sectionReference}
                  className={`${styles["details-section"]} details-nested-section`}
                  onClick={handleSectionClick}
                  {...sectionLongPressProperties}
                >
                  {React.Children.count(children) === 0 ? (
                    <div className="article-placeholder">
                      <p>
                        Эта статья пока пустая: либо я ещё не дошёл до её написания, либо
                        написал такую дичь, что пришлось всё скрыть и отправить на
                        переделку.
                      </p>
                      <p>Следите за обновлениями.</p>
                    </div>
                  ) : (
                    children
                  )}
                </section>
              </DetailsSummaryContext.Provider>
            </SpoilerContext.Provider>
          </div>
        </div>
      </details>
      {InternalLinkModal}
      {ExternalLinkModal}
    </>
  );
};

export default DetailsSummary;
