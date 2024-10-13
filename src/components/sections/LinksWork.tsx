import {WorkRounded} from "@mui/icons-material";
import {motion} from "framer-motion";
export const LinksWork = () => (
  <motion.div
    className="links-grid"
    initial={{y: 50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 50, opacity: 0}}
    transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1], delay: 0.4}}
  >
    <motion.a
      href="https://t.me/ru_montage_pins"
      key="ru_montage_pins"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">ru_montage_pins</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/prodjob"
      key="prodjob"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Работа видеопродакшн</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/kinopeople"
      key="kinopeople"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Работники Кино Pro</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/video_academy"
      key="video_academy"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">VA Видео для бизнеса</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/platform_film"
      key="platform_film"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">ПЛОЩАДКА</div>
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/tochnop"
      key="tochnop"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Точно продюсер</div>
      </div>
    </motion.a>
    <motion.a
      key="vdhl_good"
      href="https://t.me/vdhl_good"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">ВДХЛ - Вакансии для хороших людей</div>
      </div>
    </motion.a>
    <motion.a
      key="KAADchanel"
      href="https://t.me/KAADchanel"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">КААД</div>
      </div>
    </motion.a>
    <motion.a
      key="design_career"
      href="https://t.me/+3vHv2p2bRdRlOTMy"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Design Career</div>
      </div>
    </motion.a>
    <motion.a
      key="motionhunter"
      href="https://t.me/s/motionhunter"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Motion designer hunter</div>
      </div>
    </motion.a>
    <motion.a
      key="job_2dfa"
      href="https://t.me/s/job_2dfa"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Вакансии для 2D-аниматоров</div>
      </div>
    </motion.a>
    <motion.a
      key="fordesigner"
      href="https://t.me/s/fordesigner"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Jobs for Designers</div>
      </div>
    </motion.a>
    <motion.a
      key="CGWorkHub"
      href="https://t.me/s/CGWorkHub"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">CGWorkHub</div>
      </div>
    </motion.a>
    <motion.a
      key="jobforjunior"
      href="https://t.me/s/jobforjunior"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Job for Junior</div>
      </div>
    </motion.a>
    <motion.a
      key="dprofilejob"
      href="https://t.me/s/dprofilejob"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Dprofile.Работа</div>
      </div>
    </motion.a>
    <motion.a
      key="artdesignjob"
      href="https://t.me/s/artdesignjob"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">HSE CHANCE</div>
      </div>
    </motion.a>
    <motion.a
      key="freelancetaverna"
      href="https://t.me/s/freelancetaverna"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Фриланс Таверна</div>
      </div>
    </motion.a>
    <motion.a
      key="workindesign"
      href="https://t.me/s/workindesign"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">Work for Designers</div>
      </div>
    </motion.a>
    <motion.a
      key="designer_ru"
      href="https://t.me/s/designer_ru"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WorkRounded className="icon" />
        <div className="name">ИЩУ_ДИЗАЙНЕРА</div>
      </div>
    </motion.a>
  </motion.div>
);
