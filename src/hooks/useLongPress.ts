import {useCallback, useRef} from "react";

export const useLongPress = (
  callback: (event: React.MouseEvent | React.TouchEvent) => boolean,
  ms = 500
) => {
  const touchStartTime = useRef(0);

  const isPotentialLongPress = useRef(false);

  const touchStartCoords = useRef({x: 0, y: 0});

  const isTouchEventInProgress = useRef(false);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isTouchEventInProgress.current = true;
    touchStartTime.current = Date.now();
    isPotentialLongPress.current = true;

    const touch = e.touches[0];

    touchStartCoords.current = {x: touch.clientX, y: touch.clientY};
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isPotentialLongPress.current) return;

    const touch = e.touches[0];

    const moveThreshold = 10;

    const deltaX = Math.abs(touch.clientX - touchStartCoords.current.x);

    const deltaY = Math.abs(touch.clientY - touchStartCoords.current.y);

    if (deltaX > moveThreshold || deltaY > moveThreshold) {
      isPotentialLongPress.current = false;
    }
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (isPotentialLongPress.current) {
        const pressDuration = Date.now() - touchStartTime.current;

        if (pressDuration > ms && callback(e)) {
          e.preventDefault();
        }
      }

      setTimeout(() => {
        isTouchEventInProgress.current = false;
      }, 300);
      isPotentialLongPress.current = false;
    },
    [callback, ms]
  );

  const onContextMenu = useCallback(
    (e: React.MouseEvent) => {
      if (isTouchEventInProgress.current) {
        return;
      }

      if (callback(e)) {
        e.preventDefault();
      }
    },
    [callback]
  );

  return {
    onContextMenu,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
  };
};
