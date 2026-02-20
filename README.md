# [links@aechat](https://aechat.ru) — ресурс с полезными ссылками и ответами на частые вопросы по программам Adobe

```plaintext
    ___       __        ______                  __          __
   / (_____  / /_______/ ____ \____ ____  _____/ /_  ____ _/ /_
  / / / __ \/ //_/ ___/ / __ `/ __ `/ _ \/ ___/ __ \/ __ `/ __/
 / / / / / / ,< (__  / / /_/ / /_/ /  __/ /__/ / / / /_/ / /_
/_/_/_/ /_/_/|_/____/\ \__,_/\__,_/\___/\___/_/ /_/\__,_/\__/
                      \____/
```

> Ресурс создан специально для участников [AEChat в Telegram](https://t.me/joinchat/F1DdXtG9LephYWUy)

> Вы можете поддержать автора ресурса копеечкой: на карту **Сбербанк**: `2202202357342488` или на электронный кошелёк **ЮMoney**: `410016763684808`

## Рекомендации по использованию редакторов и плагинов к ним

Для редактирования этого проекта автор использует редактор кода `VS Code`, а также плагины `ESLint` и `Prettier`, конфигурации которого уже расположены в файлах. Однако вы можете редактировать проект и в своём любимом редакторе кода. Для установки зависимостей выполните команду `yarn install`, если вы используете пакетный менеджер `yarn`. Он используется в этом проекте. Для быстрого форматирования кода используйте команду ниже.

```shell
yarn format # если используете yarn
```

Для локального разворачивания сайта используйте команду ниже.

```shell
yarn dev # если используете yarn
```

Для корректного использования pnp-модулей в VS Code, возможно, потребуется выполнить команду ниже, чтобы не отображались куча ошибок.

```shell
yarn dlx @yarnpkg/sdks vscode
```

Для тех, кто не хочет заморачиваться с пакетными менеджерами, но имеет установленный Docker на устройстве — вы можете запустить сервер для разработки командой ниже.

```shell
docker-compose up
```

## Документация

- [`coding-rules.md`](docs/coding-rules.md) — технический код-стайл и структура файлов.
- [`commit-messages.md`](docs/commit-messages.md) — формат коммитов и правила сообщений.
- [`articles.md`](docs/articles.md) — устройство разделов и статей, подключение новых секций.
- [`project-structure.md`](docs/project-structure.md) — обзор структуры проекта.
- [`content-components.md`](docs/components/content-components.md) — обзор контентных компонентов и быстрый старт секции.
- [`details-summary.md`](docs/components/details-summary.md) — `DetailsSummary`, `anchor`, `tag` и ссылки.
- [`faq-article-quality.md`](docs/content/faq-article-quality.md) — критерии качества FAQ-ответа.
- [`faq-question-structure.md`](docs/content/faq-question-structure.md) — правила для `anchor`, `title`, `tag`.
- [`faq-answer-structure.md`](docs/content/faq-answer-structure.md) — порядок подачи решения и структура ответа.
- [`faq-reuse-and-checklist.md`](docs/content/faq-reuse-and-checklist.md) — переиспользование контента и финальный чеклист.
- [`article-content.md`](docs/content/article-content.md) — корневой контейнер контента.
- [`paragraphs.md`](docs/content/paragraphs.md) — правила для абзацев `p`.
- [`lists.md`](docs/content/lists.md) — правила для списков `ul/ol/li`.
- [`addition.md`](docs/content/addition.md) — правила для `Addition`.
- [`divider.md`](docs/content/divider.md) — правила для `Divider`.
- [`tables.md`](docs/content/tables.md) — когда и как использовать таблицы.
- [`article-media.md`](docs/content/article-media.md) — правила для `ArticleMedia`.
- [`code-snippet.md`](docs/content/code-snippet.md) — правила для `CodeSnippet`.
- [`content-filter.md`](docs/content/content-filter.md) — правила для `ContentFilter`.
- [`nested-details.md`](docs/content/nested-details.md) — правила для `NestedDetailsSummary`.
- [`flexible-links.md`](docs/content/flexible-links.md) — паттерн групп ссылок `.flexible-links`.
- [`mark-and-icons.md`](docs/content/mark-and-icons.md) — семантические классы `mark`.
- [`tone-and-style.md`](docs/content/tone-and-style.md) — тон и стиль текстов FAQ.
