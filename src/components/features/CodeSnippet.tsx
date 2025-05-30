import React, {useEffect, useRef} from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import {message} from "antd";

/**
 * пропсы компонента для отображения фрагмента кода
 */

interface CodeSnippetProps {
  /** язык программирования для подсветки синтаксиса */

  language?: string;

  /** код для отображения */

  children: string;
}

/**
 * компонент для отображения фрагмента кода с подсветкой синтаксиса
 * @param language - язык программирования (по умолчанию javascript)
 * @param children - код для отображения
 * @returns блок с подсвеченным кодом
 */

const CodeSnippet: React.FC<CodeSnippetProps> = ({language = "javascript", children}) => {
  const codeRef = useRef<HTMLElement | null>(null);

  /*
   * применяет подсветку синтаксиса при изменении кода или языка
   */

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [children, language]);

  /*
   * копирует код в буфер обмена при клике
   * @param event - событие клика
   */

  const handleCopy = (event: React.MouseEvent<HTMLPreElement>): void => {
    event.stopPropagation();

    const textArea = document.createElement("textarea");

    const codeText = codeRef.current?.textContent ?? "";
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    message.success("Код скопирован в буфер обмена");
  };

  return (
    <pre
      aria-label="Нажмите, чтобы скопировать код"
      role="button"
      onClick={handleCopy}
    >
      <code
        ref={codeRef}
        className={language}
        style={{userSelect: "none"}}
      >
        {children}
      </code>
    </pre>
  );
};
export default CodeSnippet;
