import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

import {message} from "antd";

import type {SearchContextType} from "./searchTypes";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{
  children: React.ReactNode;
  isPageLoaded: boolean;
}> = ({children, isPageLoaded}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (isPageLoaded) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey && event.key === "f") || (event.ctrlKey && event.key === "а")) {
        event.preventDefault();

        if (isPageLoaded) {
          openModal();
        } else {
          message.warning(
            "Прежде чем воспользоваться поиском по странице - дождитесь полной загрузки страницы"
          );
        }
      }
    };

    if (globalThis) {
      globalThis.addEventListener("keydown", handleKeyDown);

      return () => {
        globalThis.removeEventListener("keydown", handleKeyDown);
      };
    }

    return () => {};
  }, [isPageLoaded]);

  const value = useMemo(
    () => ({closeModal, isModalOpen, isPageLoaded, openModal}),
    [isModalOpen, isPageLoaded]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must use with SearchProvider.");
  }

  return context;
};
