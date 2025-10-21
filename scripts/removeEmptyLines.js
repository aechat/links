#!/usr/bin/env node
/**
 * @file Скрипт для рекурсивного удаления пустых строк из текстовых файлов в проекте.
 * Он обходит все директории, игнорируя системные и указанные в `ignore.js`,
 * и обрабатывает файлы с текстовыми расширениями.
 */
import {runScript} from "./utils/scriptRunner.js";
import {confirmFileWrite} from "./utils/interactiveUtils.js";

const TEXT_FILE_EXTENSIONS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".json",
  ".md",
  ".txt",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".html",
  ".xml",
  ".yaml",
  ".yml",
  ".svg",
  ".vue",
  ".svelte",
  ".graphql",
  ".gql",
];

function removeEmptyLines(content) {
  return content
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
}

async function processor(filePath, originalContent) {
  const ext = `.${filePath.split(".").pop()}`;
  if (!TEXT_FILE_EXTENSIONS.includes(ext)) {
    return originalContent;
  }

  const fixedContent = removeEmptyLines(originalContent);

  if (originalContent !== fixedContent) {
    const shouldWrite = await confirmFileWrite(filePath);
    if (shouldWrite) {
      return fixedContent;
    }
  }
  return originalContent;
}

runScript("removeEmptyLines", processor);
