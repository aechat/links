import {ArrowBackRounded, SwipeUpRounded} from "@mui/icons-material";

import {motion} from "framer-motion";

import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import {ThemeToggleButton} from "./modal/ThemeChanger";

import {SearchButton} from "./search";

interface HeaderProps {
  title: string;
}

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

const constants = {
  SCROLL_THRESHOLD: 25,
  WIDE_SCREEN_WIDTH: 650,
  ANIMATION_DURATION: 0.5,
  ANIMATION_EASE: [0.075, 0.82, 0.165, 1],
} as const;

const SEARCH_PATHS = ["aefaq", "prfaq", "psfaq", "aeexpr"] as const;

const Header: React.FC<HeaderProps> = ({title}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [isWide, setIsWide] = useState(window.innerWidth > constants.WIDE_SCREEN_WIDTH);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.replaceState({}, "", window.location.pathname);
  };

  const checkScrollPosition = (): void => {
    setIsVisible(window.scrollY > constants.SCROLL_THRESHOLD);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  useEffect(() => {
    const resizeHandler = (): void => {
      setIsWide(window.innerWidth > constants.WIDE_SCREEN_WIDTH);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

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
          <button
            aria-label="Прокрутить страницу вверх"
            onClick={scrollToTop}
          >
            <SwipeUpRounded />
          </button>
        </div>
        {shouldShowSearch() && (
          <div>{isWide ? <SearchButton wide /> : <SearchButton />}</div>
        )}
        <ThemeToggleButton />
      </div>
    </motion.header>
  );
};

export default Header;
