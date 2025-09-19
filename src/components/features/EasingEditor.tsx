import {Slider} from "antd";

import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

type AnimationMode = "ping-pong" | "loop" | "once";

const MODES: AnimationMode[] = ["ping-pong", "loop", "once"];
interface Point {
  x: number;
  y: number;
}
interface DragInfo {
  handle: "p1" | "p2";
  graphType: "value" | "speed";
}
interface KeyframeParams {
  influence: number;
  speed: number;
}
interface TimeMapEntry {
  x: number;
  t: number;
}

const PADDING = 20;

const SAMPLES = 100;

const INFINITE_SPEED = 99999;

const MAX_TRAIL_COUNT = 15;

const SPEED_AXIS_PADDING_FACTOR = 0.2;

const VALUE_Y_MIN_FACTOR = -0.5;

const VALUE_Y_MAX_FACTOR = 1.5;

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

const getNiceTickStep = (range: number, maxTicks: number): number => {
  if (range === 0) {
    return 1;
  }

  const roughStep = range / (maxTicks - 1);

  const power = Math.floor(Math.log10(roughStep));

  const magnitude = 10 ** power;

  const residual = roughStep / magnitude;

  if (residual > 5) {
    return 10 * magnitude;
  } else if (residual > 2) {
    return 5 * magnitude;
  } else if (residual > 1) {
    return 2 * magnitude;
  } else {
    return magnitude;
  }
};

interface AnimationDemoProps {
  trackRef: React.RefObject<HTMLDivElement | null>;
  showTrails: boolean;
  cubeTrail: number[];
  animatedPoint: Point;
}

const AnimationDemo: React.FC<AnimationDemoProps> = ({
  trackRef,
  showTrails,
  cubeTrail,
  animatedPoint,
}) => (
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
              opacity: 1 - (index + 1) / (MAX_TRAIL_COUNT + 1),
            }}
          />
        ))}
      <div
        className="animated-cube"
        style={{left: `${animatedPoint.y}px`}}
      />
    </div>
  </div>
);

interface ValueGraphProps {
  svgRef: React.RefObject<SVGSVGElement | null>;
  dimensions: {width: number; height: number};
  p0: Point;
  p1: Point;
  p2: Point;
  p3: Point;
  animatedPoint: Point;
  duration: number;
  trackWidth: number;
  mapToSvg: (p: Point) => Point;
  onMouseDown: (e: React.MouseEvent | React.TouchEvent, handle: "p1" | "p2") => void;
}

const ValueGraph: React.FC<ValueGraphProps> = ({
  svgRef,
  dimensions,
  p0,
  p1,
  p2,
  p3,
  animatedPoint,
  duration,
  trackWidth,
  mapToSvg,
  onMouseDown,
}) => {
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

  return (
    <div className="graph-container">
      <svg
        ref={svgRef}
        className="graph-svg"
      >
        {dimensions.width > 0 && (
          <>
            <rect
              className="graph-background"
              height={dimensions.height - PADDING * 2}
              width={dimensions.width - PADDING * 2}
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
                  x2={dimensions.width - PADDING}
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
                    tick === 0 || tick === duration
                      ? "grid-line-major"
                      : "grid-line-minor"
                  }
                  x1={mapToSvg({x: tick, y: 0}).x}
                  x2={mapToSvg({x: tick, y: 0}).x}
                  y1={PADDING}
                  y2={dimensions.height - PADDING}
                />
                <text
                  className="grid-text grid-text-x"
                  x={mapToSvg({x: tick, y: 0}).x}
                  y={dimensions.height - 8}
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
              onMouseDown={(e) => onMouseDown(e, "p1")}
              onTouchStart={(e) => onMouseDown(e, "p1")}
            />
            <circle
              cx={svgP2.x}
              cy={svgP2.y}
              fill="transparent"
              r="20"
              style={{cursor: "grab"}}
              onMouseDown={(e) => onMouseDown(e, "p2")}
              onTouchStart={(e) => onMouseDown(e, "p2")}
            />
          </>
        )}
      </svg>
    </div>
  );
};

interface SpeedGraphProps {
  svgRef: React.RefObject<SVGSVGElement | null>;
  dimensions: {width: number; height: number};
  duration: number;
  curvePath: string;
  handle1: Point;
  handle2: Point;
  yTicks: number[];
  mapTimeToSvg: (time: number) => number;
  mapSpeedToSvg: (speed: number) => number;
  onMouseDown: (e: React.MouseEvent | React.TouchEvent, handle: "p1" | "p2") => void;
}

const SpeedGraph: React.FC<SpeedGraphProps> = ({
  svgRef,
  dimensions,
  duration,
  curvePath,
  handle1,
  handle2,
  yTicks,
  mapTimeToSvg,
  mapSpeedToSvg,
  onMouseDown,
}) => {
  const svgH1 = {x: mapTimeToSvg(handle1.x), y: mapSpeedToSvg(handle1.y)};

  const svgH2 = {x: mapTimeToSvg(handle2.x), y: mapSpeedToSvg(handle2.y)};

  const svgP0 = {x: mapTimeToSvg(0), y: mapSpeedToSvg(handle1.y)};

  const svgP3 = {x: mapTimeToSvg(duration), y: mapSpeedToSvg(handle2.y)};

  const xTicks = useMemo(() => {
    const ticks = [0];

    const step = duration >= 1.5 ? 0.5 : 0.25;

    for (let i = step; i < duration; i += step) {
      ticks.push(i);
    }

    ticks.push(duration);

    return ticks;
  }, [duration]);

  return (
    <div className="graph-container">
      <svg
        ref={svgRef}
        className="graph-svg"
      >
        {dimensions.width > 0 && (
          <>
            <rect
              className="graph-background"
              height={dimensions.height - PADDING * 2}
              width={dimensions.width - PADDING * 2}
              x={PADDING}
              y={PADDING}
            />
            {yTicks.map((tick) => (
              <g key={`y-speed-${tick}`}>
                <line
                  className={tick === 0 ? "grid-line-major" : "grid-line-minor"}
                  x1={PADDING}
                  x2={dimensions.width - PADDING}
                  y1={mapSpeedToSvg(tick)}
                  y2={mapSpeedToSvg(tick)}
                />
                <text
                  className="grid-text grid-text-y"
                  x={PADDING + 8}
                  y={mapSpeedToSvg(tick) + 4}
                >{`${Math.round(tick)} px/s`}</text>
              </g>
            ))}
            {xTicks.map((tick) => (
              <g key={`x-speed-${tick}`}>
                <line
                  className={
                    tick === 0 || tick === duration
                      ? "grid-line-major"
                      : "grid-line-minor"
                  }
                  x1={mapTimeToSvg(tick)}
                  x2={mapTimeToSvg(tick)}
                  y1={PADDING}
                  y2={dimensions.height - PADDING}
                />
                <text
                  className="grid-text grid-text-x"
                  x={mapTimeToSvg(tick)}
                  y={dimensions.height - 8}
                >{`${tick.toFixed(2)}s`}</text>
              </g>
            ))}
            <path
              className="graph-curve"
              d={curvePath}
            />
            <line
              className="control-line"
              x1={svgP0.x}
              x2={svgH1.x}
              y1={svgP0.y}
              y2={svgH1.y}
            />
            <line
              className="control-line"
              x1={svgP3.x}
              x2={svgH2.x}
              y1={svgP3.y}
              y2={svgH2.y}
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
              cx={svgH1.x}
              cy={svgH1.y}
              r="6"
              style={{pointerEvents: "none"}}
            />
            <circle
              className="handle"
              cx={svgH2.x}
              cy={svgH2.y}
              r="6"
              style={{pointerEvents: "none"}}
            />
            <circle
              cx={svgH1.x}
              cy={svgH1.y}
              fill="transparent"
              r="20"
              style={{cursor: "grab"}}
              onMouseDown={(e) => onMouseDown(e, "p1")}
              onTouchStart={(e) => onMouseDown(e, "p1")}
            />
            <circle
              cx={svgH2.x}
              cy={svgH2.y}
              fill="transparent"
              r="20"
              style={{cursor: "grab"}}
              onMouseDown={(e) => onMouseDown(e, "p2")}
              onTouchStart={(e) => onMouseDown(e, "p2")}
            />
          </>
        )}
      </svg>
    </div>
  );
};

interface AnimationControlsProps {
  duration: number;
  setDuration: (value: number) => void;
  timecode: string;
  fps: number;
  actualFps: number;
  setFps: (value: number) => void;
  animationMode: AnimationMode;
  setAnimationMode: (mode: AnimationMode) => void;
  isPaused: boolean;
  handleTogglePlayPause: () => void;
  handleResetAnimation: () => void;
  showTrails: boolean;
  setShowTrails: (value: boolean) => void;
}

const AnimationControls: React.FC<AnimationControlsProps> = ({
  duration,
  setDuration,
  timecode,
  fps,
  actualFps,
  setFps,
  animationMode,
  setAnimationMode,
  isPaused,
  handleTogglePlayPause,
  handleResetAnimation,
  showTrails,
  setShowTrails,
}) => {
  const modeTextMap: Record<AnimationMode, string> = {
    "ping-pong": "Пинг-понг",
    "loop": "Цикл",
    "once": "Один раз",
  };

  return (
    <div className="animation-controls">
      <div className="control-item">
        <label>
          <span>Длительность</span>: <span>{duration.toFixed(2)} сек.</span>
        </label>
        <Slider
          max={5}
          min={1}
          step={0.25}
          value={duration}
          onChange={setDuration}
        />
        <label>
          <span>Частота кадров</span>{" "}
          {actualFps < fps - 0.5 && (
            <span className="fps-warning">({Math.round(actualFps)})</span>
          )}
        </label>
        <div className="flexible-links">
          {[8, 15, 24, 30, 60].map((f) => (
            <button
              key={f}
              className={fps === f ? "active selected" : ""}
              style={{flexBasis: "15px"}}
              onClick={() => setFps(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="control-item">
        <label>Режим</label>
        <div className="flexible-links">
          {MODES.map((mode) => (
            <button
              key={mode}
              className={animationMode === mode ? "active selected" : ""}
              onClick={() => setAnimationMode(mode)}
            >
              {modeTextMap[mode]}
            </button>
          ))}
        </div>

        <label>Управление</label>
        <div className="flexible-links">
          <button onClick={handleTogglePlayPause}>
            {isPaused ? "▶ Воспроизвести" : "❚❚ Пауза"}
          </button>
          <button onClick={handleResetAnimation}>Сбросить</button>
          <button
            className={showTrails ? "active selected" : ""}
            onClick={() => setShowTrails(!showTrails)}
          >
            Показать след
          </button>
        </div>
      </div>
    </div>
  );
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

  const [dragSpeedAxisRange, setDragSpeedAxisRange] = useState<{
    min: number;
    max: number;
  } | null>(null);

  const [duration, setDuration] = useState(2);

  const [animationMode, setAnimationMode] = useState<AnimationMode>("ping-pong");

  const [fps, setFps] = useState(30);

  const [showTrails, setShowTrails] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const [actualFps, setActualFps] = useState(fps);

  const [trackWidth, setTrackWidth] = useState(0);

  const [cubeTrail, setCubeTrail] = useState<number[]>([]);

  const [elapsedTime, setElapsedTime] = useState(0);

  const [valueGraphDims, setValueGraphDims] = useState({width: 0, height: 0});

  const [speedGraphDims, setSpeedGraphDims] = useState({width: 0, height: 0});

  const trackRef = useRef<HTMLDivElement>(null);

  const valueGraphSvgRef = useRef<SVGSVGElement>(null);

  const speedGraphSvgRef = useRef<SVGSVGElement>(null);

  const animationFrameRef = useRef<number | undefined>(undefined);

  const startTimeRef = useRef<number>(0);

  const elapsedOnPauseRef = useRef<number>(0);

  const lastFrameRenderTimeRef = useRef<number>(0);

  const prevDuration = usePrevious(duration);

  const frameCountRef = useRef(0);

  const lastFpsUpdateTimeRef = useRef(0);

  useEffect(() => {
    if (prevDuration === undefined || prevDuration === duration || prevDuration === 0) {
      return;
    }

    setKeyframeOut((current) => ({
      ...current,
      influence: (((current.influence / 100) * prevDuration) / duration) * 100,
    }));
    setKeyframeIn((current) => {
      const oldOffset = (current.influence / 100) * prevDuration;

      const oldHandleX = prevDuration - oldOffset;

      const newOffset = duration - oldHandleX;

      return newOffset > 0
        ? {...current, influence: (newOffset / duration) * 100}
        : current;
    });
  }, [duration, prevDuration]);

  useEffect(() => {
    const elementsToObserve = [
      trackRef.current,
      valueGraphSvgRef.current,
      speedGraphSvgRef.current,
    ].filter(Boolean) as Element[];

    if (elementsToObserve.length === 0) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === trackRef.current) {
          setTrackWidth(entry.contentRect.width);
        }

        if (entry.target === valueGraphSvgRef.current) {
          setValueGraphDims({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }

        if (entry.target === speedGraphSvgRef.current) {
          setSpeedGraphDims({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      }
    });
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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

  const getTforX = useGetTforX(p0, p1, p2, p3);

  const linearTime = useLinearTime(elapsedTime, duration, animationMode);

  const animatedPoint = useMemo(
    () => getPointOnCubicBezier(getTforX(linearTime), p0, p1, p2, p3),
    [linearTime, getTforX, p0, p1, p2, p3]
  );

  const {speedYMin, speedYMax, speedYTicks} = useMemo(() => {
    if (duration <= 0 || trackWidth <= 0) {
      return {speedYMin: -500, speedYMax: 500, speedYTicks: [-500, 0, 500]};
    }

    const speedSamples: number[] = [];

    for (let i = 0; i <= SAMPLES; i++) {
      const t = i / SAMPLES;

      const dx_dt =
        3 * (1 - t) ** 2 * (p1.x - p0.x) +
        6 * (1 - t) * t * (p2.x - p1.x) +
        3 * t ** 2 * (p3.x - p2.x);

      const dy_dt =
        3 * (1 - t) ** 2 * (p1.y - p0.y) +
        6 * (1 - t) * t * (p2.y - p1.y) +
        3 * t ** 2 * (p3.y - p2.y);

      if (Math.abs(dx_dt) < 1e-6) {
        continue;
      }

      speedSamples.push(dy_dt / dx_dt);
    }

    if (speedSamples.length === 0) {
      speedSamples.push(keyframeOut.speed, keyframeIn.speed);
    }

    const minVal = Math.min(...speedSamples, keyframeOut.speed, keyframeIn.speed);

    const maxVal = Math.max(...speedSamples, keyframeOut.speed, keyframeIn.speed);

    const range = Math.max(maxVal - minVal, 200);

    const padding = range * SPEED_AXIS_PADDING_FACTOR;
    let finalMin = minVal - padding;
    let finalMax = maxVal + padding;

    if (finalMin > -100 && finalMin <= 0) {
      finalMin = -100;
    }

    if (finalMax < 100 && finalMax >= 0) {
      finalMax = 100;
    }

    const targetTickCount = 5;

    const step = getNiceTickStep(finalMax - finalMin, targetTickCount);

    const ticks: number[] = [];

    if (step > 0) {
      const firstTick = Math.ceil(finalMin / step) * step;

      for (let currentTick = firstTick; currentTick <= finalMax; currentTick += step) {
        ticks.push(currentTick);
      }
    }

    return {speedYMin: finalMin, speedYMax: finalMax, speedYTicks: ticks};
  }, [p0, p1, p2, p3, duration, trackWidth, keyframeOut.speed, keyframeIn.speed]);

  const {mapValueToSvg, mapValueFromSvg} = useValueGraphMapping(
    duration,
    trackWidth,
    valueGraphDims,
    valueGraphSvgRef
  );

  const {
    mapSpeedToSvg,
    mapTimeToSvg,
    mapSpeedFromSvg,
    speedCurvePath,
    speedGraphHandles,
  } = useSpeedGraphMapping(
    duration,
    speedGraphDims,
    speedGraphSvgRef,
    keyframeOut,
    keyframeIn,
    p0,
    p1,
    p2,
    p3,
    speedYMin,
    speedYMax
  );

  useEffect(() => {
    if (isPaused) {
      elapsedOnPauseRef.current = elapsedTime;

      return;
    }

    startTimeRef.current = performance.now() - elapsedOnPauseRef.current;
    lastFrameRenderTimeRef.current = performance.now();
    lastFpsUpdateTimeRef.current = 0;
    frameCountRef.current = 0;

    const animate = (timestamp: number) => {
      if (lastFpsUpdateTimeRef.current === 0) {
        lastFpsUpdateTimeRef.current = timestamp;
      }

      frameCountRef.current++;

      const timeSinceFpsUpdate = timestamp - lastFpsUpdateTimeRef.current;

      if (timeSinceFpsUpdate > 500) {
        setActualFps(frameCountRef.current / (timeSinceFpsUpdate / 1000));
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

      const totalElapsedTime = timestamp - startTimeRef.current;

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

  const handleMouseDown = useCallback(
    (
      e: React.MouseEvent | React.TouchEvent,
      handle: "p1" | "p2",
      graphType: "value" | "speed"
    ) => {
      e.preventDefault();
      document.body.style.cursor = "grabbing";
      setDragInfo({handle, graphType});

      if (graphType === "speed") {
        setDragSpeedAxisRange({min: speedYMin, max: speedYMax});
      }
    },
    [speedYMin, speedYMax]
  );

  const handleMouseUp = useCallback(() => {
    document.body.style.cursor = "default";
    setDragInfo(null);
    setDragSpeedAxisRange(null);
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

      const isShiftPressed = "shiftKey" in e && e.shiftKey;

      const newParams: Partial<KeyframeParams> = {};

      if (dragInfo.graphType === "value") {
        const normP = mapValueFromSvg({x: touch.clientX, y: touch.clientY});

        if (!normP) {
          return;
        }

        const yMax = trackWidth * VALUE_Y_MAX_FACTOR;

        const yMin = trackWidth * VALUE_Y_MIN_FACTOR;
        normP.y = Math.max(yMin, Math.min(yMax, normP.y));

        const finalP = {...normP};

        if (isShiftPressed) {
          finalP.y = dragInfo.handle === "p1" ? 0 : trackWidth;
        }

        const handleX = Math.max(0, Math.min(duration, finalP.x));
        newParams.influence =
          ((dragInfo.handle === "p1" ? handleX : duration - handleX) / duration) * 100;

        if (dragInfo.handle === "p1") {
          newParams.speed =
            handleX > 1e-6
              ? finalP.y / handleX
              : finalP.y > 0
                ? INFINITE_SPEED
                : -INFINITE_SPEED;
        } else {
          const influenceX = duration - handleX;
          newParams.speed =
            influenceX > 1e-6
              ? (trackWidth - finalP.y) / influenceX
              : trackWidth - finalP.y > 0
                ? INFINITE_SPEED
                : -INFINITE_SPEED;
        }
      } else {
        const normP = mapSpeedFromSvg({x: touch.clientX, y: touch.clientY});

        if (!normP) {
          return;
        }

        const handleX = Math.max(0, Math.min(duration, normP.x));
        newParams.influence =
          ((dragInfo.handle === "p1" ? handleX : duration - handleX) / duration) * 100;

        const speedYMinOnDrag = dragSpeedAxisRange ? dragSpeedAxisRange.min : speedYMin;

        const speedYMaxOnDrag = dragSpeedAxisRange ? dragSpeedAxisRange.max : speedYMax;
        let targetSpeed = normP.y;

        if (isShiftPressed) {
          targetSpeed = 0;
        }

        let finalSpeed = Math.max(
          speedYMinOnDrag,
          Math.min(speedYMaxOnDrag, targetSpeed)
        );

        const valueYMin = trackWidth * VALUE_Y_MIN_FACTOR;

        const valueYMax = trackWidth * VALUE_Y_MAX_FACTOR;

        if (dragInfo.handle === "p1") {
          const p1x = (newParams.influence / 100) * duration;

          if (p1x > 1e-6) {
            const minSpeedFromValueBounds = valueYMin / p1x;

            const maxSpeedFromValueBounds = valueYMax / p1x;
            finalSpeed = Math.max(
              minSpeedFromValueBounds,
              Math.min(maxSpeedFromValueBounds, finalSpeed)
            );
          }
        } else {
          const p2xRelative = (newParams.influence / 100) * duration;

          if (p2xRelative > 1e-6) {
            const minSpeedFromValueBounds = (trackWidth - valueYMax) / p2xRelative;

            const maxSpeedFromValueBounds = (trackWidth - valueYMin) / p2xRelative;
            finalSpeed = Math.max(
              minSpeedFromValueBounds,
              Math.min(maxSpeedFromValueBounds, finalSpeed)
            );
          }
        }

        newParams.speed = finalSpeed;
      }

      if (dragInfo.handle === "p1") {
        setKeyframeOut((current) => ({...current, ...newParams}));
      } else {
        setKeyframeIn((current) => ({...current, ...newParams}));
      }
    },
    [
      dragInfo,
      trackWidth,
      duration,
      mapValueFromSvg,
      mapSpeedFromSvg,
      speedYMin,
      speedYMax,
      dragSpeedAxisRange,
    ]
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

  const timecode = useTimecode(linearTime, fps, duration);

  const resetTimer = () => {
    elapsedOnPauseRef.current = 0;
    setElapsedTime(0);
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

  const handleSetAnimationMode = (mode: AnimationMode) => {
    setAnimationMode(mode);
    resetTimer();
    setIsPaused(false);
  };

  return (
    <div className="easing-editor-wrapper">
      <AnimationDemo
        animatedPoint={animatedPoint}
        cubeTrail={cubeTrail}
        showTrails={showTrails}
        trackRef={trackRef}
      />
      <span className="timecode">{timecode}</span>
      <div className="graphs-container">
        <ValueGraph
          animatedPoint={animatedPoint}
          dimensions={valueGraphDims}
          duration={duration}
          mapToSvg={mapValueToSvg}
          p0={p0}
          p1={p1}
          p2={p2}
          p3={p3}
          svgRef={valueGraphSvgRef}
          trackWidth={trackWidth}
          onMouseDown={(e, handle) => handleMouseDown(e, handle, "value")}
        />
        <SpeedGraph
          curvePath={speedCurvePath}
          dimensions={speedGraphDims}
          duration={duration}
          handle1={speedGraphHandles.h1}
          handle2={speedGraphHandles.h2}
          mapSpeedToSvg={mapSpeedToSvg}
          mapTimeToSvg={mapTimeToSvg}
          svgRef={speedGraphSvgRef}
          yTicks={speedYTicks}
          onMouseDown={(e, handle) => handleMouseDown(e, handle, "speed")}
        />
      </div>
      <AnimationControls
        actualFps={actualFps}
        animationMode={animationMode}
        duration={duration}
        fps={fps}
        handleResetAnimation={handleResetAnimation}
        handleTogglePlayPause={handleTogglePlayPause}
        isPaused={isPaused}
        setAnimationMode={handleSetAnimationMode}
        setDuration={setDuration}
        setFps={setFps}
        setShowTrails={setShowTrails}
        showTrails={showTrails}
        timecode={timecode}
      />
    </div>
  );
};

function useGetTforX(p0: Point, p1: Point, p2: Point, p3: Point) {
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

  return useCallback(
    (xTarget: number): number => {
      const duration = p3.x;

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
    [timeToTMap, p3.x]
  );
}

function useLinearTime(
  elapsedTime: number,
  duration: number,
  animationMode: AnimationMode
) {
  return useMemo(() => {
    const durationMs = duration * 1000;

    if (durationMs === 0) {
      return 0;
    }

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
}

function useTimecode(linearTime: number, fps: number, duration: number) {
  return useMemo(() => {
    const epsilon = 1e-9;

    if (linearTime >= duration - epsilon) {
      let endSeconds = Math.floor(duration);
      let endFrames = Math.round((duration - endSeconds) * fps);

      if (endFrames >= fps) {
        endSeconds += 1;
        endFrames = 0;
      }

      return `${String(endSeconds).padStart(2, "0")}:${String(endFrames).padStart(2, "0")}`;
    }

    const totalFrames = Math.floor(linearTime * fps);

    const seconds = Math.floor(totalFrames / fps);

    const frames = totalFrames % fps;

    return `${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
  }, [linearTime, fps, duration]);
}

function useValueGraphMapping(
  duration: number,
  trackWidth: number,
  dimensions: {width: number; height: number},
  svgRef: React.RefObject<SVGSVGElement | null>
) {
  const {width, height} = dimensions;

  const graphWidth = width - PADDING * 2;

  const graphHeight = height - PADDING * 2;

  const yMax = trackWidth * VALUE_Y_MAX_FACTOR;

  const yMin = trackWidth * VALUE_Y_MIN_FACTOR;

  const yRange = yMax - yMin;

  const mapValueToSvg = useCallback(
    (p: Point): Point => {
      if (graphWidth <= 0 || graphHeight <= 0 || yRange === 0) {
        return {x: PADDING, y: PADDING};
      }

      const xRatio = duration === 0 ? 0 : p.x / duration;

      const yRatio = (p.y - yMin) / yRange;

      return {x: PADDING + xRatio * graphWidth, y: PADDING + (1 - yRatio) * graphHeight};
    },
    [duration, graphWidth, graphHeight, yMin, yRange]
  );

  const mapValueFromSvg = useCallback(
    (svgP: Point): Point | null => {
      if (!svgRef.current || trackWidth === 0 || graphWidth <= 0) {
        return null;
      }

      const svgRect = svgRef.current.getBoundingClientRect();

      const mouseX = svgP.x - svgRect.left;

      const mouseY = svgP.y - svgRect.top;

      const xRatio = (mouseX - PADDING) / graphWidth;

      const yRatio = 1 - (mouseY - PADDING) / graphHeight;

      const x = xRatio * duration;

      const y = yRatio * yRange + yMin;

      return {x, y};
    },
    [duration, trackWidth, graphWidth, graphHeight, yMin, yRange, svgRef]
  );

  return {mapValueToSvg, mapValueFromSvg};
}

function useSpeedGraphMapping(
  duration: number,
  dimensions: {width: number; height: number},
  svgRef: React.RefObject<SVGSVGElement | null>,
  keyframeOut: KeyframeParams,
  keyframeIn: KeyframeParams,
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  speedYMin: number,
  speedYMax: number
) {
  const {width, height} = dimensions;

  const graphWidth = width - PADDING * 2;

  const graphHeight = height - PADDING * 2;

  const speedYRange = speedYMax - speedYMin;

  const mapTimeToSvg = useCallback(
    (time: number) => {
      if (duration === 0) {
        return PADDING;
      }

      return PADDING + (time / duration) * graphWidth;
    },
    [duration, graphWidth]
  );

  const mapSpeedToSvg = useCallback(
    (speed: number) => {
      if (speedYRange === 0) {
        return PADDING + graphHeight / 2;
      }

      return PADDING + (1 - (speed - speedYMin) / speedYRange) * graphHeight;
    },
    [speedYMin, speedYRange, graphHeight]
  );

  const mapSpeedFromSvg = useCallback(
    (svgP: Point): Point | null => {
      if (!svgRef.current || graphWidth <= 0 || speedYRange === 0) {
        return null;
      }

      const svgRect = svgRef.current.getBoundingClientRect();

      const mouseX = svgP.x - svgRect.left;

      const mouseY = svgP.y - svgRect.top;

      const xRatio = (mouseX - PADDING) / graphWidth;

      const yRatio = 1 - (mouseY - PADDING) / graphHeight;

      const x = xRatio * duration;

      const y = yRatio * speedYRange + speedYMin;

      return {x, y};
    },
    [duration, graphWidth, graphHeight, speedYMin, speedYRange, svgRef]
  );

  const speedCurvePath = useMemo(() => {
    if (width <= 0 || speedYRange === 0) {
      return "";
    }

    let path = `M ${mapTimeToSvg(0)},${mapSpeedToSvg(keyframeOut.speed)}`;

    for (let i = 1; i <= SAMPLES; i++) {
      const t = i / SAMPLES;

      const x_t = getPointOnCubicBezier(t, p0, p1, p2, p3).x;

      const dx_dt =
        3 * (1 - t) ** 2 * (p1.x - p0.x) +
        6 * (1 - t) * t * (p2.x - p1.x) +
        3 * t ** 2 * (p3.x - p2.x);

      const dy_dt =
        3 * (1 - t) ** 2 * (p1.y - p0.y) +
        6 * (1 - t) * t * (p2.y - p1.y) +
        3 * t ** 2 * (p3.y - p2.y);

      const speed =
        dx_dt < 1e-6 ? (dy_dt > 0 ? INFINITE_SPEED : -INFINITE_SPEED) : dy_dt / dx_dt;
      path += ` L ${mapTimeToSvg(x_t)},${mapSpeedToSvg(speed)}`;
    }

    return path;
  }, [
    width,
    keyframeOut.speed,
    p0,
    p1,
    p2,
    p3,
    mapTimeToSvg,
    mapSpeedToSvg,
    speedYRange,
  ]);

  const speedGraphHandles = useMemo(() => {
    return {
      h1: {x: (keyframeOut.influence / 100) * duration, y: keyframeOut.speed},
      h2: {x: duration - (keyframeIn.influence / 100) * duration, y: keyframeIn.speed},
    };
  }, [keyframeOut, keyframeIn, duration]);

  return {
    mapTimeToSvg,
    mapSpeedToSvg,
    mapSpeedFromSvg,
    speedCurvePath,
    speedGraphHandles,
  };
}

export default EasingEditor;
