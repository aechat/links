import React, {useEffect, useState} from "react";

import {motion} from "framer-motion";

import LinearProgress from "@mui/material/LinearProgress";

const getCategorizedMessage = (resourceName: string): string => {
  const fileName = resourceName
    .substring(resourceName.lastIndexOf("/") + 1)
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
      const fileName = name.substring(name.lastIndexOf("/") + 1);

      return fileName.split("?")[0] !== "tag.js";
    });

  if (filteredResources.length > 0) {
    setResource(filteredResources[filteredResources.length - 1]);
  }
};

const setupPerformanceObserver = (
  setResource: React.Dispatch<React.SetStateAction<string>>
) => {
  if (typeof window !== "undefined" && "PerformanceObserver" in window) {
    const observer = new PerformanceObserver((list) =>
      handlePerformanceEntries(list.getEntries(), setResource)
    );
    observer.observe({type: "resource", buffered: true});

    return observer;
  }

  return undefined;
};

const LoadingAnimation: React.FC = () => {
  const [resource, setResource] = useState<string>("");

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

  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      transition={{
        duration: 0.3,
        ease: [0.25, 0, 0, 1],
        delay: 1.5,
      }}
    >
      <LinearProgress color="inherit" />
      <div className="loading-animation-container">
        <motion.p
          animate={{opacity: 0.5}}
          className="loading-animation-text"
          dangerouslySetInnerHTML={{__html: formattedResource}}
          initial={{opacity: 0}}
          transition={{
            duration: 1,
            ease: [0.25, 0, 0, 1],
            delay: 3,
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
