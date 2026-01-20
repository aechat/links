import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import sizeOf from "image-size";
import ffmpeg from "fluent-ffmpeg";
import ffprobeInstaller from "@ffprobe-installer/ffprobe";

ffmpeg.setFfprobePath(ffprobeInstaller.path);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, "../public");
const MEDIA_DIR = path.join(PUBLIC_DIR, "media");

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function getVideoDimensions(filePath) {
  return new Promise((resolve) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) {
        console.warn(`Error probing video ${filePath}:`, err.message);
        resolve(null);
        return;
      }

      const videoStream = metadata.streams.find((s) => s.codec_type === "video");

      if (videoStream && videoStream.width && videoStream.height) {
        const rotation = videoStream.tags && videoStream.tags.rotate;
        if (rotation && (Math.abs(rotation) === 90 || Math.abs(rotation) === 270)) {
          resolve({
            width: videoStream.height,
            height: videoStream.width,
          });
        } else {
          resolve({
            width: videoStream.width,
            height: videoStream.height,
          });
        }
      } else {
        resolve(null);
      }
    });
  });
}

export async function getMediaMetadata() {
  console.log("Scanning media files...");

  if (!fs.existsSync(MEDIA_DIR)) {
    console.warn(`Media directory not found: ${MEDIA_DIR}`);
    return {};
  }

  const files = getAllFiles(MEDIA_DIR);
  const metadataMap = {};

  for (const file of files) {
    const relativePath = path.relative(PUBLIC_DIR, file).replace(/\\/g, "/");

    const ext = path.extname(file).toLowerCase();

    try {
      if ([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"].includes(ext)) {
        const buffer = fs.readFileSync(file);
        const dimensions = sizeOf(buffer);
        if (dimensions && dimensions.width && dimensions.height) {
          metadataMap[relativePath] = {
            width: dimensions.width,
            height: dimensions.height,
          };
        }
      } else if ([".mp4", ".webm", ".mov", ".mkv"].includes(ext)) {
        const dimensions = await getVideoDimensions(file);
        if (dimensions) {
          metadataMap[relativePath] = {
            width: dimensions.width,
            height: dimensions.height,
          };
        }
      }
    } catch (err) {
      console.warn(`Failed to process ${file}:`, err.message);
    }
  }

  return metadataMap;
}
