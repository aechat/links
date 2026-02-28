# Скрипт `getMediaMetadata`

Файл: `scripts/getMediaMetadata.js`

## Назначение

Собирает размеры изображений и видео из `public/media` и возвращает объект метаданных вида:

```ts
Record<string, {width: number; height: number}>;
```

Ключ — путь относительно `public` (например, `media/faq/example.png`).

## Использование в проекте

Скрипт импортируется в `vite.config.ts` и используется для virtual-модуля `virtual:media-metadata`.

## Поддерживаемые форматы

- Изображения: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`.
- Видео: `.mp4`, `.webm`, `.mov`, `.mkv`.

## Технические детали

- Для изображений использует `image-size`.
- Для видео использует `fluent-ffmpeg` + `@ffprobe-installer/ffprobe`.
- Учитывает поворот видео (`rotate`), чтобы вернуть корректные `width`/`height`.
