import {MouseEvent} from "react";

export const useRipple = <T extends HTMLElement>() => {
  const handleMouseDown = (event: MouseEvent<T>) => {
    if (event.button !== 0) return;

    const element = event.currentTarget;

    const computedStyle = globalThis.getComputedStyle(element);

    if (computedStyle.position === "static") {
      element.style.position = "relative";
    }

    element.style.overflow = "hidden";

    const ripple = document.createElement("span");

    const rect = element.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height) * 2;

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;

    ripple.classList.add("ripple");

    element.append(ripple);

    setTimeout(() => {
      if (ripple.parentElement) {
        ripple.remove();
      }
    }, 750);
  };

  return {onMouseDown: handleMouseDown};
};
