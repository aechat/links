import {MouseEvent as ReactMouseEvent} from "react";

import {triggerHaptic} from "../utils/haptics";

import type {HapticInput} from "web-haptics";

interface RippleOptions {
  haptic?: HapticInput | null;
}

export const applyRipple = (
  element: HTMLElement,
  clientX: number,
  clientY: number,
  options: RippleOptions = {}
) => {
  const isMarkElement = element.tagName === "MARK";

  if (isMarkElement && element.classList.length === 0) {
    return;
  }

  const {haptic = "selection"} = options;

  if (haptic) {
    triggerHaptic(haptic);
  }

  const computedStyle = globalThis.getComputedStyle(element);

  const inlineOverflow = element.style.overflow;

  if (computedStyle.position === "static") {
    element.style.position = "relative";
  }

  element.style.overflow = "hidden";

  const ripple = document.createElement("span");

  const rect = element.getBoundingClientRect();

  const markRippleSize = 128;

  const size = isMarkElement ? markRippleSize : Math.max(rect.width, rect.height) * 2;

  const x = clientX - rect.left;

  const y = clientY - rect.top;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x - size / 2}px`;
  ripple.style.top = `${y - size / 2}px`;
  ripple.classList.add("ripple");
  element.append(ripple);

  setTimeout(() => {
    if (ripple.parentElement) {
      ripple.remove();
    }

    if (!element.querySelector(".ripple")) {
      element.style.overflow = inlineOverflow;
    }
  }, 750);
};

export const useRipple = <T extends HTMLElement>(options: RippleOptions = {}) => {
  const handleMouseDown = (event: ReactMouseEvent<T>) => {
    if (event.button !== 0) return;

    applyRipple(event.currentTarget, event.clientX, event.clientY, options);
  };

  return {onMouseDown: handleMouseDown};
};
