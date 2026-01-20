import React, {useEffect, useMemo, useState} from "react";

import LinearProgress from "@mui/material/LinearProgress";
import {AnimatePresence, motion} from "framer-motion";
import {useLocation} from "react-router-dom";

import BouncyText from "./BouncyText";
import styles from "./LoadingAnimation.module.scss";

interface LoadingAnimationProperties {
  isLoading: boolean;
}

const getCategorizedMessage = (resourceName: string): string => {
  const fileName = resourceName
    .slice(Math.max(0, resourceName.lastIndexOf("/") + 1))
    .split("?")[0];

  if (resourceName.includes("/src/pages/sections/")) {
    return `Загрузка модуля: ${fileName}`;
  }

  if (resourceName.includes("/src/components/")) {
    return `Загрузка компонента: ${fileName}`;
  }

  if (resourceName.includes("/src/pages/")) {
    return `Загрузка страницы: ${fileName}`;
  }

  if (resourceName.includes("/src/styles/")) {
    return `Загрузка таблицы стилей: ${fileName}`;
  }

  if (fileName.endsWith(".js") || fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return `Загрузка скрипта: ${fileName}`;
  }

  if (fileName.endsWith(".css") || fileName.endsWith(".scss")) {
    return `Загрузка таблицы стилей: ${fileName}`;
  }

  if (fileName.endsWith(".json")) {
    return `Загрузка данных: ${fileName}`;
  }

  if (
    fileName.endsWith(".woff") ||
    fileName.endsWith(".woff2") ||
    fileName.endsWith(".ttf")
  ) {
    return `Загрузка шрифта: ${fileName}`;
  }

  return `Загрузка ресурса: ${fileName}`;
};

const handlePerformanceEntries = (
  entries: PerformanceEntryList,
  setResource: React.Dispatch<React.SetStateAction<string>>
) => {
  const filteredResources = entries
    .map((entry) => entry.name)
    .filter((name) => {
      const fileName = name.slice(Math.max(0, name.lastIndexOf("/") + 1));

      return fileName.split("?")[0] !== "tag.js";
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
  const [resource, setResource] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    let observer: PerformanceObserver | undefined;

    const timeoutId = setTimeout(() => {
      observer = setupPerformanceObserver(setResource);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);

      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const formattedResource = resource ? getCategorizedMessage(resource) : "";

  const getTitle = () => {
    const path = location.pathname;

    if (path.startsWith("/aefaq")) return "aefaq";

    if (path.startsWith("/prfaq")) return "prfaq";

    if (path.startsWith("/psfaq")) return "psfaq";

    if (path.startsWith("/aeexpr")) return "aeexpr";

    if (path.startsWith("/rules")) return "rules";
  };

  const title = getTitle();

  const shouldShowIntro = useMemo(() => {
    if (!title) return false;

    const lastShownKey = "introLastShown";

    const lastShown = localStorage.getItem(lastShownKey);

    const now = Date.now();

    const twentyMinutes = 20 * 60 * 1000;

    return !lastShown || now - Number.parseInt(lastShown, 10) >= twentyMinutes;
  }, [title]);

  const [isAnimationComplete, setIsAnimationComplete] = useState(!shouldShowIntro);

  useEffect(() => {
    if (shouldShowIntro) {
      setIsAnimationComplete(false);

      const lastShownKey = "introLastShown";

      const now = Date.now();

      localStorage.setItem(lastShownKey, now.toString());

      const timer = setTimeout(() => {
        setIsAnimationComplete(true);
      }, 4500);

      return () => clearTimeout(timer);
    }

    setIsAnimationComplete(true);
  }, [shouldShowIntro]);

  const showOverlay = isLoading || (shouldShowIntro && !isAnimationComplete);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          animate={{opacity: 1, pointerEvents: "auto"}}
          className={styles["loading-animation-overlay"]}
          exit={{opacity: 0, pointerEvents: "none"}}
          initial={{opacity: shouldShowIntro ? 1 : 0, pointerEvents: "none"}}
          style={{
            backgroundColor: shouldShowIntro ? undefined : "transparent",
          }}
          transition={{
            delay: shouldShowIntro ? 0 : 1,
            duration: 0.5,
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
            {shouldShowIntro && title && <BouncyText text={title} />}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  layout
                  animate={{
                    height: "auto",
                    marginTop: shouldShowIntro && title ? "30px" : "0",
                    opacity: 1,
                    scaleX: 1,
                  }}
                  exit={{height: 0, marginTop: 0, opacity: 0, scaleX: 0}}
                  initial={{
                    height: 0,
                    marginTop: 0,
                    opacity: 0,
                    scaleX: 0,
                  }}
                  style={{
                    maxWidth: "300px",
                    overflow: "hidden",
                    width: "80%",
                  }}
                  transition={{
                    delay: shouldShowIntro ? 2.5 : 0,
                    duration: 0.75,
                    ease: [0.25, 0, 0, 1],
                  }}
                >
                  <LinearProgress
                    color="inherit"
                    style={{borderRadius: "4px", height: "4px"}}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className={styles["loading-animation-container"]}>
              <motion.p
                animate={{opacity: 0.5}}
                className={styles["loading-animation-text"]}
                dangerouslySetInnerHTML={{__html: formattedResource}}
                initial={{opacity: 0}}
                style={{
                  display: shouldShowIntro ? "block" : "none",
                }}
                transition={{
                  delay: 2,
                  duration: 1,
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
