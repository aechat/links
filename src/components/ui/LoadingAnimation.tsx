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

    if (path.startsWith("/aefaq")) return "aefaq";

    if (path.startsWith("/prfaq")) return "prfaq";

    if (path.startsWith("/psfaq")) return "psfaq";

    if (path.startsWith("/aeexpr")) return "aeexpr";

    if (path.startsWith("/rules")) return "rules";
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const logoFont = "italic 800 1em 'Red Hat Display'";

    const taglineFont = "italic 500 1em 'Red Hat Display'";

    Promise.all([document.fonts.load(logoFont), document.fonts.load(taglineFont)]).then(
      () => {
        setFontsLoaded(true);
      }
    );
  }, []);

  const [showIntro, setShowIntro] = useState(false);

  const [canDismiss, setCanDismiss] = useState(() => !getTitle());

  const [showProgressBar, setShowProgressBar] = useState(false);

  const [textAnimationFinished, setTextAnimationFinished] = useState(false);

  const [introLogicFinished, setIntroLogicFinished] = useState(false);

  useLayoutEffect(() => {
    setIsLoading(true);
    setIntroLogicFinished(false);
  }, [location.pathname, setIsLoading]);

  useEffect(() => {
    if (isLoading) {
      setTextAnimationFinished(false);
      setIntroLogicFinished(false);

      const timer = setTimeout(() => {
        setShowProgressBar(true);
      }, 50);

      const title = getTitle();

      const titleExists = !!title;

      if (!titleExists) {
        setShowIntro(false);
        setCanDismiss(true);
        setIntroLogicFinished(true);

        return () => clearTimeout(timer);
      }

      const lastShown = localStorage.getItem("introLastShown");

      const now = Date.now();

      const shouldShowIntro = !lastShown || now - Number(lastShown) > 20 * 60 * 1000;

      if (!shouldShowIntro) {
        setShowIntro(false);
        setCanDismiss(false);
        setTimeout(() => setCanDismiss(true), 500);
        setIntroLogicFinished(true);
      } else if (fontsLoaded) {
        setShowIntro(true);
        setCanDismiss(false);

        setTimeout(() => {
          localStorage.setItem("introLastShown", Date.now().toString());
          setCanDismiss(true);
        }, 1750);

        setIntroLogicFinished(true);
      } else {
        setShowIntro(false);
        setCanDismiss(false);
      }

      return () => clearTimeout(timer);
    } else {
      setShowProgressBar(false);
    }
  }, [isLoading, location.pathname, fontsLoaded]);

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
    progressBarDelay = 0.25;
  }

  const isProgressBarVisible =
    introLogicFinished && showProgressBar && (!showIntro || textAnimationFinished);

  if (!shouldRender) return <></>;

  const titleLength = title ? title.length : 0;

  const taglineLength = taglineText.length;

  const totalLength = titleLength + taglineLength;

  const hasTitle = titleLength > 0;

  const centerIndex = hasTitle ? (titleLength - 1) / 2 : (taglineLength - 1) / 2;

  const maxDistance = Math.max(centerIndex, totalLength - 1 - centerIndex);

  const loopStepDelay = 0.06;

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
                {[...title].map((char, index) => {
                  const globalIndex = index;

                  const distance = Math.abs(globalIndex - centerIndex);

                  const offset = globalIndex - centerIndex;

                  const delay = 0.5 + distance * 0.1;

                  const loopPhase = globalIndex * loopStepDelay;

                  const isFurthest = Math.abs(distance - maxDistance) < 0.01;

                  return (
                    <span
                      key={`title-${index}`}
                      className={styles["animated-text-letter-wrapper"]}
                      style={
                        {
                          "--char-offset": offset,
                          "--intro-delay": `${delay}s`,
                          "--loop-phase": `${loopPhase}s`,
                        } as React.CSSProperties
                      }
                    >
                      <span
                        className={styles["animated-text-letter"]}
                        onAnimationEnd={
                          isFurthest ? () => setTextAnimationFinished(true) : undefined
                        }
                      >
                        {char}
                      </span>
                    </span>
                  );
                })}
              </div>
            )}
            <div className={styles["animated-text-tagline"]}>
              {[...taglineText].map((char, index) => {
                const globalIndex = titleLength + index;

                const distance = Math.abs(globalIndex - centerIndex);

                const offset = globalIndex - centerIndex;

                const delay = 0.675 + distance * 0.0675;

                const loopPhase = globalIndex * loopStepDelay;

                const isFurthest = Math.abs(distance - maxDistance) < 0.01;

                return (
                  <span
                    key={`tagline-${index}`}
                    className={styles["animated-text-letter-wrapper"]}
                    style={
                      {
                        "--char-offset": offset,
                        "--intro-delay": `${delay}s`,
                        "--loop-phase": `${loopPhase}s`,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={styles["animated-text-letter"]}
                      onAnimationEnd={
                        isFurthest ? () => setTextAnimationFinished(true) : undefined
                      }
                    >
                      {char}
                    </span>
                  </span>
                );
              })}
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
