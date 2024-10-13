import {useEffect} from "react";

const SummaryNumerateAndCopy = () => {
  useEffect(() => {
    const containers = document.querySelectorAll(".faq-content");

    containers.forEach((container, containerIndex) => {
      const h2s = container.querySelectorAll<HTMLElement>("summary");

      Array.from(h2s).forEach((element, index) => {
        if (
          element.tagName === "SUMMARY" &&
          !element.parentElement?.closest("details > summary")
        ) {
          const id = `${containerIndex + 1}.${index + 1}`;
          element.id = id;

          const firstChild = element.firstChild;
          const firstTextChild =
            firstChild && firstChild.nodeType === 3 ? firstChild : null;
          if (firstTextChild) {
            const newText = document.createTextNode(
              `${containerIndex + 1}.${index + 1}. `
            );
            element.insertBefore(newText, firstTextChild);
          }

          const h3 = element.querySelector("h3");
          if (h3) {
            const h3Text = h3.textContent;
            h3.textContent = `${containerIndex + 1}.${index + 1}. ${h3Text}`;
          }
        }

        const copyButton = document.createElement("button");
        copyButton.classList.add("copy_button");
        copyButton.textContent = "Скопировать ссылку";

        copyButton.addEventListener("click", function () {
          const summaryLink = window.location.href.split("#")[0] + "#" + element.id;
          const textarea = document.createElement("textarea");
          textarea.value = summaryLink;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          showCopiedSummaryUrlNotification();
        });

        element.appendChild(copyButton);
      });
    });

    function showCopiedSummaryUrlNotification() {
      const copiedElement = document.querySelector<HTMLElement>(".copied");
      if (copiedElement) {
        copiedElement.textContent = "Ссылка на пункт скопирована в буфер обмена";
        copiedElement.classList.remove("hidden");
        copiedElement.classList.add("visible");
        setTimeout(() => {
          copiedElement.classList.remove("visible");
          copiedElement.classList.add("hidden");
        }, 2500);
      }
    }
  }, []);
};

export default SummaryNumerateAndCopy;
