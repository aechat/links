const getLocalStorage = (): Storage | undefined => {
  if (globalThis.window === undefined) {
    return undefined;
  }

  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
};

export const isLocalStorageAvailable = (): boolean => {
  return getLocalStorage() !== undefined;
};

export const getLocalStorageItem = (key: string): string | undefined => {
  try {
    return getLocalStorage()?.getItem(key) ?? undefined;
  } catch {
    return undefined;
  }
};

export const setLocalStorageItem = (key: string, value: string): boolean => {
  try {
    getLocalStorage()?.setItem(key, value);

    return true;
  } catch {
    return false;
  }
};

interface StoredBooleanOptions {
  persistFallback?: boolean;
}

export const getStoredBoolean = (
  key: string,
  fallback: boolean,
  options?: StoredBooleanOptions
): boolean => {
  const saved = getLocalStorageItem(key);

  if (saved === undefined) {
    if (options?.persistFallback) {
      setStoredBoolean(key, fallback);
    }

    return fallback;
  }

  return saved === "true";
};

export const setStoredBoolean = (key: string, value: boolean): boolean => {
  return setLocalStorageItem(key, value.toString());
};

type StoredNumberParser = (value: string) => number;

export const getStoredNumber = (
  key: string,
  fallback: number,
  parser: StoredNumberParser = Number
): number => {
  const saved = getLocalStorageItem(key);

  return saved === undefined ? fallback : parser(saved);
};

export const setStoredNumber = (key: string, value: number): boolean => {
  return setLocalStorageItem(key, value.toString());
};
