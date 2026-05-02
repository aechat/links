import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TARGET_DIR = path.join(ROOT, "src", "pages", "sections");
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx"]);
const HTML_TAG_RE = /<\s*\/?\s*[A-Za-z][^>]*>/;
const ATTR_RE = /\b(title|caption|tag|anchor)\s*=\s*(["'])([\s\S]*?)\2/g;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (entry.name === "node_modules" || entry.name === "dist") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
      continue;
    }
    if (EXTENSIONS.has(path.extname(entry.name))) out.push(full);
  }
  return out;
}

function lineNumberFromOffset(text, offset) {
  let line = 1;
  for (let i = 0; i < offset; i += 1) {
    if (text[i] === "\n") line += 1;
  }
  return line;
}

const files = walk(TARGET_DIR);
const findings = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  let match;
  while ((match = ATTR_RE.exec(content)) !== null) {
    const attr = match[1];
    const value = match[3];
    if (!HTML_TAG_RE.test(value)) continue;
    const line = lineNumberFromOffset(content, match.index);
    findings.push({
      file: path.relative(ROOT, file),
      line,
      attr,
      snippet: value.slice(0, 140).replace(/\s+/g, " "),
    });
  }
}

if (findings.length > 0) {
  console.error(
    "Found HTML-like markup inside string JSX props (title/caption/tag/anchor):"
  );
  for (const f of findings) {
    console.error(`- ${f.file}:${f.line} [${f.attr}] -> ${f.snippet}`);
  }
  process.exit(1);
}

console.log("No HTML-like markup in title/caption/tag/anchor string props.");
