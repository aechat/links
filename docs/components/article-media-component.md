# Компонент `ArticleMedia`

Файл: `src/components/content/ArticleMedia.tsx`

## Назначение

Универсальный компонент для медиа:

- изображения;
- видео;
- встроенные YouTube-ролики.

Компонент поддерживает ленивую подгрузку и просмотр изображений в оверлее.

## Интерфейс

Компонент использует базовый интерфейс и объединение типов:

```ts
interface BaseMediaProperties {
  src: string;
}

interface ImageMediaProperties extends BaseMediaProperties {
  caption: string;
  height?: number | string;
  type: "image";
  width?: number | string;
}

interface VideoMediaProperties extends BaseMediaProperties {
  autoPlay?: boolean;
  caption: string;
  height?: number | string;
  loop?: boolean;
  type: "video";
  width?: number | string;
}

interface YouTubeMediaProperties extends BaseMediaProperties {
  height?: number | string;
  type: "youtube";
  width?: number | string;
}

type ArticleMediaProperties =
  | ImageMediaProperties
  | VideoMediaProperties
  | YouTubeMediaProperties;
```

- `src`:
  - для `image` и `video` — путь к файлу в `public/media` или полный URL;
  - для `youtube` — id ролика или путь, из которого можно получить id;
- `caption` обязателен для `image` и `video`;
- `autoPlay` и `loop` доступны для `video`.
- `width` и `height` есть в типах, но в текущей реализации рендера используются размеры из `virtual:media-metadata` (если доступны), а не значения этих пропсов.

Правила использования и пример: [`article-media-rules.md`](../content/article-media-rules.md).
