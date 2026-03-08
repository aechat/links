import React from "react";

import {ShareRounded} from "@mui/icons-material";

import {useRipple} from "../../../hooks/useRipple";
import {withSoftHaptic} from "../../../utils/haptics";

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
  const ripple = useRipple<HTMLButtonElement>({haptic: false});

  const handleClick = withSoftHaptic((event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  });

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
      onClick={handleClick}
      onMouseDown={ripple.onMouseDown}
    >
      <ShareRounded />
    </button>
  );
};
