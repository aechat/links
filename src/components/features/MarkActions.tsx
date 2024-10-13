import {useEffect} from "react";

function extractTextFromHTML(htmlString: string): string {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  const extractedText = tempElement.innerText;
  return extractedText;
}

function showCopiedNotification(): void {
  const copiedElement = document.querySelector(".copied") as HTMLElement;
  copiedElement.innerText = "Текст скопирован в буфер обмена";
  copiedElement.classList.remove("hidden");
  copiedElement.classList.add("visible");

  setTimeout(() => {
    copiedElement.classList.remove("visible");
    copiedElement.classList.add("hidden");
  }, 2500);
}

function copyTextToClipboard(text: string): void {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => {
        showCopiedNotification();
      },
      (err) => {
        if (err.name !== "NotAllowedError") {
          console.error(`Ошибка при копировании текста: ${err}`);
        }
      }
    );
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        showCopiedNotification();
      } else {
        console.error("Не удалось скопировать текст :(");
      }
    } catch (err) {
      console.error(`Ошибка при копировании текста: ${err}`);
    }
    document.body.removeChild(textarea);
  }
}

const MarkActions = (): null => {
  useEffect(() => {
    const markElements = document.querySelectorAll("mark, code");
    markElements.forEach((element) => {
      element.addEventListener("click", () => {
        const extractedText = extractTextFromHTML(element.innerHTML);
        copyTextToClipboard(extractedText);
      });
    });
  }, []);

  return null;
};

export default MarkActions;
