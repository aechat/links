import React from "react";

import {motion} from "framer-motion";

interface PageTransitionProperties {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProperties> = ({children, className}) => {
  return (
    <motion.main
      animate={{opacity: 1, x: 0, y: 0}}
      className={className}
      exit={{opacity: 0, y: 20}}
      initial={{opacity: 0, y: 20}}
      transition={{
        duration: 0.3,
        ease: [0.25, 0, 0, 1],
      }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
