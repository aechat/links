import React, {useRef} from "react";

import {message} from "antd";
import {Link} from "react-router-dom";

import {copyText} from "../../hooks/useCopyToClipboard";

interface LinkCardProperties {
  description?: string;
  href: string;
  icon: React.ReactNode;
  name: string;
  variant?: "external" | "internal";
}

export const LinkCard: React.FC<LinkCardProperties> = ({
  description,
  href,
  icon,
  name,
  variant = "external",
}) => {
  const hasDescription = !!description;
  const touchStartTime = useRef(0);
  const isPotentialLongPress = useRef(false);
  const touchStartCoords = useRef({x: 0, y: 0});
  const isTouchEventInProgress = useRef(false);
  const handleCopyLink = async (event: React.MouseEvent | React.TouchEvent) => {
    event.stopPropagation();
    const urlToCopy =
      variant === "internal" ? `${globalThis.location.origin}${href}` : href;
    const success = await copyText(urlToCopy);

    if (success) {
      message.success(`Ссылка на «${name}» скопирована`);
    } else {
      message.error("Не удалось скопировать ссылку");
    }
  };
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isTouchEventInProgress.current) {
      return;
    }

    handleCopyLink(e);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchEventInProgress.current = true;
    touchStartTime.current = Date.now();
    isPotentialLongPress.current = true;
    const touch = e.touches[0];

    touchStartCoords.current = {x: touch.clientX, y: touch.clientY};
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPotentialLongPress.current) return;

    const touch = e.touches[0];
    const moveThreshold = 10;
    const deltaX = Math.abs(touch.clientX - touchStartCoords.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartCoords.current.y);

    if (deltaX > moveThreshold || deltaY > moveThreshold) {
      isPotentialLongPress.current = false;
    }
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isPotentialLongPress.current) {
      const pressDuration = Date.now() - touchStartTime.current;

      if (pressDuration > 500) {
        e.preventDefault();
        handleCopyLink(e);
      }
    }

    setTimeout(() => {
      isTouchEventInProgress.current = false;
    }, 300);
    isPotentialLongPress.current = false;
  };
  const content = (
    <>
      <div
        className={`name-container ${hasDescription ? "" : "name-container_full-height"}`}
      >
        <span className="icon">{icon}</span>
        <p className="name">{name}</p>
      </div>
      {hasDescription && <p className="description">{description}</p>}
    </>
  );

  return (
    <div
      className="links-button"
      onContextMenu={handleContextMenu}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      {variant === "internal" ? (
        <Link to={href}>{content}</Link>
      ) : (
        <a
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {content}
        </a>
      )}
    </div>
  );
};
