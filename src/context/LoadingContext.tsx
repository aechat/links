import {createContext, useContext} from "react";

interface LoadingContextType {
  canDismiss: boolean;
  setCanDismiss: (canDismiss: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  canDismiss: true,
  setCanDismiss: () => {},
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export default LoadingContext;
