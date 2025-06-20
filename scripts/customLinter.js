#!/usr/bin/env node
import {readFileSync, readdirSync, statSync, writeFileSync} from "fs";

import {join} from "path";

import {cwd} from "process";

const IGNORED_DIRS = [
  ".git",
  "node_modules",
  "dist",
  "dist-ssr",
  "build",
  ".next",
  ".vscode",
  ".idea",
  ".vs",
  ".cursor",
];

const IGNORED_FILES = [
  ".gitignore",
  ".env",
  ".env.local",
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  "qodana.yaml",
  "TODO.md",
  ".DS_Store",
  ".vscode/settings.json",
  ".vscode/tasks.json",
  "public/legacy/css/styles.css",
];

const IGNORED_PATTERNS = [
  "*.log",
  "npm-debug.log*",
  "yarn-debug.log*",
  "yarn-error.log*",
  "pnpm-debug.log*",
  "lerna-debug.log*",
  "*.local",
  "*.suo",
  "*.ntvs*",
  "*.njsproj",
  "*.sln",
  "*.sw?",
];

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

function shouldIgnore(path) {
  const parts = path.split(/[/\\]/);

  const fileName = parts[parts.length - 1];

  for (let i = 0; i < parts.length - 1; i++) {
    if (IGNORED_DIRS.includes(parts[i])) {
      return true;
    }
  }

  if (IGNORED_FILES.includes(fileName)) {
    return true;
  }

  for (const pattern of IGNORED_PATTERNS) {
    if (pattern.includes("*")) {
      const regex = new RegExp(
        "^" + pattern.replace(/\*/g, ".*").replace(/\?/g, ".") + "$"
      );

      if (regex.test(fileName)) {
        return true;
      }
    }
  }

  return false;
}

function walkAndRemoveEmptyLines(dir) {
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);

    if (shouldIgnore(fullPath)) {
      continue;
    }

    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      walkAndRemoveEmptyLines(fullPath);
    } else {
      const ext = file.toLowerCase().split(".").pop();

      if (!TEXT_FILE_EXTENSIONS.includes(`.${ext}`)) {
        continue;
      }

      try {
        let original = readFileSync(fullPath, "utf8");
        let fixed = removeEmptyLines(original);

        if (original !== fixed) {
          writeFileSync(fullPath, fixed);
          console.log(`✔ removed empty lines: ${fullPath}`);
        }
      } catch (error) {
        console.error(`✘ error processing ${fullPath}: ${error.message}`);
      }
    }
  }
}

walkAndRemoveEmptyLines(cwd());
