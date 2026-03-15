import {MouseEvent as ReactMouseEvent} from "react";

import {triggerHaptic} from "../utils/haptics";

import type {HapticInput} from "web-haptics";

interface RippleOptions {
  haptic?: HapticInput | false;
}

const findActiveRect = (
  element: HTMLElement,
  clientX: number,
  clientY: number,
  isMarkElement: boolean
) => {
  const elementRect = element.getBoundingClientRect();

  const lineRects = isMarkElement ? [...element.getClientRects()] : [];

  if (!isMarkElement) {
    return {activeRect: elementRect, lineRects};
  }

  const rectByPointer = lineRects.find(
    (lineRect) =>
      clientX >= lineRect.left &&
      clientX <= lineRect.right &&
      clientY >= lineRect.top &&
      clientY <= lineRect.bottom
  );

  return {activeRect: rectByPointer ?? elementRect, lineRects};
};

const prepareHostElement = (hostElement: HTMLElement, isFixedRipple: boolean) => {
  if (isFixedRipple) {
    return;
  }

  const computedStyle = globalThis.getComputedStyle(hostElement);

  if (computedStyle.position === "static") {
    hostElement.style.position = "relative";
  }

  hostElement.style.overflow = "hidden";
};

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

  if (haptic !== false) {
    triggerHaptic(haptic);
  }

  const {activeRect, lineRects} = findActiveRect(
    element,
    clientX,
    clientY,
    isMarkElement
  );

  const isFixedRipple = isMarkElement && lineRects.length > 1;

  const hostElement = isFixedRipple ? document.body : element;

  const markRippleSize = 128;

  const ripple = document.createElement("span");

  const inlineOverflow = hostElement.style.overflow;

  prepareHostElement(hostElement, isFixedRipple);

  const layoutWidth = element.offsetWidth || activeRect.width;

  const layoutHeight = element.offsetHeight || activeRect.height;

  const scaleX = activeRect.width > 0 ? activeRect.width / layoutWidth : 1;

  const scaleY = activeRect.height > 0 ? activeRect.height / layoutHeight : 1;

  const size = isMarkElement ? markRippleSize : Math.max(layoutWidth, layoutHeight) * 2;

  const x = isFixedRipple ? clientX : (clientX - activeRect.left) / scaleX;

  const y = isFixedRipple ? clientY : (clientY - activeRect.top) / scaleY;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x - size / 2}px`;
  ripple.style.top = `${y - size / 2}px`;
  ripple.classList.add("ripple");

  if (isFixedRipple) {
    ripple.style.position = "fixed";
    ripple.style.zIndex = "10000";
  }

  hostElement.append(ripple);

  setTimeout(() => {
    if (ripple.parentElement) {
      ripple.remove();
    }

    if (!isFixedRipple && !hostElement.querySelector(".ripple")) {
      hostElement.style.overflow = inlineOverflow;
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
