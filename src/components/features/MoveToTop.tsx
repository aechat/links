import React from "react";
import {SwipeUpRounded} from "@mui/icons-material";

export const MoveToTop: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.replaceState({}, "", window.location.pathname);
  };

  return (
    <button
      aria-label="Прокрутить страницу вверх"
      onClick={scrollToTop}
    >
      <SwipeUpRounded />
    </button>
  );
};
