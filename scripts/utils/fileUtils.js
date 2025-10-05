/**
 * @file Утилита для работы с файловой системой.
 * Предоставляет функцию для рекурсивного обхода директорий.
 */
import {readdirSync, statSync} from "fs";
import {join} from "path";
import {shouldIgnore} from "./ignore.js";

/**
 * Рекурсивно обходит директорию и применяет колбэк к каждому найденному файлу.
 * @param {string} dir - Путь к директории для обхода.
 * @param {(filePath: string) => void} callback - Функция, которая будет вызвана для каждого файла.
 */
export function walk(dir, callback) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    if (shouldIgnore(fullPath)) {
      continue;
    }
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}
