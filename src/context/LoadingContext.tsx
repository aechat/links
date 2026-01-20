import {createContext, useContext} from "react";

interface LoadingContextType {
  setIsLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export default LoadingContext;
