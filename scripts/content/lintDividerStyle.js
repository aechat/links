import {hasFlag} from "../utilities/commandLineUtilities.js";
import {
  collectDividerStyleFindings,
  getContentFiles,
} from "../utilities/contentLintUtilities.js";
import {finishLint} from "../utilities/reportUtilities.js";

function main() {
  finishLint({
    ...collectDividerStyleFindings(getContentFiles(), {
      strict: hasFlag("--strict"),
    }),
    successMessage: "Проверка Divider пройдена.",
  });
}

main();
