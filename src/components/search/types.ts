export interface SearchContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isPageLoaded: boolean;
}

export interface SearchResult {
  title: string;
  content: string;
  id: string;
  tag?: string;
  isSingleParagraphMatch: boolean;
  hasTitleMatch: boolean;
  hasTagMatch: boolean;
}

export interface SearchSection {
  id: string;
  title: string;
}
