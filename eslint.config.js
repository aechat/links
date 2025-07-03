import globals from "globals";

import pluginJs from "@eslint/js";

import tseslint from "typescript-eslint";

import pluginReact from "eslint-plugin-react";

import pluginJsxA11y from "eslint-plugin-jsx-a11y";

import pluginPrettier from "eslint-plugin-prettier";

import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    ignores: ["**/node_modules/*", "**/dist/*", "**/@typescript-eslint/*"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
      "prettier": pluginPrettier,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          bracketSpacing: false,
          embeddedLanguageFormatting: "auto",
          endOfLine: "lf",
          htmlWhitespaceSensitivity: "strict",
          insertPragma: false,
          printWidth: 90,
          proseWrap: "never",
          quoteProps: "consistent",
          requirePragma: false,
          semi: true,
          singleAttributePerLine: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          useTabs: false,
          vueIndentScriptAndStyle: true,
        },
      ],
      "eol-last": "off",
      "padding-line-between-statements": [
        "warn",
        {blankLine: "always", prev: "import", next: "export"},
        {blankLine: "always", prev: "import", next: "*"},
        {blankLine: "always", prev: "*", next: "import"},
        {blankLine: "always", prev: "*", next: "const"},
        {blankLine: "always", prev: "const", next: "function"},
        {blankLine: "always", prev: "function", next: "function"},
        {blankLine: "always", prev: "block-like", next: "block-like"},
        {blankLine: "always", prev: "block", next: "*"},
        {blankLine: "always", prev: "function", next: "const"},
        {blankLine: "always", prev: "*", next: "export"},
        {blankLine: "always", prev: "class", next: "export"},
        {blankLine: "always", prev: "const", next: "export"},
        {blankLine: "always", prev: "let", next: "export"},
        {blankLine: "always", prev: "var", next: "export"},
        {blankLine: "always", prev: "export", next: "class"},
        {blankLine: "always", prev: "class", next: "class"},
        {blankLine: "always", prev: "class", next: "function"},
        {blankLine: "always", prev: "function", next: "class"},
        {blankLine: "always", prev: "*", next: "class"},
        {blankLine: "always", prev: "class", next: "*"},
        {blankLine: "always", prev: "*", next: "function"},
        {blankLine: "always", prev: "function", next: "*"},
        {blankLine: "always", prev: "*", next: "return"},
        {blankLine: "always", prev: "return", next: "*"},
        {blankLine: "always", prev: "*", next: "break"},
        {blankLine: "always", prev: "break", next: "*"},
        {blankLine: "always", prev: "*", next: "continue"},
        {blankLine: "always", prev: "continue", next: "*"},
        {blankLine: "always", prev: "*", next: "throw"},
        {blankLine: "always", prev: "throw", next: "*"},
        {blankLine: "always", prev: "*", next: "try"},
        {blankLine: "always", prev: "try", next: "*"},
        {blankLine: "always", prev: "*", next: "switch"},
        {blankLine: "always", prev: "switch", next: "*"},
        {blankLine: "always", prev: "*", next: "case"},
        {blankLine: "always", prev: "case", next: "*"},
        {blankLine: "always", prev: "*", next: "default"},
        {blankLine: "always", prev: "default", next: "*"},
        {blankLine: "always", prev: "*", next: "if"},
        {blankLine: "always", prev: "if", next: "*"},
        {blankLine: "always", prev: "*", next: "for"},
        {blankLine: "always", prev: "for", next: "*"},
        {blankLine: "always", prev: "*", next: "while"},
        {blankLine: "always", prev: "while", next: "*"},
        {blankLine: "always", prev: "*", next: "do"},
        {blankLine: "always", prev: "do", next: "*"},
      ],
      "grouped-accessor-pairs": ["warn", "getBeforeSet"],
      "no-duplicate-imports": "warn",
      "sort-imports": [
        "warn",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      // "lines-around-comment": [
      //   "warn",
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
      "curly": ["warn", "all"],
      "no-empty": ["warn", {allowEmptyCatch: true}],
      "eqeqeq": ["warn", "always"],
      "no-console": ["warn", {allow: ["warn", "error"]}],
      "react/jsx-uses-vars": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
      "react/jsx-props-no-spreading": "off",
      "react/jsx-indent-props": ["warn", 2],
      "react/jsx-indent": ["warn", 2],
      "react/jsx-no-duplicate-props": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-undef": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-has-content": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          components: ["Link"],
          specialLink: ["to"],
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],
    },
  },
];
