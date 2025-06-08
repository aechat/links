export const decodeHtmlEntities = (text: string): string => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;

  return textArea.value;
};

export const getResultWord = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "результат";
  }

  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return "результата";
  }

  return "результатов";
};

export const getFoundWord = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "Найден";
  }

  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return "Найдены";
  }

  return "Найдено";
};

export const extractMatchingLine = (content: string, query: string): string => {
  if (!content || !query.trim()) {
    return content;
  }

  const searchWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;

  const findFirstListMatch = (ulElement: HTMLUListElement): string | null => {
    const firstMatch = Array.from(ulElement.querySelectorAll("li")).find((li) => {
      const liText = li.textContent?.toLowerCase() || "";

      return searchWords.every((word) => liText.includes(word));
    });

    if (firstMatch) {
      const newUl = document.createElement("ul");
      newUl.appendChild(firstMatch.cloneNode(true));

      return newUl.outerHTML;
    }

    return null;
  };

  const ulElements = Array.from(tempDiv.querySelectorAll("ul"));

  for (const ul of ulElements) {
    const matchedList = findFirstListMatch(ul);

    if (matchedList) {
      return matchedList;
    }
  }

  const allElements = Array.from(tempDiv.querySelectorAll("*"));

  for (const element of allElements) {
    const elementHTML = element.innerHTML.toLowerCase();

    if (searchWords.every((word) => elementHTML.includes(word))) {
      return element.outerHTML;
    }
  }

  const firstElement = tempDiv.firstElementChild;

  return firstElement?.outerHTML || content;
};
