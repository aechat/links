import {message} from "antd";

import hljs from "highlight.js";

import "highlight.js/styles/github-dark.css";

import React, {useEffect, useRef} from "react";

interface CodeSnippetProps {
  language?: string;
  children: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({language = "javascript", children}) => {
  const codeRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [children, language]);

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
