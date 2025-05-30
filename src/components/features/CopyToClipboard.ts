import {message} from "antd";

/**
 * конфигурация уведомлений
 */

message.config({
  top: 60,
  duration: 3,
  maxCount: 2,
});

/**
 * проверяет, является ли элемент исключением для копирования
 * @param element - элемент для проверки
 * @returns true если элемент является исключением
 */

const isExcludedElement = (element: HTMLElement): boolean => {
  return (
    element.closest(".search-content") !== null ||
    element.closest(".search-tags") !== null ||
    element.closest(".faq-tags .tag") !== null ||
    (element.tagName === "MARK" && !element.classList.length)
  );
};

/**
 * очищает html-разметку из текста
 * @param html - текст с html-разметкой
 * @returns очищенный текст
 */

const cleanHtml = (html: string): string => {
  return html.replace(/<br\s*\/?>/gi, "\n").replace(/<\/?[^>]+(>|$)/g, "");
};

/**
 * копирует текст в буфер обмена с помощью clipboard api
 * @param text - текст для копирования
 * @returns промис с результатом копирования
 */

const copyWithClipboardApi = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    message.success("Текст скопирован в буфер обмена");
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Неизвестная ошибка";
    message.error(`Ошибка при копировании текста в буфер обмена: ${errorMessage}`);
  }
};

/**
 * копирует текст в буфер обмена с помощью fallback метода
 * @param text - текст для копирования
 */

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

/**
 * копирует текст из элемента в буфер обмена
 * @param event - событие клика
 */

const copyToClipboard = (event?: MouseEvent): void => {
  if (!event?.target) {
    return;
  }

  const elementToCopy = event.target as HTMLElement;
  if (isExcludedElement(elementToCopy)) {
    return;
  }

  const textContent = cleanHtml(elementToCopy.innerHTML);
  if (navigator.clipboard) {
    copyWithClipboardApi(textContent);
  } else {
    copyWithFallback(textContent);
  }
};

/**
 * включает автоматическое копирование при клике на mark или code элементы
 */

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
