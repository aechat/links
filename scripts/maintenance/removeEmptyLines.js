#!/usr/bin/env node
import {existsSync, readFileSync, statSync, writeFileSync} from "node:fs";

import {resolve} from "node:path";

import {cwd} from "node:process";

import {walk} from "../utilities/fileUtilities.js";

import {confirmFileWrite, rl} from "../utilities/interactiveUtilities.js";

import {shouldIgnore} from "../utilities/ignore.js";

import {runScript} from "../utilities/scriptRunner.js";

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

function collectTargetFiles(targets) {
  const files = [];

  for (const target of targets) {
    const absolutePath = resolve(cwd(), target);

    if (!existsSync(absolutePath)) {
      console.warn(`Путь не найден: ${target}`);
      continue;
    }

    const stat = statSync(absolutePath);

    if (stat.isDirectory()) {
      walk(absolutePath, (filePath) => {
        files.push(filePath);
      });

      continue;
    }

    if (shouldIgnore(absolutePath)) {
      console.warn(`Путь игнорируется правилами скриптов: ${target}`);
      continue;
    }

    files.push(absolutePath);
  }

  return files;
}

async function processTargets(targets) {
  const files = collectTargetFiles(targets);

  if (files.length === 0) {
    console.log("Нет файлов для обработки.");

    return;
  }

  for (const filePath of files) {
    const originalContent = readFileSync(filePath, "utf8");

    const fixedContent = await processor(filePath, originalContent);

    if (fixedContent !== originalContent) {
      writeFileSync(filePath, fixedContent);
      console.log(`✔ Обновлено: ${filePath}`);
    } else {
      console.log(`- Нет изменений: ${filePath}`);
    }
  }
}

const targets = process.argv.slice(2);

if (targets.length > 0) {
  processTargets(targets)
    .catch((error) => {
      console.error("Произошла ошибка:", error);
      process.exitCode = 1;
    })
    .finally(() => {
      rl.close();
      console.log("\nГотово!");
    });
} else {
  runScript("removeEmptyLines", processor);
}
