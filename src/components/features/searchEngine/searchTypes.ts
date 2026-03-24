import type {ReactNode} from "react";

export interface SearchContextType {
  closeModal: () => void;
  isModalOpen: boolean;
  isPageLoaded: boolean;
  openModal: () => void;
}

export interface SearchResult {
  anchor?: string;
  content: string;
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  isSingleParagraphMatch: boolean;
  tag?: string;
  title: string;
}

export type SearchSection = {
  id: string;
  title: string;
  icon?: ReactNode;
};
