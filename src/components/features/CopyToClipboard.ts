import {message} from "antd";

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

const copyWithClipboardApi = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    message.success("Текст скопирован в буфер обмена");
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Неизвестная ошибка";
    message.error(`Ошибка при копировании текста в буфер обмена: ${errorMessage}`);
  }
};

const copyWithFallback = (text: string): void => {
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
  document.execCommand("copy");
  message.success("Текст успешно скопирован в буфер обмена");
  document.body.removeChild(textArea);
};

const copyToClipboard = (event?: MouseEvent): void => {
  if (!event?.target) {
    return;
  }

  const elementToCopy = event.target as HTMLElement;

  if (isExcludedElement(elementToCopy)) {
    return;
  }

  const textContent = cleanHtml(elementToCopy.textContent || "");

  if (navigator.clipboard) {
    copyWithClipboardApi(textContent);
  } else {
    copyWithFallback(textContent);
  }
};

const enableAutoCopy = (): void => {
  document.addEventListener("click", (event) => {
    if (
      event.target instanceof HTMLElement &&
      (event.target.tagName === "MARK" || event.target.tagName === "CODE")
    ) {
      copyToClipboard(event);
    }
  });
};

export default {copyToClipboard, enableAutoCopy};
