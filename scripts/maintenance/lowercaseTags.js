#!/usr/bin/env node
import {askForConfirmation} from "../utilities/interactiveUtilities.js";
import {runScript} from "../utilities/scriptRunner.js";

async function processor(filePath, originalContent) {
  if (!filePath.endsWith(".tsx")) {
    return originalContent;
  }

  let fixedContent = originalContent;
  const regex = /tag="([^"]*)"/g;
  const matches = Array.from(originalContent.matchAll(regex));
  const replacements = [];

  for (const match of matches) {
    const [fullMatch, tagValue] = match;
    const proposed = tagValue.toLowerCase();

    if (tagValue === proposed) continue;

    const shouldReplace = await askForConfirmation(tagValue, proposed);
    if (shouldReplace) {
      const newText = fullMatch.replace(tagValue, proposed);
      replacements.push({
        start: match.index,
        end: match.index + fullMatch.length,
        newText,
      });
    }
  }

  for (const rep of replacements.reverse()) {
    fixedContent =
      fixedContent.substring(0, rep.start) +
      rep.newText +
      fixedContent.substring(rep.end);
  }

  return fixedContent;
}

runScript("lowercaseTags", processor);
