import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import typescript2 from "rollup-plugin-typescript2";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";
import analyze from "rollup-plugin-analyzer";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.tsx", "src/components/**/*.ts"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      },
      exclude: ["vite.config.ts", "src/pages", "src/router", "src/layouts", "src/examples"],
      tsconfig: "tsconfig.json"
    }),
    viteStaticCopy({
      targets: [
        { src: "src/assets/react-pretty-box.scss", dest: "" },
        { src: "src/assets/scss", dest: "" }
      ]
    }),
    visualizer({
      filename: "stats.html",
      open: true
    }),
    analyze({ summaryOnly: true })
  ],
  server: {
    open: true
  },
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "reactPrettyBox",
      formats: ["es", "umd"],
      fileName: (format) => `react-pretty-box.${format}.js`
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/components/main.ts")
      },
      plugins: [terser()],
      external: ["react"],
      output: {
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css") return "react-pretty-box.css";
          return assetInfo.name;
        },
        globals: {
          "react": "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".jsx", ".tsx"], // .map((ext) => `.${ext}`).filter((ext) => ext !== ".jsx"),
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/pages": path.resolve(__dirname, "src/pages")
    }
  }
});
