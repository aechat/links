/**
 * контекст поиска, содержащий состояние модального окна и методы управления им
 */

export interface SearchContextType {
  /** флаг открытия модального окна поиска */

  isOpen: boolean;

  /** функция открытия модального окна */

  openModal: () => void;

  /** функция закрытия модального окна */

  closeModal: () => void;

  /** флаг загрузки страницы */

  isPageLoaded: boolean;
}

/**
 * результат поиска, содержащий информацию о найденном элементе
 */

export interface SearchResult {
  /** заголовок найденного элемента */

  title: string;

  /** содержимое найденного элемента */

  content: string;

  /** уникальный идентификатор элемента */

  id: string;

  /** теги элемента (опционально) */

  tag?: string;

  /** флаг совпадения в одном параграфе */

  isSingleParagraphMatch: boolean;

  /** флаг совпадения в заголовке */

  hasTitleMatch: boolean;

  /** флаг совпадения в тегах */

  hasTagMatch: boolean;
}

/**
 * секция поиска, содержащая информацию о разделе
 */

export interface SearchSection {
  /** уникальный идентификатор секции */

  id: string;

  /** заголовок секции */

  title: string;
}
