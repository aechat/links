# Компонент `ConverterTgsToJson`

Файл: `src/components/features/converters/ConverterTgsToJson.tsx`

## Назначение

Локальный конвертер файлов `TGS` в `JSON`. Компонент принимает `.tgs`, распаковывает gzip-содержимое, валидирует JSON и отдаёт результат на скачивание.

## Интерфейс

Компонент не принимает props и экспортируется по умолчанию:

```tsx
const TgsToJsonConverter: React.FC = () => { ... };
export default TgsToJsonConverter;
```

## Пример из проекта

`src/pages/sections/aefaq/AeImport.tsx`:

```tsx
import TgsToJsonConverter from "../../../components/features/converters/ConverterTgsToJson";

<Divider>Конвертер TGS в JSON</Divider>
<TgsToJsonConverter />;
```

## Технические особенности

- конвертация выполняется локально в браузере;
- распаковка выполняется через `pako/inflate`;
- сохранение результата — через `file-saver`;
- после конвертации отображается примерный размер до/после;
- стили: `src/components/features/converters/Converter.module.scss`.

Обзор feature-компонентов: [`features-component.md`](./features-component.md). Общие правила: [`coding-rules.md`](../coding-rules.md).
