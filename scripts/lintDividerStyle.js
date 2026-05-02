import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TARGET_DIR = path.join(ROOT, "src", "pages", "sections");
const EXTENSIONS = new Set([".tsx", ".ts", ".jsx", ".js"]);
const STRICT = process.argv.includes("--strict");

const APP_NAMES = [
  "Adobe Premiere",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Photoshop",
  "Adobe Media Encoder",
  "Adobe Creative Cloud",
  "Shutter Encoder",
  "Subtitle Edit",
  "FFmpeg",
  "Ezgif",
  "Stable Diffusion",
];

const PLUGIN_NAMES = [
  "AfterCodecs",
  "Voukoder",
  "Duplicate Frame Remover",
  "Mocha",
  "Element 3D",
  "Cineware",
  "GifGun",
  "FX Console",
  "AEUX",
  "Auto Crop 3",
  "Depth Anything V2",
];

const DIVIDER_RE = /<Divider>([\s\S]*?)<\/Divider>/g;

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

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function lineNumberFromOffset(text, offset) {
  let line = 1;
  for (let i = 0; i < offset; i += 1) {
    if (text[i] === "\n") line += 1;
  }
  return line;
}

function hasMarked(inner, className, name) {
  const re = new RegExp(
    `<mark\\s+className=["']${className}["']>[^<]*${escapeRegex(name)}[^<]*<\\/mark>`,
    "i"
  );
  return re.test(inner);
}

function hasPlain(inner, name) {
  const re = new RegExp(`\\b${escapeRegex(name)}\\b`, "i");
  return re.test(inner);
}

const files = walk(TARGET_DIR);
const errors = [];
const warnings = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  let match;

  while ((match = DIVIDER_RE.exec(content)) !== null) {
    const inner = match[1];
    const line = lineNumberFromOffset(content, match.index);
    const rel = path.relative(ROOT, file);

    if (inner.includes("?")) {
      warnings.push({
        file: rel,
        line,
        type: "question-mark",
        text: inner.replace(/\s+/g, " ").trim().slice(0, 140),
      });
      if (STRICT) {
        errors.push({
          file: rel,
          line,
          type: "question-mark",
          text: inner.replace(/\s+/g, " ").trim().slice(0, 140),
        });
      }
    }

    for (const app of APP_NAMES) {
      if (hasPlain(inner, app) && !hasMarked(inner, "app", app)) {
        errors.push({
          file: rel,
          line,
          type: "app-mark",
          text: `${app} must be wrapped with mark.app`,
        });
      }
    }

    for (const plugin of PLUGIN_NAMES) {
      if (hasPlain(inner, plugin) && !hasMarked(inner, "plugin", plugin)) {
        errors.push({
          file: rel,
          line,
          type: "plugin-mark",
          text: `${plugin} must be wrapped with mark.plugin`,
        });
      }
    }
  }
}

if (warnings.length > 0) {
  console.warn(`Divider style warnings (${warnings.length}):`);
  for (const w of warnings) {
    console.warn(`- ${w.file}:${w.line} [${w.type}] ${w.text}`);
  }
}

if (errors.length > 0) {
  console.error(`Divider style errors (${errors.length}):`);
  for (const e of errors) {
    console.error(`- ${e.file}:${e.line} [${e.type}] ${e.text}`);
  }
  process.exit(1);
}

console.log("Divider style lint passed.");
