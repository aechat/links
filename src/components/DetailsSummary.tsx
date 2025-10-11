import {ShareRounded} from "@mui/icons-material";

import {Tooltip, message} from "antd";

import {useExternalLinkHandler} from "../hooks/useExternalLinks";

import {useInternalLinkHandler} from "../hooks/useInternalLinks";

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

declare global {
  interface Window {
    detailsSummaryScrollListenerAttached?: boolean;
  }
}
interface DetailsSummaryProps {
  title: string;
  children: ReactNode;
  tag?: string;
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

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return "тегов";
    }

    if (lastDigit === 1) {
      return "тег";
    }

    if ([2, 3, 4].includes(lastDigit)) {
      return "тега";
    }

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
  SCROLL_DELAY: 150,
  MOUSE_ENTER_DELAY: 1000,
  PADDING: {
    MIN: 10,
    MAX: 14,
    SCREEN: {
      MIN: 320,
      MAX: 768,
    },
  },
} as const;

const getScrollOffsets = () => {
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

const debounce = (func: (hash: string) => void, delay: number) => {
  let timeout: NodeJS.Timeout;

  return (hash: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(hash), delay);
  };
};

export const generateAnchorId = () => {
  const containers = Array.from(document.querySelectorAll(".faq-content"));
  let generatedAnchor = "";
  containers.forEach((container, blockIndex) => {
    const summaries = Array.from(container.querySelectorAll(".faq-summary"));
    summaries.forEach((summary, summaryIndex) => {
      generatedAnchor = `${blockIndex + 1}.${summaryIndex + 1}`;

      if (!summary.hasAttribute("id")) {
        summary.setAttribute("id", generatedAnchor);
      }
    });
  });

  if (window.location.hash) {
    const anchorId = window.location.hash.slice(1);

    const existingAnchor = document.getElementById(anchorId);

    if (!existingAnchor && /^\d+\.\d+$/.test(anchorId)) {
      message.error(
        "Не удалось найти статью по ссылке, возможно он был перемещён или удалён"
      );
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  return generatedAnchor;
};

const DetailsSummary: React.FC<DetailsSummaryProps> = ({title, children, tag}) => {
  const {handleLinkClick: handleInternalLinkClick, InternalLinkModal} =
    useInternalLinkHandler();

  const {handleLinkClick: handleExternalLinkClick, ExternalLinkModal} =
    useExternalLinkHandler();

  const handleSectionClick = (event: React.MouseEvent<HTMLElement>) => {
    handleInternalLinkClick(event);
    handleExternalLinkClick(event);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [displayAnchorId, setDisplayAnchorId] = useState("");

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const sectionRef = useRef<HTMLElement>(null);

  const debouncedReplaceState = useCallback(
    debounce((hash: string) => {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search + hash
      );
    }, 50),
    []
  );

  useEffect(() => {
    const details = detailsRef.current;

    if (!details) {
      return;
    }

    const contentWrapper = details.querySelector<HTMLElement>(".details-content-wrapper");

    if (!contentWrapper) {
      return;
    }

    const innerContent = contentWrapper.querySelector<HTMLElement>(
      ".details-content-inner"
    );

    if (!innerContent) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (details.open) {
        contentWrapper.style.maxHeight = `${innerContent.scrollHeight}px`;
      }
    });

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== contentWrapper) {
        return;
      }

      document.body.style.overflow = "";

      if (isOpen) {
        contentWrapper.style.maxHeight = `${innerContent.scrollHeight}px`;
        resizeObserver.observe(innerContent);

        const detailsHeight = details.offsetHeight;
        details.style.marginBottom = `${detailsHeight * 0.01 + 10}px`;
      } else {
        details.open = false;
        updateDimmingEffect();
      }
    };

    contentWrapper.addEventListener("transitionend", handleTransitionEnd);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      details.open = true;

      const scrollHeight = innerContent.scrollHeight;

      const viewportHeight = window.innerHeight;

      if (scrollHeight > viewportHeight) {
        contentWrapper.style.maxHeight = `${viewportHeight}px`;
      } else {
        contentWrapper.style.maxHeight = `${scrollHeight}px`;
      }

      updateDimmingEffect();

      const summaryId = details.querySelector(".faq-summary")?.id;

      if (summaryId) {
        debouncedReplaceState(`#${summaryId}`);
        setTimeout(() => {
          const summary = details.querySelector(".faq-summary");

          if (summary) {
            const {headerHeight, padding} = getScrollOffsets();

            const y =
              summary.getBoundingClientRect().top +
              window.pageYOffset -
              headerHeight -
              padding;
            window.scrollTo({top: y, behavior: "smooth"});
          }
        }, 150);
      }
    } else {
      if (details.open) {
        document.body.style.overflow = "hidden";
        resizeObserver.unobserve(innerContent);

        if (window.location.hash) {
          debouncedReplaceState("");
        }

        contentWrapper.style.maxHeight = "0px";
        details.style.marginBottom = "";
      }
    }

    return () => {
      resizeObserver.disconnect();
      contentWrapper.removeEventListener("transitionend", handleTransitionEnd);
      document.body.style.overflow = "";
    };
  }, [isOpen, debouncedReplaceState]);

  const scrollToAnchor = (targetElement: HTMLElement) => {
    const {headerHeight, padding} = getScrollOffsets();
    setTimeout(() => {
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        padding;
      window.scrollTo({top: y, behavior: "smooth"});
    }, constants.SCROLL_DELAY);
  };

  useEffect(() => {
    if (detailsRef.current) {
      const summaryElement = detailsRef.current.querySelector(".faq-summary");

      if (summaryElement) {
        const initialSummaryId = summaryElement.id;

        if (initialSummaryId) {
          setDisplayAnchorId(initialSummaryId);
        } else {
          const checkIdInterval = setInterval(() => {
            const currentSummaryId = summaryElement.id;

            if (currentSummaryId) {
              setDisplayAnchorId(currentSummaryId);
              clearInterval(checkIdInterval);
            }
          }, 100);

          return () => clearInterval(checkIdInterval);
        }
      }
    }
  }, []);

  useEffect(() => {
    const anchorId = window.location.hash.slice(1);

    if (displayAnchorId && anchorId === displayAnchorId) {
      setIsOpen(true);
    }
  }, [displayAnchorId]);

  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{id: string}>;

      const {id} = customEvent.detail;

      const summaryElement = detailsRef.current?.querySelector(".faq-summary");

      if (summaryElement && summaryElement.id === id) {
        setIsOpen(true);
      }
    };

    window.addEventListener("open-spoiler-by-id", handleOpenEvent);

    return () => {
      window.removeEventListener("open-spoiler-by-id", handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    const anchorId = window.location.hash.slice(1);

    const summaryElement = detailsRef.current?.querySelector(".faq-summary");

    if (anchorId && summaryElement && summaryElement.id === anchorId && isOpen) {
      scrollToAnchor(summaryElement as HTMLElement);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey && event.altKey && event.shiftKey && event.key === "A") ||
        (event.ctrlKey && event.altKey && event.shiftKey && event.key === "Ф")
      ) {
        document.querySelectorAll("details").forEach((details) => {
          details.open = true;
        });
        message.success("Вжух, и все спойлеры раскрылись!");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    let timeoutId: NodeJS.Timeout;

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
    sectionRef.current.addEventListener("mouseenter", handleMouseEnter);
    sectionRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sectionRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      sectionRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  const updateDimmingEffect = useCallback(() => {
    const openDetailsElements = document.querySelectorAll("details[open]");

    if (openDetailsElements.length > 0) {
      document.body.classList.add("body-has-any-spoiler-open");
    } else {
      document.body.classList.remove("body-has-any-spoiler-open");
    }

    if (openDetailsElements.length > 0) {
      const viewportHeight = window.innerHeight;

      const isAnyInMainView = Array.from(openDetailsElements).some((details) => {
        const rect = details.getBoundingClientRect();

        const isOutOfMainView =
          rect.bottom < viewportHeight * 0.15 || rect.top > viewportHeight * 0.9;

        return !isOutOfMainView;
      });

      if (isAnyInMainView) {
        document.body.classList.add("has-open-details");
      } else {
        document.body.classList.remove("has-open-details");
      }
    } else {
      document.body.classList.remove("has-open-details");
    }
  }, []);

  useEffect(() => {
    if (!window.detailsSummaryScrollListenerAttached) {
      window.addEventListener("scroll", updateDimmingEffect, {passive: true});
      window.detailsSummaryScrollListenerAttached = true;
    }
  }, [updateDimmingEffect]);

  const handleSummaryClick = (event: React.MouseEvent) => {
    event.preventDefault();

    const details = detailsRef.current;

    if (!details) {
      return;
    }

    if (details.open) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleCopyAnchor = () => {
    const anchorId = detailsRef.current?.querySelector(".faq-summary")?.id ?? "";

    if (!anchorId) {
      message.warning(
        "Прежде чем копировать ссылку - дождитесь полной загрузки страницы"
      );

      return;
    }

    const anchor = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    navigator.clipboard.writeText(anchor);
    message.success(`Ссылка на статью ${anchorId} скопирована в буфер обмена`);
  };

  const anchorId = detailsRef.current?.querySelector(".faq-summary")?.id ?? "";

  const headingText = (displayAnchorId ? `${displayAnchorId}. ` : "") + title;

  return (
    <details
      ref={detailsRef}
      className={isOpen ? "is-open" : ""}
      data-tags={tag}
    >
      <summary
        className="faq-summary"
        onClick={handleSummaryClick}
      >
        <div className="faq-summary-left">
          <span className="faq-summary-icon">+</span>
          <div className="faq-summary-text-content">
            <h3>{headingText}</h3>
            {tag && <TagList tags={tag} />}
          </div>
        </div>
        <Tooltip title="Скопировать ссылку в буфер обмена">
          <button
            className={`copy-button ${!anchorId ? "disabled" : ""}`}
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
              {children}
            </section>
          </SpoilerContext.Provider>
        </div>
      </div>
      {InternalLinkModal}
      {ExternalLinkModal}
    </details>
  );
};

export default DetailsSummary;
