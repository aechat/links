import {createContext, useContext} from "react";

export const DetailsSummaryContext = createContext(false);

export const NestedDetailsSummaryContext = createContext(false);

export const SpoilerContext = createContext(false);

export const useSpoiler = () => useContext(SpoilerContext);
