# Компонент `HostsAdobe`

Файл: `src/components/content/HostsAdobe.tsx`

## Назначение

Готовый блок для работы с `hosts`: подгружает список адресов Adobe, отображает его в `CodeSnippet` и добавляет предупреждения через `Addition`.

Текущий экспорт по умолчанию в файле называется `HostsAdobeModal`, поэтому в секциях обычно используется такой импорт:

```tsx
import HostsAdobeModal from "../../../components/content/HostsAdobe";

<HostsAdobeModal />;
```

## Технические особенности

- компонент рассчитан на использование внутри `DetailsSummary`: загрузка списка запускается только когда открыт родительский спойлер;
- данные загружаются с внешнего источника (`raw.githubusercontent.com`), при недоступности сети или источника блок может остаться пустым.

Правила применения: [`hosts-adobe-rules.md`](../content/hosts-adobe-rules.md).
