export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // добавление новой функциональности
        "fix", // исправление ошибки
        "docs", // изменения в документации
        "style", // правки стилей, влияющие на внешний вид (например, изменение цветов, отступов)
        "format", // правки форматирования кода, не влияющие на логику или внешний вид (автоматическое форматирование)
        "refactor", // рефакторинг кода без исправления ошибок или добавления новой функциональности
        "chore", // рутинные задачи, обновление зависимостей, настройка, сборка
        "content", // изменения в контенте статей
        "revert", // откат предыдущего коммита
        "merge", // слияние ветвей
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        // код и интерфейс
        "app",
        "components",
        "styles",
        "hooks",
        "utils",
        // контент статей (перечисление через запятую с пробелом: aefaq, prfaq)
        "aefaq",
        "prfaq",
        "psfaq",
        "aeexpr",
        "rules",
        "links",
        "docs",
        // проектные области
        "config",
        "deps",
        "assets",
        "scripts",
        "*",
      ],
    ],
    "header-max-length": [2, "always", 150],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};
