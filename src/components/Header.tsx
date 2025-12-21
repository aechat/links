import {ArrowBackRounded, SwipeUpRounded} from "@mui/icons-material";

import {motion} from "framer-motion";

import React, {useEffect, useState} from "react";

import {Link, useLocation} from "react-router-dom";

import {ThemeToggleButton} from "./modal/ThemeChanger";

import {SearchButton} from "./SearchEngine";

import SupportDonut from "./modal/SupportDonut";

import {Tooltip} from "antd";

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

const WIP_PATHS = ["prfaq", "psfaq", "aeexpr"] as const;

const TOOLTIP_MESSAGES: Record<string, string> = {
  "/aefaq": "Ответы на часто задаваемые вопросы по Adobe After Effects",
  "/prfaq": "Ответы на часто задаваемые вопросы по Adobe Premiere Pro",
  "/psfaq": "Ответы на часто задаваемые вопросы по Adobe Photoshop",
  "/aeexpr": "Руководство по выражениям в Adobe After Effects",
  "/rules": "Правила сообщества AEChat и DWChat",
  "/": "Ссылки на полезные ресурсы, программы и чаты",
};

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
      window.history.replaceState({}, "", currentPath);
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
      return SEARCH_PATHS.some((path) => currentPath.includes(path));
    }

    return false;
  };

  const currentPath = location.pathname;

  const tooltipMessage = TOOLTIP_MESSAGES[currentPath];

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
        {currentPath === "/" ? null : (
          <span className="icon">
            <Link to="/">
              <ArrowBackRounded />
            </Link>
          </span>
        )}
        <div className="logo">
          {tooltipMessage ? (
            <>
              <Tooltip title={tooltipMessage}>{title}</Tooltip>
              <sub>@aechat</sub>
            </>
          ) : (
            <>
              {title}
              <sub>@aechat</sub>
            </>
          )}
          {WIP_PATHS.some((path) => currentPath.includes(path)) && (
            <mark>{isWide ? "[В РАЗРАБОТКЕ]" : "[WIP]"}</mark>
          )}
        </div>
        <div>{isWide ? <SupportDonut wide /> : <SupportDonut />}</div>
      </div>
      <div className="header-right">
        <div className={`header-right ${isVisible ? "visible" : "hidden"}`}>
          <button
            aria-label="Прокрутить страницу вверх"
            className="icon"
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
