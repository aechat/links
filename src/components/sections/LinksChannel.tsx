import {
  Apple,
  CarRepairRounded,
  HandymanRounded,
  Mms,
  MovieFilterRounded,
  PermMediaRounded,
  SlowMotionVideoRounded,
  SmartToyRounded,
} from "@mui/icons-material";
import {motion} from "framer-motion";
export const LinksChannel = () => (
  <motion.div
    className="links-grid"
    initial={{y: 50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 50, opacity: 0}}
    transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1], delay: 0.2}}
  >
    <motion.a
      href="https://t.me/s/aetemp"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <PermMediaRounded className="icon" />
        <div className="name">AETemp</div>
      </div>
      <div className="description">Шаблоны для After Effects</div>
    </motion.a>
    <motion.a
      href="https://t.me/s/premtemp"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <MovieFilterRounded className="icon" />
        <div className="name">PremTemp</div>
      </div>
      <div className="description">Шаблоны для Premiere Pro</div>
    </motion.a>
    <motion.a
      href="https://t.me/s/designworld"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <Mms className="icon" />
        <div className="name">Design World</div>
      </div>
      <div className="description">Шаблоны для Photoshop, Illustrator и Figma</div>
    </motion.a>
    <motion.a
      href="https://teletype.in/@aetemp/Courses"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <SlowMotionVideoRounded className="icon" />
        <div className="name">Курсы от AETemp</div>
      </div>
      <div className="description">Приватный канал с различными обучающими курсами</div>
    </motion.a>
    <motion.a
      href="https://t.me/HiStockBot?start=509060394"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <SmartToyRounded className="icon" />
        <div className="name">HiStockBot</div>
      </div>
      <div className="description">
        Бот для покупки шаблонов с Envato Elements и других сервисов
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/+Qd9xu7A4TeIwNzY6"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <HandymanRounded className="icon" />
        <div className="name">склад стройматериалов</div>
      </div>
      <div className="description">программы для творчества на windows</div>
    </motion.a>
    <motion.a
      href="https://t.me/+gSmpjWyhd5w3ZGFi"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <CarRepairRounded className="icon" />
        <div className="name">купить запчасти на форд фокус</div>
      </div>
      <div className="description">программы для обслуживания вашей windows</div>
    </motion.a>
    <motion.a
      href="https://t.me/+ZqiaMfQRFgM4YmEy"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <Apple className="icon" />
        <div className="name">Яблоневый сад</div>
      </div>
      <div className="description">как склад стройматериалов, только для macOS</div>
    </motion.a>
  </motion.div>
);
