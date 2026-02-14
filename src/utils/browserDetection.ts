interface BrowserInfo {
  isLegacy: boolean;
  name: string;
  version: number;
}

interface PlatformInfo {
  isAndroid: boolean;
  isIOS: boolean;
  isMacOS: boolean;
  isMobile: boolean;
  isWindows: boolean;
}

const MOBILE_VIEWPORT_MAX_WIDTH = 768;

const getUserAgent = (): string => {
  if (globalThis.window === undefined || !globalThis.navigator) {
    return "";
  }

  return globalThis.navigator.userAgent ?? "";
};

const getUserAgentLowerCase = (): string => getUserAgent().toLowerCase();

export function getBrowserInfo(): BrowserInfo {
  if (globalThis.window === undefined || !globalThis.navigator) {
    return {isLegacy: false, name: "Unknown", version: 0};
  }

  const ua = getUserAgent();

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

export const getPlatformInfo = (): PlatformInfo => {
  if (globalThis.window === undefined || !globalThis.navigator) {
    return {
      isAndroid: false,
      isIOS: false,
      isMacOS: false,
      isMobile: false,
      isWindows: false,
    };
  }

  const ua = getUserAgentLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(ua);

  const isAndroid = /android/.test(ua);

  const isMacOS = /macintosh|mac os x/.test(ua);

  const isWindows = /windows/.test(ua);

  const uaDataMobile = globalThis.navigator.userAgentData?.mobile;

  const isMobile =
    typeof uaDataMobile === "boolean"
      ? uaDataMobile
      : isIOS || isAndroid || /mobile/.test(ua);

  return {isAndroid, isIOS, isMacOS, isMobile, isWindows};
};

export const isMobileDevice = (
  options: {useViewportFallback?: boolean; maxWidth?: number} = {}
): boolean => {
  if (globalThis.window === undefined) {
    return false;
  }

  const {isMobile} = getPlatformInfo();

  const useViewportFallback = options.useViewportFallback === true;

  const maxWidth = options.maxWidth ?? MOBILE_VIEWPORT_MAX_WIDTH;

  const viewportIsMobile = useViewportFallback && globalThis.innerWidth <= maxWidth;

  return isMobile || viewportIsMobile;
};

export const isWebKitBrowser = (): boolean => {
  const ua = getUserAgent();

  if (!ua) {
    return false;
  }

  return (
    /AppleWebKit|Epiphany|Safari/i.test(ua) && !/Chrome|Chromium|Edg|OPR|Brave/i.test(ua)
  );
};
