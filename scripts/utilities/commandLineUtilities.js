import path from "node:path";

import {DEFAULT_SECTIONS, ROOT, SCRIPT_LOGS_ROOT} from "./fileUtilities.js";
import {makeTimestamp} from "./textUtilities.js";

export function hasFlag(name) {
  return process.argv.includes(name);
}

export function getOption(name) {
  const index = process.argv.indexOf(name);

  if (index === -1) {
    return;
  }

  return process.argv[index + 1];
}

export function getCsvOption(name, fallback = []) {
  const value = getOption(name);

  if (!value) {
    return fallback;
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getSectionsOption() {
  return getCsvOption("--sections", DEFAULT_SECTIONS);
}

export function getOutputDirectory(prefix) {
  const explicitOutput = getOption("--out");

  if (explicitOutput) {
    return path.resolve(ROOT, explicitOutput);
  }

  return path.join(SCRIPT_LOGS_ROOT, `${prefix}-${makeTimestamp()}`);
}
