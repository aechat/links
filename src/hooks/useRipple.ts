import {MouseEvent as ReactMouseEvent} from "react";

export const applyRipple = (element: HTMLElement, clientX: number, clientY: number) => {
  const computedStyle = globalThis.getComputedStyle(element);

  const inlineOverflow = element.style.overflow;

  if (computedStyle.position === "static") {
    element.style.position = "relative";
  }

  element.style.overflow = "hidden";

  const ripple = document.createElement("span");

  const rect = element.getBoundingClientRect();

  const size = Math.max(rect.width, rect.height) * 2;

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

export const useRipple = <T extends HTMLElement>() => {
  const handleMouseDown = (event: ReactMouseEvent<T>) => {
    if (event.button !== 0) return;

    applyRipple(event.currentTarget, event.clientX, event.clientY);
  };

  return {onMouseDown: handleMouseDown};
};
