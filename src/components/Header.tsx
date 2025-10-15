import {ArrowBackRounded, SwipeUpRounded} from "@mui/icons-material";

import {motion} from "framer-motion";

import React, {useEffect, useState} from "react";

import {Link, useLocation} from "react-router-dom";

import {ThemeToggleButton} from "./modal/ThemeChanger";

import {SearchButton} from "./search";

interface HeaderProps {
  title: string;
}

const constants = {
  SCROLL_THRESHOLD: 25,
  WIDE_SCREEN_WIDTH: 650,
  ANIMATION_DURATION: 0.5,
  ANIMATION_EASE: [0.075, 0.82, 0.165, 1],
} as const;

const SEARCH_PATHS = ["aefaq", "prfaq", "psfaq", "aeexpr"] as const;

const Header: React.FC<HeaderProps> = ({title}) => {
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(false);

  const [isWide, setIsWide] = useState(
    typeof window !== "undefined"
      ? window.innerWidth > constants.WIDE_SCREEN_WIDTH
      : false
  );

  const scrollToTop = (): void => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.replaceState({}, "", location.pathname);
    }
  };

  const checkScrollPosition = (): void => {
    if (typeof window !== "undefined") {
      setIsVisible(window.scrollY > constants.SCROLL_THRESHOLD);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", checkScrollPosition);

      return () => {
        window.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const resizeHandler = (): void => {
        setIsWide(window.innerWidth > constants.WIDE_SCREEN_WIDTH);
      };
      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }
  }, []);

  const shouldShowSearch = (): boolean => {
    if (typeof window !== "undefined") {
      return SEARCH_PATHS.some((path) => location.pathname.includes(path));
    }

    return false;
  };

  return (
    <motion.header
      animate={{opacity: 1}}
      className={`header ${isVisible ? "" : "header-transparent"}`}
      exit={{opacity: 0}}
      initial={{opacity: 0}}
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
          <sub>@aechat</sub>
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
