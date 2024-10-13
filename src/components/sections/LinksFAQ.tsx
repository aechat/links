import {QuestionMarkRounded} from "@mui/icons-material";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
export const LinksFAQ = () => (
  <motion.div
    className="links-grid"
    initial={{y: 50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 50, opacity: 0}}
    transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1], delay: 0.1}}
  >
    <Link to="/aefaq">
      <motion.div
        className="links-button"
        whileHover={{
          scale: 1.1,
          transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        }}
        whileTap={{scale: 0.95, opacity: 0.5}}
      >
        <div className="name_container">
          <QuestionMarkRounded className="icon" />
          <div className="name">aefaq</div>
        </div>
        <div className="description">Преодолеваем трудности в работе с After Effects</div>
      </motion.div>
    </Link>
    <Link to="/prfaq">
      <motion.div
        className="links-button"
        whileHover={{
          scale: 1.1,
          transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        }}
        whileTap={{scale: 0.95, opacity: 0.5}}
      >
        <div className="name_container">
          <QuestionMarkRounded className="icon" />
          <div className="name">prfaq</div>
        </div>
        <div className="description">Поясняем за монтаж в Premiere Pro</div>
      </motion.div>
    </Link>
    <Link to="/psfaq">
      <motion.div
        className="links-button"
        whileHover={{
          scale: 1.1,
          transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        }}
        whileTap={{scale: 0.95, opacity: 0.5}}
      >
        <div className="name_container">
          <QuestionMarkRounded className="icon" />
          <div className="name">psfaq</div>
        </div>
        <div className="description">
          Базарим за цвета и обработку изображений в Photoshop
        </div>
      </motion.div>
    </Link>
  </motion.div>
);
