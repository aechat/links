import React, {useEffect, useState} from "react";

import LinearProgress from "@mui/material/LinearProgress";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {useLocation} from "react-router-dom";

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

  const taglineText = "@aechat";

  const shiftDelay = (title ? title.length : 0) * 0.05 + 0.4 + 2.5;

  const mainTextContainerVariants: Variants = {
    hidden: {opacity: 1},
    visible: {
      transition: {delayChildren: 2.5, staggerChildren: 0.1},
    },
  };

  const letterVariants: Variants = {
    hidden: {opacity: 0, scale: 0, y: 125},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {damping: 10, stiffness: 100, type: "spring"},
      y: 0,
    },
  };

  const taglineContainerVariants: Variants = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: shiftDelay,
        delayChildren: shiftDelay + 0.2,
        duration: 1.25,
        ease: [0.5, 0, 0, 1],
        staggerChildren: 0.05,
      },
      width: "auto",
    },
  };

  const taglineLetterVariants: Variants = {
    hidden: {opacity: 0, y: -20},
    visible: {
      opacity: 1,
      transition: {damping: 15, stiffness: 200, type: "spring"},
      y: 0,
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          animate={{opacity: 1, pointerEvents: "auto"}}
          className={styles["loading-animation-overlay"]}
          exit={{opacity: 0, pointerEvents: "none"}}
          initial={{opacity: 0, pointerEvents: "none"}}
          style={{
            backgroundColor: "var(--color-background-primary)",
          }}
          transition={{
            delay: 2,
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
            {title && (
              <div className={styles["bouncy-text-container"]}>
                <motion.div
                  animate="visible"
                  aria-label={title}
                  className={styles["bouncy-text-logo"]}
                  initial="hidden"
                  variants={mainTextContainerVariants}
                >
                  {[...title].map((char, index) => (
                    <motion.span
                      key={`${char}-${index}`}
                      className={styles["bouncy-text-letter"]}
                      variants={letterVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  animate="visible"
                  aria-label={taglineText}
                  className={styles["bouncy-text-tagline"]}
                  initial="hidden"
                  variants={taglineContainerVariants}
                >
                  {[...taglineText].map((char, index) => (
                    <motion.span
                      key={`${char}-${index}`}
                      className={styles["bouncy-text-letter"]}
                      variants={taglineLetterVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            )}
            <div
              style={{
                marginTop: title ? "30px" : "0",
                maxWidth: "300px",
                width: "80%",
              }}
            >
              <LinearProgress
                color="inherit"
                style={{borderRadius: "4px", height: "4px"}}
              />
            </div>
            <div className={styles["loading-animation-container"]}>
              <motion.p
                animate={{opacity: 0.5}}
                className={styles["loading-animation-text"]}
                dangerouslySetInnerHTML={{__html: formattedResource}}
                initial={{opacity: 0}}
                transition={{
                  delay: 4,
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
