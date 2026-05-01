import React, {useCallback} from "react";

import {message} from "antd";
import {Link} from "react-router-dom";

import {copyText} from "../../hooks/useCopyToClipboard";
import {useLongPress} from "../../hooks/useLongPress";
import {useRipple} from "../../hooks/useRipple";
import {formatNestedQuotes} from "../../utils/stringUtilities";

import styles from "./LinkCards.module.scss";

type LinkCardVariant = "external" | "internal";

interface LinkCardProperties {
  description?: string;
  href: string;
  icon: React.ReactNode;
  name: string;
  variant?: LinkCardVariant;
}

const getLinkCardCopyUrl = (href: string, variant: LinkCardVariant): string => {
  return variant === "internal" ? `${globalThis.location.origin}${href}` : href;
};

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

      const urlToCopy = getLinkCardCopyUrl(href, variant);

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

  const rippleProperties = useRipple<HTMLDivElement>();

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
      className={`links-grid-item ${styles["links-button"]}`}
      {...longPressProperties}
      {...rippleProperties}
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
