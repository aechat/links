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
        "style", // правки форматирования и стилей, не влияющие на код
        "refactor", // рефакторинг кода без исправления ошибок или добавления новой функциональности
        "chore", // рутинные задачи, обновление зависимостей, настройка
        "content", // изменения в контенте статей
        "add", // добавление нового файла или ресурса
        "remove", // удаление файла или ресурса
        "revert", // откат предыдущего коммита
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        // --- для кода и интерфейса ---
        "app", // общие изменения в приложении (хуки, логика страниц)
        "components", // изменения в react-компонентах
        "styles", // изменения в scss-стилях
        // --- для контента ---
        "sections", // общие изменения для всех разделов со статьями
        "aefaq", // статьи в faq по adobe after effects
        "prfaq", // статьи в faq по adobe premiere pro
        "psfaq", // статьи в faq по adobe photoshop
        "aeexpr", // статьи на странице по выражениям в adobe after effects
        "rules", // страница с правилами чатов
        "links", // главная страница с ссылками
        // --- для проекта и файлов ---
        "config", // изменения в файлах конфигурации (vite, eslint и т.д.)
        "deps", // обновление зависимостей
        "assets", // медиафайлы (изображения, видео)
      ],
    ],
    "header-max-length": [2, "always", 100],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};
