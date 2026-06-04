# Структура проекта

## Стек

- React 19 + TypeScript + Vite
- SCSS (глобальные стили и CSS Modules)
- Ant Design + MUI Icons
- Framer Motion (анимации)
- React Router
- React Helmet Async
- Yarn 4

## Ключевые каталоги

- `src/pages` — страницы, включая `AeFaqPage`, `PrFaqPage`, `PsFaqPage`, `AeExprPage`, и секции.
- `src/pages/sections` — контентные секции FAQ и expr по темам.
- `src/components/content` — базовые контентные компоненты статей, например `ArticleMedia`, `ContentFilter`, `Addition`, `CodeSnippet`, `HostsAdobe`.
- `src/components/detailsSummary` — верхнеуровневые и вложенные спойлеры статей, включая `DetailsSummary`, `NestedDetailsSummary`, и их утилиты.
- `src/components/features` — функциональные блоки, такие как `SearchEngine`, `EasingEditor`, конвертеры.
- `src/components/features/searchEngine` — модуль поиска: UI, состояние, worker, query/scoring/highlight/content utilities.
- `src/components/layout` — шапка, футер, переходы страниц.
- `src/components/modals` — модальные окна и настройки темы.
- `src/components/ui` — малые UI-компоненты, такие как `CopyButton`, `LinkCards`, `LoadingAnimation`, `GroupedCornersManager`.
- `src/hooks` — прикладные хуки для ссылок, копирования, ripple, валидации якорей и т.д.
- `src/utilities` — утилиты для ссылок, якорей, браузера, даты, файловых размеров, haptics и строк.
- `src/styles` — глобальные SCSS слои (`abstracts`, `base`, `layout`, `components`, `utilities`).
- `public/media` — скриншоты и видео для статей.
  - `public/media/legacy` — архивная структура для обратной совместимости.
  - `public/media/<program>/<topic>` — структура для новых медиа Adobe-программ.
  - `public/media/tools/<tool>/<topic>` — структура для медиа внешних инструментов.
  - `public/media/shared/<topic>` — общие медиа, не привязанные к одной программе.
- `docs` — внутренняя документация по контенту и код-правилам.
- `scripts` — скрипты для обслуживания контента и репозитория.

## Маршруты и страницы

- `src/Main.tsx` подключает React-приложение.
- `src/App.tsx` задаёт провайдеры, модалки, обработку ошибок и маршруты.
- Основные страницы:
  - `src/pages/LinksPage.tsx`
  - `src/pages/AeFaqPage.tsx`
  - `src/pages/PrFaqPage.tsx`
  - `src/pages/PsFaqPage.tsx`
  - `src/pages/AeExprPage.tsx`
  - `src/pages/ChatRules.tsx`
  - `src/pages/NotFound.tsx`
- Маршруты: `/`, `/aefaq`, `/prfaq`, `/psfaq`, `/aeexpr`, `/rules`, `/files`, `/regfile`, `/reg`, fallback `*`.
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

- `generateAnchorId` из `src/components/detailsSummary/DetailsSummary.tsx` нумерует спойлеры и связывает их с hash-навигацией.
- `useAnchorValidation` проверяет корректность hash и секций на страницах FAQ.
- `SearchEngine` индексирует верхнеуровневые `details`: заголовки, теги, текст, списки, таблицы, `Addition`, `Divider` и ссылки, включая `.flexible-links`.
- `getMediaMetadata` подключён в `vite.config.ts` через virtual-модуль `virtual:media-metadata`.

## Команды разработки

- `yarn dev` — локальная разработка.
- `yarn build` — клиентский build + SSR bundle + prerender.
- `yarn preview` — предпросмотр сборки.
- `yarn lint:content` — общая проверка структуры и служебной разметки статей.
- `yarn lint:no-html-strings` — проверка, что строковые props `title`, `caption`, `tag`, `anchor` в статьях не содержат HTML/JSX.
- `yarn lint:divider-style` — проверка текстов `Divider` в статьях: предупреждает о вопросительных заголовках и непомеченных названиях приложений/плагинов.
- `yarn extract:marked-text` — диагностическая выгрузка короткого текста из тегов с `className`/`class` в статьях.
- `yarn report:versions` — генерация отчетов по версиям.
- `yarn fonts:generate-style` — генерация файла стилей шрифтов на основе `src/fonts`.
- `yarn fonts:generate-static` — генерация статических `ttf` из variable-шрифтов.
- `yarn media:metadata` — сбор размеров изображений и видео из `public/media`.
- `yarn maintenance:fix-tokens` — интерактивное исправление токенов в `.tsx`-файлах.
- `yarn maintenance:lowercase-tags` — приведение тегов в статьях к нижнему регистру.
- `yarn maintenance:remove-empty-lines` — удаление лишних пустых строк в файлах.
- `yarn maintenance:sort-imports` — сортировка импортов в файлах.
- `yarn format` — `tsc` + `stylelint --fix` + `eslint --fix` + `prettier --write`.

### Пример рабочего цикла

```bash
yarn install
yarn dev
```
