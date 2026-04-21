# Структура проекта

## Стек

- React 19 + TypeScript + Vite
- SCSS (глобальные стили и CSS Modules)
- Ant Design + MUI Icons
- Framer Motion (анимации)
- Yarn 4

## Ключевые каталоги

- `src/pages` — страницы (`AeFaqPage`, `PrFaqPage`, `PsFaqPage`, `AeExprPage`) и секции.
- `src/pages/sections` — контентные секции FAQ и expr по темам.
- `src/components/content` — базовые компоненты для статей (`DetailsSummary`, `ArticleMedia`, `ContentFilter`, `Addition`, `CodeSnippet`, `NestedDetailsSummary`, `HostsAdobe`).
- `src/components/features` — функциональные блоки (например, `SearchEngine`, `EasingEditor`, конвертеры).
- `src/components/layout` — шапка, футер, переходы страниц.
- `src/hooks` — прикладные хуки для ссылок, копирования, ripple, валидации якорей и т.д.
- `src/styles` — глобальные SCSS слои (`abstracts`, `base`, `layout`, `components`, `utilities`).
- `public/media` — скриншоты и видео для статей.
  - `public/media/legacy` — архивная структура для обратной совместимости.
  - `public/media/<program>/<topic>` — структура для новых медиа Adobe-программ.
  - `public/media/tools/<tool>/<topic>` — структура для медиа внешних инструментов.
  - `public/media/shared/<topic>` — общие медиа, не привязанные к одной программе.
- `docs` — внутренняя документация по контенту и код-правилам.
- `scripts` — скрипты для обслуживания контента и репозитория.

## Маршруты и страницы

- `src/App.tsx` и `src/Main.tsx` формируют приложение и роутинг.
- Основные страницы:
  - `src/pages/AeFaqPage.tsx`
  - `src/pages/PrFaqPage.tsx`
  - `src/pages/PsFaqPage.tsx`
  - `src/pages/AeExprPage.tsx`
- Каждая страница описывает список `sections` (`id`, `key`, `title`, `component`, опционально `icon`), рендерит `Divider` и подключает `SearchProvider` и `SearchInPage`.

### Пример секции в странице

```ts
const sections = [
  {
    component: AeExportProblems,
    id: "export-problems",
    key: "4",
    title: "Проблемы экспорта",
  },
];
```

## Как устроен FAQ-контент

Кратко:

- один файл секции = одна тематическая группа вопросов;
- корневой контейнер секции: `<div className="article-content">`;
- один вопрос = один `DetailsSummary` с `title` и `anchor`.

Подробные правила структуры и связей: [`articles.md`](./articles.md).

## Функциональные компоненты

Помимо контентных компонентов, в проекте есть функциональные UI-блоки из `src/components/features`:

- `SearchEngine` — поиск по контенту;
- `EasingEditor` — редактор easing-кривых;
- конвертеры в `src/components/features/converters`:
  - `ConverterJsonToTgs.tsx`;
  - `ConverterTgsToJson.tsx`.

Подробно: [`features-component.md`](./components/features-component.md).

## Медиа и ссылки

- Для изображений и видео используется `ArticleMedia`.
- Группы ссылок оформляются через контейнер `.flexible-links`.

Подробные правила и примеры: [`article-media-rules.md`](./content/article-media-rules.md), [`flexible-links-rules.md`](./content/flexible-links-rules.md).

## Критичные связи

- `generateAnchorId` из `src/components/content/DetailsSummary.tsx` нумерует спойлеры и связывает их с hash-навигацией.
- `useAnchorValidation` проверяет корректность hash и секций на страницах FAQ.
- `SearchEngine` индексирует заголовки, теги, текст, таблицы и ссылки, включая `.flexible-links`, а при отсутствии результатов предлагает внешний поиск.

## Команды разработки

- `yarn dev` — локальная разработка.
- `yarn build` — клиентский build + SSR bundle + prerender.
- `yarn preview` — предпросмотр сборки.
- `yarn format` — `tsc` + `stylelint --fix` + `eslint --fix` + `prettier --write`.

### Пример рабочего цикла

```bash
yarn install
yarn dev
```
