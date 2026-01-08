import {useCallback, useEffect, useRef} from "react";

import {message} from "antd";

import {useLongPress} from "./useLongPress";

message.config({
  duration: 3,
  maxCount: 2,
  top: 60,
});

const isExcludedElement = (element: HTMLElement): boolean => {
  return (
    element.closest(".no-copy") !== null ||
    element.closest(".search-tags") !== null ||
    element.closest(".faq-tags .tag") !== null ||
    (element.tagName === "MARK" && element.classList.length === 0)
  );
};

const copyWithFallback = (text: string): boolean => {
  const textArea = document.createElement("textarea");

  textArea.value = text;

  Object.assign(textArea.style, {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    height: "1px",
    left: "0",
    outline: "none",
    padding: "0",
    position: "fixed",
    top: "0",
    width: "1px",
  });

  document.body.append(textArea);
  textArea.focus();
  textArea.select();

  let success = false;

  try {
    success = document.execCommand("copy");
  } catch (error) {
    console.error("Fallback copy failed:", error);
  }

  textArea.remove();

  return success;
};

export const copyText = async (text: string): Promise<boolean> => {
  if (!navigator.clipboard) {
    return copyWithFallback(text);
  }

  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-write" as PermissionName,
    });

    if (permission.state === "granted" || permission.state === "prompt") {
      await navigator.clipboard.writeText(text);

      return true;
    } else {
      return copyWithFallback(text);
    }
  } catch (error) {
    console.error("Clipboard API failed, trying fallback:", error);

    return copyWithFallback(text);
  }
};

export const useCopyToClipboard = () => {
  const isCopyingReference = useRef(false);

  const copyToClipboard = useCallback(
    async (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;

      if (isExcludedElement(target)) {
        return;
      }

      if (isCopyingReference.current) {
        return;
      }

      isCopyingReference.current = true;

      const textToCopy = target.textContent || "";

      try {
        const success = await copyText(textToCopy);

        if (success) {
          message.success("Текст скопирован в буфер обмена");
        } else {
          message.error("Не удалось скопировать текст");
        }
      } finally {
        setTimeout(() => {
          isCopyingReference.current = false;
        }, 100);
      }
    },
    []
  );

  const longPressCallback = useCallback(
    (event_: React.MouseEvent | React.TouchEvent) => {
      const target = event_.target as HTMLElement;

      if (target && (target.tagName === "MARK" || target.tagName === "CODE")) {
        copyToClipboard(event_);

        return true;
      }

      return false;
    },
    [copyToClipboard]
  );

  const longPressHandlers = useLongPress(longPressCallback);

  useEffect(() => {
    if (!(globalThis as unknown as Window).isAutoCopyEnabled) {
      return;
    }

    const {onContextMenu, onTouchEnd, onTouchMove, onTouchStart} = longPressHandlers;

    const onClickCode = (event_: MouseEvent) => {
      const target = event_.target as HTMLElement;

      if (target && target.tagName === "CODE") {
        copyToClipboard(event_);
      }
    };

    document.addEventListener(
      "contextmenu",
      onContextMenu as unknown as (event_: MouseEvent) => void
    );

    document.addEventListener(
      "touchstart",
      onTouchStart as unknown as (event_: TouchEvent) => void,
      {passive: true}
    );

    document.addEventListener(
      "touchmove",
      onTouchMove as unknown as (event_: TouchEvent) => void,
      {passive: true}
    );

    document.addEventListener(
      "touchend",
      onTouchEnd as unknown as (event_: TouchEvent) => void
    );

    document.addEventListener("click", onClickCode);
    (globalThis as unknown as Window).isAutoCopyEnabled = true;

    return () => {
      document.removeEventListener(
        "contextmenu",
        onContextMenu as unknown as (event_: MouseEvent) => void
      );

      document.removeEventListener(
        "touchstart",
        onTouchStart as unknown as (event_: TouchEvent) => void
      );

      document.removeEventListener(
        "touchmove",
        onTouchMove as unknown as (event_: TouchEvent) => void
      );

      document.removeEventListener(
        "touchend",
        onTouchEnd as unknown as (event_: TouchEvent) => void
      );

      document.removeEventListener("click", onClickCode);
      (globalThis as unknown as Window).isAutoCopyEnabled = false;
    };
  }, [longPressHandlers, copyToClipboard]);
};
