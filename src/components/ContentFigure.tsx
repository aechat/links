import React, {useCallback, useEffect, useState} from "react";
import {useSpoiler} from "./DetailsSummary";
interface ImageFigureProps {
  styleClass: string;
  imgSrc: string;
  imgTitle: string;
  caption: string;
}
interface VideoFigureProps {
  styleClass: string;
  videoSrc: string;
  caption: string;
}

const ImageFigure: React.FC<ImageFigureProps> = ({
  styleClass,
  imgSrc,
  imgTitle,
  caption,
}) => {
  const isOpen = useSpoiler();
  if (!isOpen) {
    return null;
  }

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";

  const handleMaximize = useCallback(() => {
    setIsFullscreen(true);
    setIsClosing(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    }, 250);
  }, []);

  const handleClick = useCallback(() => {
    if (isFullscreen) {
      handleClose();
    } else {
      handleMaximize();
    }
  }, [isFullscreen, handleClose, handleMaximize]);

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

const VideoFigure: React.FC<VideoFigureProps> = ({styleClass, videoSrc, caption}) => {
  const isOpen = useSpoiler();
  if (!isOpen) {
    return null;
  }

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";

  const handleMaximize = useCallback(() => {
    setIsFullscreen(true);
    setIsClosing(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    }, 250);
  }, []);

  const handleClick = useCallback(() => {
    if (isFullscreen) {
      handleClose();
    } else {
      handleMaximize();
    }
  }, [isFullscreen, handleClose, handleMaximize]);

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
        loop
        preload="metadata"
        onClick={handleClick}
      >
        <source src={videoSrc} />
      </video>
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
        loop
        preload="metadata"
        onClick={handleClick}
      >
        <source src={videoSrc} />
      </video>
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

const YouTubeVideo: React.FC<{link: string; caption: string}> = ({link, caption}) => {
  const isOpen = useSpoiler();
  if (!isOpen) {
    return null;
  }

  const id = link.split("/").pop();

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
