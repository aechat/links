import React, {useMemo} from "react";

import styles from "./EasingEditor.module.scss";
import {
  type AnimationProperty,
  type GraphDimensions,
  PADDING,
  type Point,
  VALUE_Y_MAX_FACTOR,
  VALUE_Y_MIN_FACTOR,
} from "./easingEditorTypes";

interface ValueGraphProperties {
  animatedPoint: Point;
  animationProperty: AnimationProperty;
  dimensions: GraphDimensions;
  duration: number;
  mapToSvg: (p: Point) => Point;
  onMouseDown: (event: React.MouseEvent | React.TouchEvent, handle: "p1" | "p2") => void;
  p0: Point;
  p1: Point;
  p2: Point;
  p3: Point;
  svgRef: React.RefObject<SVGSVGElement | null>;
  trackWidth: number;
}

export const ValueGraph: React.FC<ValueGraphProperties> = ({
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
    <div className={styles["graph-container"]}>
      <label>Value Graph</label>
      <svg
        ref={svgRef}
        className={styles["graph-svg"]}
      >
        {dimensions.width > 0 && (
          <>
            <rect
              className={styles["graph-background"]}
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
                      ? styles["grid-line-major"]
                      : styles["grid-line-minor"]
                  }
                  x1={PADDING}
                  x2={dimensions.width - PADDING}
                  y1={mapToSvg({x: 0, y: tick}).y}
                  y2={mapToSvg({x: 0, y: tick}).y}
                />
                <text
                  className={`${styles["grid-text"]} ${styles["grid-text-y"]}`}
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
                      ? styles["grid-line-major"]
                      : styles["grid-line-minor"]
                  }
                  x1={mapToSvg({x: tick, y: 0}).x}
                  x2={mapToSvg({x: tick, y: 0}).x}
                  y1={PADDING}
                  y2={dimensions.height - PADDING}
                />
                <text
                  className={`${styles["grid-text"]} ${styles["grid-text-x"]}`}
                  x={mapToSvg({x: tick, y: 0}).x}
                  y={dimensions.height - 8}
                >{`${tick.toFixed(2)}s`}</text>
              </g>
            ))}
            <path
              className={styles["graph-curve"]}
              d={valueCurvePath}
            />
            <line
              className={styles["control-line"]}
              x1={svgP0.x}
              x2={svgP1.x}
              y1={svgP0.y}
              y2={svgP1.y}
            />
            <line
              className={styles["control-line"]}
              x1={svgP3.x}
              x2={svgP2.x}
              y1={svgP3.y}
              y2={svgP2.y}
            />
            <circle
              className={styles["animated-dot"]}
              cx={mapToSvg(animatedPoint).x}
              cy={mapToSvg(animatedPoint).y}
              r="5"
            />
            <rect
              className={styles["keyframe-point"]}
              height="8"
              width="8"
              x={svgP0.x - 4}
              y={svgP0.y - 4}
            />
            <rect
              className={styles["keyframe-point"]}
              height="8"
              width="8"
              x={svgP3.x - 4}
              y={svgP3.y - 4}
            />
            <circle
              className={styles["handle"]}
              cx={svgP1.x}
              cy={svgP1.y}
              r="6"
              style={{pointerEvents: "none"}}
            />
            <circle
              className={styles["handle"]}
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
              onMouseDown={(event) => onMouseDown(event, "p1")}
              onTouchStart={(event) => onMouseDown(event, "p1")}
            />
            <circle
              cx={svgP2.x}
              cy={svgP2.y}
              fill="transparent"
              r="20"
              style={{cursor: "grab"}}
              onMouseDown={(event) => onMouseDown(event, "p2")}
              onTouchStart={(event) => onMouseDown(event, "p2")}
            />
          </>
        )}
      </svg>
    </div>
  );
};

interface SpeedGraphProperties {
  curvePath: string;
  dimensions: GraphDimensions;
  duration: number;
  handle1: Point;
  handle2: Point;
  mapSpeedToSvg: (speed: number) => number;
  mapTimeToSvg: (time: number) => number;
  onMouseDown: (event: React.MouseEvent | React.TouchEvent, handle: "p1" | "p2") => void;
  svgRef: React.RefObject<SVGSVGElement | null>;
  yTicks: number[];
}

export const SpeedGraph: React.FC<SpeedGraphProperties> = ({
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
    <div className={styles["graph-container"]}>
      <label>Speed Graph</label>
      <svg
        ref={svgRef}
        className={styles["graph-svg"]}
      >
        {dimensions.width > 0 && (
          <>
            <rect
              className={styles["graph-background"]}
              height={dimensions.height - PADDING * 2}
              width={dimensions.width - PADDING * 2}
              x={PADDING}
              y={PADDING}
            />
            {yTicks.map((tick) => (
              <g key={`y-speed-${tick}`}>
                <line
                  className={
                    tick === 0 ? styles["grid-line-major"] : styles["grid-line-minor"]
                  }
                  x1={PADDING}
                  x2={dimensions.width - PADDING}
                  y1={mapSpeedToSvg(tick)}
                  y2={mapSpeedToSvg(tick)}
                />
                <text
                  className={`${styles["grid-text"]} ${styles["grid-text-y"]}`}
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
                      ? styles["grid-line-major"]
                      : styles["grid-line-minor"]
                  }
                  x1={mapTimeToSvg(tick)}
                  x2={mapTimeToSvg(tick)}
                  y1={PADDING}
                  y2={dimensions.height - PADDING}
                />
                <text
                  className={`${styles["grid-text"]} ${styles["grid-text-x"]}`}
                  x={mapTimeToSvg(tick)}
                  y={dimensions.height - 8}
                >{`${tick.toFixed(2)}s`}</text>
              </g>
            ))}
            <path
              className={styles["graph-curve"]}
              d={curvePath}
            />
            <line
              className={styles["control-line"]}
              x1={svgP0.x}
              x2={svgH1.x}
              y1={svgP0.y}
              y2={svgH1.y}
            />
            <line
              className={styles["control-line"]}
              x1={svgP3.x}
              x2={svgH2.x}
              y1={svgP3.y}
              y2={svgH2.y}
            />
            <rect
              className={styles["keyframe-point"]}
              height="8"
              width="8"
              x={svgP0.x - 4}
              y={svgP0.y - 4}
            />
            <rect
              className={styles["keyframe-point"]}
              height="8"
              width="8"
              x={svgP3.x - 4}
              y={svgP3.y - 4}
            />
            <circle
              className={styles["handle"]}
              cx={svgH1.x}
              cy={svgH1.y}
              r="6"
              style={{pointerEvents: "none"}}
            />
            <circle
              className={styles["handle"]}
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
              onMouseDown={(event) => onMouseDown(event, "p1")}
              onTouchStart={(event) => onMouseDown(event, "p1")}
            />
            <circle
              cx={svgH2.x}
              cy={svgH2.y}
              fill="transparent"
              r="20"
              style={{cursor: "grab"}}
              onMouseDown={(event) => onMouseDown(event, "p2")}
              onTouchStart={(event) => onMouseDown(event, "p2")}
            />
          </>
        )}
      </svg>
    </div>
  );
};
