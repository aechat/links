import {AnimatePresence, motion} from "framer-motion";

import React, {useEffect, useState} from "react";

import BouncyText from "./BouncyText";

interface PageIntroProps {
  text: string;
  isLoaded?: boolean;
}

const PageIntro: React.FC<PageIntroProps> = ({text, isLoaded = true}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      const animationDuration = text.length * 0.05 + 0.4 + 1.25;

      const timer = setTimeout(() => setShow(false), animationDuration * 1000 + 250);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, text]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{opacity: 0}}
          initial={{opacity: 1}}
          style={{
            alignItems: "center",
            backgroundColor: "var(--background-color)",
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            left: 0,
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 100000,
          }}
          transition={{duration: 0.5, ease: [0.75, 0, 0, 1]}}
        >
          {isLoaded && <BouncyText text={text} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageIntro;
