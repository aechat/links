interface BrowserInfo {
  isLegacy: boolean;
  name: string;
  version: number;
}

export function getBrowserInfo(): BrowserInfo {
  if (globalThis.window === undefined || !globalThis.navigator) {
    return {isLegacy: false, name: "Unknown", version: 0};
  }

  const ua = globalThis.navigator.userAgent;

  let name = "Unknown";

  let version = 0;

  let match = /(Chrom(e|ium))\/((\d+)\.?(\d+)?\.?(\d+)?\.?(\d+)?)/.exec(ua);

  if (match) {
    name = "Chrome";
    version = Number.parseInt(match[4], 10);
  }

  match = /(Firefox)\/((\d+)\.?(\d+)?\.?(\d+)?\.?(\d+)?)/.exec(ua);

  if (!match && ua.includes("Firefox")) {
    match = /(Firefox)\/(\d+)/.exec(ua);
  }

  if (match) {
    name = "Firefox";
    version = Number.parseInt(match[2], 10);
  }

  match = /Version\/((\d+)(?:\.\d+){0,2})\s(Safari)\/((\d+)(?:\.\d+){0,2})/.exec(ua);

  if (match && !ua.includes("Chrome") && !ua.includes("Edge") && !ua.includes("Opera")) {
    name = "Safari";
    version = Number.parseInt(match[2], 10);
  }

  match = /(Edg)\/((\d+)\.?(\d+)?\.?(\d+)?\.?(\d+)?)/.exec(ua);

  if (match) {
    name = "Edge";
    version = Number.parseInt(match[2], 10);
  }

  match = /(Opera|OPR)\/((\d+)\.?(\d+)?\.?(\d+)?\.?(\d+)?)/.exec(ua);

  if (match) {
    name = "Opera";
    version = Number.parseInt(match[2], 10);
  }

  const legacyThresholds: {[key: string]: number} = {
    Chrome: 90,
    Edge: 90,
    Firefox: 90,
    Opera: 75,
    Safari: 14,
  };

  const isLegacy =
    version > 0 &&
    legacyThresholds[name] !== undefined &&
    version < legacyThresholds[name];

  return {isLegacy, name, version};
}
