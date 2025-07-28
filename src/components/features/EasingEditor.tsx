import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

type AnimationMode = "ping-pong" | "loop" | "once";

const MODES: AnimationMode[] = ["ping-pong", "loop", "once"];

interface Point {
  x: number;
  y: number;
}
interface DragInfo {
  handle: "p1" | "p2";
}
interface KeyframeParams {
  influence: number;
  speed: number;
}
interface TimeMapEntry {
  x: number;
  t: number;
}

const SVG_WIDTH = 1000;

const SVG_HEIGHT = 400;

const PADDING = 10;

const GRAPH_WIDTH = SVG_WIDTH - PADDING * 2;

const GRAPH_HEIGHT = SVG_HEIGHT - PADDING * 2;

const SAMPLES = 100;

const VALUE_Y_MIN_FACTOR = -0.5;

const VALUE_Y_MAX_FACTOR = 1.5;

const INFINITE_SPEED = 99999;

const MAX_TRAIL_COUNT = 15;

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const getPointOnCubicBezier = (
  t: number,
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point
): Point => {
  const cX = 3 * (p1.x - p0.x),
    bX = 3 * (p2.x - p1.x) - cX,
    aX = p3.x - p0.x - cX - bX;

  const cY = 3 * (p1.y - p0.y),
    bY = 3 * (p2.y - p1.y) - cY,
    aY = p3.y - p0.y - cY - bY;

  const x = aX * t ** 3 + bX * t ** 2 + cX * t + p0.x;

  const y = aY * t ** 3 + bY * t ** 2 + cY * t + p0.y;

  return {x, y};
};

const EasingEditor: React.FC = () => {
  const [keyframeOut, setKeyframeOut] = useState<KeyframeParams>({
    influence: 33.33,
    speed: 0,
  });

  const [keyframeIn, setKeyframeIn] = useState<KeyframeParams>({
    influence: 33.33,
    speed: 0,
  });

  const [dragInfo, setDragInfo] = useState<DragInfo | null>(null);

  const [duration, setDuration] = useState(2);

  const [animationMode, setAnimationMode] = useState<AnimationMode>("ping-pong");

  const [fps, setFps] = useState(30);

  const [showTrails, setShowTrails] = useState(false);

  const [cubeTrail, setCubeTrail] = useState<number[]>([]);

  const [elapsedTime, setElapsedTime] = useState(0);

  const [trackWidth, setTrackWidth] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const [actualFps, setActualFps] = useState(fps);

  const trackRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | undefined>(undefined);

  const svgValueRef = useRef<SVGSVGElement>(null);

  const startTimeRef = useRef<number>(0);

  const elapsedOnPauseRef = useRef<number>(0);

  const lastFrameRenderTimeRef = useRef<number>(0);

  const prevDuration = usePrevious(duration);

  const frameCountRef = useRef(0);

  const lastFpsUpdateTimeRef = useRef(0);

  useEffect(() => {
    if (prevDuration === undefined || prevDuration === duration) {
      return;
    }

    setKeyframeOut((currentOut) => {
      const p1x_abs = (currentOut.influence / 100) * prevDuration;

      const newInfluence = (p1x_abs / duration) * 100;

      return {...currentOut, influence: newInfluence};
    });
    setKeyframeIn((currentIn) => {
      const p2x_offset_abs = (currentIn.influence / 100) * prevDuration;

      const p2y_offset_abs = currentIn.speed * p2x_offset_abs;

      const p2x_abs = prevDuration - p2x_offset_abs;

      const new_p2x_offset_abs = duration - p2x_abs;

      if (new_p2x_offset_abs <= 0) {
        return currentIn;
      }

      const newInfluence = (new_p2x_offset_abs / duration) * 100;

      const newSpeed = p2y_offset_abs / new_p2x_offset_abs;

      return {influence: newInfluence, speed: newSpeed};
    });
  }, [duration, prevDuration]);

  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {p0, p1, p2, p3} = useMemo(() => {
    if (trackWidth === 0) {
      return {p0: {x: 0, y: 0}, p1: {x: 0, y: 0}, p2: {x: 0, y: 0}, p3: {x: 0, y: 0}};
    }

    const p0: Point = {x: 0, y: 0};

    const p3: Point = {x: duration, y: trackWidth};

    const p1x = (keyframeOut.influence / 100) * duration;

    const p1: Point = {x: p1x, y: keyframeOut.speed * p1x};

    const p2xRelative = (keyframeIn.influence / 100) * duration;

    const p2: Point = {
      x: duration - p2xRelative,
      y: trackWidth - keyframeIn.speed * p2xRelative,
    };

    return {p0, p1, p2, p3};
  }, [keyframeIn, keyframeOut, duration, trackWidth]);

  const timeToTMap = useMemo<TimeMapEntry[]>(() => {
    const map: TimeMapEntry[] = [];

    if (!p3) {
      return map;
    }

    for (let i = 0; i <= SAMPLES; i++) {
      const t = i / SAMPLES;

      const x = getPointOnCubicBezier(t, p0, p1, p2, p3).x;
      map.push({x, t});
    }

    return map;
  }, [p0, p1, p2, p3]);

  const getTforX = useCallback(
    (xTarget: number): number => {
      if (xTarget <= 0) {
        return 0;
      }

      if (xTarget >= duration) {
        return 1;
      }

      let low = 0,
        high = SAMPLES,
        index = 0;

      while (low <= high) {
        index = Math.floor((low + high) / 2);

        const xAtIndex = timeToTMap[index]?.x;

        if (xAtIndex < xTarget) {
          low = index + 1;
        } else if (xAtIndex > xTarget) {
          high = index - 1;
        } else {
          return timeToTMap[index]?.t ?? 0;
        }
      }

      if (timeToTMap[index]?.x > xTarget && index > 0) {
        index--;
      }

      const lower = timeToTMap[index],
        upper = timeToTMap[index + 1];

      if (!lower || !upper) {
        return timeToTMap[index]?.t || 0;
      }

      const range = upper.x - lower.x;

      if (range === 0) {
        return lower.t;
      }

      const xRatio = (xTarget - lower.x) / range;

      return lower.t + xRatio * (upper.t - lower.t);
    },
    [timeToTMap, duration]
  );

  const linearTime = useMemo(() => {
    const durationMs = duration * 1000;

    if (animationMode === "loop") {
      return (elapsedTime % durationMs) / 1000;
    }

    if (animationMode === "once") {
      return Math.min(elapsedTime, durationMs) / 1000;
    }

    const cycleTime = durationMs * 2;

    const timeInCycle = elapsedTime % cycleTime;

    return timeInCycle < durationMs
      ? timeInCycle / 1000
      : (cycleTime - timeInCycle) / 1000;
  }, [elapsedTime, duration, animationMode]);

  const timecode = useMemo(() => {
    const totalSeconds = linearTime;
    let seconds = Math.floor(totalSeconds);
    let frames = Math.round((totalSeconds - seconds) * fps);

    if (frames === fps && totalSeconds > 0) {
      seconds += 1;
      frames = 0;
    }

    return `${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
  }, [linearTime, fps]);

  const animatedPoint = useMemo(() => {
    if (!p3) {
      return {x: 0, y: 0};
    }

    return getPointOnCubicBezier(getTforX(linearTime), p0, p1, p2, p3);
  }, [linearTime, getTforX, p0, p1, p2, p3]);

  useEffect(() => {
    if (isPaused) {
      elapsedOnPauseRef.current = elapsedTime;

      return;
    }

    startTimeRef.current = 0;
    lastFrameRenderTimeRef.current = 0;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === 0) {
        startTimeRef.current = timestamp;
      }

      if (lastFrameRenderTimeRef.current === 0) {
        lastFrameRenderTimeRef.current = timestamp;
      }

      if (lastFpsUpdateTimeRef.current === 0) {
        lastFpsUpdateTimeRef.current = timestamp;
      }

      frameCountRef.current++;

      const timeSinceFpsUpdate = timestamp - lastFpsUpdateTimeRef.current;

      if (timeSinceFpsUpdate > 500) {
        const calculatedFps = frameCountRef.current / (timeSinceFpsUpdate / 1000);
        setActualFps(calculatedFps);
        frameCountRef.current = 0;
        lastFpsUpdateTimeRef.current = timestamp;
      }

      const frameInterval = 1000 / fps;

      const timeSinceLastRender = timestamp - lastFrameRenderTimeRef.current;

      if (timeSinceLastRender < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);

        return;
      }

      lastFrameRenderTimeRef.current = timestamp - (timeSinceLastRender % frameInterval);

      const totalElapsedTime =
        elapsedOnPauseRef.current + (timestamp - startTimeRef.current);

      if (animationMode === "once" && totalElapsedTime >= duration * 1000) {
        setElapsedTime(duration * 1000);
        setIsPaused(true);
      } else {
        setElapsedTime(totalElapsedTime);
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, duration, animationMode, fps]);

  useEffect(() => {
    if (showTrails) {
      setCubeTrail((prev) => [animatedPoint.y, ...prev].slice(0, MAX_TRAIL_COUNT));
    } else if (cubeTrail.length > 0) {
      setCubeTrail([]);
    }
  }, [animatedPoint, showTrails, cubeTrail.length]);

  const mapToSvg = useCallback(
    (p: Point): Point => {
      const yMax = trackWidth * VALUE_Y_MAX_FACTOR;

      const yMin = trackWidth * VALUE_Y_MIN_FACTOR;

      const yRange = yMax - yMin;

      if (yRange === 0) {
        return {x: PADDING, y: SVG_HEIGHT - PADDING};
      }

      const xRatio = duration === 0 ? 0 : p.x / duration;

      return {
        x: PADDING + xRatio * GRAPH_WIDTH,
        y: SVG_HEIGHT - PADDING - ((p.y - yMin) / yRange) * GRAPH_HEIGHT,
      };
    },
    [duration, trackWidth]
  );

  const mapFromSvg = useCallback(
    (svgP: Point): Point | null => {
      if (!svgValueRef.current || trackWidth === 0) {
        return null;
      }

      const svgRect = svgValueRef.current.getBoundingClientRect();

      const xRatio =
        (svgP.x - svgRect.left - PADDING * (svgRect.width / SVG_WIDTH)) /
        (GRAPH_WIDTH * (svgRect.width / SVG_WIDTH));

      const x = xRatio * duration;

      const yMax = trackWidth * VALUE_Y_MAX_FACTOR;

      const yMin = trackWidth * VALUE_Y_MIN_FACTOR;

      const yRange = yMax - yMin;

      const yRatio =
        (svgRect.bottom - PADDING * (svgRect.height / SVG_HEIGHT) - svgP.y) /
        (GRAPH_HEIGHT * (svgRect.height / SVG_HEIGHT));

      const y = yRatio * yRange + yMin;

      return {x, y};
    },
    [duration, trackWidth]
  );

  const resetTimer = () => {
    setElapsedTime(0);
    elapsedOnPauseRef.current = 0;
    startTimeRef.current = 0;
    lastFrameRenderTimeRef.current = 0;
  };

  const handleResetAnimation = () => {
    resetTimer();
    setCubeTrail([]);
    setDuration(2);
    setFps(30);
    setKeyframeOut({influence: 33.33, speed: 0});
    setKeyframeIn({influence: 33.33, speed: 0});
    setIsPaused(false);
  };

  const handleTogglePlayPause = () => {
    if (animationMode === "once" && elapsedTime >= duration * 1000) {
      resetTimer();
      setIsPaused(false);
    } else {
      setIsPaused((prev) => !prev);
    }
  };

  const handleModeChange = () => {
    const currentIndex = MODES.indexOf(animationMode);

    const nextIndex = (currentIndex + 1) % MODES.length;
    setAnimationMode(MODES[nextIndex]);
    resetTimer();
    setIsPaused(false);
  };

  const handleMouseDown = useCallback(
    (e: React.MouseEvent | React.TouchEvent, handle: "p1" | "p2") => {
      e.preventDefault();
      document.body.style.cursor = "grabbing";
      setDragInfo({handle});
    },
    []
  );

  const handleMouseUp = useCallback(() => {
    document.body.style.cursor = "default";
    setDragInfo(null);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!dragInfo || trackWidth === 0) {
        return;
      }

      if (e.cancelable) {
        e.preventDefault();
      }

      const touch = "touches" in e ? e.touches[0] : e;

      const normP = mapFromSvg({x: touch.clientX, y: touch.clientY});

      if (!normP) {
        return;
      }

      normP.y = Math.max(
        trackWidth * VALUE_Y_MIN_FACTOR,
        Math.min(trackWidth * VALUE_Y_MAX_FACTOR, normP.y)
      );

      const finalP = {...normP};

      const isShiftPressed = "shiftKey" in e ? e.shiftKey : false;

      if (isShiftPressed) {
        finalP.y = dragInfo.handle === "p1" ? 0 : trackWidth;
      }

      const handleX = Math.max(0, Math.min(duration, finalP.x));

      if (dragInfo.handle === "p1") {
        const influence = (handleX / duration) * 100;

        const speed =
          handleX > 1e-6
            ? finalP.y / handleX
            : finalP.y > 0
              ? INFINITE_SPEED
              : -INFINITE_SPEED;
        setKeyframeOut({influence, speed});
      } else {
        const influenceX = duration - handleX;

        const influence = (influenceX / duration) * 100;

        const speed =
          influenceX > 1e-6
            ? (trackWidth - finalP.y) / influenceX
            : trackWidth - finalP.y > 0
              ? INFINITE_SPEED
              : -INFINITE_SPEED;
        setKeyframeIn({influence, speed});
      }
    },
    [dragInfo, mapFromSvg, duration, trackWidth]
  );

  useEffect(() => {
    if (dragInfo) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleMouseMove, {passive: false});
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [dragInfo, handleMouseMove, handleMouseUp]);

  const svgP0 = mapToSvg(p0),
    svgP1 = mapToSvg(p1),
    svgP2 = mapToSvg(p2),
    svgP3 = mapToSvg(p3);

  const valueCurvePath = `M ${svgP0.x},${svgP0.y} C ${svgP1.x},${svgP1.y} ${svgP2.x},${svgP2.y} ${svgP3.x},${svgP3.y}`;

  const xTicks = useMemo(() => {
    const ticks = [0];

    const step = duration >= 1.5 ? 0.5 : 0.25;

    for (let i = step; i < duration; i += step) {
      ticks.push(i);
    }

    ticks.push(duration);

    return ticks;
  }, [duration]);

  const yTicks = useMemo(() => {
    if (trackWidth === 0) {
      return [];
    }

    return [
      trackWidth * VALUE_Y_MIN_FACTOR,
      0,
      trackWidth * 0.5,
      trackWidth,
      trackWidth * VALUE_Y_MAX_FACTOR,
    ];
  }, [trackWidth]);

  const modeTextMap: Record<AnimationMode, string> = {
    "ping-pong": "Пинг-понг",
    loop: "Цикл",
    once: "Один раз",
  };

  const showActualFps = actualFps < fps - 0.5;

  return (
    <div className="easing-editor-wrapper">
      <div className="animation-preview">
        <div
          ref={trackRef}
          className="animation-track"
        >
          <div className="track-line" />
          {showTrails &&
            cubeTrail.map((progress, index) => (
              <div
                key={index}
                className="animated-cube-trail"
                style={{
                  left: `${progress}px`,
                  transform: `translate(-50%, -50%)`,
                  opacity: 1 - (index + 1) / (MAX_TRAIL_COUNT + 1),
                }}
              />
            ))}
          <div
            className="animated-cube"
            style={{left: `${animatedPoint.y}px`, transform: `translate(-50%, -50%)`}}
          />
        </div>
      </div>
      <div className="graph-container">
        <svg
          ref={svgValueRef}
          className="graph-svg"
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        >
          <rect
            className="graph-background"
            height={GRAPH_HEIGHT}
            width={GRAPH_WIDTH}
            x={PADDING}
            y={PADDING}
          />
          {yTicks.map((tick) => (
            <g key={`y-${tick}`}>
              <line
                className={
                  tick === 0 || tick === trackWidth
                    ? "grid-line-major"
                    : "grid-line-minor"
                }
                x1={PADDING}
                x2={PADDING + GRAPH_WIDTH}
                y1={mapToSvg({x: 0, y: tick}).y}
                y2={mapToSvg({x: 0, y: tick}).y}
              />
              <text
                className="grid-text grid-text-y"
                x={PADDING + 8}
                y={mapToSvg({x: 0, y: tick}).y + 4}
              >{`${Math.round(tick)}px`}</text>
            </g>
          ))}
          {xTicks.map((tick) => (
            <g key={`x-${tick}`}>
              <line
                className={
                  tick === 0 || tick === duration ? "grid-line-major" : "grid-line-minor"
                }
                x1={mapToSvg({x: tick, y: 0}).x}
                x2={mapToSvg({x: tick, y: 0}).x}
                y1={PADDING}
                y2={PADDING + GRAPH_HEIGHT}
              />
              <text
                className="grid-text grid-text-x"
                x={mapToSvg({x: tick, y: 0}).x}
                y={PADDING + GRAPH_HEIGHT + 18}
              >{`${tick.toFixed(2)}s`}</text>
            </g>
          ))}
          <path
            className="graph-curve"
            d={valueCurvePath}
          />
          <line
            className="control-line"
            x1={svgP0.x}
            x2={svgP1.x}
            y1={svgP0.y}
            y2={svgP1.y}
          />
          <line
            className="control-line"
            x1={svgP3.x}
            x2={svgP2.x}
            y1={svgP3.y}
            y2={svgP2.y}
          />
          <circle
            className="animated-dot"
            cx={mapToSvg(animatedPoint).x}
            cy={mapToSvg(animatedPoint).y}
            r="5"
          />
          <rect
            className="keyframe-point"
            height="8"
            width="8"
            x={svgP0.x - 4}
            y={svgP0.y - 4}
          />
          <rect
            className="keyframe-point"
            height="8"
            width="8"
            x={svgP3.x - 4}
            y={svgP3.y - 4}
          />
          <circle
            className="handle"
            cx={svgP1.x}
            cy={svgP1.y}
            r="6"
            style={{pointerEvents: "none"}}
          />
          <circle
            className="handle"
            cx={svgP2.x}
            cy={svgP2.y}
            r="6"
            style={{pointerEvents: "none"}}
          />
          <circle
            cx={svgP1.x}
            cy={svgP1.y}
            fill="transparent"
            r="20"
            style={{cursor: "grab"}}
            onMouseDown={(e) => handleMouseDown(e, "p1")}
            onTouchStart={(e) => handleMouseDown(e, "p1")}
          />
          <circle
            cx={svgP2.x}
            cy={svgP2.y}
            fill="transparent"
            r="20"
            style={{cursor: "grab"}}
            onMouseDown={(e) => handleMouseDown(e, "p2")}
            onTouchStart={(e) => handleMouseDown(e, "p2")}
          />
        </svg>
      </div>
      <div className="animation-controls">
        <div className="control-item">
          <label className="control-item-label">
            <span>Длительность</span>
            <span>{duration.toFixed(2)}s</span>
          </label>
          <input
            className="control-item-input"
            max="5"
            min="1"
            step="0.25"
            type="range"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
          />
        </div>
        <div className="control-item">
          <label className="control-item-label">Таймкод</label>
          <div className="control-item-display">
            <span>{timecode}</span>
          </div>
        </div>
        <div className="control-item">
          <label className="control-item-label">
            <span>Частота кадров</span>
            {showActualFps && (
              <span className="fps-warning">({Math.round(actualFps)})</span>
            )}
          </label>
          <select
            className="control-item-select"
            value={fps}
            onChange={(e) => setFps(parseInt(e.target.value))}
          >
            {[8, 15, 24, 30, 60].map((f) => (
              <option
                key={f}
                value={f}
              >
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="control-item">
          <label className="control-item-label">Режим</label>
          <button
            className="control-item-button"
            onClick={handleModeChange}
          >
            {modeTextMap[animationMode]}
          </button>
        </div>
        <div className="control-item control-item-span-2">
          <label className="control-item-label">Управление</label>
          <div className="action-buttons-group">
            <button
              className="control-item-button"
              style={{flex: 1.5}}
              onClick={handleTogglePlayPause}
            >
              {isPaused ? "▶ Воспроизвести" : "❚❚ Пауза"}
            </button>
            <button
              className="control-item-button"
              style={{flex: 1}}
              onClick={handleResetAnimation}
            >
              Сбросить
            </button>
            <label
              className="control-item-checkbox-label"
              style={{flex: 1.5, justifyContent: "center"}}
            >
              <input
                checked={showTrails}
                className="control-item-checkbox"
                type="checkbox"
                onChange={(e) => setShowTrails(e.target.checked)}
              />{" "}
              Показать след
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasingEditor;
