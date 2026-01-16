import React from "react";

import {ShareRounded} from "@mui/icons-material";

import styles from "./CopyButton.module.scss";

interface CopyButtonProperties {
  className?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CopyButton: React.FC<CopyButtonProperties> = ({
  className,
  disabled,
  onClick,
}) => {
  const buttonClasses = [
    styles["copy-button"],
    disabled ? styles.disabled : "",
    className || "",
  ]
    .join(" ")
    .trim();

  return (
    <button
      aria-label="Copy"
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      <ShareRounded />
    </button>
  );
};
