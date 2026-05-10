export type AnimationMode = "ping-pong" | "loop" | "once";

export type AnimationProperty =
  | "position"
  | "positionAndRotation"
  | "positionAndScale"
  | "scale"
  | "rotation"
  | "scaleAndRotate";

export interface Point {
  x: number;
  y: number;
}

export interface DragInfo {
  graphType: "value" | "speed";
  handle: "p1" | "p2";
}

export interface GraphDimensions {
  height: number;
  width: number;
}

export interface KeyframeParameters {
  influence: number;
  yFactor: number;
}

export interface TimeMapEntry {
  t: number;
  x: number;
}

export const MODES: AnimationMode[] = ["ping-pong", "loop", "once"];

export const INFINITE_SPEED = 99_999;

export const PADDING = 20;

export const SAMPLES = 100;

export const SPEED_AXIS_PADDING_FACTOR = 0.2;

export const VALUE_Y_MAX_FACTOR = 1.5;

export const VALUE_Y_MIN_FACTOR = -0.5;
