import {useEffect} from "react";

const TELEGRAM_WORD_PATTERN = /\btelegram\b/gi;

const REPLACEMENT_WORD = "МАХ";

const isAprilFoolsDay = () => {
  const currentDate = new Date();

  return currentDate.getMonth() === 3 && currentDate.getDate() === 1;
};

const shouldSkipTextNode = (node: Node) => {
  const parentElement = node.parentElement;

  if (!parentElement) {
    return true;
  }

  if (parentElement.closest("script, style, noscript, textarea")) {
    return true;
  }

  return false;
};

const replaceTelegramWordInTextNode = (node: Node) => {
  if (node.nodeType !== Node.TEXT_NODE || shouldSkipTextNode(node)) {
    return;
  }

  const currentValue = node.nodeValue;

  if (!currentValue || TELEGRAM_WORD_PATTERN.test(currentValue) === false) {
    return;
  }

  node.nodeValue = currentValue.replaceAll(TELEGRAM_WORD_PATTERN, REPLACEMENT_WORD);
};

const replaceTelegramWordInNodeTree = (rootNode: Node) => {
  replaceTelegramWordInTextNode(rootNode);

  const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);

  let currentNode = walker.nextNode();

  while (currentNode) {
    replaceTelegramWordInTextNode(currentNode);
    currentNode = walker.nextNode();
  }
};

export const useAprilFoolsTelegramReplace = () => {
  useEffect(() => {
    if (globalThis.document === undefined || isAprilFoolsDay() === false) {
      return;
    }

    replaceTelegramWordInNodeTree(document.body);

    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === "characterData") {
          replaceTelegramWordInTextNode(mutation.target);
          continue;
        }

        for (const addedNode of mutation.addedNodes) {
          replaceTelegramWordInNodeTree(addedNode);
        }
      }
    });

    observer.observe(document.body, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};
