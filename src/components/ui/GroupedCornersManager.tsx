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

const clearCornerClasses = (element: HTMLElement) => {
  for (const cornerClass of CORNER_CLASSES) {
    element.classList.remove(cornerClass);
  }
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

const applyCornersForGroup = (group: HTMLElement) => {
  const items = getGroupItems(group);

  if (items.length === 0) {
    return;
  }

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
