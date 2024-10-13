import {motion} from "framer-motion";
import {
  AnimationRounded,
  ArchitectureRounded,
  AssistantRounded,
  BusinessCenterRounded,
  DevicesRounded,
  ForumRounded,
  MovieRounded,
  SpellcheckRounded,
  SportsEsportsRounded,
  TextureRounded,
  ViewInArRounded,
  VolumeUpRounded,
  WebRounded,
  WhatshotRounded,
} from "@mui/icons-material";
export const LinksChat = () => (
  <motion.div
    className="links-grid"
    initial={{y: 50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 50, opacity: 0}}
    transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1], delay: 0.3}}
  >
    <motion.a
      href="https://t.me/joinchat/F1DdXtG9LephYWUy"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <ForumRounded className="icon" />
        <div className="name">AEChat</div>
      </div>
      <div className="description">Обсуждаем After Effects и Premiere Pro</div>
    </motion.a>
    <motion.a
      href="https://t.me/+3LF_B_VK-Nw4YzYy"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <ForumRounded className="icon" />
        <div className="name">DWChat</div>
      </div>
      <div className="description">Обсуждаем дизайн, Photoshop, Illustrator и Figma</div>
    </motion.a>
    <motion.a
      href="https://t.me/technicalchat"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <DevicesRounded className="icon" />
        <div className="name">Technical Chat</div>
      </div>
      <div className="description">Чат для обсуждения компьютерных технологий</div>
    </motion.a>
    <motion.a
      href="https://t.me/ru_montage"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <MovieRounded className="icon" />
        <div className="name">ru_montage</div>
      </div>
      <div className="description">Чат для общего обсуждения монтажа в продакшене</div>
    </motion.a>
    <motion.a
      href="https://t.me/whatthefontt"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <SpellcheckRounded className="icon" />
        <div className="name">Что за шрифт?</div>
      </div>
      <div className="description">Чат, в котором участники угадывают шрифт по фото</div>
    </motion.a>
    <motion.a
      href="https://t.me/sound_tut"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <VolumeUpRounded className="icon" />
        <div className="name">Sound Chat</div>
      </div>
      <div className="description">Чат для обсуждения саунд-дизайна, музыки и звука</div>
    </motion.a>
    <motion.a
      href="https://t.me/upworktut"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <BusinessCenterRounded className="icon" />
        <div className="name">Work Chat</div>
      </div>
      <div className="description">
        Чат для публикаций вакансий и обсуждения рабочих моментов
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/blender3dchat"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <ViewInArRounded className="icon" />
        <div className="name">Blender 3D Chat</div>
      </div>
      <div className="description">Чат для обсуждения программы Blender</div>
    </motion.a>
    <motion.a
      href="https://t.me/cinema4dchat"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <AnimationRounded className="icon" />
        <div className="name">Cinema 4D Chat</div>
      </div>
      <div className="description">Чат для обсуждения Maxon Cinema 4D</div>
    </motion.a>
    <motion.a
      href="https://t.me/+Utwk54hiRyjGorFJ"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <TextureRounded className="icon" />
        <div className="name">Substance Painter &amp; Designer Chat</div>
      </div>
      <div className="description">Чат для обсуждения текстурирования в Substance</div>
    </motion.a>
    <motion.a
      href="https://t.me/ue_chat"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <SportsEsportsRounded className="icon" />
        <div className="name">Unreal Engine Chat</div>
      </div>
      <div className="description">Чат для обсуждения игрового движка Unreal</div>
    </motion.a>
    <motion.a
      href="https://t.me/houdinitut"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WhatshotRounded className="icon" />
        <div className="name">Houdini Chat</div>
      </div>
      <div className="description">Чат для обсуждения SideFX Houdini</div>
    </motion.a>
    <motion.a
      href="https://t.me/neuralnetworkstut"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <AssistantRounded className="icon" />
        <div className="name">Neural Networks Chat</div>
      </div>
      <div className="description">
        Чат для обсуждения нейросетей и всего что с ними связано
      </div>
    </motion.a>
    <motion.a
      href="https://t.me/friendlyfrontendchat"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <WebRounded className="icon" />
        <div className="name">Friendly Frontend Chat</div>
      </div>
      <div className="description">Чат для обсуждения фронтенд-разработки сайтов</div>
    </motion.a>
    <motion.a
      href="https://t.me/figmachat"
      className="links-button"
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
      }}
      whileTap={{scale: 0.95, opacity: 0.5}}
    >
      <div className="name_container">
        <ArchitectureRounded className="icon" />
        <div className="name">Фигма-чат</div>
      </div>
      <div className="description">Чат для обсуждения работы в сервисе Figma</div>
    </motion.a>
  </motion.div>
);
