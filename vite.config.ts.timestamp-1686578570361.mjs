// vite.config.ts
import { defineConfig } from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/vite/dist/node/index.js";
import react from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
import typescript2 from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js";
import dts from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/vite-plugin-dts/dist/index.mjs";
import { viteStaticCopy } from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/vite-plugin-static-copy/dist/index.js";
import terser from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/@rollup/plugin-terser/dist/es/index.js";
var __vite_injected_original_dirname = "/Users/israel/Desktop/Trabajos/side-projects/react-pretty-box";
var vite_config_default = defineConfig({
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
    cssMinify: true,
    lib: {
      entry: "src/components/index.ts",
      name: "react-pretty-box",
      formats: ["es", "umd"],
      fileName: (format) => `react-pretty-box.${format}.js`
    },
    rollupOptions: {
      input: {
        main: path.resolve(__vite_injected_original_dirname, "src/components/main.ts")
      },
      plugins: [terser()],
      external: ["react"],
      output: {
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css") {
            return "react-pretty-box.css";
          }
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
    extensions: [".js", ".jsx", ".ts", ".jsx", ".tsx"],
    // .map((ext) => `.${ext}`).filter((ext) => ext !== ".jsx"),
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@/components": path.resolve(__vite_injected_original_dirname, "src/components"),
      "@/assets": path.resolve(__vite_injected_original_dirname, "src/assets"),
      "@/pages": path.resolve(__vite_injected_original_dirname, "src/pages")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaXNyYWVsL0Rlc2t0b3AvVHJhYmFqb3Mvc2lkZS1wcm9qZWN0cy9yZWFjdC1wcmV0dHktYm94XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaXNyYWVsL0Rlc2t0b3AvVHJhYmFqb3Mvc2lkZS1wcm9qZWN0cy9yZWFjdC1wcmV0dHktYm94L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9pc3JhZWwvRGVza3RvcC9UcmFiYWpvcy9zaWRlLXByb2plY3RzL3JlYWN0LXByZXR0eS1ib3gvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHR5cGVzY3JpcHQyIGZyb20gXCJyb2xsdXAtcGx1Z2luLXR5cGVzY3JpcHQyXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSBcInZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5XCI7XG5pbXBvcnQgdGVyc2VyIGZyb20gXCJAcm9sbHVwL3BsdWdpbi10ZXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWVcbiAgICB9KSxcbiAgICB0eXBlc2NyaXB0Mih7XG4gICAgICBjaGVjazogZmFsc2UsXG4gICAgICBpbmNsdWRlOiBbXCJzcmMvY29tcG9uZW50cy8qKi8qLnRzeFwiXSxcbiAgICAgIHRzY29uZmlnT3ZlcnJpZGU6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICAgICAgICBzb3VyY2VNYXA6IHRydWUsXG4gICAgICAgICAgZGVjbGFyYXRpb246IHRydWUsXG4gICAgICAgICAgZGVjbGFyYXRpb25NYXA6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGV4Y2x1ZGU6IFtcInZpdGUuY29uZmlnLnRzXCJdXG4gICAgfSksXG4gICAgdml0ZVN0YXRpY0NvcHkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7IHNyYzogXCJzcmMvYXNzZXRzL3JlYWN0LXByZXR0eS1ib3guc2Nzc1wiLCBkZXN0OiBcIlwiIH0sXG4gICAgICAgIHsgc3JjOiBcInNyYy9hc3NldHMvc2Nzc1wiLCBkZXN0OiBcIlwiIH1cbiAgICAgIF1cbiAgICB9KVxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBvcGVuOiB0cnVlXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIGNzc01pbmlmeTogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBcInNyYy9jb21wb25lbnRzL2luZGV4LnRzXCIsXG4gICAgICBuYW1lOiBcInJlYWN0LXByZXR0eS1ib3hcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwidW1kXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQ6IHN0cmluZykgPT4gYHJlYWN0LXByZXR0eS1ib3guJHtmb3JtYXR9LmpzYFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvY29tcG9uZW50cy9tYWluLnRzXCIpXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW3RlcnNlcigpXSxcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09PSBcIm1haW4uY3NzXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJlYWN0LXByZXR0eS1ib3guY3NzXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIFwicmVhY3RcIjogXCJSZWFjdFwiLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgZXh0ZW5zaW9uczogW1wiLmpzXCIsIFwiLmpzeFwiLCBcIi50c1wiLCBcIi5qc3hcIiwgXCIudHN4XCJdLCAvLyAubWFwKChleHQpID0+IGAuJHtleHR9YCkuZmlsdGVyKChleHQpID0+IGV4dCAhPT0gXCIuanN4XCIpLFxuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgIFwiQC9jb21wb25lbnRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHNcIiksXG4gICAgICBcIkAvYXNzZXRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2Fzc2V0c1wiKSxcbiAgICAgIFwiQC9wYWdlc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9wYWdlc1wiKVxuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlXLFNBQVMsb0JBQW9CO0FBQ3RZLE9BQU8sV0FBVztBQUNsQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sWUFBWTtBQU5uQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMseUJBQXlCO0FBQUEsTUFDbkMsa0JBQWtCO0FBQUEsUUFDaEIsaUJBQWlCO0FBQUEsVUFDZixRQUFRO0FBQUEsVUFDUixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM1QixDQUFDO0FBQUEsSUFDRCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxFQUFFLEtBQUssb0NBQW9DLE1BQU0sR0FBRztBQUFBLFFBQ3BELEVBQUUsS0FBSyxtQkFBbUIsTUFBTSxHQUFHO0FBQUEsTUFDckM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUFtQixvQkFBb0I7QUFBQSxJQUNwRDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBVyxhQUFRLGtDQUFXLHdCQUF3QjtBQUFBLE1BQ3hEO0FBQUEsTUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQUEsTUFDbEIsVUFBVSxDQUFDLE9BQU87QUFBQSxNQUNsQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxTQUFTLFlBQVk7QUFDakMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU8sVUFBVTtBQUFBLFFBQ25CO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLE9BQU8sUUFBUSxPQUFPLFFBQVEsTUFBTTtBQUFBO0FBQUEsSUFDakQsT0FBTztBQUFBLE1BQ0wsS0FBVSxhQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxnQkFBcUIsYUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUN4RCxZQUFpQixhQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUNoRCxXQUFnQixhQUFRLGtDQUFXLFdBQVc7QUFBQSxJQUNoRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
