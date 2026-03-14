import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from "react";

import {message, Tooltip} from "antd";

import {copyText} from "../../hooks/useCopyToClipboard";
import {useExternalLinkHandler} from "../../hooks/useExternalLinks";
import {useInternalLinkHandler} from "../../hooks/useInternalLinks";
import {useLongPress} from "../../hooks/useLongPress";
import {useRipple} from "../../hooks/useRipple";
import {triggerDisclosureHaptic, triggerHaptic} from "../../utils/haptics";
import {scrollToElement} from "../../utils/scrollToAnchor";
import {formatNestedQuotes} from "../../utils/stringUtilities";
import {useTheme} from "../modals/ThemeChanger";
import {CopyButton} from "../ui/CopyButton";

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

const stopToggleTagsPointerDown = (event: React.MouseEvent | React.TouchEvent) => {
  event.stopPropagation();
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
    triggerHaptic("soft");
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
          onMouseDown={stopToggleTagsPointerDown}
          onTouchStart={stopToggleTagsPointerDown}
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
  NESTED_OPEN_AFTER_PARENT_DELAY: 150,
} as const;

const dispatchOpenSpoilerById = (
  id: string,
  options?: {delay?: number; skipScroll?: boolean}
) => {
  const delay = options?.delay ?? constants.ACTION_DELAY;

  setTimeout(() => {
    globalThis.dispatchEvent(
      new CustomEvent("open-spoiler-by-id", {
        detail: {id, skipScroll: options?.skipScroll},
      })
    );
  }, delay);
};

const assignAnchorIdIfMissing = (element: Element, fallbackId: string): string => {
  if (!element.hasAttribute("id")) {
    element.setAttribute("id", fallbackId);
  }

  return element.id;
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
    `Дублирующийся anchor "${normalizedAnchor}" в DetailsSummary. Якорь должен быть уникальным.`
  );
};

const isHashForOpenNestedInDetails = (
  detailsElement: HTMLDetailsElement | null,
  hash: string
): boolean => {
  if (!detailsElement || !hash) {
    return false;
  }

  const openNestedDetails = detailsElement.querySelectorAll<HTMLDetailsElement>(
    'details[data-nested-details-summary="true"][open]'
  );

  for (const nestedDetails of openNestedDetails) {
    const nestedSummary = nestedDetails.querySelector("summary");

    const nestedSummaryId = nestedSummary instanceof HTMLElement ? nestedSummary.id : "";

    const nestedTextualAnchor = normalizeAnchor(nestedDetails.dataset.anchor);

    if (hash === nestedSummaryId || hash === nestedTextualAnchor) {
      return true;
    }
  }

  return false;
};

const processNestedSummaries = (
  detailsElement: HTMLDetailsElement,
  generatedAnchor: string,
  currentHash: string,
  parentSummaryId: string,
  parentTextualAnchor?: string
) => {
  const isParentAnchorPrioritized =
    Boolean(currentHash) &&
    (currentHash === parentSummaryId || currentHash === parentTextualAnchor);

  if (isParentAnchorPrioritized) {
    return;
  }

  const nestedSummaries = [
    ...detailsElement.querySelectorAll<HTMLElement>(
      `details[data-nested-details-summary="true"] > summary`
    ),
  ];

  for (const [nestedIndex, nestedSummary] of nestedSummaries.entries()) {
    const nestedAnchor = `${generatedAnchor}.${nestedIndex + 1}`;

    const nestedSummaryId = assignAnchorIdIfMissing(nestedSummary, nestedAnchor);

    const nestedDetailsElement = nestedSummary.closest("details");

    const nestedTextualAnchor =
      nestedDetailsElement instanceof HTMLDetailsElement
        ? nestedDetailsElement.dataset.anchor
        : undefined;

    const normalizedNestedTextualAnchor = normalizeAnchor(nestedTextualAnchor);

    const isNestedTextualAnchorUsable =
      nestedDetailsElement instanceof HTMLDetailsElement &&
      normalizedNestedTextualAnchor &&
      isFirstAnchorOccurrence(nestedDetailsElement, normalizedNestedTextualAnchor);

    if (
      !currentHash ||
      (nestedSummaryId !== currentHash &&
        (!isNestedTextualAnchorUsable || normalizedNestedTextualAnchor !== currentHash))
    ) {
      continue;
    }

    dispatchOpenSpoilerById(parentSummaryId, {delay: 0, skipScroll: true});

    dispatchOpenSpoilerById(nestedSummaryId, {
      delay: constants.NESTED_OPEN_AFTER_PARENT_DELAY,
    });
  }
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

      const summaryId = assignAnchorIdIfMissing(summary, generatedAnchor);

      const detailsElement = summary.closest("details");

      const textualAnchor = normalizeAnchor(detailsElement?.dataset.anchor);

      const isTextualAnchorUsable =
        detailsElement instanceof HTMLDetailsElement &&
        textualAnchor &&
        isFirstAnchorOccurrence(detailsElement, textualAnchor);

      if (
        currentHash &&
        (summaryId === currentHash ||
          (isTextualAnchorUsable && textualAnchor === currentHash))
      ) {
        dispatchOpenSpoilerById(summaryId);
      }

      if (detailsElement instanceof HTMLDetailsElement) {
        processNestedSummaries(
          detailsElement,
          generatedAnchor,
          currentHash,
          summaryId,
          textualAnchor
        );
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

  const {isSpoilerAnimationEnabled} = useTheme();

  const hasScrolledAfterOpening = useRef(false);

  const skipNextAutoScroll = useRef(false);

  const handleSectionClick = (event: React.MouseEvent<HTMLElement>) => {
    handleInternalLinkClick(event);
    handleExternalLinkClick(event);
  };

  const [isOpen, setIsOpen] = useState(false);

  const previousIsOpen = usePrevious(isOpen);

  useEffect(() => {
    triggerDisclosureHaptic(isOpen, previousIsOpen);
  }, [isOpen, previousIsOpen]);

  const [displayAnchorId, setDisplayAnchorId] = useState("");

  const detailsReference = useRef<HTMLDetailsElement>(null);

  const sectionReference = useRef<HTMLElement>(null);

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

    return textualAnchor;
  }, [anchor, displayAnchorId]);

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
        scrollToElement(summary);
      }, constants.ACTION_DELAY);
    }
  }, []);

  useEffect(() => {
    if (globalThis.window === undefined || isSpoilerAnimationEnabled) return;

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
  }, [isOpen, isSpoilerAnimationEnabled, updateDimmingEffect, updateDynamicStyles]);

  useEffect(() => {
    if (globalThis.window === undefined || !isSpoilerAnimationEnabled) return;

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
    isSpoilerAnimationEnabled,
    doScroll,
    updateDynamicStyles,
  ]);

  useEffect(() => {
    const summaryId = displayAnchorId;

    if (!summaryId || globalThis.window === undefined) return;

    const justOpened = isOpen && !previousIsOpen;

    const currentHash = globalThis.location.hash.slice(1);

    const resolvedAnchor = getEffectiveAnchor();

    if (justOpened && resolvedAnchor && currentHash !== resolvedAnchor) {
      updateUrlHash(`#${resolvedAnchor}`);
    } else if (!isOpen && (currentHash === summaryId || currentHash === resolvedAnchor)) {
      updateUrlHash("");
    }
  }, [
    isOpen,
    previousIsOpen,
    displayAnchorId,
    updateUrlHash,
    anchor,
    getEffectiveAnchor,
  ]);

  useEffect(() => {
    const justOpened = isOpen && !previousIsOpen;

    if (!justOpened) {
      return;
    }

    if (skipNextAutoScroll.current) {
      skipNextAutoScroll.current = false;

      return;
    }

    doScroll();

    if (isSpoilerAnimationEnabled) {
      hasScrolledAfterOpening.current = true;
    }
  }, [isOpen, previousIsOpen, doScroll, isSpoilerAnimationEnabled]);

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
      const {id, skipScroll} = (
        event as CustomEvent<{
          id: string;
          skipScroll?: boolean;
        }>
      ).detail;

      const summaryElement = detailsReference.current?.querySelector(
        `.${styles["details-summary"]}`
      );

      if (summaryElement && summaryElement.id === id) {
        if (skipScroll) {
          skipNextAutoScroll.current = true;
          hasScrolledAfterOpening.current = true;
        }

        if (isOpen) {
          if (!skipScroll) {
            doScroll();
          }
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
        const detailsElement = detailsReference.current;

        const summaryId = detailsElement?.querySelector(
          `.${styles["details-summary"]}`
        )?.id;

        const textualAnchor =
          detailsElement instanceof HTMLDetailsElement
            ? normalizeAnchor(detailsElement.dataset.anchor)
            : "";

        const isTextualAnchorUsable =
          detailsElement instanceof HTMLDetailsElement &&
          Boolean(textualAnchor) &&
          isFirstAnchorOccurrence(detailsElement, textualAnchor);

        const anchorForHash = isTextualAnchorUsable ? textualAnchor : summaryId;

        const currentHash = globalThis.location.hash.slice(1);

        const isCurrentHashOpenNested = isHashForOpenNestedInDetails(
          detailsElement,
          currentHash
        );

        if (
          anchorForHash &&
          globalThis.window !== undefined &&
          !isCurrentHashOpenNested
        ) {
          history.replaceState(
            undefined,
            "",
            `${globalThis.location.pathname}${globalThis.location.search}#${anchorForHash}`
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

        const anchorToCopy = getEffectiveAnchor() || numericAnchor;

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
    [getEffectiveAnchor]
  );

  const summaryLongPressProperties = useLongPress(handleCopyAnchor);

  const rippleProperties = useRipple<HTMLElement>({haptic: false});

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

  const getFlexibleLinkRippleTarget = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const link = target.closest(".flexible-links a");

      if (link instanceof HTMLElement) {
        return link;
      }
    },
    []
  );

  const sectionLongPressProperties = useLongPress(handleFlexibleLinkCopy, 500, {
    getRippleTarget: getFlexibleLinkRippleTarget,
  });

  const updateSpoilerStacking = useCallback(() => {
    const detailsElement = detailsReference.current;

    if (!detailsElement) {
      return;
    }

    const articleContent = detailsElement.closest(".article-content");

    if (!articleContent) {
      return;
    }

    const spoilerElements = articleContent.querySelectorAll<HTMLDetailsElement>(
      'details[data-anchor], details[data-nested-details-summary="true"]'
    );

    const spoilersByDepth = new Map<number, HTMLDetailsElement[]>();

    for (const spoilerElement of spoilerElements) {
      let depth = 0;

      let ancestorNestedDetails =
        spoilerElement.parentElement?.closest<HTMLDetailsElement>(
          'details[data-nested-details-summary="true"]'
        );

      while (ancestorNestedDetails) {
        depth += 1;

        ancestorNestedDetails =
          ancestorNestedDetails.parentElement?.closest<HTMLDetailsElement>(
            'details[data-nested-details-summary="true"]'
          );
      }

      spoilerElement.style.setProperty("--spoiler-depth", String(depth));

      const spoilersAtDepth = spoilersByDepth.get(depth) ?? [];

      spoilersAtDepth.push(spoilerElement);
      spoilersByDepth.set(depth, spoilersAtDepth);
    }

    for (const spoilersAtDepth of spoilersByDepth.values()) {
      const totalSpoilers = spoilersAtDepth.length;

      for (const [index, spoilerElement] of spoilersAtDepth.entries()) {
        spoilerElement.style.setProperty(
          "--spoiler-order",
          String(totalSpoilers - index)
        );
      }
    }
  }, []);

  useEffect(() => {
    updateSpoilerStacking();
  }, [children, updateSpoilerStacking]);

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
