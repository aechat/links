import React, {useEffect, useRef, useState} from "react";
import mediaMetadata from "virtual:media-metadata";

import {CloseRounded, ShareRounded} from "@mui/icons-material";
import {message} from "antd";
import {animate, AnimatePresence, motion, useMotionValue} from "framer-motion";
import {createPortal} from "react-dom";

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

const ImageViewer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  src: string;
}> = ({isOpen, onClose, src}) => {
  const scale = useMotionValue(1);

  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const [isZoomed, setIsZoomed] = useState(false);

  const historyPushedReference = useRef(false);

  const onCloseReference = useRef(onClose);

  const constraintsReference = useRef<HTMLDivElement>(null);

  const imageReference = useRef<HTMLImageElement>(null);

  const [dragLimits, setDragLimits] = useState({
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  });

  useEffect(() => {
    onCloseReference.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      scale.set(1);
      x.set(0);
      y.set(0);
      setIsZoomed(false);
    }
  }, [isOpen, scale, x, y]);

  useEffect(() => {
    const unsubscribe = scale.on("change", (v) => {
      const newIsZoomed = v > 1.05;

      setIsZoomed(newIsZoomed);

      if (imageReference.current) {
        const width = imageReference.current.offsetWidth;

        const height = imageReference.current.offsetHeight;

        const s = v;

        const viewportW = window.innerWidth - 100;

        const viewportH = window.innerHeight - 100;

        const scaledW = width * s;

        const scaledH = height * s;

        const xMax = scaledW > viewportW ? (scaledW - viewportW) / 2 : 0;

        const yMax = scaledH > viewportH ? (scaledH - viewportH) / 2 : 0;

        const newLimits = {
          bottom: yMax,
          left: -xMax,
          right: xMax,
          top: -yMax,
        };

        setDragLimits(newLimits);

        const currentX = x.get();

        const currentY = y.get();

        const clampedX = Math.min(Math.max(currentX, newLimits.left), newLimits.right);

        const clampedY = Math.min(Math.max(currentY, newLimits.top), newLimits.bottom);

        if (currentX !== clampedX) x.set(clampedX);

        if (currentY !== clampedY) y.set(clampedY);
      }
    });

    return unsubscribe;
  }, [scale, x, y]);

  const handleManualClose = () => {
    if (historyPushedReference.current) {
      historyPushedReference.current = false;
      globalThis.history.back();
    } else {
      onClose();
    }
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (
      event.target === event.currentTarget ||
      event.target === constraintsReference.current
    ) {
      handleManualClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    try {
      globalThis.history.pushState({imageViewerOpen: true}, "");
      historyPushedReference.current = true;
    } catch (error) {
      console.warn("History API not available or restricted:", error);
      historyPushedReference.current = false;
    }

    const handlePopState = () => {
      historyPushedReference.current = false;
      onCloseReference.current();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleManualClose();
      }
    };

    globalThis.addEventListener("popstate", handlePopState);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      globalThis.removeEventListener("popstate", handlePopState);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleWheel = (event: React.WheelEvent) => {
    event.stopPropagation();

    if (event.deltaY === 0) return;

    const current = scale.get();

    const direction = event.deltaY < 0 ? 1 : -1;

    const step = 0.5;

    const newScale = Math.min(Math.max(1, current + direction * step), 4);

    animate(scale, newScale, {damping: 30, stiffness: 300, type: "spring"});
  };

  const distanceReference = useRef<number>(0);

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      distanceReference.current = Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      );
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      const distribution = Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      );

      const delta = distribution - distanceReference.current;

      const current = scale.get();

      const newScale = Math.min(Math.max(1, current + delta * 0.005), 4);

      scale.set(newScale);
      distanceReference.current = distribution;
    }
  };

  const lastTapReference = useRef<number>(0);

  const handleTap = () => {
    const now = Date.now();

    if (now - lastTapReference.current < 300) {
      const current = scale.get();

      if (current > 1.5) {
        animate(scale, 1, {damping: 30, stiffness: 300, type: "spring"});
        animate(x, 0, {damping: 30, stiffness: 300, type: "spring"});
        animate(y, 0, {damping: 30, stiffness: 300, type: "spring"});
      } else {
        animate(scale, 3, {damping: 30, stiffness: 300, type: "spring"});
      }
    }

    lastTapReference.current = now;
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{opacity: 1}}
          className={styles["media-viewer-overlay"]}
          exit={{opacity: 0}}
          initial={{opacity: 0}}
          transition={{duration: 0.2}}
          onClick={handleBackgroundClick}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onWheel={handleWheel}
        >
          <button
            aria-label="Закрыть"
            className={styles["media-viewer-close"]}
            onClick={handleManualClose}
          >
            <CloseRounded />
          </button>
          <motion.div
            className={styles["media-viewer-image-wrapper"]}
            onClick={handleBackgroundClick}
          >
            <motion.img
              ref={imageReference}
              alt=""
              className={styles["media-viewer-image"]}
              drag={isZoomed ? true : "y"}
              dragConstraints={isZoomed ? dragLimits : {bottom: 0, top: 0}}
              dragElastic={isZoomed ? 0.05 : 0.7}
              src={src}
              style={{scale, x, y}}
              onClick={(event) => {
                event.stopPropagation();
                handleTap();
              }}
              onDragEnd={(_, info) => {
                if (
                  !isZoomed &&
                  (Math.abs(info.offset.y) > 60 || Math.abs(info.velocity.y) > 500)
                ) {
                  handleManualClose();
                }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const ArticleMedia: React.FC<ArticleMediaProperties> = (properties) => {
  const {src, type} = properties;

  const caption = type === "youtube" ? undefined : properties.caption;

  const isSpoilerOpen = useSpoiler();

  const [hasBeenOpened, setHasBeenOpened] = useState(isSpoilerOpen);

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
            style={{aspectRatio, cursor: "zoom-in"}}
            width={metadata?.width}
            onClick={() => setIsViewerOpen(true)}
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
      {isClient && (
        <ImageViewer
          isOpen={isViewerOpen}
          src={getMediaSource(src)}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
};

export {ArticleMedia};
