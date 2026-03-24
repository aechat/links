# Компонент `SearchEngine`

Файл оркестратор и экспортов: `src/components/features/searchEngine/SearchEngine.tsx`  
Основные модули: `src/components/features/searchEngine/searchState.tsx`, `src/components/features/searchEngine/SearchUi.tsx`, `src/components/features/searchEngine/useSearchLogic.ts`, `src/components/features/searchEngine/searchContentUtilities.ts`

## Назначение

Поиск по текущей странице FAQ/expr. Модуль состоит из провайдера состояния, кнопки открытия и модального интерфейса с результатами, навигацией по совпадениям и внешним поиском при отсутствии результатов.

`SearchEngine.tsx` выступает как оркестратор поиска и точка публичных экспортов. Вспомогательные хуки состояния, контекст и типы находятся в `searchState.tsx`. UI-компоненты собраны в `SearchUi.tsx`. Контентные утилиты и форматирование сниппетов вынесены в `searchContentUtilities.ts`.

## Структура файлов

- `src/components/features/searchEngine/SearchEngine.tsx`  
  Оркестратор. Собирает зависимости, управляет ветками рендера (категории/результаты/no-results), подключает модалку и публичные экспорты.
- `src/components/features/searchEngine/searchState.tsx`  
  Слой состояния и поведения UI: `SearchContext`, провайдер, хоткеи открытия, навигация по результатам, логика фокуса и прокрутки в модалке.
- `src/components/features/searchEngine/useSearchLogic.ts`  
  Основной runtime поиска: сбор и кэш деталей страницы, дебаунс запроса, запуск worker, fallback на main thread, маппинг ранжированных результатов в UI-модель.
- `src/components/features/searchEngine/SearchUi.tsx`  
  UI-слой поиска: `SearchButton`, `SearchModal`, `SearchCategories`, `SearchResults`, `NoResults`, `ExternalSearch`; также карточка результата и клиентская подсветка в выдаче.
- `src/components/features/searchEngine/searchWorker.ts`  
  Web Worker для тяжёлого ранжирования. Хранит инициализированные детали и отвечает результатами поиска по сообщению.
- `src/components/features/searchEngine/searchQueryCore.ts`  
  Ядро матчинг-логики: компиляция запроса, построение поисковых индексов, проверка совпадений по полям, общий pipeline поиска и сортировки кандидатов.
- `src/components/features/searchEngine/searchScoringUtilities.ts`  
  Формулы и веса ранжирования: proximity/order/leading bonuses, корректировки для коротких запросов и рескоринг крупных выборок.
- `src/components/features/searchEngine/searchPhoneticUtilities.ts`  
  Фонетика и морфология: stem/consonant signature/translit-нормализация и word features для устойчивого поиска при опечатках и вариациях написания.
- `src/components/features/searchEngine/searchHighlightUtilities.ts`  
  Подсветка совпадений в тексте и HTML-сниппетах, выделение match-типов и рендер выделенного текста для UI.
- `src/components/features/searchEngine/searchContentUtilities.ts`  
  Контентные утилиты: нормализация текста/комбинаций клавиш, сбор paragraph/list/table/addition контента, форматирование сниппетов, обработка вложенных `addition`.
- `src/components/features/searchEngine/SearchEngine.module.scss`  
  Стили модуля поиска: layout модалки, masonry результатов, состояния hover/selected, визуальные элементы внешнего поиска и счётчика.

## Публичный интерфейс

```ts
export interface SearchContextType {
  closeModal: () => void;
  isModalOpen: boolean;
  isPageLoaded: boolean;
  openModal: () => void;
}

export type SearchSection = {
  id: string;
  title: string;
  icon?: React.ReactNode;
};

export const SearchProvider: React.FC<{
  children: React.ReactNode;
  isPageLoaded: boolean;
}>;

export const SearchInPage: React.FC<{sections: SearchSection[]}>;
```

Дополнительно экспортируется `SearchButton` для открытия поиска из шапки.

## Пример из проекта

`src/pages/AeFaqPage.tsx`:

```tsx
import {
  SearchInPage,
  SearchProvider,
} from "../components/features/searchEngine/SearchEngine";

<SearchProvider isPageLoaded={isPageLoaded}>
  {/* контент страницы */}
  <SearchInPage sections={sections} />
</SearchProvider>;
```

## Технические особенности

- индексирует заголовки, теги, абзацы, списки, таблицы и ссылки, включая `.flexible-links`;
- при ранжировании учитывает порядок слов запроса и более раннюю позицию совпадений в поле;
- для коротких запросов (`<= 3`) снижает приоритет слабых совпадений только в контенте;
- поддерживает hotkeys и навигацию по результатам с клавиатуры;
- long-press/контекстное меню на результатах и категориях копирует ссылку на конкретный якорь;
- при нулевом результате показывает fallback с внешним поиском (Яндекс / Perplexity);
- нормализует разделители в запросе (`en_us`, `en-us`, `en us`) в единый вид для стабильной выдачи;
- использует собственный `SearchContext` и модальное окно на `antd/Modal`.

Общие правила для feature-компонентов: [`feature-components-rules.md`](../content/feature-components-rules.md). Обзор: [`features-component.md`](./features-component.md). Настройка ранжирования и веса: [`search-ranking-weights.md`](./search-ranking-weights.md).
