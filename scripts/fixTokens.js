#!/usr/bin/env node
import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

// Удаляет точку и делает заглавным в тегах "file">
function fixFileTags(content) {
  return content.replace(/("file">)\.(.*?)(<)/g, (_, open, word, close) => {
    return `${open}${word.toUpperCase()}${close}`;
  });
}

// Добавляет пробелы вокруг "+" в тегах "key">
function fixKeyTags(content) {
  return content.replace(/("key">)(.*?)(<)/g, (_, open, keyContent, close) => {
    const fixed = keyContent.replace(/\s*\+\s*/g, " + ");
    return `${open}${fixed}${close}`;
  });
}

// Рекурсивно обходит все tsx-файлы
function walkAndFix(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      walkAndFix(fullPath);
    } else if (file.endsWith(".tsx")) {
      const original = readFileSync(fullPath, "utf8");
      const fixed = fixKeyTags(fixFileTags(original));

      if (original !== fixed) {
        writeFileSync(fullPath, fixed);
        console.log(`✔ updated: ${fullPath}`);
      }
    }
  }
}

walkAndFix(cwd());
