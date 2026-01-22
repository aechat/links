import React, {useEffect, useLayoutEffect, useState} from "react";

import LinearProgress from "@mui/material/LinearProgress";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {useLocation} from "react-router-dom";

import {useLoading} from "../../context/LoadingContext";

import styles from "./LoadingAnimation.module.scss";

interface LoadingAnimationProperties {
  isLoading: boolean;
}

const getCategorizedMessage = (resourceName: string): string => {
  const fileName = resourceName
    .slice(Math.max(0, resourceName.lastIndexOf("/") + 1))
    .split("?")[0];

  const lowerName = fileName.toLowerCase();

  if (resourceName.includes("youtube.com") || resourceName.includes("youtu.be")) {
    return `<b>Загрузка из YouTube:</b> ${fileName}`;
  }

  if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(lowerName)) {
    return `<b>Загрузка медиа:</b> ${fileName}`;
  }

  if (lowerName.endsWith(".json")) {
    return `<b>Загрузка данных:</b> ${fileName}`;
  }

  if (/\.(woff2?|ttf|otf|eot)$/.test(lowerName)) {
    return `<b>Загрузка шрифта:</b> ${fileName}`;
  }

  if (/\.(css|scss|sass|less)$/.test(lowerName)) {
    return `<b>Загрузка стилей:</b> ${fileName}`;
  }

  if (/\.(js|jsx|ts|tsx)$/.test(lowerName)) {
    return `<b>Загрузка скрипта:</b> ${fileName}`;
  }

  return `<b>Загрузка ресурса:</b> ${fileName}`;
};

const handlePerformanceEntries = (
  entries: PerformanceEntryList,
  setResource: React.Dispatch<React.SetStateAction<string>>
) => {
  const filteredResources = entries
    .map((entry) => entry.name)
    .filter((name) => {
      return !(name.includes("api.github.com") || name.includes("tag.js"));
    });

  const lastResource = filteredResources.at(-1);

  if (lastResource) {
    setResource(lastResource);
  }
};

const setupPerformanceObserver = (
  setResource: React.Dispatch<React.SetStateAction<string>>
): PerformanceObserver | undefined => {
  if (globalThis.window !== undefined && "PerformanceObserver" in globalThis) {
    const observer = new PerformanceObserver((list) =>
      handlePerformanceEntries(list.getEntries(), setResource)
    );

    observer.observe({buffered: true, type: "resource"});

    return observer;
  }

  return undefined;
};

const LoadingAnimation: React.FC<LoadingAnimationProperties> = ({isLoading}) => {
  const {setIsLoading} = useLoading();

  const [showIntro, setShowIntro] = useState(false);

  const [canDismiss, setCanDismiss] = useState(true);

  const [showResourceText, setShowResourceText] = useState(true);

  const [showProgressBar, setShowProgressBar] = useState(true);

  const location = useLocation();

  useLayoutEffect(() => {
    setIsLoading(true);
  }, [location.pathname, setIsLoading]);

  const getTitle = () => {
    const path = location.pathname;

    if (path === "/") return "links";

    if (path.startsWith("/aefaq")) return "aefaq";

    if (path.startsWith("/prfaq")) return "prfaq";

    if (path.startsWith("/psfaq")) return "psfaq";

    if (path.startsWith("/aeexpr")) return "aeexpr";

    if (path.startsWith("/rules")) return "rules";
  };

  useEffect(() => {
    if (isLoading) {
      setShowProgressBar(true);
      setShowResourceText(true);

      if (!getTitle()) {
        setShowIntro(false);
        setCanDismiss(true);

        return;
      }

      if (globalThis.window === undefined || !globalThis.localStorage) {
        setShowIntro(true);
        setCanDismiss(false);
        setTimeout(() => setCanDismiss(true), 2000);

        return;
      }

      const lastShown = localStorage.getItem("introLastShown");

      const now = Date.now();

      const show = !lastShown || now - Number.parseInt(lastShown, 10) > 20 * 60 * 1000;

      if (show) {
        localStorage.setItem("introLastShown", now.toString());
        setCanDismiss(false);
        setTimeout(() => setCanDismiss(true), 2000);
      } else {
        setCanDismiss(false);
        setTimeout(() => setCanDismiss(true), 500);
      }

      setShowIntro(show);
    } else {
      setShowProgressBar(false);
      setShowResourceText(false);
    }
  }, [isLoading, location.pathname]);

  const [resource, setResource] = useState<string>("");

  useEffect(() => {
    let observer: PerformanceObserver | undefined;

    const timeoutId = setTimeout(() => {
      observer = setupPerformanceObserver(setResource);
    }, 500);

    return () => {
      clearTimeout(timeoutId);

      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const formattedResource = resource ? getCategorizedMessage(resource) : "";

  const title = getTitle();

  const taglineText = "@aechat";

  const textContainerVariants: Variants = {
    hidden: {opacity: 1},
    visible: {
      transition: {delayChildren: 0.25, staggerChildren: 0.04},
    },
  };

  const letterVariants: Variants = {
    hidden: {opacity: 0, scaleX: 0.7, scaleY: 1.5, y: 50},
    visible: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: {damping: 7.5, mass: 0.8, stiffness: 75, type: "spring"},
      y: 0,
    },
  };

  let progressBarDelay = 0;

  if (showProgressBar) {
    progressBarDelay = showIntro ? 2.5 : 1;
  }

  let resourceTextDelay = 0;

  if (showResourceText) {
    resourceTextDelay = showIntro ? 2.5 : 1;
  }

  return (
    <AnimatePresence>
      {(isLoading || !canDismiss) && (
        <motion.div
          animate={{opacity: 1, pointerEvents: "auto"}}
          className={styles["loading-animation-overlay"]}
          exit={{opacity: 0, pointerEvents: "none"}}
          initial={{opacity: 0, pointerEvents: "auto"}}
          style={{
            backgroundColor: "var(--color-background-primary)",
          }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0, 0, 1],
          }}
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
            {title && showIntro && (
              <motion.div
                animate="visible"
                className={styles["animated-text-container"]}
                initial="hidden"
                variants={textContainerVariants}
              >
                <div className={styles["animated-text-logo"]}>
                  {[...title].map((char, index) => (
                    <motion.span
                      key={`title-${char}-${index}`}
                      className={styles["animated-text-letter"]}
                      variants={letterVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <div className={styles["animated-text-tagline"]}>
                  {[...taglineText].map((char, index) => (
                    <motion.span
                      key={`tagline-${char}-${index}`}
                      className={styles["animated-text-letter"]}
                      variants={letterVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
            <motion.div
              animate={{opacity: showProgressBar ? 1 : 0}}
              initial={{opacity: 0}}
              style={{
                marginInline: "20px",
                marginTop: title && showIntro ? "30px" : "0",
                maxWidth: "225px",
                width: "80%",
              }}
              transition={{
                delay: progressBarDelay,
                duration: 0.5,
                ease: [0.25, 0, 0, 1],
              }}
            >
              <LinearProgress
                color="inherit"
                style={{borderRadius: "4px", height: "4px"}}
              />
            </motion.div>
            <div className={styles["loading-animation-container"]}>
              <motion.p
                animate={{opacity: showResourceText ? 0.5 : 0}}
                className={styles["loading-animation-text"]}
                dangerouslySetInnerHTML={{__html: formattedResource}}
                initial={{opacity: 0}}
                transition={{
                  delay: resourceTextDelay,
                  duration: 0.5,
                  ease: [0.25, 0, 0, 1],
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
