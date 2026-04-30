# Компонент `LinkCard`

Файл: `src/components/ui/LinkCards.tsx`

## Назначение

Карточка-ссылка для страницы `links`: показывает иконку, название и опциональное описание, поддерживает внутреннюю и внешнюю навигацию, а также копирование ссылки по long-press или через контекстное меню.

## Интерфейс

```ts
interface LinkCardProperties {
  description?: string;
  href: string;
  icon: React.ReactNode;
  name: string;
  variant?: "external" | "internal";
}
```

- `name` — заголовок карточки;
- `icon` — иконка слева от названия;
- `href` — URL или внутренний путь;
- `description` — дополнительный текст под заголовком;
- `variant` — тип ссылки:
  - `external` (по умолчанию) — рендерится как `<a target="_blank">`;
  - `internal` — рендерится как `<Link to="...">` из `react-router-dom`.

## Пример

```tsx
import {PermMediaRounded} from "@mui/icons-material";

import {LinkCard} from "../components/ui/LinkCards";
import {AeIcon} from "./FaqIcon";

<LinkCard
  description="Преодолеваем трудности при работе с Adobe After Effects"
  href="/aefaq"
  icon={<AeIcon />}
  name="aefaq"
  variant="internal"
/>;

<LinkCard
  description="Шаблоны и плагины для Adobe After Effects со всего интернета"
  href="https://t.me/s/aetemp"
  icon={<PermMediaRounded />}
  name="AETemp"
/>;
```

## Технические особенности

- копирование ссылки использует `copyText` и показывает `antd/message` о результате;
- для `variant="internal"` в буфер копируется абсолютный URL (`origin + href`), для `external` — исходный `href`;
- long-press обрабатывается хуком `useLongPress`, а эффект нажатия добавляется через `useRipple`;
- scale-увеличение карточки на `:hover` и `:active` отключается общей настройкой `isHoverScaleAnimationEnabled`;
- если `description` не передан, заголовок растягивается на всю высоту карточки (`name-container_full-height`);
- стили компонента находятся в `src/components/ui/LinkCards.module.scss`.

Общие правила кодстиля: [`coding-rules.md`](../coding-rules.md).
