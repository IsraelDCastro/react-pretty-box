import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import typescript2 from "rollup-plugin-typescript2";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.tsx"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      },
      exclude: ["vite.config.ts"]
    }),
    viteStaticCopy({
      targets: [
        { src: "src/assets/react-pretty-box.scss", dest: "" },
        { src: "src/assets/scss", dest: "" }
      ]
    })
  ],
  server: {
    open: true
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: "src/components/index.ts",
      formats: ["es", "umd"],
      name: "react-pretty-box",
      fileName: (format: string) => `react-pretty-box.${format}.js`
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/components/main.ts")
      },
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
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/pages": path.resolve(__dirname, "src/pages")
    }
  }
});
