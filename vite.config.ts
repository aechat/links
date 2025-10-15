import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import {readFile, writeFile} from "fs/promises";
import path from "path";
import {defineConfig} from "vite";
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: ["es2017", "safari12"],
    outDir: "./dist/client",
    manifest: "manifest.json",
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  plugins: [
    react(),
    {
      name: "generate-404-html",
      closeBundle: async () => {
        const distPath = path.join(__dirname, "dist", "client");
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