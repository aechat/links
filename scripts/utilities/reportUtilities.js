import fs from "node:fs";

import path from "node:path";

export function createFinding({file, line, message, snippet, type}) {
  return {
    file,
    line,
    message,
    snippet,
    type,
  };
}

export function formatFinding(finding) {
  const suffix = finding.snippet ? ` ${finding.snippet}` : finding.message;

  return `- ${finding.file}:${finding.line} [${finding.type}] ${suffix}`;
}

export function printFindings(title, findings, stream = console.error) {
  if (findings.length === 0) {
    return;
  }

  stream(`${title} (${findings.length}):`);

  for (const finding of findings) {
    stream(formatFinding(finding));
  }
}

export function finishLint({errors = [], successMessage, warnings = []}) {
  printFindings("Предупреждения", warnings, console.warn);
  printFindings("Ошибки", errors, console.error);

  if (errors.length > 0) {
    process.exit(1);
  }

  console.log(successMessage);
}

export function writeReportFile(outputDirectory, fileName, lines) {
  fs.mkdirSync(outputDirectory, {recursive: true});
  fs.writeFileSync(path.join(outputDirectory, fileName), lines.join("\n"), "utf8");
}
