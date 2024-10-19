import {AnimatePresence, motion} from "framer-motion";

import {Header} from "../Header";

// *: Секции с ссылками:

import {LinksBlacklist} from "../sections/LinksBlacklist";
import {LinksChannel} from "../sections/LinksChannel";
import {LinksChat} from "../sections/LinksChat";
import {LinksFAQ} from "../sections/LinksFAQ";
import {LinksWork} from "../sections/LinksWork";

export const Links = () => (
  <AnimatePresence>
    <Header pagename="links" />

    <motion.div
      className="page"
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{y: 50, opacity: 0}}
      transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
    >
      <div className="links">
        <h1 className="block_hidden">Полезные ссылки от AEChat</h1>
        <motion.div
          className="faq-separator"
          initial={{scale: 0.75, opacity: 0}}
          animate={{scale: 1, opacity: 0.8}}
          exit={{opacity: 0}}
          transition={{duration: 0.75, ease: [0.075, 0.82, 0.165, 1], delay: 0.2}}
        >
          Сборники ответов на частые вопросы
        </motion.div>
        <LinksFAQ />
        <motion.div
          className="faq-separator"
          initial={{scale: 0.75, opacity: 0}}
          animate={{scale: 1, opacity: 0.8}}
          exit={{opacity: 0}}
          transition={{duration: 0.75, ease: [0.075, 0.82, 0.165, 1], delay: 0.3}}
        >
          Материалы и дополнения
        </motion.div>
        <LinksChannel />
        <motion.div
          className="faq-separator"
          initial={{scale: 0.75, opacity: 0}}
          animate={{scale: 1, opacity: 0.8}}
          exit={{opacity: 0}}
          transition={{duration: 0.75, ease: [0.075, 0.82, 0.165, 1], delay: 0.4}}
        >
          Чаты в Telegram
        </motion.div>
        <motion.div
          className="addition-warning"
          initial={{scale: 0.9, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.75, ease: [0.075, 0.82, 0.165, 1], delay: 0.5}}
        >
          Прежде чем вступать в чаты ниже - ознакомьтесь с правилами каждого чата во
          избежании недоразумений и конфликтов. Обычно правила находятся в закреплённом
          сообщении или описании чата.
        </motion.div>
        <LinksChat />
        <motion.div
          className="faq-separator"
          initial={{scale: 0.75, opacity: 0}}
          animate={{scale: 1, opacity: 0.8}}
          exit={{opacity: 0}}
          transition={{duration: 0.75, ease: [0.075, 0.82, 0.165, 1], delay: 0.6}}
        >
          Вакансии и работа
        </motion.div>
        <motion.div
          className="addition-danger"
          initial={{scale: 0.9, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.75, ease: [0.075, 0.82, 0.165, 1], delay: 0.7}}
        >
          Если вас просят перевести гарантийный взнос, деньги на "площадку для
          фрилансеров" или оформить банковскую карту для "зарплаты" - сразу прекращайте
          диалог. Остерегайтесь мошенников!{" "}
          <a
            href="http://www.sberbank.ru/ru/person/kibrary/articles/moshenniki-atakuyut-frilanserov-kak-ne-popast-v-lovushku"
            title={`Памятка от Сбербанка: "Как не попасться в ловушку мошенников на фрилансе"`}
          >
            Подробнее...
          </a>
        </motion.div>
        <LinksWork />
        <motion.div
          className="faq-separator"
          initial={{scale: 0.75, opacity: 0}}
          animate={{scale: 1, opacity: 0.8}}
          exit={{opacity: 0}}
          transition={{duration: 0.75, ease: [0.075, 0.82, 0.165, 1], delay: 0.8}}
        >
          Чёрные списки
        </motion.div>
        <LinksBlacklist />
        <footer className="footer">mucxep@aechat</footer>
      </div>
    </motion.div>
  </AnimatePresence>
);
