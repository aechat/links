import {createContext, useContext} from "react";

export const DetailsSummaryContext = createContext(false);

export const NestedDetailsSummaryContext = createContext(false);

export const SpoilerContext = createContext<boolean | undefined>(undefined);

export const useSpoiler = () => useContext(SpoilerContext);

export const ParentAnchorContext = createContext<string>("");
