import {BlockRounded} from "@mui/icons-material";
import {motion} from "framer-motion";
export const LinksBlacklist = () => (
  <motion.div
    className="links-grid"
    initial={{y: 50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 50, opacity: 0}}
    transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1], delay: 0.5}}
  >
    <motion.a
      href="https://t.me/cgblacklist"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <BlockRounded className="icon" />
        <div className="name">CG Blacklist</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/kinostop"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <BlockRounded className="icon" />
        <div className="name">Чёрный список кино индустрии</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/AEnedozakaz"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <BlockRounded className="icon" />
        <div className="name">AEНедозаказчики</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/Brickspacer_blacklist"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <BlockRounded className="icon" />
        <div className="name">Brickspacer Blacklist</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/moshenniki_frilans"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <BlockRounded className="icon" />
        <div className="name">Мошенники в фрилансе</div>
      </div>
    </motion.a>
  </motion.div>
);
