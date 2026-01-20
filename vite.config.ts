import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import {readFile, writeFile} from "node:fs/promises";
import path from "node:path";
import {defineConfig} from "vite";
import {getMediaMetadata} from "./scripts/getMediaMetadata.js";
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "./dist/client",
    manifest: "manifest.json",
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11", "Firefox 66"],
    }),
    react(),
    {
      name: "media-metadata-provider",
      resolveId(id) {
        if (id === "virtual:media-metadata") {
          return "\0virtual:media-metadata";
        }
      },
      load: async (id) => {
        if (id === "\0virtual:media-metadata") {
          const metadata = await getMediaMetadata();
          return `export default ${JSON.stringify(metadata)};`;
        }
      },
    },
    {
      name: "generate-404-html",
      closeBundle: async () => {
        const distributionPath = path.join(__dirname, "dist", "client");
        const indexPath = path.join(distributionPath, "index.html");
        const notFoundPath = path.join(distributionPath, "404.html");
        try {
          const indexContent = await readFile(indexPath, "utf-8");
          await writeFile(notFoundPath, indexContent, "utf-8");
        } catch (error) {
          console.error("Ошибка при создании 404.html:", error);
        }
      },
    },
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            ">0.2%",
            "not dead",
            "not op_mini all",
            "last 1 chrome version",
            "last 1 firefox version",
            "last 2 safari version",
          ],
          grid: true,
        }),
      ],
    },
  },
});
