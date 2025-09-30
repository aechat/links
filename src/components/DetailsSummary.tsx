import {ShareRounded} from "@mui/icons-material";

import {Tooltip, message} from "antd";

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface DetailsSummaryProps {
  title: string;
  children: ReactNode;
  tag?: string;
}

const SpoilerContext = createContext(false);

export const useSpoiler = () => useContext(SpoilerContext);

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

      if (window.location.hash === `#${generatedAnchor}`) {
        const details = summary.closest("details");

        if (details && !details.hasAttribute("data-anchor-processed")) {
          details.setAttribute("open", "true");
          details.setAttribute("data-anchor-processed", "true");
        }
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
  const [isOpen, setIsOpen] = useState(false);

  const [displayAnchorId, setDisplayAnchorId] = useState("");

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const sectionRef = useRef<HTMLElement>(null);

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
      const observer = new MutationObserver(() => {
        setIsOpen(detailsRef.current?.open || false);

        const summaryId = detailsRef.current?.querySelector(".faq-summary")?.id;

        if (summaryId) {
          setDisplayAnchorId(summaryId);
        }
      });
      observer.observe(detailsRef.current, {attributes: true, attributeFilter: ["open"]});

      return () => observer.disconnect();
    }
  }, []);
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
        const detailsElements = document.querySelectorAll("details");
        detailsElements.forEach((details) => {
          details.setAttribute("open", "true");
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
            window.location.pathname + window.location.search + `#${summaryId}`
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
    if (!(window as any).detailsSummaryScrollListenerAttached) {
      window.addEventListener("scroll", updateDimmingEffect, {passive: true});
      (window as any).detailsSummaryScrollListenerAttached = true;
    }
  }, [updateDimmingEffect]);

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

  const handleToggle = (event: React.SyntheticEvent) => {
    const details = event.currentTarget as HTMLDetailsElement;

    const summaryId = detailsRef.current?.querySelector(".faq-summary")?.id;

    if (details.open && summaryId) {
      debouncedReplaceState(`#${summaryId}`);

      const {headerHeight, padding} = getScrollOffsets();

      const summary = detailsRef.current?.querySelector(".faq-summary");

      if (summary) {
        const y =
          summary.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          padding;
        window.scrollTo({top: y, behavior: "smooth"});
      }
    } else if (window.location.hash) {
      debouncedReplaceState("");
    }

    setTimeout(updateDimmingEffect, 0);
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
      data-tags={tag}
      open={isOpen}
      onToggle={handleToggle}
    >
      <summary className="faq-summary">
        <div className="faq-summary-left">
          <span style={{fontFamily: "JetBrains Mono, monospace"}}>
            {isOpen ? "-" : "+"}
          </span>
          <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
            <h3>{headingText}</h3>
            {tag && (
              <span className="faq-tags">
                {tag.split(", ").map((t) => (
                  <mark key={t}>{t}</mark>
                ))}
              </span>
            )}
          </div>
        </div>
        <Tooltip title="Скопировать ссылку в буфер обмена">
          <button
            className="copy-button"
            style={{
              flex: "none",
              filter: anchorId ? "none" : "saturate(0) opacity(0.25)",
            }}
            onClick={handleCopyAnchor}
          >
            <ShareRounded />
          </button>
        </Tooltip>
      </summary>
      <SpoilerContext.Provider value={isOpen}>
        <section
          ref={sectionRef}
          className="faq-section"
        >
          {children}
        </section>
      </SpoilerContext.Provider>
    </details>
  );
};

export default DetailsSummary;
