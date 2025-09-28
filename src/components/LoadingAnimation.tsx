import React from "react";

import {motion} from "framer-motion";

import LinearProgress from "@mui/material/LinearProgress";

const LoadingAnimation: React.FC = () => {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      transition={{
        duration: 0.3,
        ease: [0.25, 0, 0, 1],
        delay: 3,
      }}
    >
      <LinearProgress color="inherit" />
      <div style={{marginInline: "auto", maxWidth: "600px"}}>
        <motion.p
          animate={{opacity: 0.5}}
          initial={{opacity: 0}}
          style={{
            margin: "10px",
            marginTop: "25px",
            fontSize: "0.875rem",
            marginInline: "20px",
          }}
          transition={{
            duration: 1,
            ease: [0.25, 0, 0, 1],
            delay: 5,
          }}
        >
          Если страница медленно загружается, проверьте скорость вашего
          интернет-соединения
        </motion.p>
        <motion.p
          animate={{opacity: 0.25}}
          initial={{opacity: 0}}
          style={{
            margin: "10px",
            fontSize: "0.8rem",
            textAlign: "right",
            marginInline: "20px",
          }}
          transition={{
            duration: 1,
            ease: [0.25, 0, 0, 1],
            delay: 7.5,
          }}
        >
          ...или отключите VPN
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
