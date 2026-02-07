import hljs from "highlight.js";
import React, {useEffect, useMemo, useRef} from "react";

import {message} from "antd";
import "highlight.js/styles/github-dark.css";

import styles from "./CodeSnippet.module.scss";

interface CodeSnippetProperties {
  children: React.ReactNode;
  className?: string;
  language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProperties> = ({
  children,
  className,
  language = "javascript",
}) => {
  const codeReference = useRef<HTMLElement | null>(null);

  const codeText = useMemo(() => {
    const parts: string[] = [];

    const visit = (node: React.ReactNode): void => {
      if (node === null || node === undefined || typeof node === "boolean") {
        return;
      }

      if (typeof node === "string" || typeof node === "number") {
        parts.push(String(node));

        return;
      }

      if (Array.isArray(node)) {
        for (const entry of node) {
          visit(entry);
        }

        return;
      }

      if (React.isValidElement(node)) {
        if (node.type === "br") {
          parts.push("\n");

          return;
        }

        if ("children" in node.props) {
          visit(node.props.children as React.ReactNode);
        }
      }
    };

    visit(children);

    return parts.join("");
  }, [children]);

  useEffect(() => {
    if (codeReference.current) {
      hljs.highlightBlock(codeReference.current);
    }
  }, [codeText, language]);

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
        {codeText}
      </code>
    </pre>
  );
};

export default CodeSnippet;
