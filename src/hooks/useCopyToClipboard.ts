import {message} from "antd";

let isAutoCopyEnabled = false;
let isCopying = false;
message.config({
  top: 60,
  duration: 3,
  maxCount: 2,
});

const isExcludedElement = (element: HTMLElement): boolean => {
  return (
    element.closest(".search-content") !== null ||
    element.closest(".search-tags") !== null ||
    element.closest(".faq-tags .tag") !== null ||
    (element.tagName === "MARK" && !element.classList.length)
  );
};

const cleanHtml = (text: string): string => {
  return text.replace(/<br\s*\/?>(\n)?/gi, "\n");
};

const copyWithFallback = (text: string): boolean => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  Object.assign(textArea.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "1px",
    height: "1px",
    padding: "0",
    border: "none",
    outline: "none",
    boxShadow: "none",
    background: "transparent",
  });
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  let success = false;

  try {
    success = document.execCommand("copy");
  } catch (err) {
    console.error("Fallback copy failed:", err);
  }

  document.body.removeChild(textArea);

  return success;
};

export const useCopyToClipboard = () => {
  const copyToClipboard = async (event?: MouseEvent): Promise<void> => {
    if (!event?.target) {
      return;
    }

    const elementToCopy = event.target as HTMLElement;

    if (isExcludedElement(elementToCopy)) {
      return;
    }

    if (isCopying) {
      return;
    }

    isCopying = true;

    const textContent = cleanHtml(elementToCopy.textContent || "");

    try {
      await navigator.clipboard.writeText(textContent);
      message.success("Текст скопирован в буфер обмена");
    } catch (err) {
      if (copyWithFallback(textContent)) {
        message.success("Текст скопирован в буфер обмена");
      } else {
        console.error("Не удалось скопировать текст:", err);
        message.error("Не удалось скопировать текст");
      }
    } finally {
      isCopying = false;
    }
  };

  const enableAutoCopy = (): void => {
    if (isAutoCopyEnabled) {
      return;
    }

    document.addEventListener("click", (event) => {
      if (
        event.target instanceof HTMLElement &&
        (event.target.tagName === "MARK" || event.target.tagName === "CODE")
      ) {
        copyToClipboard(event);
      }
    });
    isAutoCopyEnabled = true;
  };

  return {copyToClipboard, enableAutoCopy};
};
