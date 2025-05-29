import {ShareRounded} from "@mui/icons-material";
import {Tooltip, message} from "antd";
import {motion} from "framer-motion";
import React, {
  ReactNode,
  createContext,
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

          const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

          const padding = Math.min(
            10 + (14 - 10) * ((window.innerWidth - 320) / (768 - 320)),
            14
          );

          const content = details.querySelector(".faq-section");
          if (content) {
            setTimeout(() => {
              const y =
                summary.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight -
                padding;
              window.scrollTo({top: y, behavior: "smooth"});
            }, 300);
          }
        }
      }
    });
  });
  if (window.location.hash) {
    const anchorId = window.location.hash.slice(1);

    const section = document.getElementById(anchorId);
    if (section) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

      const padding = Math.min(
        10 + (14 - 10) * ((window.innerWidth - 320) / (768 - 320)),
        14
      );
      setTimeout(() => {
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          padding;
        window.scrollTo({top: y, behavior: "smooth"});
      }, 300);
    } else if (/^\d+\.\d+$/.test(anchorId)) {
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

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (detailsRef.current) {
      const observer = new MutationObserver(() => {
        setIsOpen(detailsRef.current?.open || false);
      });
      observer.observe(detailsRef.current, {attributes: true, attributeFilter: ["open"]});

      return () => observer.disconnect();
    }
  }, []);
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
    if (sectionRef.current) {
      const links = sectionRef.current.querySelectorAll("a");
      links.forEach((link) => {
        if (!link.hasAttribute("target")) {
          link.setAttribute("target", "_blank");
        }

        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
        }
      });
    }
  }, [children]);
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
      }, 1000);
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

  const handleToggle = (event: React.SyntheticEvent) => {
    const details = event.currentTarget as HTMLDetailsElement;

    const summaryId = detailsRef.current?.querySelector(".faq-summary")?.id;
    if (details.open && summaryId) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search + `#${summaryId}`
      );

      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

      const padding = Math.min(
        10 + (14 - 10) * ((window.innerWidth - 320) / (768 - 320)),
        14
      );

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
      history.replaceState(null, "", window.location.pathname + window.location.search);
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

  return (
    <details
      ref={detailsRef}
      data-tags={tag}
      open={isOpen}
      onToggle={handleToggle}
    >
      <motion.summary
        className="faq-summary"
        whileHover={{
          transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        }}
        whileTap={{
          opacity: 0.75,
        }}
      >
        <div className="faq-summary-left">
          <span style={{fontFamily: "JetBrains Mono, monospace"}}>
            {isOpen ? "-" : "+"}
          </span>
          <div>
            <h3>{`${anchorId ? `${anchorId}. ` : ""}${title}`}</h3>
            {tag && (
              <span className="faq-tags">
                {tag.split(", ").map((t, index) => (
                  <mark
                    key={index}
                    className="tag"
                  >
                    {t}
                  </mark>
                ))}
              </span>
            )}
          </div>
        </div>
        <Tooltip title="Скопировать ссылку в буфер обмена">
          <button
            className="copy_button"
            style={{
              flex: "none",
              filter: anchorId ? "none" : "saturate(0) opacity(0.25)",
            }}
            onClick={handleCopyAnchor}
          >
            <ShareRounded />
          </button>
        </Tooltip>
      </motion.summary>
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
