import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules/*",
      "**/dist/*",
      "**/@typescript-eslint/*",
      "**/legacy/*",
      "vite.config.ts",
    ],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "eol-last": ["error", "always"],
      "padding-line-between-statements": [
        "warn",
        {blankLine: "never", prev: "import", next: "import"},
        {blankLine: "always", prev: "*", next: "const"},
        {blankLine: "always", prev: "import", next: "let"},
        {blankLine: "always", prev: "const", next: "function"},
        {blankLine: "always", prev: "function", next: "function"},
        {blankLine: "always", prev: "block-like", next: "block-like"},
        {blankLine: "always", prev: "block", next: "*"},
        {blankLine: "always", prev: "function", next: "const"},
        {
          blankLine: "always",
          prev: "return",
          next: ["function", "class", "block", "export"],
        },
        {blankLine: "always", prev: "export", next: ["function", "class", "block"]},
        {blankLine: "always", prev: "*", next: "return"},
      ],
      "grouped-accessor-pairs": ["error", "getBeforeSet"],
      // "no-unused-vars": ["warn"],
      "no-duplicate-imports": "error",
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      // "no-mixed-operators": "error",
      "semi": ["error", "always"],
      "curly": ["error", "all"],
      "no-empty": ["error", {allowEmptyCatch: true}],
      "keyword-spacing": ["error", {before: true, after: true}],
      "space-infix-ops": ["error", {int32Hint: false}],
      "space-before-function-paren": ["warn", "always"],
      "space-before-blocks": ["error", "always"],
      "comma-spacing": ["error", {before: false, after: true}],
      "eqeqeq": ["error", "always"],
      "brace-style": ["error", "1tbs", {allowSingleLine: true}],
      "space-unary-ops": ["error", {words: true, nonwords: false}],
      "no-console": ["warn", {allow: ["warn", "error"]}],
      "no-multiple-empty-lines": ["error", {max: 1, maxEOF: 1}],
    },
  },
];
