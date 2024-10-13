import {AnimatePresence, motion} from "framer-motion";
import {Header} from "../Header";

import {AEActions} from "../sections/aefaq/Actions";
import {AEErrors} from "../sections/aefaq/Errors";
import {AEExport} from "../sections/aefaq/Export";
import {AEFromNewbies} from "../sections/aefaq/FromNewbies";
import {AEImport} from "../sections/aefaq/Import";
import {AEInstallProblems} from "../sections/aefaq/InstallProblems";
import {AEInterface} from "../sections/aefaq/Interface";
import {AEPerfomance} from "../sections/aefaq/Perfomance";
import {AETips} from "../sections/aefaq/Tips";
import {AEWhereFind} from "../sections/aefaq/WhereFind";
import {AEExportProblems} from "../sections/aefaq/ExportProblems";

import SummaryNumerateAndCopy from "../features/SummaryNumerateAndCopy";
import MarkActions from "../features/MarkActions";

export const AEFaqPage = () => {
  SummaryNumerateAndCopy();
  MarkActions();
  return (
    <AnimatePresence>
      <Header pagename="aefaq" />
      <div className="copied hidden"></div>
      {/* (details>(summary>h3)+p)*5 */}
      <motion.div
        className="page"
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 50, opacity: 0}}
        transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
      >
        <div className="main">
          
          {/* Ссылки на полезные материалы */}
          <AEWhereFind />
          {/* Проблемы с установкой */}
          <AEInstallProblems />
          {/* Вопросы от новичков */}
          <AEFromNewbies />
          {/* Советы */}
          <AETips />
          {/* Про импорт в After Effects */}
          <AEImport />
          {/* Про интерфейс After Effects */}
          <AEInterface />
          {/* про производительность и оптимизацию проекта */}
          <AEPerfomance />
          {/* Про действия над объектами и подобное */}
          <AEActions />
          {/* Про частые ошибки */}
          <AEErrors />
          {/* Про экспорт из After Effects */}
          <AEExport />
          {/* Про ошибки экспорта */}
          <AEExportProblems />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
