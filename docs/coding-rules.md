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

## Цветовые токены (новый контракт)

- Цветовая система строится в 3 слоя:
  - `primitive` — базовые значения темы (`light/dark` карты);
  - `semantic` — токены поведения и состояний (`--color-semantic-*`);
  - `component` — зональные токены интерфейса (`--color-<zone>-<role>-<state>`).
- Для новых UI-частей не используйте прямые `hsl(...)`/`rgb(...)` в стилях компонентов, кроме явно согласованных исключений.
- Канонический формат зональных токенов:
  - `--color-<zone>-<role>-<state>`;
  - примеры: `--color-header-background-default`, `--color-details-summary-border-hover`, `--color-buttons-background-active`.
- Обязательные состояния для новых токенов:
  - `default`, `hover`, `active`, `disabled`, `focus-visible`, `invalid`, `success`, `warning`.
- Для шкалы важности используйте `primary/secondary/tertiary` на semantic-слое.
- Токены глубины вложенности:
  - `level-0..3` (`level-3` использовать как верхний clamp для более глубоких вложений);
  - минимально depth-aware должны быть `details` и `addition` по `background/border` и `hover/active`.

## Радиусы вложенности

- Базовое внешнее скругление сохраняется как есть через `$roundness`.
- Для fallback-скруглений используйте предсказуемые множители:
  - внешний/основной уровень: `$roundness`;
  - вложенный контентный уровень: `$roundness * 0.75`;
  - плотные вложенные элементы: `$roundness * 0.5`.
- Не вводите прокси-переменные для текущего радиуса (`--*-current`) без необходимости.

## Нецветовые токены

- Для нецветовых значений используйте только токены из `src/styles/abstracts/_tokens.scss`.
- В `src/styles/abstracts/_mixins.scss` оставляйте только переиспользуемые `@mixin`/`@function`.
- Не вводите «особые» шаги (`7px`, `10px`, `17px` и т.п.) для `space/inset/stroke/radius/duration/z-index`, если это не обоснованный edge-case.
- Базовая сетка для `space/inset`: `0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64`.
- Длительности анимаций/переходов задавайте через токены `duration` (`250/500/750/1000`).
- Слои интерфейса (`z-index`) задавайте через токены `z-*` вместо literal-чисел в компонентах.
- Для `drop-shadow` используйте только контекстные токены:
  - `content-soft`, `content-strong`, `surface`, `overlay`, `state-open`.
- Для интерактивного `box-shadow` используйте только:
  - `shadow-box-interactive-base`, `shadow-box-interactive-hover`, `shadow-box-interactive-active`.
- Размеры шрифтов задавайте через семантические токены:
  - `caption`, `caption-strong`, `label`, `body-sm`, `body-md`, `body-lg`, `title-sm`, `title`, `brand`, `title-lg`, `display-sm/md/lg/xl`.
  - Базовый body-размер проекта: `body-md = 1rem`.

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
