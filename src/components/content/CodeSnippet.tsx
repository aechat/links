import hljs from "highlight.js";
import React, {useEffect, useRef} from "react";

import {message} from "antd";
import "highlight.js/styles/github-dark.css";

import styles from "./CodeSnippet.module.scss";

interface CodeSnippetProperties {
  children: string;
  className?: string;
  language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProperties> = ({
  children,
  className,
  language = "javascript",
}) => {
  const codeReference = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeReference.current) {
      hljs.highlightBlock(codeReference.current);
    }
  }, [children, language]);

  const handleCopy = (event: React.MouseEvent<HTMLPreElement>): void => {
    event.stopPropagation();

    const textArea = document.createElement("textarea");

    const codeText = codeReference.current?.textContent ?? "";

    textArea.value = codeText;
    document.body.append(textArea);
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
        ref={codeReference}
        className={`${language} ${className ?? styles.code}`}
      >
        {children}
      </code>
    </pre>
  );
};

export default CodeSnippet;
