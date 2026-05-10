import React, {useEffect} from "react";

import {GROUP_SELECTORS, updateAllGroupCorners} from "./groupedCornersUtilities";

type GroupedCornersManagerProperties = {
  pathKey: string;
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
      attributeFilter: ["class", "style", "disabled", "aria-pressed"],
      attributes: true,
      characterData: true,
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
