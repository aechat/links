import React from "react";

import {ShareRounded} from "@mui/icons-material";

import {useRipple} from "../../../hooks/useRipple";

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
  const ripple = useRipple<HTMLButtonElement>({haptic: "soft"});

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
      onMouseDown={ripple.onMouseDown}
    >
      <ShareRounded />
    </button>
  );
};
