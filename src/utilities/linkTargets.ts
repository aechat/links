import {resolveDetailsByAnchor} from "./anchorResolvers";
import {
  getFileNameFromHref,
  isGithubRawFromRepository,
  isHttpLink,
} from "./linkUtilities";

export interface ArticleLinkTarget {
  id: string;
  title: string;
}

export interface DownloadLinkTarget {
  fileKind: string;
  fileMarkClass: string;
  fileName: string;
  fileSize?: string;
  href: string;
}

const downloadFileMarkClassByExtension: Record<string, string> = {
  avi: "video",
  flac: "audio",
  gif: "image",
  jpeg: "image",
  jpg: "image",
  m4a: "audio",
  mkv: "video",
  mov: "video",
  mp3: "audio",
  mp4: "video",
  ogg: "audio",
  png: "image",
  svg: "image",
  wav: "audio",
  webm: "video",
  webp: "image",
};

const downloadFileKindByExtension: Record<string, string> = {
  "7z": "архив",
  "8be": "плагин",
  "8bf": "плагин",
  "8bi": "плагин",
  "8bx": "плагин",
  "abr": "набор кистей",
  "aep": "проект",
  "aex": "плагин",
  "app": "приложение",
  "atn": "операцию",
  "atom": "пакет шаблонов",
  "avi": "видео",
  "bap": "пресет",
  "bcp": "пресет",
  "bsp": "пресет",
  "bundle": "плагин",
  "ccx": "расширение",
  "cube": "LUT-профиль",
  "definition": "служебный файл",
  "dmg": "установщик",
  "effect": "пресет",
  "enc": "шаблон кодирования",
  "exe": "установщик",
  "ffx": "пресет",
  "flac": "аудио",
  "gif": "изображение",
  "gp": "пресет",
  "grd": "градиент",
  "gz": "архив",
  "hosts": "системный файл",
  "iso": "ISO-образ",
  "itx": "LUT-профиль",
  "jpeg": "изображение",
  "jpg": "изображение",
  "json": "JSON-файл",
  "jsx": "скрипт",
  "jsxbin": "скрипт",
  "license": "лицензионный файл",
  "look": "LUT-профиль",
  "ls3": "LUT-профиль",
  "lut": "LUT-профиль",
  "m4a": "аудио",
  "mblook": "LUT-профиль",
  "mbr": "пакет шаблонов",
  "mkv": "видео",
  "mogrt": "графический шаблон",
  "mov": "видео",
  "mp3": "аудио",
  "mp4": "видео",
  "msi": "установщик",
  "ogg": "аудио",
  "otf": "шрифт",
  "pdf": "документ",
  "pkg": "установщик",
  "plugin": "плагин",
  "png": "изображение",
  "prfpset": "пресет",
  "prm": "плагин",
  "project": "служебный файл",
  "prproj": "проект",
  "rar": "архив",
  "reg": "файл реестра",
  "rgx": "LUT-профиль",
  "svg": "изображение",
  "tar": "архив",
  "thumb": "миниатюру",
  "torrent": "торрент-файл",
  "transition": "пресет",
  "ttf": "шрифт",
  "vst": "аудиоплагин",
  "vst3": "аудиоплагин",
  "wav": "аудио",
  "webm": "видео",
  "webp": "изображение",
  "zip": "архив",
  "zxp": "расширение",
};

const getTargetElement = (target: EventTarget | null): HTMLElement | undefined => {
  return target instanceof HTMLElement ? target : undefined;
};

const getFileExtension = (fileName: string): string | undefined =>
  fileName.split(".").pop()?.toLowerCase();

const getDownloadFileMarkClass = (fileName: string): string => {
  const extension = getFileExtension(fileName);

  if (!extension) {
    return "file";
  }

  return downloadFileMarkClassByExtension[extension] || "file";
};

const getDownloadFileKind = (fileName: string): string => {
  const extension = getFileExtension(fileName);

  if (!extension) {
    return "файл";
  }

  return downloadFileKindByExtension[extension] || "файл";
};

const getDownloadFileName = (anchor: HTMLAnchorElement, href: string) => {
  const fileNameFromDownloadAttribute = anchor.getAttribute("download");

  if (fileNameFromDownloadAttribute?.trim()) {
    return fileNameFromDownloadAttribute.trim();
  }

  return getFileNameFromHref(href, "файл");
};

const shouldHandleAsDownload = (href: string): boolean => {
  return !isHttpLink(href) || isGithubRawFromRepository(href, "aechat", "links");
};

const getArticleTitle = (summary: Element): string => {
  const titleElement = summary.querySelector("h2");

  return (titleElement ? titleElement.textContent : "без названия").replace(
    /^\d+\.\d+\.\s*/,
    ""
  );
};

export const getExternalLinkHref = (target: EventTarget | null): string | undefined => {
  const anchor = getTargetElement(target)?.closest<HTMLAnchorElement>("a[href]");

  if (!anchor || anchor.hasAttribute("download")) {
    return;
  }

  const href = anchor.getAttribute("href");

  if (!href || !isHttpLink(href)) {
    return;
  }

  if (isGithubRawFromRepository(href, "aechat", "links")) {
    return;
  }

  return href;
};

export const resolveDownloadLinkTarget = (
  target: EventTarget | null,
  fileSizeByHref: Record<string, string> = {}
): DownloadLinkTarget | undefined => {
  const anchor =
    getTargetElement(target)?.closest<HTMLAnchorElement>("a[download][href]");

  const href = anchor?.getAttribute("href");

  if (!anchor || !href || !shouldHandleAsDownload(href)) {
    return;
  }

  const fileName = getDownloadFileName(anchor, href);

  return {
    fileKind: getDownloadFileKind(fileName),
    fileMarkClass: getDownloadFileMarkClass(fileName),
    fileName,
    fileSize: fileSizeByHref[href],
    href,
  };
};

export const resolveArticleLinkTarget = (
  target: EventTarget | null,
  currentTarget: EventTarget | null
): ArticleLinkTarget | undefined => {
  const anchor = getTargetElement(target)?.closest<HTMLAnchorElement>('a[href^="#"]');

  const href = anchor?.getAttribute("href");

  if (!href || href.length <= 1) {
    return;
  }

  const targetDetails = resolveDetailsByAnchor(href.slice(1));

  if (!targetDetails) {
    return;
  }

  const currentDetails = getTargetElement(currentTarget)?.closest("details");

  if (currentDetails === targetDetails) {
    return;
  }

  const summary = targetDetails.querySelector("summary");

  if (!summary?.id) {
    return;
  }

  return {
    id: summary.id,
    title: getArticleTitle(summary),
  };
};
