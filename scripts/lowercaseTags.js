#!/usr/bin/env node
/**
 * @file Скрипт для преобразования значений атрибута `tag` в нижний регистр.
 * Он рекурсивно обходит все директории, находит файлы с расширением `.tsx`
 * и приводит содержимое `tag="..."` к нижнему регистру.
 */
import {readFileSync, writeFileSync} from "fs";
import {cwd} from "process";
import {walk} from "./utils/fileUtils.js";

function lowercaseTags(content) {
  return content.replace(/tag="([^"]*)"/g, (_, p1) => `tag="${p1.toLowerCase()}"`);
}

function processFile(filePath) {
  if (!filePath.endsWith(".tsx")) {
    return;
  }

  try {
    const original = readFileSync(filePath, "utf8");
    const normalized = original.replace(/\r\n/g, "\n");
    const fixed = lowercaseTags(normalized);
    if (original !== fixed) {
      writeFileSync(filePath, fixed, {encoding: "utf8"});
      console.log(`✔ теги в нижнем регистре: ${filePath}`);
    }
  } catch (error) {
    console.error(`✘ ошибка обработки ${filePath}: ${error.message}`);
  }
}

walk(cwd(), processFile);
