/**
 * декодирует html-сущности в тексте
 * @param text - текст с html-сущностями
 * @returns декодированный текст
 */

export const decodeHtmlEntities = (text: string): string => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;

  return textArea.value;
};

/**
 * возвращает правильную форму слова "результат" в зависимости от числа
 * @param count - количество результатов
 * @returns слово "результат" в нужной форме
 */

export const getResultWord = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "результат";
  }

  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return "результата";
  }

  return "результатов";
};

/**
 * возвращает правильную форму слова "найден" в зависимости от числа
 * @param count - количество найденных элементов
 * @returns слово "найден" в нужной форме
 */

export const getFoundWord = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "Найден";
  }

  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return "Найдены";
  }

  return "Найдено";
};

/**
 * извлекает первую строку, содержащую все слова из поискового запроса
 * @param content - html-содержимое для поиска
 * @param query - поисковый запрос
 * @returns html-содержимое первой найденной строки или исходное содержимое
 */

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

  /*
   * находит первое совпадение в списке
   * @param ulElement - элемент списка для поиска
   * @returns html-содержимое найденного элемента или null
   */

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

  // сначала ищем в списках

  const ulElements = Array.from(tempDiv.querySelectorAll("ul"));
  for (const ul of ulElements) {
    const matchedList = findFirstListMatch(ul);
    if (matchedList) {
      return matchedList;
    }
  }

  // если в списках не нашли, ищем в любых элементах

  const allElements = Array.from(tempDiv.querySelectorAll("*"));
  for (const element of allElements) {
    const elementHTML = element.innerHTML.toLowerCase();
    if (searchWords.every((word) => elementHTML.includes(word))) {
      return element.outerHTML;
    }
  }

  // если ничего не нашли, возвращаем первый элемент

  const firstElement = tempDiv.firstElementChild;

  return firstElement?.outerHTML || content;
};
