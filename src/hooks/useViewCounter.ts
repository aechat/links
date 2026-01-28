import {useEffect, useState} from "react";

const getPageId = () => {
  if (globalThis.window === undefined) {
    return "";
  }

  const {pathname} = globalThis.location;

  if (pathname === "/") {
    return "links";
  }

  return pathname.replaceAll(/(^\/|\/$)/g, "").replaceAll("/", "-");
};

export const useViewCounter = (anchor: string | undefined, isOpen: boolean) => {
  const [viewCount, setViewCount] = useState<number | undefined>();

  const pageId = getPageId();

  useEffect(() => {
    if (!anchor) return;

    const key = `aechat-links-${pageId}-${anchor}`;

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
        } else if (response.status === 404 && viewCount === undefined) {
          setViewCount(0);
        }
      } catch (error) {
        console.error(
          `[ViewCounter] Failed to fetch initial count for ${anchor}:`,
          error
        );
      }
    };

    fetchInitialCount();
  }, [anchor, pageId]);

  useEffect(() => {
    if (isOpen && anchor) {
      const storageKey = `viewed-${pageId}-${anchor}`;

      const hasViewedInSession = sessionStorage.getItem(storageKey);

      if (!hasViewedInSession) {
        const key = `aechat-links-${pageId}-${anchor}`;

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
  }, [isOpen, anchor, pageId]);

  return viewCount;
};
