import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export const NotFoundPage = () => (
  <motion.div className="page">
    <motion.div
      className="notFound"
      initial={{scale: 0.75, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1], delay: 0.1}}
    >
      <h1>:(</h1>
      <p>Вы каким-то чудом попали на несуществующую страницу.</p>
      <Link to="/">Давай на главную</Link>
    </motion.div>
  </motion.div>
);
