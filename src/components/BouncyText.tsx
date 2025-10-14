import React from "react";

import {Variants, motion} from "framer-motion";

interface BouncyTextProps {
  text: string;
}

const BouncyText: React.FC<BouncyTextProps> = ({text}) => {
  const taglineText = "@aechat";

  const shiftDelay = text.length * 0.05 + 0.4;

  const mainTextContainerVariants: Variants = {
    hidden: {opacity: 1},
    visible: {
      transition: {staggerChildren: 0.1},
    },
  };

  const letterVariants: Variants = {
    hidden: {opacity: 0, y: 125, scale: 0},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {type: "spring", damping: 10, stiffness: 100},
    },
  };

  const taglineContainerVariants: Variants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "auto",
      opacity: 1,
      transition: {
        delay: shiftDelay,
        duration: 1.25,
        ease: [0.5, 0, 0, 1],
        delayChildren: shiftDelay + 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const taglineLetterVariants: Variants = {
    hidden: {opacity: 0, y: -20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {type: "spring", damping: 15, stiffness: 200},
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
        {text.split("").map((char, index) => (
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
        {taglineText.split("").map((char, index) => (
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
