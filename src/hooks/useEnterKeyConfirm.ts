import {useEffect} from "react";

export const useEnterKeyConfirm = (isEnabled: boolean, onConfirm: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onConfirm();
      }
    };

    if (isEnabled) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEnabled, onConfirm]);
};
