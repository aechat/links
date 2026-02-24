# Компонент `ConverterJsonToTgs`

Файл: `src/components/features/converters/ConverterJsonToTgs.tsx`

## Назначение

Локальный конвертер файлов `JSON` в `TGS` (gzip-сжатый JSON для стикеров). Компонент принимает файл через drag-and-drop, показывает оценку размеров и позволяет скачать результат.

## Интерфейс

Компонент не принимает props и экспортируется по умолчанию:

```tsx
const JsonToTgsConverter: React.FC = () => { ... };
export default JsonToTgsConverter;
```

## Пример из проекта

`src/pages/sections/aefaq/AeExport.tsx`:

```tsx
import JsonToTgsConverter from "../../../components/features/converters/ConverterJsonToTgs";

<Divider>Конвертер JSON в TGS</Divider>
<JsonToTgsConverter />;
```

## Технические особенности

- конвертация выполняется на стороне клиента;
- для сжатия используется `pako/gzip`;
- сохранение файла выполняется через `file-saver`;
- есть опция округления чисел в JSON (уменьшает размер, но может искажать анимацию);
- размер до/после рассчитывается через `formatBytes` и `formatPercentDelta`;
- стили: `src/components/features/converters/Converter.module.scss`.

Обзор feature-компонентов: [`features-component.md`](./features-component.md). Общие правила: [`coding-rules.md`](../coding-rules.md).
