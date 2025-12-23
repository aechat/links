import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {Slider} from "antd";

type AnimationMode = "ping-pong" | "loop" | "once";
const MODES: AnimationMode[] = ["ping-pong", "loop", "once"];

interface Point {
  x: number;
  y: number;
}
interface DragInfo {
  graphType: "value" | "speed";
  handle: "p1" | "p2";
}
interface KeyframeParameters {
  influence: number;
  yFactor: number;
}
interface TimeMapEntry {
  t: number;
  x: number;
}
const PADDING = 20;
const SAMPLES = 100;
const INFINITE_SPEED = 99_999;
const SPEED_AXIS_PADDING_FACTOR = 0.2;
const VALUE_Y_MIN_FACTOR = -0.5;
const VALUE_Y_MAX_FACTOR = 1.5;
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
  }

  if (residual > 2) {
    return 5 * magnitude;
  }

  if (residual > 1) {
    return 2 * magnitude;
  }

  return magnitude;
};
const Ruler: React.FC<{trackWidth: number; style?: React.CSSProperties}> = ({
  style,
  trackWidth,
}) => {
  if (trackWidth === 0) {
    return null;
  }

  const numberDivisions = 10;
  const tickInterval = trackWidth / numberDivisions;
  const ticks = Array.from(
    {length: numberDivisions + 1},
    (_, index) => index * tickInterval
  );

  return (
    <div
      className="ruler"
      style={style}
    >
      {ticks.map((tick) => {
        let labelClass = "ruler-label";

        if (tick === 0) {
          labelClass += " ruler-label--start";
        } else if (tick === trackWidth) {
          labelClass += " ruler-label--end";
        }

        return (
          <div
            key={tick}
            className="ruler-tick"
            style={{left: `calc(${tick}px - 0.5px)`}}
          >
            <span className={labelClass}>{Math.round(tick)}</span>
          </div>
        );
      })}
    </div>
  );
};

interface AnimationDemoProperties {
  animatedPoint: Point;
  animationProperty:
    | "position"
    | "positionAndRotation"
    | "positionAndScale"
    | "scale"
    | "rotation"
    | "scaleAndRotate";
  showTrail: boolean;
  trackRef: React.RefObject<HTMLDivElement | null>;
  trackWidth: number;
  valueYMax: number;
  valueYMin: number;
}
interface TrailFrame {
  point: Point;
  progress: number;
}
const AnimationDemo: React.FC<AnimationDemoProperties> = ({
  animatedPoint,
  animationProperty,
  showTrail,
  trackRef,
  trackWidth,
  valueYMax,
  valueYMin,
}) => {
  const curveRange = valueYMax - valueYMin;
  const shouldScale =
    ["position", "positionAndRotation", "positionAndScale"].includes(animationProperty) &&
    curveRange > trackWidth &&
    trackWidth > 0;
  const scaleX = shouldScale ? trackWidth / curveRange : 1;
  const offset = shouldScale ? -valueYMin * scaleX : 0;
  const trackElementsStyle = {
    transform: `translateX(${offset}px) scaleX(${scaleX})`,
    transformOrigin: "left",
  };
  const [trailPositions, setTrailPositions] = useState<TrailFrame[]>([]);

  useEffect(() => {
    if (
      showTrail &&
      ["position", "positionAndRotation", "positionAndScale"].includes(animationProperty)
    ) {
      setTrailPositions((previous) => {
        const progress = animatedPoint.y / trackWidth;
        const newTrail = [...previous, {point: animatedPoint, progress}];

        return newTrail.slice(Math.max(newTrail.length - 15, 0));
      });
    } else {
      setTrailPositions([]);
    }
  }, [animatedPoint, animationProperty, showTrail, trackWidth]);
  const getAnimatedStyle = () => {
    if (trackWidth === 0) {
      return {};
    }

    const progress = animatedPoint.y / trackWidth;
    const left = shouldScale ? animatedPoint.y * scaleX + offset : animatedPoint.y;
    const translateY = "translateY(-50%)";
    let animTransform = "";

    switch (animationProperty) {
      case "scale": {
        const scale = 0.5 + progress * 2;

        animTransform = `scale(${scale})`;

        return {
          left: "50%",
          top: "50%",
          transform: `${translateY} translateX(-50%) ${animTransform}`,
        };
      }
      case "rotation": {
        const rotation = progress * 720;

        animTransform = `rotate(${rotation}deg)`;

        return {
          left: "50%",
          top: "50%",
          transform: `${translateY} translateX(-50%) ${animTransform}`,
        };
      }
      case "scaleAndRotate": {
        const comboScale = 0.5 + progress * 2;
        const comboRotation = progress * 720;

        animTransform = `scale(${comboScale}) rotate(${comboRotation}deg)`;

        return {
          left: "50%",
          top: "50%",
          transform: `${translateY} translateX(-50%) ${animTransform}`,
        };
      }
      case "positionAndRotation": {
        const posRotRotation = progress * 720;

        animTransform = `rotate(${posRotRotation}deg)`;

        return {
          left: `${left}px`,
          top: "50%",
          transform: `${translateY} translateX(-50%) ${animTransform}`,
        };
      }
      case "positionAndScale": {
        const posScaleScale = 0.5 + progress * 1.5;

        animTransform = `scale(${posScaleScale})`;

        return {
          left: `${left}px`,
          top: "50%",
          transform: `${translateY} translateX(-50%) ${animTransform}`,
        };
      }
      default: {
        return {
          left: `${left}px`,
          top: "50%",
          transform: `${translateY} translateX(-50%)`,
        };
      }
    }
  };

  return (
    <div className="animation-preview">
      <div
        ref={trackRef}
        className="animation-track"
      >
        {["position", "positionAndRotation", "positionAndScale"].includes(
          animationProperty
        ) && (
          <div
            className="track-visuals"
            style={trackElementsStyle}
          >
            <Ruler trackWidth={trackWidth} />
            <div className="track-line" />
          </div>
        )}
        {showTrail &&
          trailPositions.map((trailFrame, index) => {
            const opacity = 0.5 * ((index + 1) / trailPositions.length);
            const left = shouldScale
              ? trailFrame.point.y * scaleX + offset
              : trailFrame.point.y;
            let animTransform = "";

            switch (animationProperty) {
              case "positionAndRotation": {
                const posRotRotation = trailFrame.progress * 720;

                animTransform = `rotate(${posRotRotation}deg)`;
                break;
              }
              case "positionAndScale": {
                const posScaleScale = 0.5 + trailFrame.progress * 1.5;

                animTransform = `scale(${posScaleScale})`;
                break;
              }
              default: {
                animTransform = "";
              }
            }

            return (
              <div
                key={index}
                className="animated-cube-trail"
                style={{
                  left: `${left}px`,
                  opacity: opacity,
                  top: "50%",
                  transform: `translateY(-50%) translateX(-50%) ${animTransform}`,
                }}
              ></div>
            );
          })}
        <div
          className={`animated-cube`}
          style={getAnimatedStyle()}
        ></div>
      </div>
    </div>
  );
};

interface ValueGraphProperties {
  animatedPoint: Point;
  animationProperty:
    | "position"
    | "positionAndRotation"
    | "positionAndScale"
    | "scale"
    | "rotation"
    | "scaleAndRotate";
  dimensions: {width: number; height: number};
  duration: number;
  mapToSvg: (p: Point) => Point;
  onMouseDown: (e: React.MouseEvent | React.TouchEvent, handle: "p1" | "p2") => void;
  p0: Point;
  p1: Point;
  p2: Point;
  p3: Point;
  svgRef: React.RefObject<SVGSVGElement | null>;
  trackWidth: number;
}
const ValueGraph: React.FC<ValueGraphProperties> = ({
  animatedPoint,
  animationProperty,
  dimensions,
  duration,
  mapToSvg,
  onMouseDown,
  p0,
  p1,
  p2,
  p3,
  svgRef,
  trackWidth,
}) => {
  const svgP0 = mapToSvg(p0),
    svgP1 = mapToSvg(p1),
    svgP2 = mapToSvg(p2),
    svgP3 = mapToSvg(p3);
  const valueCurvePath = `M ${svgP0.x},${svgP0.y} C ${svgP1.x},${svgP1.y} ${svgP2.x},${svgP2.y} ${svgP3.x},${svgP3.y}`;
  const xTicks = useMemo(() => {
    const ticks = [0];
    const step = duration >= 1.5 ? 0.5 : 0.25;

    for (let index = step; index < duration; index += step) {
      ticks.push(index);
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
  const getLabel = (tick: number) => {
    if (trackWidth === 0) {
      return "0";
    }

    const progress = tick / trackWidth;
    const getPositionLabel = () => `${Math.round(tick)}px`;
    const getRotationLabel = () => `${Math.round(progress * 720)}°`;
    const getScaleLabel = () => `${Math.round(50 + progress * 200)}%`;

    switch (animationProperty) {
      case "position": {
        return getPositionLabel();
      }
      case "rotation": {
        return getRotationLabel();
      }
      case "scale": {
        return getScaleLabel();
      }
      case "positionAndRotation": {
        return `${getPositionLabel()} + ${getRotationLabel()}`;
      }
      case "positionAndScale": {
        return `${getPositionLabel()} + ${getScaleLabel()}`;
      }
      case "scaleAndRotate": {
        return `${getScaleLabel()} + ${getRotationLabel()}`;
      }
      default: {
        return "0";
      }
    }
  };

  return (
    <div className="graph-container">
      <label>Value Graph</label>
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
                >
                  {getLabel(tick)}
                </text>
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

interface SpeedGraphProperties {
  curvePath: string;
  dimensions: {width: number; height: number};
  duration: number;
  handle1: Point;
  handle2: Point;
  mapSpeedToSvg: (speed: number) => number;
  mapTimeToSvg: (time: number) => number;
  onMouseDown: (e: React.MouseEvent | React.TouchEvent, handle: "p1" | "p2") => void;
  svgRef: React.RefObject<SVGSVGElement | null>;
  yTicks: number[];
}
const SpeedGraph: React.FC<SpeedGraphProperties> = ({
  curvePath,
  dimensions,
  duration,
  handle1,
  handle2,
  mapSpeedToSvg,
  mapTimeToSvg,
  onMouseDown,
  svgRef,
  yTicks,
}) => {
  const svgH1 = {x: mapTimeToSvg(handle1.x), y: mapSpeedToSvg(handle1.y)};
  const svgH2 = {x: mapTimeToSvg(handle2.x), y: mapSpeedToSvg(handle2.y)};
  const svgP0 = {x: mapTimeToSvg(0), y: mapSpeedToSvg(handle1.y)};
  const svgP3 = {x: mapTimeToSvg(duration), y: mapSpeedToSvg(handle2.y)};
  const xTicks = useMemo(() => {
    const ticks = [0];
    const step = duration >= 1.5 ? 0.5 : 0.25;

    for (let index = step; index < duration; index += step) {
      ticks.push(index);
    }
    ticks.push(duration);

    return ticks;
  }, [duration]);

  return (
    <div className="graph-container">
      <label>Speed Graph</label>
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

interface AnimationControlsProperties {
  actualFps: number;
  animationMode: AnimationMode;
  animationProperty:
    | "position"
    | "positionAndRotation"
    | "positionAndScale"
    | "scale"
    | "rotation"
    | "scaleAndRotate";
  duration: number;
  fps: number;
  handleResetAnimation: () => void;
  handleTogglePlayPause: () => void;
  isPaused: boolean;
  setAnimationMode: (mode: AnimationMode) => void;
  setAnimationProperty: (
    property:
      | "position"
      | "positionAndRotation"
      | "positionAndScale"
      | "scale"
      | "rotation"
      | "scaleAndRotate"
  ) => void;
  setDuration: (value: number) => void;
  setFps: (value: number) => void;
  setShowTrail: (show: boolean) => void;
  showTrail: boolean;
  timecode: string;
}
const AnimationControls: React.FC<AnimationControlsProperties> = ({
  actualFps,
  animationMode,
  animationProperty,
  duration,
  fps,
  handleResetAnimation = () => {},
  handleTogglePlayPause = () => {},
  isPaused,
  setAnimationMode = () => {},
  setAnimationProperty = () => {},
  setDuration = () => {},
  setFps = () => {},
  setShowTrail = () => {},
  showTrail,
}) => {
  const modeTextMap: Record<AnimationMode, string> = {
    "loop": "Цикл",
    "once": "Один раз",
    "ping-pong": "Пинг-понг",
  };
  const propertyTextMap: Record<typeof animationProperty, string> = {
    position: "Позиция",
    positionAndRotation: "Позиция + Поворот",
    positionAndScale: "Позиция + масштаб",
    rotation: "Поворот",
    scale: "Масштаб",
    scaleAndRotate: "Поворот + масштаб",
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
      </div>
      <div className="control-item">
        <label>Свойство</label>
        <div className="flexible-links">
          {Object.keys(propertyTextMap).map((property) => (
            <button
              key={property}
              className={animationProperty === property ? "active selected" : ""}
              onClick={() => setAnimationProperty(property as typeof animationProperty)}
            >
              {propertyTextMap[property as typeof animationProperty]}
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
            className={showTrail ? "active selected" : ""}
            onClick={() => setShowTrail(!showTrail)}
          >
            Показать след
          </button>
        </div>
      </div>
    </div>
  );
};
const EasingEditor: React.FC = () => {
  const [keyframeOut, setKeyframeOut] = useState<KeyframeParameters>({
    influence: 33.33,
    yFactor: 0,
  });
  const [keyframeIn, setKeyframeIn] = useState<KeyframeParameters>({
    influence: 33.33,
    yFactor: 1,
  });
  const [dragInfo, setDragInfo] = useState<DragInfo | null>(null);
  const [dragSpeedAxisRange, setDragSpeedAxisRange] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const [duration, setDuration] = useState(2);
  const [animationProperty, setAnimationProperty] = useState<
    | "position"
    | "positionAndRotation"
    | "positionAndScale"
    | "scale"
    | "rotation"
    | "scaleAndRotate"
  >("position");
  const [animationMode, setAnimationMode] = useState<AnimationMode>("ping-pong");
  const [fps, setFps] = useState(30);
  const [isPaused, setIsPaused] = useState(false);
  const [showTrail, setShowTrail] = useState(true);
  const [actualFps, setActualFps] = useState(fps);
  const [trackWidth, setTrackWidth] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [valueGraphDims, setValueGraphDims] = useState({height: 0, width: 0});
  const [speedGraphDims, setSpeedGraphDims] = useState({height: 0, width: 0});
  const trackReference = useRef<HTMLDivElement>(null);
  const valueGraphSvgReference = useRef<SVGSVGElement>(null);
  const speedGraphSvgReference = useRef<SVGSVGElement>(null);
  const animationFrameReference = useRef<number | undefined>(undefined);
  const startTimeReference = useRef<number>(0);
  const elapsedOnPauseReference = useRef<number>(0);
  const lastFrameRenderTimeReference = useRef<number>(0);
  const frameCountReference = useRef(0);
  const lastFpsUpdateTimeReference = useRef(0);
  const fpsReference = useRef(fps);

  useEffect(() => {
    fpsReference.current = fps;
  }, [fps]);
  useEffect(() => {
    const elementsToObserve = [
      trackReference.current,
      valueGraphSvgReference.current,
      speedGraphSvgReference.current,
    ].filter(Boolean) as Element[];

    if (elementsToObserve.length === 0) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === trackReference.current) {
          setTrackWidth(entry.contentRect.width);
        }

        if (entry.target === valueGraphSvgReference.current) {
          setValueGraphDims({
            height: entry.contentRect.height,
            width: entry.contentRect.width,
          });
        }

        if (entry.target === speedGraphSvgReference.current) {
          setSpeedGraphDims({
            height: entry.contentRect.height,
            width: entry.contentRect.width,
          });
        }
      }
    });

    for (const element of elementsToObserve) observer.observe(element);

    return () => observer.disconnect();
  }, []);
  const {p0, p1, p2, p3, speedIn, speedOut, valueYMax, valueYMin} = useMemo(() => {
    if (trackWidth === 0) {
      return {
        p0: {x: 0, y: 0},
        p1: {x: 0, y: 0},
        p2: {x: 0, y: 0},
        p3: {x: 0, y: 0},
        speedIn: 0,
        speedOut: 0,
        valueYMax: 0,
        valueYMin: 0,
      };
    }

    const p0: Point = {x: 0, y: 0};
    const p3: Point = {x: duration, y: trackWidth};
    const p1x = (keyframeOut.influence / 100) * duration;
    const p1: Point = {x: p1x, y: keyframeOut.yFactor * trackWidth};
    const p2xRelative = (keyframeIn.influence / 100) * duration;
    const p2: Point = {
      x: duration - p2xRelative,
      y: keyframeIn.yFactor * trackWidth,
    };
    const currentSpeedOut =
      p1x > 1e-6 ? p1.y / p1x : p1.y > 0 ? INFINITE_SPEED : -INFINITE_SPEED;
    const currentSpeedIn =
      p2xRelative > 1e-6
        ? (trackWidth - p2.y) / p2xRelative
        : trackWidth - p2.y > 0
          ? INFINITE_SPEED
          : -INFINITE_SPEED;
    let yMin = p0.y;
    let yMax = p0.y;

    for (let index = 0; index <= SAMPLES; index++) {
      const t = index / SAMPLES;
      const point = getPointOnCubicBezier(t, p0, p1, p2, p3);

      if (point.y < yMin) {
        yMin = point.y;
      }

      if (point.y > yMax) {
        yMax = point.y;
      }
    }

    return {
      p0,
      p1,
      p2,
      p3,
      speedIn: currentSpeedIn,
      speedOut: currentSpeedOut,
      valueYMax: yMax,
      valueYMin: yMin,
    };
  }, [keyframeIn, keyframeOut, duration, trackWidth]);
  const getContainerHeight = () => {
    if (["scale", "scaleAndRotate"].includes(animationProperty)) {
      return 250;
    }

    return 120;
  };
  const getTforX = useGetTforX(p0, p1, p2, p3);
  const linearTime = useLinearTime(elapsedTime, duration, animationMode);
  const animatedPoint = useMemo(
    () => getPointOnCubicBezier(getTforX(linearTime), p0, p1, p2, p3),
    [linearTime, getTforX, p0, p1, p2, p3]
  );
  const {speedYMax, speedYMin, speedYTicks} = useMemo(() => {
    if (duration <= 0 || trackWidth <= 0) {
      return {speedYMax: 500, speedYMin: -500, speedYTicks: [-500, 0, 500]};
    }

    const speedSamples: number[] = [];

    for (let index = 0; index <= SAMPLES; index++) {
      const t = index / SAMPLES;
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
      speedSamples.push(speedOut, speedIn);
    }

    const minValue = Math.min(...speedSamples, speedOut, speedIn);
    const maxValue = Math.max(...speedSamples, speedOut, speedIn);
    const range = Math.max(maxValue - minValue, 200);
    const padding = range * SPEED_AXIS_PADDING_FACTOR;
    let finalMin = minValue - padding;
    let finalMax = maxValue + padding;

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

    return {speedYMax: finalMax, speedYMin: finalMin, speedYTicks: ticks};
  }, [p0, p1, p2, p3, duration, trackWidth, speedOut, speedIn]);
  const {mapValueFromSvg, mapValueToSvg} = useValueGraphMapping(
    duration,
    trackWidth,
    valueGraphDims,
    valueGraphSvgReference
  );
  const {
    mapSpeedFromSvg,
    mapSpeedToSvg,
    mapTimeToSvg,
    speedCurvePath,
    speedGraphHandles,
  } = useSpeedGraphMapping(
    duration,
    speedGraphDims,
    speedGraphSvgReference,
    speedOut,
    speedIn,
    p0,
    p1,
    p2,
    p3,
    speedYMin,
    speedYMax
  );

  useEffect(() => {
    if (isPaused) {
      elapsedOnPauseReference.current = elapsedTime;

      return;
    }

    startTimeReference.current = performance.now() - elapsedOnPauseReference.current;
    lastFrameRenderTimeReference.current = performance.now();
    lastFpsUpdateTimeReference.current = 0;
    frameCountReference.current = 0;
    const animate = (timestamp: number) => {
      if (lastFpsUpdateTimeReference.current === 0) {
        lastFpsUpdateTimeReference.current = timestamp;
      }

      frameCountReference.current++;
      const timeSinceFpsUpdate = timestamp - lastFpsUpdateTimeReference.current;

      if (timeSinceFpsUpdate > 500) {
        setActualFps(frameCountReference.current / (timeSinceFpsUpdate / 1000));
        frameCountReference.current = 0;
        lastFpsUpdateTimeReference.current = timestamp;
      }

      const frameInterval = 1000 / fpsReference.current;
      const timeSinceLastRender = timestamp - lastFrameRenderTimeReference.current;

      if (timeSinceLastRender < frameInterval) {
        animationFrameReference.current = requestAnimationFrame(animate);

        return;
      }

      lastFrameRenderTimeReference.current =
        timestamp - (timeSinceLastRender % frameInterval);
      const totalElapsedTime = timestamp - startTimeReference.current;

      if (animationMode === "once" && totalElapsedTime >= duration * 1000) {
        setElapsedTime(duration * 1000);
        setIsPaused(true);
      } else {
        setElapsedTime(totalElapsedTime);
        animationFrameReference.current = requestAnimationFrame(animate);
      }
    };

    animationFrameReference.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameReference.current) {
        cancelAnimationFrame(animationFrameReference.current);
      }
    };
  }, [isPaused, duration, animationMode]);
  const handleMouseDown = useCallback(
    (
      e: React.MouseEvent | React.TouchEvent,
      handle: "p1" | "p2",
      graphType: "value" | "speed"
    ) => {
      e.preventDefault();
      document.body.style.cursor = "grabbing";
      setDragInfo({graphType, handle});

      if (graphType === "speed") {
        setDragSpeedAxisRange({max: speedYMax, min: speedYMin});
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
      const newParameters: Partial<KeyframeParameters> = {};
      const valueYMax = trackWidth * VALUE_Y_MAX_FACTOR;
      const valueYMin = trackWidth * VALUE_Y_MIN_FACTOR;

      if (dragInfo.graphType === "value") {
        const normP = mapValueFromSvg({x: touch.clientX, y: touch.clientY});

        if (!normP) {
          return;
        }

        let clampedY = Math.max(valueYMin, Math.min(valueYMax, normP.y));

        if (isShiftPressed) {
          clampedY = dragInfo.handle === "p1" ? 0 : trackWidth;
        }

        const handleX = Math.max(0, Math.min(duration, normP.x));

        newParameters.influence =
          ((dragInfo.handle === "p1" ? handleX : duration - handleX) / duration) * 100;
        newParameters.yFactor = clampedY / trackWidth;
      } else {
        const normP = mapSpeedFromSvg({x: touch.clientX, y: touch.clientY});

        if (!normP) {
          return;
        }

        const handleX = Math.max(0, Math.min(duration, normP.x));

        newParameters.influence =
          ((dragInfo.handle === "p1" ? handleX : duration - handleX) / duration) * 100;
        const speedYMinOnDrag = dragSpeedAxisRange?.min ?? speedYMin;
        const speedYMaxOnDrag = dragSpeedAxisRange?.max ?? speedYMax;
        let targetSpeed = isShiftPressed ? 0 : normP.y;

        targetSpeed = Math.max(speedYMinOnDrag, Math.min(speedYMaxOnDrag, targetSpeed));

        if (dragInfo.handle === "p1") {
          const p1x = (newParameters.influence / 100) * duration;
          let p1y = targetSpeed * p1x;

          p1y = Math.max(valueYMin, Math.min(valueYMax, p1y));
          newParameters.yFactor = p1y / trackWidth;
        } else {
          const p2xRelative = (newParameters.influence / 100) * duration;
          let p2y = trackWidth - targetSpeed * p2xRelative;

          p2y = Math.max(valueYMin, Math.min(valueYMax, p2y));
          newParameters.yFactor = p2y / trackWidth;
        }
      }

      if (dragInfo.handle === "p1") {
        setKeyframeOut((current) => ({...current, ...newParameters}));
      } else {
        setKeyframeIn((current) => ({...current, ...newParameters}));
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
      globalThis.addEventListener("mousemove", handleMouseMove);
      globalThis.addEventListener("touchmove", handleMouseMove, {
        passive: false,
      });
      globalThis.addEventListener("mouseup", handleMouseUp);
      globalThis.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
      globalThis.removeEventListener("touchmove", handleMouseMove);
      globalThis.removeEventListener("mouseup", handleMouseUp);
      globalThis.removeEventListener("touchend", handleMouseUp);
    };
  }, [dragInfo, handleMouseMove, handleMouseUp]);
  const timecode = useTimecode(linearTime, fps, duration);
  const resetTimer = () => {
    elapsedOnPauseReference.current = 0;
    setElapsedTime(0);
  };
  const handleResetAnimation = () => {
    resetTimer();
    setDuration(2);
    setFps(30);
    setKeyframeOut({influence: 33.33, yFactor: 0});
    setKeyframeIn({influence: 33.33, yFactor: 1});
    setIsPaused(false);
  };
  const handleTogglePlayPause = () => {
    if (animationMode === "once" && elapsedTime >= duration * 1000) {
      resetTimer();
      setIsPaused(false);
    } else {
      setIsPaused((previous) => !previous);
    }
  };
  const handleSetAnimationMode = (mode: AnimationMode) => {
    setAnimationMode(mode);
    resetTimer();
    setIsPaused(false);
  };

  return (
    <div className="easing-editor-wrapper">
      <div
        className="animation-demo-container"
        style={{minHeight: `${getContainerHeight()}px`}}
      >
        <AnimationDemo
          animatedPoint={animatedPoint}
          animationProperty={animationProperty}
          showTrail={showTrail}
          trackRef={trackReference}
          trackWidth={trackWidth}
          valueYMax={valueYMax}
          valueYMin={valueYMin}
        />
        <span className="timecode">{timecode}</span>
      </div>
      <div className="graphs-container">
        <ValueGraph
          animatedPoint={animatedPoint}
          animationProperty={animationProperty}
          dimensions={valueGraphDims}
          duration={duration}
          mapToSvg={mapValueToSvg}
          p0={p0}
          p1={p1}
          p2={p2}
          p3={p3}
          svgRef={valueGraphSvgReference}
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
          svgRef={speedGraphSvgReference}
          yTicks={speedYTicks}
          onMouseDown={(e, handle) => handleMouseDown(e, handle, "speed")}
        />
      </div>
      <AnimationControls
        actualFps={actualFps}
        animationMode={animationMode}
        animationProperty={animationProperty}
        duration={duration}
        fps={fps}
        handleResetAnimation={handleResetAnimation}
        handleTogglePlayPause={handleTogglePlayPause}
        isPaused={isPaused}
        setAnimationMode={handleSetAnimationMode}
        setAnimationProperty={setAnimationProperty}
        setDuration={setDuration}
        setFps={setFps}
        setShowTrail={setShowTrail}
        showTrail={showTrail}
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

    for (let index = 0; index <= SAMPLES; index++) {
      const t = index / SAMPLES;
      const x = getPointOnCubicBezier(t, p0, p1, p2, p3).x;

      map.push({t, x});
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

      let high = SAMPLES,
        index = 0,
        low = 0;

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
  svgReference: React.RefObject<SVGSVGElement | null>
) {
  const {height, width} = dimensions;
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

      return {
        x: PADDING + xRatio * graphWidth,
        y: PADDING + (1 - yRatio) * graphHeight,
      };
    },
    [duration, graphWidth, graphHeight, yMin, yRange]
  );
  const mapValueFromSvg = useCallback(
    (svgP: Point): Point | null => {
      if (!svgReference.current || trackWidth === 0 || graphWidth <= 0) {
        return null;
      }

      const svgRect = svgReference.current.getBoundingClientRect();
      const mouseX = svgP.x - svgRect.left;
      const mouseY = svgP.y - svgRect.top;
      const xRatio = (mouseX - PADDING) / graphWidth;
      const yRatio = 1 - (mouseY - PADDING) / graphHeight;
      const x = xRatio * duration;
      const y = yRatio * yRange + yMin;

      return {x, y};
    },
    [duration, trackWidth, graphWidth, graphHeight, yMin, yRange, svgReference]
  );

  return {mapValueFromSvg, mapValueToSvg};
}

function useSpeedGraphMapping(
  duration: number,
  dimensions: {width: number; height: number},
  svgReference: React.RefObject<SVGSVGElement | null>,
  speedOut: number,
  speedIn: number,
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  speedYMin: number,
  speedYMax: number
) {
  const {height, width} = dimensions;
  const graphWidth = width - PADDING * 2;
  const graphHeight = height - PADDING * 2;
  const speedYRange = speedYMax - speedYMin;
  const mapTimeToSvg = useCallback(
    (time: number) =>
      duration === 0 ? PADDING : PADDING + (time / duration) * graphWidth,
    [duration, graphWidth]
  );
  const mapSpeedToSvg = useCallback(
    (speed: number) =>
      speedYRange === 0
        ? PADDING + graphHeight / 2
        : PADDING + (1 - (speed - speedYMin) / speedYRange) * graphHeight,
    [speedYMin, speedYRange, graphHeight]
  );
  const mapSpeedFromSvg = useCallback(
    (svgP: Point): Point | null => {
      if (!svgReference.current || graphWidth <= 0 || speedYRange === 0) {
        return null;
      }

      const svgRect = svgReference.current.getBoundingClientRect();
      const mouseX = svgP.x - svgRect.left;
      const mouseY = svgP.y - svgRect.top;
      const xRatio = (mouseX - PADDING) / graphWidth;
      const yRatio = 1 - (mouseY - PADDING) / graphHeight;
      const x = xRatio * duration;
      const y = yRatio * speedYRange + speedYMin;

      return {x, y};
    },
    [duration, graphWidth, graphHeight, speedYMin, speedYRange, svgReference]
  );
  const speedCurvePath = useMemo(() => {
    if (width <= 0 || speedYRange === 0) {
      return "";
    }

    let path = `M ${mapTimeToSvg(0)},${mapSpeedToSvg(speedOut)}`;

    for (let index = 1; index <= SAMPLES; index++) {
      const t = index / SAMPLES;
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
  }, [width, speedOut, p0, p1, p2, p3, mapTimeToSvg, mapSpeedToSvg, speedYRange]);
  const speedGraphHandles = useMemo(() => {
    const influenceOutX = (p1.x / duration) * 100;
    const influenceInX = ((duration - p2.x) / duration) * 100;

    return {
      h1: {x: (influenceOutX / 100) * duration, y: speedOut},
      h2: {x: duration - (influenceInX / 100) * duration, y: speedIn},
    };
  }, [p1.x, p2.x, speedOut, speedIn, duration]);

  return {
    mapSpeedFromSvg,
    mapSpeedToSvg,
    mapTimeToSvg,
    speedCurvePath,
    speedGraphHandles,
  };
}

export default EasingEditor;
