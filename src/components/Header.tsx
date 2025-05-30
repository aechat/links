import {ArrowBackRounded} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {SearchButton, WideSearchButton} from "./search";
import {motion} from "framer-motion";
import {MoveToTop} from "./features/MoveToTop";
import {ThemeToggleButton} from "./modal/ThemeChanger";

/**
 * пропсы компонента заголовка
 */

interface HeaderProps {
  /** заголовок страницы */

  title: string;
}

/**
 * стили для компонента заголовка
 */

const styles = {
  header: {
    backgroundColor: "var(--header-background)",
    backdropFilter: "blur(15px) saturate(50%)",
    WebkitBackdropFilter: "blur(15px)",
    boxShadow: "0 0 15px 0 var(--header-shadow)",
    outline: "1px solid var(--header-border)",
    translate: "0 0 0",
  },
  logo: {
    fontSize: "0.825rem",
  },
} as const;

/**
 * константы для компонента заголовка
 */

const constants = {
  SCROLL_THRESHOLD: 25,
  WIDE_SCREEN_WIDTH: 650,
  ANIMATION_DURATION: 0.5,
  ANIMATION_EASE: [0.075, 0.82, 0.165, 1],
} as const;

/**
 * список путей страниц с поиском
 */

const SEARCH_PATHS = ["aefaq", "prfaq", "psfaq", "aeexpr"] as const;

/**
 * компонент заголовка страницы с навигацией и поиском
 * @param title - заголовок страницы
 * @returns компонент заголовка
 */

const Header: React.FC<HeaderProps> = ({title}) => {
  /** состояние видимости заголовка при прокрутке */

  const [isVisible, setIsVisible] = useState(false);

  /** состояние ширины экрана для адаптивности */

  const [isWide, setIsWide] = useState(window.innerWidth > constants.WIDE_SCREEN_WIDTH);

  /*
   * проверяет позицию прокрутки и обновляет видимость заголовка
   */

  const checkScrollPosition = (): void => {
    setIsVisible(window.scrollY > constants.SCROLL_THRESHOLD);
  };

  /*
   * добавляет обработчик прокрутки при монтировании компонента
   */

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  /*
   * добавляет обработчик изменения размера окна при монтировании компонента
   */

  useEffect(() => {
    const resizeHandler = (): void => {
      setIsWide(window.innerWidth > constants.WIDE_SCREEN_WIDTH);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  /*
   * проверяет, нужно ли отображать поиск на текущей странице
   */

  const shouldShowSearch = (): boolean => {
    return SEARCH_PATHS.some((path) => location.pathname.includes(path));
  };

  return (
    <motion.header
      animate={{opacity: 1}}
      className={`header ${isVisible ? "" : "header-transparent"}`}
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      style={styles.header}
      transition={{
        duration: constants.ANIMATION_DURATION,
        ease: constants.ANIMATION_EASE,
      }}
    >
      <div className="header-left">
        {location.pathname === "/" ? null : (
          <span className="icon">
            <Link to="/">
              <ArrowBackRounded />
            </Link>
          </span>
        )}
        <div className="logo">
          {title}
          <sub style={styles.logo}>@aechat</sub>
        </div>
      </div>
      <div className="header-right">
        <div className={`header-right ${isVisible ? "visible" : "hidden"}`}>
          <MoveToTop />
        </div>
        {shouldShowSearch() && (
          <div>{isWide ? <WideSearchButton /> : <SearchButton />}</div>
        )}
        <ThemeToggleButton />
      </div>
    </motion.header>
  );
};
export default Header;
