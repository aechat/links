import {message} from "antd";
import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {SearchContextType} from "./types";

/**
 * контекст поиска для управления состоянием модального окна
 */

const SearchContext = createContext<SearchContextType | undefined>(undefined);

/**
 * провайдер контекста поиска
 * @param children - дочерние компоненты
 * @param isPageLoaded - флаг загрузки страницы
 */

export const SearchProvider: React.FC<{
  children: React.ReactNode;
  isPageLoaded: boolean;
}> = ({children, isPageLoaded}) => {
  const [isOpen, setIsOpen] = useState(false);

  /*
   * открывает модальное окно поиска
   */

  const openModal = () => {
    if (isPageLoaded) {
      setIsOpen(true);
    }
  };

  /*
   * закрывает модальное окно поиска
   */

  const closeModal = () => setIsOpen(false);

  // обработчик горячих клавиш для открытия поиска

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
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPageLoaded]);

  const value = useMemo(
    () => ({isOpen, openModal, closeModal, isPageLoaded}),
    [isOpen, isPageLoaded]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

/**
 * хук для использования контекста поиска
 * @returns контекст поиска
 * @throws Error если хук используется вне SearchProvider
 */

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must use with SearchProvider.");
  }

  return context;
};
