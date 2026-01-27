import React, {useEffect, useState} from "react";
import mediaMetadata from "virtual:media-metadata";

import {ShareRounded} from "@mui/icons-material";
import {message} from "antd";

import {copyText} from "../../hooks/useCopyToClipboard";

import styles from "./ArticleMedia.module.scss";
import {useSpoiler} from "./spoilerContexts";

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

export type ArticleMediaProperties =
  | ImageMediaProperties
  | VideoMediaProperties
  | YouTubeMediaProperties;

const getMediaSource = (source: string): string => {
  if (source.startsWith("http")) return source;

  if (source.startsWith("/")) return source;

  if (source.startsWith("media/")) {
    return `/${source}`;
  }

  return `/media/${source}`;
};

const getYouTubeId = (source: string): string => {
  if (source.includes("/")) {
    return source.split("/").pop() || "";
  }

  return source;
};

const getMetadata = (source: string) => {
  let key = source;

  if (key.startsWith("/")) key = key.slice(1);

  if (!key.startsWith("media/")) key = `media/${key}`;

  return (mediaMetadata as Record<string, {width: number; height: number} | undefined>)[
    key
  ];
};

const ArticleMedia: React.FC<ArticleMediaProperties> = (properties) => {
  const {src, type} = properties;

  const caption = type === "youtube" ? undefined : properties.caption;

  const isSpoilerOpen = useSpoiler();

  const [hasBeenOpened, setHasBeenOpened] = useState(isSpoilerOpen);

  useEffect(() => {
    if (isSpoilerOpen) {
      setHasBeenOpened(true);
    }
  }, [isSpoilerOpen]);

  const renderCaption = () => {
    if (!caption || type === "youtube") {
      return;
    }

    return <figcaption className={styles["media-caption"]}>{caption}</figcaption>;
  };

  const renderContent = () => {
    const metadata = getMetadata(src);

    const aspectRatio = metadata ? `${metadata.width}/${metadata.height}` : "16/9";

    if (!hasBeenOpened) {
      return (
        <div
          className={styles["media-placeholder"]}
          style={{aspectRatio}}
        />
      );
    }

    const resolvedSource = getMediaSource(src);

    switch (type) {
      case "image": {
        return (
          <img
            alt={caption}
            className={`${styles["media-content"]} ${styles["media-content--image"]}`}
            height={metadata?.height}
            loading="lazy"
            src={resolvedSource}
            style={{aspectRatio}}
            width={metadata?.width}
          />
        );
      }

      case "video": {
        return (
          <video
            controls
            playsInline
            autoPlay={properties.autoPlay}
            className={`${styles["media-content"]} ${styles["media-content--video"]}`}
            height={metadata?.height}
            loop={properties.loop}
            src={resolvedSource}
            style={{aspectRatio}}
            width={metadata?.width}
          />
        );
      }

      case "youtube": {
        const videoId = getYouTubeId(src);

        return (
          <>
            <iframe
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={styles["media-iframe"]}
              loading="lazy"
              src={`https://www.youtube.com/embed/${videoId}`}
            />
            <div className={styles["media-youtube-actions"]}>
              <button
                onClick={() =>
                  window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
                }
              >
                Открыть в новой вкладке
              </button>
              <button
                aria-label="Копировать ссылку"
                onClick={async () => {
                  const success = await copyText(
                    `https://www.youtube.com/watch?v=${videoId}`
                  );

                  if (success) {
                    message.success("Ссылка на видео скопирована");
                  } else {
                    message.error("Не удалось скопировать ссылку");
                  }
                }}
              >
                <ShareRounded />
              </button>
            </div>
          </>
        );
      }

      default: {
        return;
      }
    }
  };

  const figureClass = type === "youtube" ? styles["media-figure--youtube"] : undefined;

  return (
    <>
      <div className={`${styles.media} media`}>
        <figure className={`${styles["media-figure"]} ${figureClass}`}>
          {renderContent()}
          {renderCaption()}
        </figure>
      </div>
    </>
  );
};

export {ArticleMedia};
