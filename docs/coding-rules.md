# Правила кодстиля

Правила коммитов и сообщений: [`commit-messages.md`](./commit-messages.md). Редакторские правила статей: [`article-quality-guide.md`](./content/article-quality-guide.md), [`article-question-guide.md`](./content/article-question-guide.md), [`article-answer-guide.md`](./content/article-answer-guide.md), [`article-reuse-guide.md`](./content/article-reuse-guide.md).

## Базовые правила форматирования

- Основные источники: `eslint.config.js` и `.prettierrc.json`.
- Форматирование и проверки запускаются одной командой:

```bash
yarn format
```

Команда последовательно запускает `tsc`, `stylelint --fix`, `eslint --fix`, `prettier --write`.

## Интерактивные цвета

- Для интерактивных состояний используйте семантические токены `--color-interaction-*`, а не локальные `hsl(...)` в компонентах.
- Стандарт для `light`: базовый цвет смешивается с акцентно-тонированным `--color-interaction-mix-color` (для мягкого затемнения) на процент из `--color-interaction-*-shift`.
- Стандарт для `dark`: базовый цвет смешивается с акцентно-тонированным `--color-interaction-mix-color` (для мягкого высветления) на процент из `--color-interaction-*-shift`.
- Силу интерактивов меняйте централизованно через `--color-interaction-primary/secondary/tertiary/neutral-*-shift`.
- Для текста и ссылок в интерактивах используйте `--color-interaction-text-hover-opacity` и `--color-interaction-text-active-opacity`.
- Для эффектов нажатия (например, ripple) используйте `--color-interaction-ripple`.

### Исключение для SearchEngine

- Блок `search` в `src/styles/abstracts/_light-colors.scss` и `src/styles/abstracts/_dark-colors.scss` использует отдельные фиксированные `hsl(...)`-токены для `header/content` и их `hover/active/selected`-состояний.
- Для `search` не применяйте `color-mix(...)`/миксин-вычисления в токенах состояний: палитра задается явно, чтобы упростить визуальный тюнинг и дебаг.
- `header` должен оставаться светлее `content` в обеих темах.
- Для `selected` контрастный акцентный бордер хранится у `header` (`--color-search-header-selected-border`), у `content` используется нейтральный бордер (`--color-search-content-selected-border`).
- В компоненте `src/components/features/searchEngine/SearchEngine.module.scss` состояния `hover/active/selected-hover/selected-active` должны менять `header` и `content` раздельно через соответствующие токены `--color-search-header-*` и `--color-search-content-*`.

## Импорты и структура файла

Используйте порядок, принятый в `src/pages/sections/**/*.tsx`:

1. `React` и импорты из библиотек.
2. Контентные компоненты проекта.
3. Локальные стили/утилиты.

Пример:

```tsx
import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import DetailsSummary from "../../../components/content/DetailsSummary";
```

Дополнительно:

- используйте относительные пути без алиасов;
- сохраняйте пустые строки между группами импортов.

## Именование и типы

- Компоненты: `PascalCase` (`AeActions`, `DetailsSummary`).
- Файлы `.tsx`: `PascalCase`.
- Файлы `.ts`: `camelCase`.
- Для пропсов интерфейсов используйте суффикс `Properties`:
  - `DetailsSummaryProperties`;
  - `CodeSnippetProperties`.
- Компоненты в проекте обычно описываются как `React.FC`.

## Структура статьи

Для файлов в `src/pages/sections/**`:

- корневой контейнер обязателен: `<div className="article-content">`;
- один файл = одна тематическая подборка;
- каждый вопрос оформляется отдельным `DetailsSummary`.

Каркас и подключение секций: [`articles.md`](./articles.md).

## Правила для `DetailsSummary`

- `anchor` обязателен: короткий, стабильный, в `kebab-case`.
- `title`: короткий, конкретный, без длинных вводных.
- `tag` (опционально): строка тегов через `", "` (запятая + пробел).
- Для повторяющегося контента предпочтительна ссылка на существующий `anchor`, а не копипаст.

Подробно: [`details-summary-component.md`](./components/details-summary-component.md), [`article-question-guide.md`](./content/article-question-guide.md).

## Контентные компоненты

Перед добавлением нового паттерна проверьте готовые компоненты:

- `Addition`;
- `ArticleMedia`;
- `CodeSnippet`;
- `ContentFilter`;
- `NestedDetailsSummary`;
- `HostsAdobe`.

Если задача решается существующим компонентом, не дублируйте реализацию в JSX вручную.

## Функциональные компоненты

Для прикладных инструментов используйте компоненты из `src/components/features`:

- `SearchEngine`;
- `EasingEditor`;
- конвертеры: `ConverterJsonToTgs`, `ConverterTgsToJson`.

Обзор и назначение: [`features-component.md`](./components/features-component.md).

## Границы ответственности

- Этот документ отвечает только за кодстиль и структуру файлов.
- За стиль текста и редактуру отвечают:
  - [`article-quality-guide.md`](./content/article-quality-guide.md);
  - [`article-question-guide.md`](./content/article-question-guide.md);
  - [`article-answer-guide.md`](./content/article-answer-guide.md);
  - [`article-reuse-guide.md`](./content/article-reuse-guide.md);
  - [`details-summary-rules.md`](./content/details-summary-rules.md);
  - [`paragraphs-rules.md`](./content/paragraphs-rules.md);
  - [`lists-rules.md`](./content/lists-rules.md);
  - [`addition-rules.md`](./content/addition-rules.md);
  - [`hosts-adobe-rules.md`](./content/hosts-adobe-rules.md);
  - [`feature-components-rules.md`](./content/feature-components-rules.md);
  - [`divider-rules.md`](./content/divider-rules.md);
  - [`tone-and-style-guide.md`](./content/tone-and-style-guide.md).

## Быстрый чек-лист

1. `yarn format` прошёл без ошибок.
2. Новые статьи лежат в корректном разделе `src/pages/sections/<section>/`.
3. У каждого `DetailsSummary` есть внятный `anchor` и `title`.
4. Для решения использованы существующие контентные компоненты, без дублирования их логики.
