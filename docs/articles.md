# Статьи и разделы

---

## Где живут статьи

- Все статьи находятся в `src/pages/sections`.
- Каждая директория в `sections` — отдельный тематический блок:
  - `aefaq` — вопросы по After Effects;
  - `prfaq` — вопросы по Premiere Pro;
  - `psfaq` — вопросы по Photoshop;
  - `aeexpr` — статьи по выражениям в After Effects.
- Один `.tsx`-файл внутри директории — подборка вопросов и ответов по одной близкой теме.

Пример соответствия:

- `src/pages/sections/aefaq/AeInterface.tsx` — раздел про интерфейс After Effects;
- `src/pages/sections/prfaq/PrExportProblems.tsx` — проблемы при экспорте в Premiere Pro;
- `src/pages/sections/aeexpr/ExprErrors.tsx` — типовые ошибки выражений.

---

## Каркас файла статьи

Каждый файл статьи — React-компонент, который возвращает контейнер с классом `article-content`. Внутри контейнера размещаются спойлеры с вопросами и ответами.

Упрощённый шаблон:

```tsx
import React from "react";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const AeInterface: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="example-question"
        title="Вопрос читателя"
      >
        <p>Ответ с пояснениями и ссылками.</p>
      </DetailsSummary>
    </div>
  );
};

export default AeInterface;
```

Контейнер `article-content` отвечает за типографику, отступы и корректную работу спойлеров. Правила разметки: [`article-container-rules.md`](./content/article-container-rules.md), [`paragraphs-rules.md`](./content/paragraphs-rules.md), [`lists-rules.md`](./content/lists-rules.md), [`addition-rules.md`](./content/addition-rules.md), [`divider-rules.md`](./content/divider-rules.md), [`tables-rules.md`](./content/tables-rules.md), [`version-format-rules.md`](./content/version-format-rules.md), [`article-style-recommendations.md`](./content/article-style-recommendations.md).

---

## Добавление новой статьи-категории

1. Выберите подходящий раздел в `src/pages/sections` (например, `aefaq` или `prfaq`).
2. Создайте новый файл, например:
   - `src/pages/sections/aefaq/AeNewTopic.tsx`.
3. Опишите в нём компонент по образцу:
   - экспорт по умолчанию;
   - корневой контейнер с `className="article-content"`;
   - внутри — набор компонентов `DetailsSummary`.
4. Подключите новую статью на соответствующей странице раздела:
   - добавьте импорт в файл страницы (`AeFaqPage.tsx`, `PrFaqPage.tsx`, `PsFaqPage.tsx` или `AeExprPage.tsx`);
   - добавьте объект в массив `sections` на странице (как минимум `component`, `id`, `key`, `title`; при необходимости `icon`);

- не вставляйте секцию напрямую в JSX вне массива `sections`, иначе нарушится связка с поиском и `hash`-валидацией.

Минимальный пример элемента в `sections`:

```ts
{
  component: AeNewTopic,
  id: "new-topic",
  key: "11",
  title: "Новая тема",
}
```

Страницы разделов находятся в `src/pages`:

- `AeFaqPage.tsx`, `PrFaqPage.tsx`, `PsFaqPage.tsx`, `AeExprPage.tsx`.

---

## Структура внутри статьи

- один файл = одна законченная тема (например, «экспорт», «ошибки», «производительность»);
- каждый `<DetailsSummary>` описывает отдельную проблему или сценарий;
- каждый `<DetailsSummary>` должен иметь стабильный `anchor`;
- `title` используется как заголовок вопроса в статье и выдаче поиска;
- содержимое — JSX: абзацы, списки, ссылки и контентные компоненты.

Редакторский подход:

- спойлер должен читаться отдельно от всей страницы: пользователь может открыть его из поиска или по hash-ссылке;
- в начале ответа лучше быстро назвать вероятную причину, условие или ограничение;
- если причина не единственная, используйте осторожные формулировки: «скорее всего», «обычно», «может помочь»;
- после объяснения переходите к действию: что открыть, что нажать, что изменить, что должно получиться;
- рискованные, спорные и необратимые шаги выносите в `Addition`, а не прячьте в обычном абзаце;
- если ответ превращается в несколько самостоятельных сценариев, разделяйте его через `Divider` или `NestedDetailsSummary`;
- медиа ставьте рядом с шагом, который оно иллюстрирует.

---

## Связи между разделами

- `anchor` из `DetailsSummary` используется для hash-ссылок вида `<a href="#anchor">...</a>`.
- `generateAnchorId` также присваивает числовые id спойлерам внутри `.article-content`.
- `useAnchorValidation` проверяет hash на страницах FAQ/expr после загрузки страницы.

Для повторяющихся объяснений предпочтительна ссылка на существующий `anchor`, а не копирование того же ответа в другой файл. Текст ссылки должен объяснять, куда ведёт переход.

Механика якорей и нумерации спойлеров подробно разобрана в [`details-summary-component.md`](./components/details-summary-component.md).

---

## Когда создавать новый файл

Новый файл в `src/pages/sections/<section>/` требует подключения в массив `sections` соответствующей страницы. Новый вопрос внутри существующей темы добавляется как новый `DetailsSummary` в существующий файл.

Новый файл оправдан, когда появилась отдельная тематическая группа вопросов или существующий файл стал слишком тяжёлым для чтения и редактирования. Один дополнительный вопрос внутри текущей темы не требует новой категории.

---

## Быстрый чек‑лист

Проверки структуры:

- файл лежит в правильной директории `src/pages/sections/<раздел>/`;
- компонент экспортируется по умолчанию;
- корневой контейнер статьи имеет класс `article-content`;
- для каждого вопроса используется `DetailsSummary` с осмысленными `anchor` и `title`;
- повторяющиеся объяснения оформлены через отдельный спойлер и переиспользуются через якоря.
