import {useEffect, useRef} from "react";

export const usePrevious = <T>(value: T): T | undefined => {
  const reference = useRef<T | undefined>(undefined);

  useEffect(() => {
    reference.current = value;
  });

  return reference.current;
};
