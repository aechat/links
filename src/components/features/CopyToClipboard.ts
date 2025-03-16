import {message} from "antd";

const copyToClipboard = (event?: MouseEvent) => {
  if (!event?.target) {
    return;
  }

  const elementToCopy = event.target as HTMLElement;
  if (elementToCopy.tagName === "MARK" && !elementToCopy.classList.length) {
    return;
  }

  const textContent = elementToCopy.innerHTML
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?[^>]+(>|$)/g, "");
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textContent)
      .then(() => {
        message.success("Текст скопирован в буфер обмена");
      })
      .catch((error) => {
        message.error("Ошибка при копировании текста в буфер обмена: " + error.message);
      });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = textContent;
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
  }
};

message.config({
  top: 60,
  duration: 3,
  maxCount: 2,
});

const enableAutoCopy = () => {
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
