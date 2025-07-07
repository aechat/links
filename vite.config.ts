import path from "path";

import {readFile, writeFile} from "fs/promises";

import react from "@vitejs/plugin-react";

import {defineConfig} from "vite";

import autoprefixer from "autoprefixer";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: ["es2017", "safari12"],
  },
  plugins: [
    react(),
    {
      name: "generate-404-html",
      closeBundle: async () => {
        const distPath = path.join(__dirname, "dist");

        const indexPath = path.join(distPath, "index.html");

        const notFoundPath = path.join(distPath, "404.html");

        try {
          const indexContent = await readFile(indexPath, "utf-8");
          await writeFile(notFoundPath, indexContent, "utf-8");
        } catch (err) {
          console.error("Ошибка при создании 404.html:", err);
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
