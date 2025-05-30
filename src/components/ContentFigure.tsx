import React, {useCallback, useEffect, useState} from "react";
import {useSpoiler} from "./DetailsSummary";

/**
 * пропсы для компонента изображения
 */

interface ImageFigureProps {
  /** класс стиля для фигуры */

  styleClass: string;

  /** источник изображения */

  imgSrc: string;

  /** заголовок изображения */

  imgTitle: string;

  /** подпись к изображению */

  caption: string;
}

/**
 * пропсы для компонента видео
 */

interface VideoFigureProps {
  /** класс стиля для фигуры */

  styleClass: string;

  /** источник видео */

  videoSrc: string;

  /** подпись к видео */

  caption: string;
}

/**
 * компонент для отображения изображения с возможностью полноэкранного просмотра
 * @param styleClass - класс стиля для фигуры
 * @param imgSrc - источник изображения
 * @param imgTitle - заголовок изображения
 * @param caption - подпись к изображению
 * @returns компонент изображения с поддержкой полноэкранного режима
 */

const ImageFigure: React.FC<ImageFigureProps> = ({
  styleClass,
  imgSrc,
  imgTitle,
  caption,
}) => {
  const isOpen = useSpoiler();

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";

  /*
   * обработчик открытия полноэкранного режима
   */

  const handleMaximize = useCallback(() => {
    setIsFullscreen(true);
    setIsClosing(false);
  }, []);

  /*
   * обработчик закрытия полноэкранного режима
   */

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    }, 250);
  }, []);

  /*
   * обработчик клика по изображению
   */

  const handleClick = useCallback(() => {
    if (isFullscreen) {
      handleClose();
    } else {
      handleMaximize();
    }
  }, [isFullscreen, handleClose, handleMaximize]);

  /*
   * обработчик клика вне изображения
   */

  const handleClickOutside = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        handleClose();
      }
    };

    if (isFullscreen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isFullscreen, handleClose]);
  if (!isOpen) {
    return null;
  }

  const content = isWindowsStyle ? (
    <div>
      <div
        className="window-header"
        onDoubleClick={handleClick}
      >
        <figcaption>{caption}</figcaption>
        <div className="window-controls">
          <button
            aria-label="Свернуть"
            className="minimize"
            onClick={handleClose}
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 20q-.425 0-.713-.288T4 19q0-.425.288-.713T5 18h14q.425 0 .713.288T20 19q0 .425-.288.713T19 20H5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            aria-label="Раскрыть"
            className="maximize"
            onClick={handleMaximize}
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20q-.825 0-1.413-.588T4 18V6q0-.825.588-1.413T6 4h12q.825 0 1.413.588T20 6v12q0 .825-.588 1.413T18 20H6Zm0-2h12V6H6v12ZM6 6v12V6Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            aria-label="Закрыть"
            className="close"
            onClick={handleClose}
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <img
        alt={imgTitle}
        src={imgSrc}
        onClick={handleClick}
      />
    </div>
  ) : (
    <div>
      <div
        className="window-header"
        onDoubleClick={handleClick}
      >
        <div className="window-controls">
          <button
            aria-label="Закрыть"
            className="close"
            onClick={handleClose}
          ></button>
          <button
            aria-label="Раскрыть"
            className="maximize"
            onClick={handleMaximize}
          ></button>
          <button
            aria-label="Свернуть"
            className="minimize"
            onClick={handleClose}
          ></button>
        </div>
        <figcaption>{caption}</figcaption>
      </div>
      <img
        alt={imgTitle}
        src={imgSrc}
        onClick={handleClick}
      />
    </div>
  );

  return (
    <>
      <div className="figure_container">
        <figure className={styleClass}>{content}</figure>
      </div>
      {isFullscreen && (
        <div
          className={`fullscreen-overlay ${isClosing ? "closing" : ""}`}
          onClick={handleClickOutside}
        >
          <div
            className={`fullscreen-content ${styleClass} ${isClosing ? "closing" : ""}`}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};

/**
 * компонент для отображения видео с возможностью полноэкранного просмотра
 * @param styleClass - класс стиля для фигуры
 * @param videoSrc - источник видео
 * @param caption - подпись к видео
 * @returns компонент видео с поддержкой полноэкранного режима
 */

const VideoFigure: React.FC<VideoFigureProps> = ({styleClass, videoSrc, caption}) => {
  const isOpen = useSpoiler();

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";

  /*
   * обработчик открытия полноэкранного режима
   */

  const handleMaximize = useCallback(() => {
    setIsFullscreen(true);
    setIsClosing(false);
  }, []);

  /*
   * обработчик закрытия полноэкранного режима
   */

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    }, 250);
  }, []);

  /*
   * обработчик клика по видео
   */

  const handleClick = useCallback(() => {
    if (isFullscreen) {
      handleClose();
    } else {
      handleMaximize();
    }
  }, [isFullscreen, handleClose, handleMaximize]);

  /*
   * обработчик клика вне видео
   */

  const handleClickOutside = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        handleClose();
      }
    };

    if (isFullscreen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isFullscreen, handleClose]);
  if (!isOpen) {
    return null;
  }

  const content = isWindowsStyle ? (
    <div>
      <div
        className="window-header"
        onDoubleClick={handleClick}
      >
        <figcaption>{caption}</figcaption>
        <div className="window-controls">
          <button
            aria-label="Свернуть"
            className="minimize"
            onClick={handleClose}
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 20q-.425 0-.713-.288T4 19q0-.425.288-.713T5 18h14q.425 0 .713.288T20 19q0 .425-.288.713T19 20H5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            aria-label="Раскрыть"
            className="maximize"
            onClick={handleMaximize}
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20q-.825 0-1.413-.588T4 18V6q0-.825.588-1.413T6 4h12q.825 0 1.413.588T20 6v12q0 .825-.588 1.413T18 20H6Zm0-2h12V6H6v12ZM6 6v12V6Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            aria-label="Закрыть"
            className="close"
            onClick={handleClose}
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <video
        controls
        src={videoSrc}
        onClick={handleClick}
      />
    </div>
  ) : (
    <div>
      <div
        className="window-header"
        onDoubleClick={handleClick}
      >
        <div className="window-controls">
          <button
            aria-label="Закрыть"
            className="close"
            onClick={handleClose}
          ></button>
          <button
            aria-label="Раскрыть"
            className="maximize"
            onClick={handleMaximize}
          ></button>
          <button
            aria-label="Свернуть"
            className="minimize"
            onClick={handleClose}
          ></button>
        </div>
        <figcaption>{caption}</figcaption>
      </div>
      <video
        controls
        src={videoSrc}
        onClick={handleClick}
      />
    </div>
  );

  return (
    <>
      <div className="figure_container">
        <figure className={styleClass}>{content}</figure>
      </div>
      {isFullscreen && (
        <div
          className={`fullscreen-overlay ${isClosing ? "closing" : ""}`}
          onClick={handleClickOutside}
        >
          <div
            className={`fullscreen-content ${styleClass} ${isClosing ? "closing" : ""}`}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};

/**
 * пропсы для компонента YouTube видео
 */

interface YouTubeVideoProps {
  /** ссылка на YouTube видео */

  link: string;

  /** подпись к видео */

  caption: string;
}

/**
 * компонент для отображения YouTube видео
 * @param link - обрезанная ссылка на YouTube видео
 * @param caption - подпись к видео
 * @returns компонент YouTube видео
 */

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({link, caption}) => {
  const isOpen = useSpoiler();

  const id = link.split("/").pop();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="figure_container">
      <figure className="figure_browser-youtube">
        <div className="window-header">
          <figcaption>
            <b>YouTube</b>: {caption}
          </figcaption>
        </div>
        <iframe
          allowFullScreen
          src={`https://www.youtube.com/embed/${id}`}
          title={caption}
        />
      </figure>
    </div>
  );
};

export {ImageFigure, VideoFigure, YouTubeVideo};
