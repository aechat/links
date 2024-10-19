import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import SearchBar from "./SearchBar";
import {HomeRounded} from "@mui/icons-material";
import {useState} from "react";
import SearchResult from "./SearchResult";
import ThemeManager from "./features/ThemeManager";

export const Header = ({pagename}: {pagename: string}) => {
  const url = window.location.href;
  const isMainPage = url.endsWith("/");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <header className="header">
      <div className="header-left">
        {isMainPage ? (
          <div></div>
        ) : (
          <Link to="/">
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}
            >
              <HomeRounded className="home" />
            </motion.div>
          </Link>
        )}
        <motion.div
          className="logo"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.2}}
        >
          {pagename}
        </motion.div>
      </div>
      {pagename === "aefaq" || pagename === "prfaq" || pagename === "psfaq" ? (
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1], delay: 0.25}}
        >
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SearchResult searchQuery={searchQuery} />
        </motion.div>
      ) : (
        <div></div>
      )}

      <ThemeManager />
    </header>
  );
};
