import React, {useEffect} from "react";

type GroupedCornersManagerProperties = {
  pathKey: string;
};

const CORNER_CLASSES = [
  "group-corner-tl",
  "group-corner-tr",
  "group-corner-bl",
  "group-corner-br",
] as const;

const GROUP_SELECTORS = [
  ".flexible-links",
  "[class*='modal-controls-group']",
  "[class*='search-category']",
  "[class*='search-external-links']",
] as const;

const HOVER_GROWTH_PX = 6;

const ACTIVE_GROWTH_PX = 3;

const MIN_RADIUS_RATIO = 0.5;

const MIN_RADIUS_FALLBACK_PX = 2;

const RADIUS_LEVELS = [1, 0.75, 0.5] as const;

const parsePixelValue = (value: string) => {
  const numericValue = Number.parseFloat(value);

  if (!Number.isFinite(numericValue)) {
    return;
  }

  return numericValue;
};

const getInsetInParent = (parent: HTMLElement, child: HTMLElement) => {
  const parentRect = parent.getBoundingClientRect();

  const childRect = child.getBoundingClientRect();

  const distances = [
    childRect.left - parentRect.left,
    childRect.top - parentRect.top,
    parentRect.right - childRect.right,
    parentRect.bottom - childRect.bottom,
  ].map((distance) => Math.max(0, distance));

  return Math.min(...distances);
};

const findLeftMost = (elements: HTMLElement[]) => {
  let leftMost = elements[0];

  for (const element of elements) {
    if (element.offsetLeft < leftMost.offsetLeft) {
      leftMost = element;
    }
  }

  return leftMost;
};

const findRightMost = (elements: HTMLElement[]) => {
  let rightMost = elements[0];

  for (const element of elements) {
    if (element.offsetLeft > rightMost.offsetLeft) {
      rightMost = element;
    }
  }

  return rightMost;
};

const getGroupItems = (group: HTMLElement) => {
  return [...group.children].filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement &&
      (child.matches("button") || child.matches("a")) &&
      child.offsetParent !== null
  );
};

const getScaleValue = (dimension: number, growthPx: number) => {
  const safeDimension = Math.max(dimension, 1);

  return (safeDimension + growthPx) / safeDimension;
};

const getElementMaxPadding = (element: HTMLElement) => {
  const styles = getComputedStyle(element);

  const paddings = [
    parsePixelValue(styles.paddingTop) ?? 0,
    parsePixelValue(styles.paddingRight) ?? 0,
    parsePixelValue(styles.paddingBottom) ?? 0,
    parsePixelValue(styles.paddingLeft) ?? 0,
  ];

  return Math.max(...paddings);
};

const getElementMaxBorder = (element: HTMLElement) => {
  const styles = getComputedStyle(element);

  const borders = [
    parsePixelValue(styles.borderTopWidth) ?? 0,
    parsePixelValue(styles.borderRightWidth) ?? 0,
    parsePixelValue(styles.borderBottomWidth) ?? 0,
    parsePixelValue(styles.borderLeftWidth) ?? 0,
  ];

  return Math.max(...borders);
};

const getElementRadius = (element: HTMLElement) => {
  const styles = getComputedStyle(element);

  const cornerRadii = [
    parsePixelValue(styles.borderTopLeftRadius),
    parsePixelValue(styles.borderTopRightRadius),
    parsePixelValue(styles.borderBottomLeftRadius),
    parsePixelValue(styles.borderBottomRightRadius),
  ].filter((radius): radius is number => radius !== undefined && radius > 0);

  if (cornerRadii.length === 0) {
    return;
  }

  return Math.min(...cornerRadii);
};

const clearCornerClasses = (element: HTMLElement) => {
  for (const cornerClass of CORNER_CLASSES) {
    element.classList.remove(cornerClass);
  }
};

const applyScaleVariables = (element: HTMLElement) => {
  const width = element.offsetWidth;

  const height = element.offsetHeight;

  const baseDimension = Math.max(width, height);

  const hoverScale = getScaleValue(baseDimension, HOVER_GROWTH_PX);

  const activeScale = getScaleValue(baseDimension, ACTIVE_GROWTH_PX);

  element.style.setProperty("--links-hover-scale-x", hoverScale.toFixed(6));
  element.style.setProperty("--links-hover-scale-y", hoverScale.toFixed(6));
  element.style.setProperty("--links-active-scale-x", activeScale.toFixed(6));
  element.style.setProperty("--links-active-scale-y", activeScale.toFixed(6));
};

const getStructuralRadiusSource = (group: HTMLElement) => {
  let current = group.parentElement;

  while (current) {
    const radius = getElementRadius(current);

    if (radius !== undefined && radius > 0) {
      return {
        border: getElementMaxBorder(current),
        padding: getElementMaxPadding(current),
        radius,
      };
    }

    current = current.parentElement;
  }
};

const getStructuralRadiusByLayout = (group: HTMLElement) => {
  let currentChild: HTMLElement | null = group;

  let sourceRadius: number | undefined;

  let accumulatedInset = 0;

  while (currentChild && currentChild.parentElement) {
    const currentParent = currentChild.parentElement;

    if (!(currentParent instanceof HTMLElement)) {
      break;
    }

    const parentBorder = getElementMaxBorder(currentParent);

    const inset = getInsetInParent(currentParent, currentChild);

    accumulatedInset += parentBorder + inset;

    const parentRadius = getElementRadius(currentParent);

    if (parentRadius !== undefined && parentRadius > 0) {
      sourceRadius = parentRadius;
      break;
    }

    currentChild = currentParent;
  }

  if (sourceRadius === undefined) {
    return;
  }

  const rawRatio = (sourceRadius - accumulatedInset) / sourceRadius;

  const clampedRatio = Math.max(MIN_RADIUS_RATIO, Math.min(1, rawRatio));

  let quantizedRatio = RADIUS_LEVELS[2];

  if (clampedRatio >= 0.875) {
    quantizedRatio = RADIUS_LEVELS[0];
  } else if (clampedRatio >= 0.625) {
    quantizedRatio = RADIUS_LEVELS[1];
  }

  const minRadius = Math.max(MIN_RADIUS_FALLBACK_PX, sourceRadius * MIN_RADIUS_RATIO);

  const nestedRadius = Math.max(minRadius, sourceRadius * quantizedRatio);

  return Math.min(sourceRadius, nestedRadius);
};

const applyGroupCornerRadius = (group: HTMLElement, items: HTMLElement[]) => {
  const groupStyles = getComputedStyle(group);

  let parentRadius = parsePixelValue(groupStyles.getPropertyValue("--radius-parent"));

  let parentPadding = parsePixelValue(
    groupStyles.getPropertyValue("--radius-parent-padding")
  );

  let parentBorder = parsePixelValue(
    groupStyles.getPropertyValue("--radius-parent-border")
  );

  const structuralSource = getStructuralRadiusSource(group);

  if (parentRadius === undefined) {
    parentRadius = structuralSource?.radius;
  }

  if (parentPadding === undefined) {
    parentPadding = structuralSource?.padding;
  }

  if (parentBorder === undefined) {
    parentBorder = structuralSource?.border;
  }

  if (parentRadius === undefined) {
    parentRadius = getElementRadius(items[0]) ?? 0;
  }

  if (parentPadding === undefined) {
    parentPadding = getElementMaxPadding(group);
  }

  if (parentBorder === undefined) {
    parentBorder = getElementMaxBorder(group);
  }

  const structuralRadius = getStructuralRadiusByLayout(group);

  const nestedRadius =
    structuralRadius ??
    Math.max(
      Math.max(MIN_RADIUS_FALLBACK_PX, parentRadius * MIN_RADIUS_RATIO),
      Math.min(parentRadius, parentRadius - parentBorder - parentPadding)
    );

  if (nestedRadius <= 0) {
    return;
  }

  group.style.setProperty("--group-corner-radius", `${nestedRadius.toFixed(4)}px`);
};

const applyCornersForGroup = (group: HTMLElement) => {
  const items = getGroupItems(group);

  if (items.length === 0) {
    return;
  }

  applyGroupCornerRadius(group, items);

  for (const item of items) {
    clearCornerClasses(item);
    applyScaleVariables(item);
  }

  const topValues = items.map((item) => item.offsetTop);

  const minTop = Math.min(...topValues);

  const maxTop = Math.max(...topValues);

  const topRow = items.filter((item) => item.offsetTop === minTop);

  const bottomRow = items.filter((item) => item.offsetTop === maxTop);

  const topLeft = findLeftMost(topRow);

  const topRight = findRightMost(topRow);

  const bottomLeft = findLeftMost(bottomRow);

  const bottomRight = findRightMost(bottomRow);

  topLeft.classList.add("group-corner-tl");
  topRight.classList.add("group-corner-tr");
  bottomLeft.classList.add("group-corner-bl");
  bottomRight.classList.add("group-corner-br");
};

const updateAllGroupCorners = () => {
  for (const selector of GROUP_SELECTORS) {
    const groups = document.querySelectorAll<HTMLElement>(selector);

    for (const group of groups) {
      applyCornersForGroup(group);
    }
  }
};

const GroupedCornersManager = ({pathKey}: GroupedCornersManagerProperties) => {
  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    let rafId: number | undefined;

    const scheduleUpdate = () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        rafId = undefined;
        updateAllGroupCorners();
      });
    };

    scheduleUpdate();
    window.addEventListener("resize", scheduleUpdate);

    const resizeObserver =
      "ResizeObserver" in globalThis ? new ResizeObserver(scheduleUpdate) : undefined;

    if (resizeObserver) {
      for (const selector of GROUP_SELECTORS) {
        const groups = document.querySelectorAll<HTMLElement>(selector);

        for (const group of groups) {
          resizeObserver.observe(group);
        }
      }
    }

    const mutationObserver = new MutationObserver(scheduleUpdate);

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }

      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathKey]);

  return <></>;
};

export default GroupedCornersManager;
