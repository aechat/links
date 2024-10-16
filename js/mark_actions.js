function extractTextFromHTML(htmlString) {
  let tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  let extractedText = tempElement.innerText;
  return extractedText;
}

function showCopiedNotification() {
  let copiedElement = document.querySelector(".copied");
  copiedElement.innerText = "Текст скопирован в буфер обмена";
  copiedElement.classList.remove("hidden");
  copiedElement.classList.add("visible");

  setTimeout(function () {
    copiedElement.classList.remove("visible");
    copiedElement.classList.add("hidden");
  }, 2500);
}

function copyTextToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      function () {
        showCopiedNotification();
      },
      function (err) {
        alert("Ошибка при копировании текста: " + err);
      }
    );
  } else {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      let successful = document.execCommand("copy");
      if (successful) {
        showCopiedNotification();
      } else {
        alert("Не удалось скопировать текст :(");
      }
    } catch (err) {
      alert("Ошибка при копировании текста: " + err);
    }
    document.body.removeChild(textarea);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let markElements = document.querySelectorAll("mark, code");
  markElements.forEach(function (element) {
    element.addEventListener("click", function () {
      let extractedText = element.innerText;
      copyTextToClipboard(extractedText);
    });
  });
});
