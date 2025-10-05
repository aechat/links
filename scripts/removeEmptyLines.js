#!/usr/bin/env node
/**
 * @file Скрипт для рекурсивного удаления пустых строк из текстовых файлов в проекте.
 * Он обходит все директории, игнорируя системные и указанные в `ignore.js`,
 * и обрабатывает файлы с текстовыми расширениями.
 */
import {readFileSync, writeFileSync} from "fs";
import {cwd} from "process";
import {walk} from "./utils/fileUtils.js";

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

function processFile(filePath) {
  const ext = `.${filePath.split(".").pop()}`;
  if (!TEXT_FILE_EXTENSIONS.includes(ext)) {
    return;
  }

  try {
    const original = readFileSync(filePath, "utf8");
    const fixed = removeEmptyLines(original);
    if (original !== fixed) {
      writeFileSync(filePath, fixed);
      console.log(`✔ удалены пустые строки: ${filePath}`);
    }
  } catch (error) {
    console.error(`✘ ошибка обработки ${filePath}: ${error.message}`);
  }
}

walk(cwd(), processFile);
