export const IGNORED_DIRS = [
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
  ".yarn",
  "public",
];
export const IGNORED_FILES = [
  ".gitignore",
  ".env",
  ".env.local",
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  "qodana.yaml",
  "TODO.md",
  ".DS_Store",
];
export const IGNORED_PATTERNS = [
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
export function shouldIgnore(path) {
  const parts = path.split(/[/\\]/);
  const fileName = parts[parts.length - 1];
  for (const part of parts) {
    if (IGNORED_DIRS.includes(part)) {
      return true;
    }
  }
  if (IGNORED_FILES.includes(fileName)) {
    return true;
  }
  for (const pattern of IGNORED_PATTERNS) {
    const regex = new RegExp(
      "^" + pattern.replace(/\*/g, ".*").replace(/\?/g, ".") + "$",
      "i"
    );
    if (regex.test(fileName)) {
      return true;
    }
  }
  return false;
}
