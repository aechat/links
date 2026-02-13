import {useCallback, useRef} from "react";

import {applyRipple} from "./useRipple";

export const useLongPress = (
  callback: (event: React.MouseEvent | React.TouchEvent) => boolean,
  ms = 500
) => {
  const touchStartTime = useRef(0);

  const isPotentialLongPress = useRef(false);

  const touchStartCoords = useRef({x: 0, y: 0});

  const isTouchEventInProgress = useRef(false);

  const onTouchStart = useCallback((event_: React.TouchEvent<HTMLElement>) => {
    isTouchEventInProgress.current = true;
    touchStartTime.current = Date.now();
    isPotentialLongPress.current = true;

    const touch = event_.touches[0];

    touchStartCoords.current = {x: touch.clientX, y: touch.clientY};
  }, []);

  const onTouchMove = useCallback((event_: React.TouchEvent<HTMLElement>) => {
    if (!isPotentialLongPress.current) return;

    const touch = event_.touches[0];

    const moveThreshold = 10;

    const deltaX = Math.abs(touch.clientX - touchStartCoords.current.x);

    const deltaY = Math.abs(touch.clientY - touchStartCoords.current.y);

    if (deltaX > moveThreshold || deltaY > moveThreshold) {
      isPotentialLongPress.current = false;
    }
  }, []);

  const onTouchEnd = useCallback(
    (event_: React.TouchEvent<HTMLElement>) => {
      if (isPotentialLongPress.current) {
        const pressDuration = Date.now() - touchStartTime.current;

        if (pressDuration > ms && callback(event_)) {
          const touch = event_.changedTouches[0];

          const target = event_.target;

          if (touch && target instanceof HTMLElement) {
            applyRipple(target, touch.clientX, touch.clientY);
          }

          event_.preventDefault();
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
    (event_: React.MouseEvent<HTMLElement>) => {
      if (isTouchEventInProgress.current) {
        return;
      }

      if (callback(event_)) {
        const target = event_.target;

        if (target instanceof HTMLElement) {
          applyRipple(target, event_.clientX, event_.clientY);
        }

        event_.preventDefault();
      }
    },
    [callback]
  );

  return {
    onContextMenu: onContextMenu as unknown as React.MouseEventHandler<HTMLElement>,
    onTouchEnd: onTouchEnd as unknown as React.TouchEventHandler<HTMLElement>,
    onTouchMove: onTouchMove as unknown as React.TouchEventHandler<HTMLElement>,
    onTouchStart: onTouchStart as unknown as React.TouchEventHandler<HTMLElement>,
  };
};
