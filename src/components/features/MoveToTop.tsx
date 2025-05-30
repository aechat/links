import React from "react";
import {SwipeUpRounded} from "@mui/icons-material";

/**
 * компонент кнопки прокрутки страницы вверх
 * @returns кнопка с иконкой стрелки вверх
 */

export const MoveToTop: React.FC = () => {
  /*
   * плавно прокручивает страницу вверх и очищает url от параметров
   */

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
