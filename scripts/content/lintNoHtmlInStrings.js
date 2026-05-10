import {
  collectNoHtmlStringFindings,
  getContentFiles,
} from "../utilities/contentLintUtilities.js";
import {finishLint} from "../utilities/reportUtilities.js";

function main() {
  finishLint({
    ...collectNoHtmlStringFindings(getContentFiles()),
    successMessage:
      "HTML-подобная разметка в строковых props title/caption/tag/anchor не найдена.",
  });
}

main();
