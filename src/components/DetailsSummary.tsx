import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {ShareRounded} from "@mui/icons-material";

import {Tooltip, message} from "antd";

import {useExternalLinkHandler} from "../hooks/useExternalLinks";

import {copyText} from "../hooks/useCopyToClipboard";

import {useInternalLinkHandler} from "../hooks/useInternalLinks";

import {useTheme} from "./modal/ThemeChanger";

declare global {
  interface Window {
    detailsSummaryScrollListenerAttached?: boolean;
  }
}

const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
interface DetailsSummaryProps {
  title: string;
  children: ReactNode;
  tag?: string;
  anchor?: string;
}

const SpoilerContext = createContext(false);

export const useSpoiler = () => useContext(SpoilerContext);

const TAG_LIMIT = 4;

const TagList: React.FC<{tags: string}> = ({tags}) => {
  const [expanded, setExpanded] = useState(false);

  const allTags = useMemo(() => tags.split(", ").filter(Boolean), [tags]);

  const isOverflowing = allTags.length > TAG_LIMIT;

  const [randomizedTags, setRandomizedTags] = useState<string[]>([]);
  useEffect(() => {
    if (isOverflowing) {
      const shuffled = [...allTags].sort(() => 0.5 - Math.random());
      setRandomizedTags(shuffled.slice(0, TAG_LIMIT));
    }
  }, [allTags, isOverflowing]);

  if (allTags.length === 0) {
    return null;
  }

  const visibleTags = expanded ? allTags : isOverflowing ? randomizedTags : allTags;

  const hiddenCount = allTags.length - TAG_LIMIT;

  const toggleTags = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  const getPluralizedTags = (count: number): string => {
    const lastDigit = count % 10;

    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "тегов";

    if (lastDigit === 1) return "тег";

    if ([2, 3, 4].includes(lastDigit)) return "тега";

    return "тегов";
  };

  return (
    <span className="faq-tags">
      {visibleTags.map((t) => (
        <mark key={t}>{t}</mark>
      ))}
      {isOverflowing && (
        <mark
          className="faq-tags-toggle"
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
  PADDING: {MIN: 10, MAX: 14, SCREEN: {MIN: 320, MAX: 768}},
} as const;

const getScrollOffsets = () => {
  if (typeof window === "undefined") return {headerHeight: 0, padding: 0};

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
  if (typeof window === "undefined") return;

  const containers = Array.from(document.querySelectorAll(".faq-content"));

  const currentHash = window.location.hash.slice(1);
  let anchorWasFoundAndOpened = false;
  containers.forEach((container, blockIndex) => {
    const summaries = Array.from(container.querySelectorAll(".faq-summary"));
    summaries.forEach((summary, summaryIndex) => {
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
          window.dispatchEvent(event);
        }, constants.ACTION_DELAY);
        anchorWasFoundAndOpened = true;
      }
    });
  });

  if (currentHash && !anchorWasFoundAndOpened) {
    const categoryElement = document.getElementById(currentHash);

    const faqContainer = document.querySelector(".faq-container");

    if (categoryElement && faqContainer) {
      setTimeout(() => {
        const {headerHeight, padding} = getScrollOffsets();

        const y =
          categoryElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          padding;
        window.scrollTo({top: y, behavior: "smooth"});
      }, constants.ACTION_DELAY);

      return;
    }

    if (faqContainer) {
      message.error(
        "Не удалось найти статью по ссылке, возможно, она была перемещена или удалена."
      );
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }
};

const DetailsSummary: React.FC<DetailsSummaryProps> = ({
  title,
  children,
  tag,
  anchor,
}) => {
  const {handleLinkClick: handleInternalLinkClick, InternalLinkModal} =
    useInternalLinkHandler();

  const {handleLinkClick: handleExternalLinkClick, ExternalLinkModal} =
    useExternalLinkHandler();

  const {isAnimationDisabled} = useTheme();

  const handleSectionClick = (event: React.MouseEvent<HTMLElement>) => {
    handleInternalLinkClick(event);
    handleExternalLinkClick(event);
  };

  const [isOpen, setIsOpen] = useState(false);

  const prevIsOpen = usePrevious(isOpen);

  const [displayAnchorId, setDisplayAnchorId] = useState("");

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const sectionRef = useRef<HTMLElement>(null);

  const updateUrlHash = useCallback((hash: string) => {
    if (typeof window !== "undefined") {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search + hash
      );
    }
  }, []);

  const updateDimmingEffect = useCallback(() => {
    if (typeof window === "undefined") return;

    const openDetailsElements = document.querySelectorAll("details[open]");
    document.body.classList.toggle(
      "body-has-any-spoiler-open",
      openDetailsElements.length > 0
    );

    if (openDetailsElements.length > 0) {
      const viewportHeight = window.innerHeight;

      const isAnyInMainView = Array.from(openDetailsElements).some((details) => {
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
  useEffect(() => {
    if (typeof window === "undefined") return;

    const details = detailsRef.current;

    if (!details) return;

    const contentWrapper = details.querySelector<HTMLElement>(".details-content-wrapper");

    if (!contentWrapper) return;

    const innerContent = contentWrapper.querySelector<HTMLElement>(
      ".details-content-inner"
    );

    if (!innerContent) return;

    const justOpened = isOpen && !prevIsOpen;

    const justClosed = !isOpen && prevIsOpen;

    const updateDynamicStyles = () => {
      if (details.open) {
        contentWrapper.style.maxHeight = `${innerContent.scrollHeight}px`;
        details.style.marginBottom = `${details.offsetHeight * 0.01 + 10}px`;
      }
    };

    const resizeObserver = new ResizeObserver(updateDynamicStyles);
    window.addEventListener("resize", updateDynamicStyles);

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== contentWrapper) return;

      document.body.style.overflow = "";

      if (isOpen) {
        resizeObserver.observe(innerContent);
        updateDynamicStyles();
      } else {
        details.open = false;
        updateDimmingEffect();
      }
    };

    if (isAnimationDisabled) {
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
    } else {
      contentWrapper.addEventListener("transitionend", handleTransitionEnd);

      if (justOpened || (justClosed && details.open)) {
        document.body.style.overflow = "hidden";
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
    }

    return () => {
      resizeObserver.disconnect();
      contentWrapper.removeEventListener("transitionend", handleTransitionEnd);
      window.removeEventListener("resize", updateDynamicStyles);
      document.body.style.overflow = "";
    };
  }, [isOpen, prevIsOpen, updateDimmingEffect, isAnimationDisabled]);
  useEffect(() => {
    const summaryId = displayAnchorId;

    if (!summaryId || typeof window === "undefined") return;

    const justOpened = isOpen && !prevIsOpen;

    const currentHash = window.location.hash.slice(1);

    const textualAnchor = anchor;

    if (justOpened) {
      if (textualAnchor && currentHash === textualAnchor) {
        setTimeout(() => {
          updateUrlHash(`#${summaryId}`);
        }, 500);
      } else if (currentHash !== summaryId) {
        updateUrlHash(`#${summaryId}`);
      }
    } else if (!isOpen) {
      if (currentHash === summaryId) {
        updateUrlHash("");
      }
    }
  }, [isOpen, prevIsOpen, displayAnchorId, updateUrlHash, anchor]);

  const doScroll = useCallback(() => {
    const summary = detailsRef.current?.querySelector(".faq-summary");

    if (summary) {
      setTimeout(() => {
        const {headerHeight, padding} = getScrollOffsets();

        const y =
          summary.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          padding;
        window.scrollTo({top: y, behavior: "smooth"});
      }, constants.ACTION_DELAY);
    }
  }, []);
  useEffect(() => {
    const justOpened = isOpen && !prevIsOpen;

    if (justOpened) {
      doScroll();
    }
  }, [isOpen, prevIsOpen, doScroll]);
  useEffect(() => {
    if (detailsRef.current) {
      const summaryElement = detailsRef.current.querySelector(".faq-summary");

      if (summaryElement) {
        const checkId = () => {
          const currentSummaryId = summaryElement.id;

          if (currentSummaryId) {
            setDisplayAnchorId(currentSummaryId);

            return true;
          }

          return false;
        };

        if (!checkId()) {
          const checkIdInterval = setInterval(() => {
            if (checkId()) clearInterval(checkIdInterval);
          }, 100);

          return () => clearInterval(checkIdInterval);
        }
      }
    }
  }, []);
  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const {id} = (event as CustomEvent<{id: string}>).detail;

      const summaryElement = detailsRef.current?.querySelector(".faq-summary");

      if (summaryElement && summaryElement.id === id) {
        if (isOpen) {
          doScroll();
        } else {
          setIsOpen(true);
        }
      }
    };
    window.addEventListener("open-spoiler-by-id", handleOpenEvent);

    return () => window.removeEventListener("open-spoiler-by-id", handleOpenEvent);
  }, [isOpen, doScroll]);
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.detailsSummaryScrollListenerAttached) {
      window.addEventListener("scroll", updateDimmingEffect, {passive: true});
      window.detailsSummaryScrollListenerAttached = true;
    }
  }, [updateDimmingEffect]);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const section = sectionRef.current;

    const handleMouseEnter = () => {
      timeoutId = setTimeout(() => {
        const summaryId = detailsRef.current?.querySelector(".faq-summary")?.id;

        if (summaryId) {
          history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}#${summaryId}`
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

    if (detailsRef.current) setIsOpen(!detailsRef.current.open);
  };

  const touchStartTime = useRef(0);

  const isPotentialLongPress = useRef(false);

  const touchStartCoords = useRef({x: 0, y: 0});

  const isTouchEventInProgress = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchEventInProgress.current = true;
    touchStartTime.current = Date.now();
    isPotentialLongPress.current = true;

    const touch = e.touches[0];
    touchStartCoords.current = {x: touch.clientX, y: touch.clientY};
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPotentialLongPress.current) return;

    const touch = e.touches[0];

    const moveThreshold = 10;

    const deltaX = Math.abs(touch.clientX - touchStartCoords.current.x);

    const deltaY = Math.abs(touch.clientY - touchStartCoords.current.y);

    if (deltaX > moveThreshold || deltaY > moveThreshold) {
      isPotentialLongPress.current = false;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isPotentialLongPress.current) {
      return;
    }

    const pressDuration = Date.now() - touchStartTime.current;

    if (pressDuration > 500) {
      e.preventDefault();
      handleCopyAnchor(e);
    }

    setTimeout(() => {
      isTouchEventInProgress.current = false;
    }, 300);
    isPotentialLongPress.current = false;
  };

  const handleSummaryContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isTouchEventInProgress.current) {
      return;
    }

    handleCopyAnchor(e);
  };

  const handleCopyAnchor = async (event: React.MouseEvent | React.TouchEvent) => {
    event.stopPropagation();

    const summaryElement = detailsRef.current?.querySelector(".faq-summary");

    const numericAnchor = summaryElement?.id ?? "";

    const anchorToCopy = anchor || numericAnchor;

    if (!anchorToCopy) {
      message.warning("Дождитесь полной загрузки страницы, прежде чем копировать ссылку");

      return;
    }

    if (typeof window !== "undefined") {
      const anchorUrl = `${window.location.origin}${window.location.pathname}#${anchorToCopy}`;

      const success = await copyText(anchorUrl);

      if (success) {
        message.success(`Ссылка на статью ${numericAnchor} скопирована`);
      } else {
        message.error("Не удалось скопировать ссылку");
      }
    }
  };

  const headingText = (displayAnchorId ? `${displayAnchorId}. ` : "") + title;

  return (
    <>
      <details
        ref={detailsRef}
        className={isOpen ? "is-open" : ""}
        data-anchor={anchor}
        data-tags={tag}
      >
        <summary
          className="faq-summary"
          onClick={handleSummaryClick}
          onContextMenu={handleSummaryContextMenu}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        >
          <div className="faq-summary-left">
            <span className="faq-summary-icon">+</span>
            <div className="faq-summary-text-content">
              <h3>{headingText}</h3>
              {tag && <TagList tags={tag} />}
            </div>
          </div>
          <Tooltip title="Скопировать ссылку">
            <button
              className={`copy-button ${!displayAnchorId ? "disabled" : ""}`}
              onClick={handleCopyAnchor}
            >
              <ShareRounded />
            </button>
          </Tooltip>
        </summary>
        <div className="details-content-wrapper">
          <div className="details-content-inner">
            <SpoilerContext.Provider value={isOpen}>
              <section
                ref={sectionRef}
                className="faq-section"
                onClick={handleSectionClick}
              >
                {React.Children.count(children) === 0 ? (
                  <div className="no-content-placeholder">
                    Данная статья находится в процессе разработки. Следите за
                    обновлениями.
                  </div>
                ) : (
                  children
                )}
              </section>
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
