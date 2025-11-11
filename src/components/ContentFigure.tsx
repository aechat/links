import {message} from "antd";

import React, {useCallback, useEffect, useState} from "react";

import {createPortal} from "react-dom";

import {useSpoiler} from "./DetailsSummary";

import {ShareRounded} from "@mui/icons-material";

import {copyText} from "../hooks/useCopyToClipboard";

interface ContentFigureProps {
  type: "image" | "video" | "youtube";
  caption: string;
  variant?: "windows" | "mac";
  theme?: "light" | "dark";
  src: string;
  imgTitle?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

const ContentFigure: React.FC<ContentFigureProps> = ({
  type,
  caption,
  variant,
  theme,
  src,
  imgTitle,
  autoPlay,
  loop,
}) => {
  const isOpen = useSpoiler();

  const [shouldRender, setShouldRender] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const [initialScrollY, setInitialScrollY] = useState(0);

  const styleClass =
    type === "youtube"
      ? "figure-browser-youtube"
      : `figure-${variant || "windows"}-${theme || "light"}`;

  const isWindowsStyle = variant === "windows";

  const handleMaximize = useCallback(() => {
    setInitialScrollY(window.scrollY);
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

  useEffect(() => {
    const handleScroll = () => {
      if (Math.abs(window.scrollY - initialScrollY) > window.innerHeight * 0.25) {
        handleClose();
      }
    };

    if (isFullscreen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFullscreen, handleClose, initialScrollY]);

  if (!shouldRender) {
    return null;
  }

  const WindowControlButton: React.FC<{
    label: string;
    className: string;
    onClick: () => void;
    svgPath?: string;
  }> = ({label, className, onClick, svgPath}) => (
    <button
      aria-label={label}
      className={className}
      onClick={onClick}
    >
      {svgPath && (
        <svg
          height="32"
          viewBox="0 0 24 24"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={svgPath}
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
  let content: React.ReactNode;
  let id: string | undefined;

  const windowHeaderContent = (
    <>
      {isWindowsStyle && <figcaption>{caption}</figcaption>}
      <div className="window-controls">
        {isWindowsStyle ? (
          <>
            <WindowControlButton
              className="minimize"
              label="Свернуть"
              svgPath="M5 20q-.425 0-.713-.288T4 19q0-.425.288-.713T5 18h14q.425 0 .713.288T20 19q0 .425-.288.713T19 20H5Z"
              onClick={handleClose}
            />
            <WindowControlButton
              className="maximize"
              label="Раскрыть"
              svgPath="M6 20q-.825 0-1.413-.588T4 18V6q0-.825.588-1.413T6 4h12q.825 0 1.413.588T20 6v12q0 .825-.588 1.413T18 20H6Zm0-2h12V6H6v12ZM6 6v12V6Z"
              onClick={handleMaximize}
            />
            <WindowControlButton
              className="close"
              label="Закрыть"
              svgPath="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
              onClick={handleClose}
            />
          </>
        ) : (
          <>
            <WindowControlButton
              className="close"
              label="Закрыть"
              onClick={handleClose}
            />
            <WindowControlButton
              className="maximize"
              label="Раскрыть"
              onClick={handleMaximize}
            />
            <WindowControlButton
              className="minimize"
              label="Свернуть"
              onClick={handleClose}
            />
          </>
        )}
      </div>
      {!isWindowsStyle && <figcaption>{caption}</figcaption>}
    </>
  );

  const MediaContentWrapper: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div>
      <div
        className="window-header"
        onDoubleClick={handleClick}
      >
        {windowHeaderContent}
      </div>
      {children}
    </div>
  );

  switch (type) {
    case "image":
      content = (
        <MediaContentWrapper>
          <img
            alt={imgTitle}
            src={src}
            onClick={handleClick}
          />
        </MediaContentWrapper>
      );

      break;

    case "video":
      content = (
        <MediaContentWrapper>
          <video
            controls
            autoPlay={autoPlay}
            loop={loop}
            src={src}
          />
        </MediaContentWrapper>
      );

      break;

    case "youtube":
      id = src?.split("/").pop();
      content = (
        <>
          <div className="window-header">
            <figcaption>
              <b>YouTube</b>: {caption}
            </figcaption>
            <div className="youtube-button">
              <button
                onClick={() =>
                  window.open(`https://www.youtube.com/watch?v=${id}`, "_blank")
                }
              >
                Открыть в новой вкладке
              </button>
              <button
                aria-label="Копировать ссылку"
                onClick={async () => {
                  const success = await copyText(`https://www.youtube.com/watch?v=${id}`);

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
          </div>
          <iframe
            allowFullScreen
            src={`https://www.youtube.com/embed/${id}`}
            title={caption}
          />
        </>
      );

      break;

    default:
      content = <></>;
  }

  return (
    <>
      <div className="figure-container">
        <figure className={styleClass}>{content}</figure>
      </div>
      {isFullscreen &&
        createPortal(
          <div
            className={`fullscreen-overlay ${isClosing ? "closing" : ""}`}
            onClick={handleClickOutside}
          >
            <div
              className={`fullscreen-content ${styleClass} ${isClosing ? "closing" : ""}`}
            >
              {content}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export {ContentFigure};
