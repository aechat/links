import React from "react";

import {Variants, motion} from "framer-motion";

interface BouncyTextProps {
  text: string;
}

const BouncyText: React.FC<BouncyTextProps> = ({text}) => {
  const taglineText = "@aechat";

  const shiftDelay = text.length * 0.05 + 0.4;

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  };

  const logoTextStyle: React.CSSProperties = {
    display: "flex",
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 800,
    fontStyle: "italic",
    fontSize: "4rem",
    color: "var(--color-accent)",
  };

  const taglineTextStyle: React.CSSProperties = {
    display: "flex",
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 500,
    fontStyle: "italic",
    fontSize: "1.5em",
    translate: "0 10px",
    color: "var(--color-accent)",
    whiteSpace: "nowrap",
  };

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
    <div style={containerStyle}>
      <motion.div
        animate="visible"
        aria-label={text}
        initial="hidden"
        style={logoTextStyle}
        variants={mainTextContainerVariants}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            style={{display: "inline-block"}}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        animate="visible"
        aria-label={taglineText}
        initial="hidden"
        style={taglineTextStyle}
        variants={taglineContainerVariants}
      >
        {taglineText.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            style={{display: "inline-block"}}
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
