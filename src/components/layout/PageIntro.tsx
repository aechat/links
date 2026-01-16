import React, {useEffect, useState} from "react";

import {AnimatePresence, motion} from "framer-motion";

import {BouncyText} from "../ui/LoadingAnimation";

import styles from "./PageIntro.module.scss";

interface PageIntroProperties {
  isLoaded?: boolean;
  text: string;
}

const PageIntro: React.FC<PageIntroProperties> = ({isLoaded = true, text}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("introLastShown");

    const now = Date.now();

    const time = 20 * 60 * 1000;

    if (!lastShown || now - Number.parseInt(lastShown, 10) > time) {
      localStorage.setItem("introLastShown", now.toString());
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (!show || !isLoaded) {
      return;
    }

    const animationDuration = text.length * 0.05 + 0.4 + 1.25;

    const timer = setTimeout(() => setShow(false), animationDuration * 1000 + 250);

    return () => clearTimeout(timer);
  }, [isLoaded, show, text.length]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles["page-intro-overlay"]}
          exit={{opacity: 0}}
          initial={{opacity: 1}}
          transition={{duration: 0.5, ease: [0.75, 0, 0, 1]}}
        >
          {isLoaded && <BouncyText text={text} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageIntro;
