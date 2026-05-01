const HOVER_GROWTH_PX = 6;

const ACTIVE_GROWTH_PX = 3;

const getScaleValue = (dimension: number, growthPx: number): number => {
  const safeDimension = Math.max(dimension, 1);

  return (safeDimension + growthPx) / safeDimension;
};

export const applyInteractiveScaleVariables = (element: HTMLElement): void => {
  const width = element.offsetWidth;

  const height = element.offsetHeight;

  const baseDimension = Math.max(width, height);

  const hoverScale = getScaleValue(baseDimension, HOVER_GROWTH_PX);

  const activeScale = getScaleValue(baseDimension, ACTIVE_GROWTH_PX);

  element.style.setProperty("--links-hover-scale-x", hoverScale.toFixed(6));
  element.style.setProperty("--links-hover-scale-y", hoverScale.toFixed(6));
  element.style.setProperty("--links-active-scale-x", activeScale.toFixed(6));
  element.style.setProperty("--links-active-scale-y", activeScale.toFixed(6));
};
