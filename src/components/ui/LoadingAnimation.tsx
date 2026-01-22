import React, {useEffect, useLayoutEffect, useState} from "react";

import LinearProgress from "@mui/material/LinearProgress";
import {useLocation} from "react-router-dom";

import {useLoading} from "../../context/LoadingContext";

import styles from "./LoadingAnimation.module.scss";

interface LoadingAnimationProperties {
  isLoading: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProperties> = ({isLoading}) => {
  const {setIsLoading} = useLoading();

  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;

    if (path === "/") return "links";

    if (path.startsWith("/aefaq")) return "aefaq";

    if (path.startsWith("/prfaq")) return "prfaq";

    if (path.startsWith("/psfaq")) return "psfaq";

    if (path.startsWith("/aeexpr")) return "aeexpr";

    if (path.startsWith("/rules")) return "rules";
  };

  const [showIntro, setShowIntro] = useState(() => {
    if (!getTitle()) return false;

    if (globalThis.window === undefined || !globalThis.localStorage) return true;

    const lastShown = localStorage.getItem("introLastShown");

    const now = Date.now();

    return !lastShown || now - Number.parseInt(lastShown, 10) > 20 * 60 * 1000;
  });

  const [canDismiss, setCanDismiss] = useState(!showIntro);

  const [showProgressBar, setShowProgressBar] = useState(false);

  const [textAnimationFinished, setTextAnimationFinished] = useState(false);

  useLayoutEffect(() => {
    setIsLoading(true);
  }, [location.pathname, setIsLoading]);

  useEffect(() => {
    if (isLoading) {
      setTextAnimationFinished(false);

      const timer = setTimeout(() => {
        setShowProgressBar(true);
      }, 50);

      const titleExists = !!getTitle();

      if (!titleExists) {
        setShowIntro(false);
        setCanDismiss(true);

        return () => clearTimeout(timer);
      }

      let show = false;

      if (globalThis.window === undefined || !globalThis.localStorage) {
        show = true;
      } else {
        const lastShown = localStorage.getItem("introLastShown");

        const now = Date.now();

        show = !lastShown || now - Number.parseInt(lastShown, 10) > 20 * 60 * 1000;
      }

      setShowIntro(show);

      if (show) {
        if (globalThis.localStorage) {
          localStorage.setItem("introLastShown", Date.now().toString());
        }

        setCanDismiss(false);
        setTimeout(() => setCanDismiss(true), 2000);
      } else {
        setCanDismiss(false);
        setTimeout(() => setCanDismiss(true), 500);
      }

      return () => clearTimeout(timer);
    } else {
      setShowProgressBar(false);
    }
  }, [isLoading, location.pathname]);

  const title = getTitle();

  const taglineText = "@aechat";

  const show = isLoading || !canDismiss;

  const [shouldRender, setShouldRender] = useState(show);

  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      setIsFadingOut(false);
    } else {
      setIsFadingOut(true);

      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsFadingOut(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [show]);

  let progressBarDelay = 0;

  if (showProgressBar) {
    progressBarDelay = 0.5;
  }

  const isProgressBarVisible = showProgressBar && (!showIntro || textAnimationFinished);

  if (!shouldRender) return <></>;

  return (
    <div
      className={`${styles["loading-animation-overlay"]} ${
        isFadingOut ? styles["fade-out"] : styles["fade-in"]
      }`}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {showIntro && (
          <div className={styles["animated-text-container"]}>
            {title && (
              <div className={styles["animated-text-logo"]}>
                {[...title].map((char, index) => (
                  <span
                    key={`title-${char}-${index}`}
                    className={styles["animated-text-letter"]}
                    style={{
                      animationDelay: `${0.5 + index * 0.04}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            )}
            <div className={styles["animated-text-tagline"]}>
              {[...taglineText].map((char, index) => (
                <span
                  key={`tagline-${char}-${index}`}
                  className={styles["animated-text-letter"]}
                  style={{
                    animationDelay: `${0.5 + ((title?.length || 0) + index) * 0.04}s`,
                  }}
                  onAnimationEnd={
                    index === taglineText.length - 1
                      ? () => setTextAnimationFinished(true)
                      : undefined
                  }
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        )}
        <div
          className={`${styles["progress-bar-container"]} ${
            isProgressBarVisible ? styles["visible"] : ""
          }`}
          style={{
            marginInline: "20px",
            marginTop: showIntro ? "30px" : "0",
            maxWidth: "225px",
            transitionDelay: `${progressBarDelay}s`,
            width: "80%",
          }}
        >
          <LinearProgress
            color="inherit"
            style={{borderRadius: "4px", height: "4px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
