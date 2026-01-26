import React, {useCallback} from "react";

import {message} from "antd";
import {Link} from "react-router-dom";

import {copyText} from "../../hooks/useCopyToClipboard";
import {useLongPress} from "../../hooks/useLongPress";
import {formatNestedQuotes} from "../../utils/stringUtilities";

import styles from "./LinkCards.module.scss";

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

  const handleCopyLink = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.stopPropagation();

      const urlToCopy =
        variant === "internal" ? `${globalThis.location.origin}${href}` : href;

      (async () => {
        const success = await copyText(urlToCopy);

        if (success) {
          message.success(`Ссылка на «${formatNestedQuotes(name)}» скопирована`);
        } else {
          message.error("Не удалось скопировать ссылку");
        }
      })();

      return true;
    },
    [href, name, variant]
  );

  const longPressProperties = useLongPress(handleCopyLink);

  const content = (
    <>
      <div
        className={`${styles["name-container"]} ${hasDescription ? "" : styles["name-container_full-height"]}`}
      >
        <span className={styles["icon"]}>{icon}</span>
        <p className={styles["name"]}>{name}</p>
      </div>
      {hasDescription && <p className={styles["description"]}>{description}</p>}
    </>
  );

  return (
    <div
      className={styles["links-button"]}
      {...longPressProperties}
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
