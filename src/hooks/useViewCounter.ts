import {useEffect, useState} from "react";

export const useViewCounter = (anchor: string | undefined, isOpen: boolean) => {
  const [viewCount, setViewCount] = useState<number | undefined>();

  useEffect(() => {
    if (!anchor) return;

    const key = `aechat-links-${anchor}`;

    const fetchInitialCount = async () => {
      try {
        const response = await fetch(
          `https://countapi.mileshilliard.com/api/v1/get/${key}`
        );

        if (response.ok) {
          const data = await response.json();

          if (viewCount === undefined) {
            setViewCount(data.value);
          }
        }
      } catch (error) {
        console.error(
          `[ViewCounter] Failed to fetch initial count for ${anchor}:`,
          error
        );
      }
    };

    fetchInitialCount();
  }, [anchor]);

  useEffect(() => {
    if (isOpen && anchor) {
      const storageKey = `viewed-${anchor}`;

      const hasViewedInSession = sessionStorage.getItem(storageKey);

      if (!hasViewedInSession) {
        const key = `aechat-links-${anchor}`;

        const incrementAndFetchCount = async () => {
          try {
            const response = await fetch(
              `https://countapi.mileshilliard.com/api/v1/hit/${key}`
            );

            if (response.ok) {
              const data = await response.json();

              setViewCount(data.value);
              sessionStorage.setItem(storageKey, "true");
            }
          } catch (error) {
            console.error(
              `[ViewCounter] Failed to increment view count for ${anchor}:`,
              error
            );
          }
        };

        incrementAndFetchCount();
      }
    }
  }, [isOpen, anchor]);

  return viewCount;
};
