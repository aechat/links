import fs from "node:fs";

import path from "node:path";

import {
  getOutputDirectory,
  getSectionsOption,
} from "../utilities/commandLineUtilities.js";

import {getSectionFiles, toRelativePath} from "../utilities/fileUtilities.js";

import {formatGeneratedDate, stripTags} from "../utilities/textUtilities.js";

const CONTEXT_RADIUS = 2;

const VERSION_OCCURRENCE_RE =
  /\b(?:\d{1,4}(?:[.,]\d+)+(?:[-–]\d+(?:[.,]\d+)*)?(?:\s*\([12]\d{3}(?:[-–][12]\d{3})?\))?|\d{1,2}\.X(?:\.X)?(?:[-–]\d{1,2}\.X(?:\.X)?)?(?:\s*\([12]\d{3}(?:[-–][12]\d{3})?\))?|[12]\d{3}(?:[-–][12]\d{3})?(?:\.X(?:\.X)?)?|20XX|R\d+(?:\.X)+|CS\d+|AVX\d|H\.\d+|\d+\s*(?:FPS|ГБ|МБ|%|бит(?:ах)?|×\d+))\b/iu;

const VERSION_ONLY_RE =
  /^(?:\d{1,4}(?:[.,]\d+)*(?:[-–]\d+(?:[.,]\d+)*)?|\d{1,2}\.X(?:\.X)?(?:[-–]\d{1,2}\.X(?:\.X)?)?|[12]\d{3}(?:[-–][12]\d{3})?(?:\.X(?:\.X)?)?|20XX|R\d+(?:\.X)+|CS\d+)(?:\s*\([12]\d{3}(?:[-–][12]\d{3})?\))?$/iu;

const MARK_RE = /<mark(?:\s+className=(?:"([^"]+)"|'([^']+)'))?>([\s\S]*?)<\/mark>/g;

const ADOBE_APP_RE =
  /\bAdobe\s+(?:After Effects|Premiere(?:\s+Pro)?|Photoshop|Media Encoder|Creative Cloud)\b/iu;

function stripJsxNoise(value) {
  return value.replaceAll(/\s+/g, " ").trim();
}

function makeChecklistPath(filePath) {
  return `./${toRelativePath(filePath).replaceAll("/", "\\")}`;
}

function formatOccurrence(occurrence, style = "plain") {
  const file = style === "checklist" ? occurrence.checklistPath : occurrence.path;

  if (style === "checklist") {
    return `- ${file}:${occurrence.line} — ${occurrence.text}`;
  }

  return `${file}:${occurrence.line}: ${occurrence.raw}`;
}

function getContext(lines, lineIndex) {
  const start = Math.max(0, lineIndex - CONTEXT_RADIUS);

  const end = Math.min(lines.length, lineIndex + CONTEXT_RADIUS + 1);

  return lines.slice(start, end).join(" ");
}

function hasVersion(text) {
  return VERSION_OCCURRENCE_RE.test(text);
}

function isAdobeYearStyle(text) {
  return (
    /\bAdobe\b/iu.test(text) &&
    /\b(?:20XX|20\d{2})\b/iu.test(text) &&
    !/\b\d{1,2}\.(?:\d+|X)/iu.test(text) &&
    !/\([12]\d{3}(?:[-–][12]\d{3})?\)/u.test(text)
  );
}

function isCinemaYearStyle(text) {
  return (
    /\bCinema\s+4D\b/iu.test(text) &&
    (/\b20\d{2}(?:\.X(?:\.X)?)?\b/iu.test(text) || /\bR\d+(?:\.X)+\b/iu.test(text))
  );
}

function isYearOnlyVersion(text) {
  return /^(?:20XX|20\d{2})$/iu.test(stripTags(text));
}

function isVersionOnlyMark(text) {
  return VERSION_ONLY_RE.test(stripTags(text));
}

function hasAdobeAppWithoutVersion(context) {
  if (!ADOBE_APP_RE.test(context)) {
    return false;
  }

  const appMatches = context.match(
    /Adobe\s+(?:After Effects|Premiere(?:\s+Pro)?|Photoshop|Media Encoder|Creative Cloud)(?:\s+[A-Za-zА-Яа-яёЁ]+){0,3}/giu
  );

  if (!appMatches) {
    return false;
  }

  return appMatches.some((match) => !hasVersion(match));
}

function collectReports(files) {
  const allOccurrences = [];

  const adobeYearStyle = [];

  const cinemaYearStyle = [];

  const versionOnlyMarks = [];

  const priorityVersionOnlyMarks = [];

  for (const file of files) {
    const rawContent = fs.readFileSync(file, "utf8");

    const lines = rawContent.split(/\r?\n/);

    const relativePath = toRelativePath(file);

    const checklistPath = makeChecklistPath(file);

    for (const [lineIndex, rawLine] of lines.entries()) {
      if (VERSION_OCCURRENCE_RE.test(rawLine)) {
        allOccurrences.push({
          checklistPath,
          line: lineIndex + 1,
          path: relativePath,
          raw: rawLine,
          text: stripJsxNoise(rawLine),
        });
      }

      let match;

      MARK_RE.lastIndex = 0;

      while ((match = MARK_RE.exec(rawLine)) !== null) {
        const className = match[1] ?? match[2] ?? "";

        const fullMark = match[0];

        const innerText = stripTags(match[3] ?? "");

        const context = getContext(lines, lineIndex);

        const occurrence = {
          checklistPath,
          line: lineIndex + 1,
          path: relativePath,
          raw: rawLine,
          text: stripJsxNoise(rawLine),
          mark: fullMark,
          innerText,
        };

        if (
          (className === "app" && isAdobeYearStyle(innerText)) ||
          ((className === "version" || !className) &&
            isYearOnlyVersion(innerText) &&
            hasAdobeAppWithoutVersion(context))
        ) {
          adobeYearStyle.push(occurrence);
        }

        if (
          (className === "app" && isCinemaYearStyle(innerText)) ||
          ((className === "version" || !className) &&
            isCinemaYearStyle(innerText) &&
            /\bCinema\s+4D\b/iu.test(context))
        ) {
          cinemaYearStyle.push(occurrence);
        }

        if ((className === "version" || !className) && isVersionOnlyMark(innerText)) {
          versionOnlyMarks.push(occurrence);

          if (hasAdobeAppWithoutVersion(context)) {
            priorityVersionOnlyMarks.push(occurrence);
          }
        }
      }
    }
  }

  return {
    adobeYearStyle,
    allOccurrences,
    cinemaYearStyle,
    priorityVersionOnlyMarks,
    versionOnlyMarks,
  };
}

function writeOccurrenceReport(outputDirectory, sections, reports, generatedAt) {
  const lines = [];

  lines.push("# Отчёт по упоминаниям версий");
  lines.push(`Сгенерировано: ${generatedAt}`);
  lines.push("");
  lines.push(`Разделы: ${sections.join(", ")}`);
  lines.push("");
  lines.push("## 1) Все совпадения, похожие на версии");
  lines.push(`Количество: ${reports.allOccurrences.length}`);
  lines.push("");

  for (const occurrence of reports.allOccurrences) {
    lines.push(formatOccurrence(occurrence));
  }

  lines.push("");

  fs.writeFileSync(
    path.join(outputDirectory, "version-occurrences.txt"),
    lines.join("\n"),
    "utf8"
  );
}

function writeChecklistReport(outputDirectory, sections, reports, generatedAt) {
  const lines = [];

  lines.push("# Версионный чек-лист (actionable)");
  lines.push("");
  lines.push(`Сгенерировано: ${generatedAt}`);
  lines.push("");
  lines.push(`Область: \`src/pages/sections/{${sections.join(",")}}\``);
  lines.push("");
  lines.push("## Сводка");
  lines.push("");

  lines.push(
    `- \`mark.app\`/связка \`mark.app + mark.version\` с форматом \`Adobe ... 20XX/2025\` (к переводу в \`major.X (YYYY)\`): ${reports.adobeYearStyle.length}`
  );

  lines.push(
    `- \`mark.app\`/связка \`mark.app + mark.version\` с годовым стилем у \`Cinema 4D\` (проверить по правилу для non-Adobe): ${reports.cinemaYearStyle.length}`
  );

  lines.push(
    `- одиночные версии в \`<mark>...</mark>\` или \`mark.version\` (кандидаты на схлопывание): ${reports.versionOnlyMarks.length}`
  );

  lines.push(
    `- одиночные версии рядом с \`Adobe ...\` без версии (приоритетные на схлопывание): ${reports.priorityVersionOnlyMarks.length}`
  );

  lines.push("");

  const sectionsToWrite = [
    ["1) Годовой стиль Adobe в mark.app / mark.version", reports.adobeYearStyle],
    ["2) Годовой стиль Cinema 4D в mark.app / mark.version", reports.cinemaYearStyle],
    [
      "3) Приоритет: одиночная версия рядом с Adobe app без версии",
      reports.priorityVersionOnlyMarks,
    ],
    ["4) Полный список одиночных версий / mark.version", reports.versionOnlyMarks],
  ];

  for (const [title, occurrences] of sectionsToWrite) {
    lines.push(`## ${title}`);
    lines.push("");

    if (occurrences.length === 0) {
      lines.push("- Совпадений нет.");
      lines.push("");
      continue;
    }

    for (const occurrence of occurrences) {
      lines.push(formatOccurrence(occurrence, "checklist"));
    }

    lines.push("");
  }

  fs.writeFileSync(
    path.join(outputDirectory, "version-actionable-checklist.md"),
    lines.join("\n"),
    "utf8"
  );
}

const sections = getSectionsOption();

const outputDirectory = getOutputDirectory("version-report");

const files = getSectionFiles({sections});

const generatedAt = formatGeneratedDate();

const reports = collectReports(files);

fs.mkdirSync(outputDirectory, {recursive: true});
writeOccurrenceReport(outputDirectory, sections, reports, generatedAt);
writeChecklistReport(outputDirectory, sections, reports, generatedAt);
console.log(`Версионные отчёты созданы: ${toRelativePath(outputDirectory)}`);
console.log(`Все совпадения, похожие на версии: ${reports.allOccurrences.length}`);
console.log(`Годовой стиль Adobe в mark.app: ${reports.adobeYearStyle.length}`);
console.log(`Годовой стиль Cinema 4D в mark.app: ${reports.cinemaYearStyle.length}`);
console.log(`Одиночные версии в mark: ${reports.versionOnlyMarks.length}`);

console.log(
  `Приоритетные одиночные версии в mark: ${reports.priorityVersionOnlyMarks.length}`
);
