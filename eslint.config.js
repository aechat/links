import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

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
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
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

      // "lines-around-comment": [
      //   "error",
      //   {
      //     beforeLineComment: true,
      //     afterLineComment: true,
      //     allowBlockStart: false,
      //     allowBlockEnd: false,
      //     allowClassStart: false,
      //     allowClassEnd: false,
      //     allowObjectStart: false,
      //     allowObjectEnd: false,
      //     allowArrayStart: false,
      //     allowArrayEnd: false,
      //     beforeBlockComment: true,
      //     afterBlockComment: true,
      //   },
      // ],

      "react/jsx-uses-vars": "error",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
      "react/jsx-props-no-spreading": "off",
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-indent": ["error", 2],
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-undef": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to"],
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],
    },
  },
];
