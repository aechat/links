import React from "react";

import {motion, Variants} from "framer-motion";

interface BouncyTextProperties {
  text: string;
}

const BouncyText: React.FC<BouncyTextProperties> = ({text}) => {
  const taglineText = "@aechat";

  const shiftDelay = text.length * 0.05 + 0.4;

  const mainTextContainerVariants: Variants = {
    hidden: {opacity: 1},
    visible: {
      transition: {staggerChildren: 0.1},
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
    <div className="bouncy-text-container">
      <motion.div
        animate="visible"
        aria-label={text}
        className="bouncy-text-logo"
        initial="hidden"
        variants={mainTextContainerVariants}
      >
        {[...text].map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="bouncy-text-letter"
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        animate="visible"
        aria-label={taglineText}
        className="bouncy-text-tagline"
        initial="hidden"
        variants={taglineContainerVariants}
      >
        {[...taglineText].map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="bouncy-text-letter"
            variants={taglineLetterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default BouncyText;
