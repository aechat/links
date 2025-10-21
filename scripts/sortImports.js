#!/usr/bin/env node
/**
 * @file Скрипт для сортировки импортов в .ts и .tsx файлах.
 */
import {runScript} from "./utils/scriptRunner.js";
import {confirmFileWrite} from "./utils/interactiveUtils.js";

const UNSORTABLE_PATTERNS = [/from "react";/, /from "react-router-dom";/, /\.s?css";$/];

async function processor(filePath, originalContent) {
  if (!filePath.endsWith(".ts") && !filePath.endsWith(".tsx")) {
    return originalContent;
  }

  const importStatements = originalContent.match(/import(?:[\s\S])*?;/g) || [];

  if (importStatements.length === 0) {
    return originalContent;
  }

  const importBlock = importStatements.join("\n");
  if (!originalContent.trim().startsWith(importBlock.trim().slice(0, 20))) {
    console.log(`- пропущено (импорты не в начале): ${filePath}`);
    return originalContent;
  }

  const originalImportBlock = importStatements.join("\n");

  const unsortable = [];
  const sortable = [];

  importStatements.forEach((stmt) => {
    if (UNSORTABLE_PATTERNS.some((pattern) => pattern.test(stmt))) {
      unsortable.push(stmt);
    } else {
      sortable.push(stmt);
    }
  });

  sortable.sort((a, b) => {
    const getPath = (s) => s.match(/from\s+['"](.*?)['"]/)?.[1] || "";
    const pathA = getPath(a);
    const pathB = getPath(b);

    const getGroup = (p) => {
      if (p.startsWith(".")) return 2;
      if (p.startsWith("src/") || p.startsWith("@/")) return 1;
      return 0;
    };

    const groupA = getGroup(pathA);
    const groupB = getGroup(pathB);

    if (groupA !== groupB) {
      return groupA - groupB;
    }
    return pathA.localeCompare(pathB);
  });

  const newImportBlock = [...unsortable, ...sortable].join("\n");

  const newContent = originalContent.replace(originalImportBlock, newImportBlock);

  if (originalContent !== newContent) {
    const shouldWrite = await confirmFileWrite(filePath);
    if (shouldWrite) {
      return newContent;
    }
  }
  return originalContent;
}

runScript("sortImports", processor);
