# Правила для `ArticleMedia`

Файл компонента: `src/components/content/ArticleMedia.tsx`.

## Когда использовать

- `type="image"` для скриншотов и статичных иллюстраций.
- `type="video"` для коротких демонстраций действий.
- `type="youtube"` для внешних роликов, когда не нужно хранить файл в проекте.

## Обязательные и важные поля

- Для `image` и `video` обязателен `caption`.
- Для `youtube` используется только `src` (`id` ролика или путь, из которого берётся `id`).
- `src` можно передавать как URL, как путь с `media/...` или как путь внутри `public/media`.

## Ограничения текущей реализации

- Компонент рендерит медиа только после открытия родительского `DetailsSummary`.
- `width` и `height` есть в типах, но в рендере приоритет у размеров из `virtual:media-metadata`.
- Для изображения доступен встроенный viewer (zoom, drag, закрытие по `Esc`, swipe вниз на мобильных).

## Практика

- Добавляйте понятный `caption`, объясняющий, что именно показано.
- Для YouTube давайте только релевантные ролики и проверяйте, что id корректный.
- Для новых локальных медиа используйте структуру `program/topic`, например:
  - `after-effects/export/...`
  - `premiere/import/...`
  - `photoshop/interface/...`
  - `shared/system/...`
- Для внешних инструментов используйте структуру `tools/<tool>/<topic>`, например:
  - `tools/shutter-encoder/convert/...`
  - `tools/subtitle-edit/troubleshooting/...`
- Старые пути `legacy/...` сохраняются для совместимости, но новые файлы кладите в новую структуру.

## Правила именования файлов

- Именуйте новые медиа-файлы в `kebab-case`: только `a-z`, `0-9` и `-`.
- Не используйте кириллицу, пробелы и спецсимволы в именах файлов.
- Не смешивайте `snake_case` и `kebab-case`; для новых файлов используйте только `kebab-case`.
- Имя файла должно быть смысловым и кратким: действие + контекст, например `change-render-settings.png`.
- Внутри `program/topic` и `tools/<tool>/topic` не дублируйте название программы или инструмента в имени файла.
- Если файл потенциально общий для нескольких программ, добавляйте короткий контекстный префикс: `ae-`, `pr-`, `ps-`, `tool-`.
- `legacy` не переименовывается и не нормализуется задним числом.

## Чеклист

- для `type="image"` и `type="video"` заполнен `caption`;
- `src` указывает на корректный файл в `public/media` или валидный URL;
- в одном ответе нет избыточного количества тяжёлых медиа;
- для `youtube` передан корректный `id` ролика.

## Антипаттерны

- вставлять медиа без подписи и без пояснения в тексте;
- смешивать несвязанные медиа в одном спойлере;
- использовать внешние ролики, не относящиеся к сценарию ответа.

## Пример

```tsx
import {ArticleMedia} from "../../../components/content/ArticleMedia";

<ArticleMedia
  caption="Окно настроек рендера"
  src="legacy/aftereffects/render_settings.png"
  type="image"
/>;

<ArticleMedia
  caption="Как открыть панель"
  src="legacy/aftereffects/open_panel.mp4"
  type="video"
/>;

<ArticleMedia
  src="dQw4w9WgXcQ"
  type="youtube"
/>;

<ArticleMedia
  caption="Настройки экспорта в Premiere"
  src="premiere/export/export-settings.png"
  type="image"
/>;

<ArticleMedia
  caption="Конвертация в Shutter Encoder"
  src="tools/shutter-encoder/convert/select-vp9.png"
  type="image"
/>;
```
