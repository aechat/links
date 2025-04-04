import {ArrowBackRounded} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {SearchButton, WideSearchButton} from "./modal/SearchInPage";
import {motion} from "framer-motion";
import {MoveToTop} from "./features/MoveToTop";
import {ThemeToggleButton} from "./modal/ThemeChanger";

const Header: React.FC<{title: string}> = ({title}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [isWide, setIsWide] = useState(window.innerWidth > 650);

  const checkScrollPosition = () => {
    setIsVisible(window.scrollY > 25);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setIsWide(window.innerWidth > 650);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <motion.header
      animate={{opacity: 1}}
      className={`header ${isVisible ? "" : "header-transparent"}`}
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      style={{
        backgroundColor: "var(--header_background)",
        backdropFilter: "blur(15px) saturate(50%)",
        WebkitBackdropFilter: "blur(15px)",
        boxShadow: "0 0 15px 0 var(--header_shadow)",
        outline: "1px solid var(--header_border)",
        translate: "0 0 0",
      }}
      transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
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
          <sub style={{fontSize: "0.825rem"}}>@aechat</sub>
        </div>
      </div>
      <div className="header-right">
        <div className={`header-right ${isVisible ? "visible" : "hidden"}`}>
          <MoveToTop />
        </div>
        {(location.pathname.includes("aefaq") ||
          location.pathname.includes("prfaq") ||
          location.pathname.includes("psfaq") ||
          location.pathname.includes("aeexprfaq")) && (
          <div>{isWide ? <WideSearchButton /> : <SearchButton />}</div>
        )}
        <ThemeToggleButton />
      </div>
    </motion.header>
  );
};
export default Header;
