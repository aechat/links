export const formatBytes = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kb = bytes / 1024;

  if (kb < 1024) {
    return `${kb.toFixed(1)} KB`;
  }

  const mb = kb / 1024;

  return `${mb.toFixed(1)} MB`;
};

export const formatPercentDelta = (fromBytes: number, toBytes: number): string => {
  if (fromBytes <= 0) {
    return "0%";
  }

  const delta = ((toBytes - fromBytes) / fromBytes) * 100;

  const rounded = Math.round(delta * 10) / 10;

  return `${rounded > 0 ? "+" : ""}${rounded}%`;
};
