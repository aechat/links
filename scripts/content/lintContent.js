import {hasFlag} from "../utilities/commandLineUtilities.js";
import {
  collectDetailsSummaryFindings,
  collectDividerStyleFindings,
  collectNoHtmlStringFindings,
  getContentFiles,
  mergeFindings,
} from "../utilities/contentLintUtilities.js";
import {finishLint} from "../utilities/reportUtilities.js";

function main() {
  const strict = hasFlag("--strict");
  const files = getContentFiles();
  const findings = mergeFindings(
    collectNoHtmlStringFindings(files),
    collectDividerStyleFindings(files, {strict}),
    collectDetailsSummaryFindings(files, {strict})
  );

  finishLint({
    ...findings,
    successMessage: "Проверка контента пройдена.",
  });
}

main();
