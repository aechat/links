import React, {useEffect, useState} from "react";

import styles from "./EasingEditor.module.scss";

import {type AnimationProperty, type Point} from "./easingEditorTypes";

const POSITION_PROPERTIES = new Set<AnimationProperty>([
  "position",
  "positionAndRotation",
  "positionAndScale",
]);

const Ruler: React.FC<{trackWidth: number; style?: React.CSSProperties}> = ({
  style,
  trackWidth,
}) => {
  if (trackWidth === 0) {
    return <></>;
  }

  const numberDivisions = 10;

  const tickInterval = trackWidth / numberDivisions;

  const ticks = Array.from(
    {length: numberDivisions + 1},
    (_, index) => index * tickInterval
  );

  return (
    <div
      className={styles["ruler"]}
      style={style}
    >
      {ticks.map((tick) => {
        const labelClassName = [
          styles["ruler-label"],
          tick === 0 ? styles["ruler-label--start"] : "",
          tick === trackWidth ? styles["ruler-label--end"] : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            key={tick}
            className={styles["ruler-tick"]}
            style={{left: `calc(${tick}px - 0.5px)`}}
          >
            <span className={labelClassName}>{Math.round(tick)}</span>
          </div>
        );
      })}
    </div>
  );
};

interface AnimationDemoProperties {
  animatedPoint: Point;
  animationProperty: AnimationProperty;
  isTrailVisible: boolean;
  trackRef: React.RefObject<HTMLDivElement | null>;
  trackWidth: number;
  valueYMax: number;
  valueYMin: number;
}

interface TrailFrame {
  point: Point;
  progress: number;
}

const getAnimatedTransform = (
  animationProperty: AnimationProperty,
  progress: number
): string => {
  switch (animationProperty) {
    case "scale": {
      return `scale(${0.5 + progress * 2})`;
    }

    case "rotation": {
      return `rotate(${progress * 720}deg)`;
    }

    case "scaleAndRotate": {
      return `scale(${0.5 + progress * 2}) rotate(${progress * 720}deg)`;
    }

    case "positionAndRotation": {
      return `rotate(${progress * 720}deg)`;
    }

    case "positionAndScale": {
      return `scale(${0.5 + progress * 1.5})`;
    }

    default: {
      return "";
    }
  }
};

export const AnimationDemo: React.FC<AnimationDemoProperties> = ({
  animatedPoint,
  animationProperty,
  isTrailVisible,
  trackRef,
  trackWidth,
  valueYMax,
  valueYMin,
}) => {
  const curveRange = valueYMax - valueYMin;

  const isPositionProperty = POSITION_PROPERTIES.has(animationProperty);

  const shouldScale = isPositionProperty && curveRange > trackWidth && trackWidth > 0;

  const scaleX = shouldScale ? trackWidth / curveRange : 1;

  const offset = shouldScale ? -valueYMin * scaleX : 0;

  const trackElementsStyle = {
    transform: `translateX(${offset}px) scaleX(${scaleX})`,
    transformOrigin: "left",
  };

  const [trailPositions, setTrailPositions] = useState<TrailFrame[]>([]);

  useEffect(() => {
    if (isTrailVisible && isPositionProperty) {
      setTrailPositions((previous) => {
        const progress = animatedPoint.y / trackWidth;

        const newTrail = [...previous, {point: animatedPoint, progress}];

        return newTrail.slice(Math.max(newTrail.length - 15, 0));
      });
    } else {
      setTrailPositions([]);
    }
  }, [animatedPoint, isPositionProperty, isTrailVisible, trackWidth]);

  const getAnimatedStyle = () => {
    if (trackWidth === 0) {
      return {};
    }

    const progress = animatedPoint.y / trackWidth;

    const left = shouldScale ? animatedPoint.y * scaleX + offset : animatedPoint.y;

    const translateY = "translateY(-50%)";

    const animatedTransform = getAnimatedTransform(animationProperty, progress);

    if (!isPositionProperty) {
      return {
        left: "50%",
        top: "50%",
        transform: `${translateY} translateX(-50%) ${animatedTransform}`,
      };
    }

    return {
      left: `${left}px`,
      top: "50%",
      transform: `${translateY} translateX(-50%) ${animatedTransform}`,
    };
  };

  return (
    <div className={styles["animation-preview"]}>
      <div
        ref={trackRef}
        className={styles["animation-track"]}
      >
        {isPositionProperty && (
          <div
            className={styles["track-visuals"]}
            style={trackElementsStyle}
          >
            <Ruler trackWidth={trackWidth} />
            <div className={styles["track-line"]} />
          </div>
        )}
        {isTrailVisible &&
          trailPositions.map((trailFrame, index) => {
            const opacity = 0.5 * ((index + 1) / trailPositions.length);

            const left = shouldScale
              ? trailFrame.point.y * scaleX + offset
              : trailFrame.point.y;

            const animatedTransform = getAnimatedTransform(
              animationProperty,
              trailFrame.progress
            );

            return (
              <div
                key={index}
                className={styles["animated-cube-trail"]}
                style={{
                  left: `${left}px`,
                  opacity: opacity,
                  top: "50%",
                  transform: `translateY(-50%) translateX(-50%) ${animatedTransform}`,
                }}
              ></div>
            );
          })}
        <div
          className={styles["animated-cube"]}
          style={getAnimatedStyle()}
        ></div>
      </div>
    </div>
  );
};
