#!/usr/bin/env node
/**
 * @file Скрипт для исправления токенов в `.tsx` файлах.
 * 1. Преобразует текст в тегах <file> в верхний регистр (например, `<file>.env<` -> `<file>ENV<`).
 * 2. Форматирует пробелы вокруг знака `+` в тегах `<key>` (например, `<key>CTRL+S<` -> `<key>CTRL + S<`).
 */
import {readFileSync, writeFileSync} from "fs";
import {cwd} from "process";
import {walk} from "./utils/fileUtils.js";

function fixFileTags(content) {
  return content.replace(/("file">)\.(.*?)(<)/g, (_, open, word, close) => {
    return `${open}${word.toUpperCase()}${close}`;
  });
}

function fixKeyTags(content) {
  return content.replace(/("key">)(.*?)(<)/g, (_, open, keyContent, close) => {
    const fixed = keyContent.replace(/\s*\+\s*/g, " + ");
    return `${open}${fixed}${close}`;
  });
}

function processFile(filePath) {
  if (!filePath.endsWith(".tsx")) {
    return;
  }

  try {
    const original = readFileSync(filePath, "utf8");
    const fixed = fixKeyTags(fixFileTags(original));
    if (original !== fixed) {
      writeFileSync(filePath, fixed);
      console.log(`✔ обновлено: ${filePath}`);
    }
  } catch (error) {
    console.error(`✘ ошибка обработки ${filePath}: ${error.message}`);
  }
}

walk(cwd(), processFile);
