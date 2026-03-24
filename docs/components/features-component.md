# Компоненты `features`

Этот документ описывает компоненты из `src/components/features`, которые отвечают за интерактивные инструменты и прикладные сценарии, а не за вёрстку контента статьи.

## Основные компоненты

- `SearchEngine` (`src/components/features/searchEngine/SearchEngine.tsx`) — поиск по странице и разделам.
- `EasingEditor` (`src/components/features/EasingEditor.tsx`) — редактор кривых сглаживания.

## Конвертеры

Конвертеры находятся в `src/components/features/converters`:

- `ConverterJsonToTgs.tsx` — конвертация JSON в TGS;
- `ConverterTgsToJson.tsx` — конвертация TGS в JSON.

Общие стили конвертеров: `src/components/features/converters/Converter.module.scss`.

## Технические заметки

- `SearchEngine` индексирует контент и работает в связке с контекстом поиска страницы;
- `EasingEditor` реализует интерактивную настройку easing-кривых;
- конвертеры используют общий стиль `Converter.module.scss`.

Правила применения: [`feature-components-rules.md`](../content/feature-components-rules.md).
