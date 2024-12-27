// vite.config.ts
import { defineConfig } from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/vite/dist/node/index.js";
import react from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
import typescript2 from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js";
import dts from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/vite-plugin-dts/dist/index.mjs";
import { viteStaticCopy } from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/vite-plugin-static-copy/dist/index.js";
import terser from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/@rollup/plugin-terser/dist/es/index.js";
import { visualizer } from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import analyze from "file:///Users/israel/Desktop/Trabajos/side-projects/react-pretty-box/node_modules/rollup-plugin-analyzer/index.js";
var __vite_injected_original_dirname = "/Users/israel/Desktop/Trabajos/side-projects/react-pretty-box";
var vite_config_default = defineConfig({
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
    // open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: ["@use 'scss/_variables.scss' as *;"]
      }
    }
  },
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/components/index.ts"),
      name: "reactPrettyBox",
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
    extensions: [".js", ".jsx", ".ts", ".jsx", ".tsx"],
    // .map((ext) => `.${ext}`).filter((ext) => ext !== ".jsx"),
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "@/components": path.resolve(__vite_injected_original_dirname, "src/components"),
      "@/assets": path.resolve(__vite_injected_original_dirname, "src/assets"),
      "@/pages": path.resolve(__vite_injected_original_dirname, "src/pages")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaXNyYWVsL0Rlc2t0b3AvVHJhYmFqb3Mvc2lkZS1wcm9qZWN0cy9yZWFjdC1wcmV0dHktYm94XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaXNyYWVsL0Rlc2t0b3AvVHJhYmFqb3Mvc2lkZS1wcm9qZWN0cy9yZWFjdC1wcmV0dHktYm94L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9pc3JhZWwvRGVza3RvcC9UcmFiYWpvcy9zaWRlLXByb2plY3RzL3JlYWN0LXByZXR0eS1ib3gvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHR5cGVzY3JpcHQyIGZyb20gXCJyb2xsdXAtcGx1Z2luLXR5cGVzY3JpcHQyXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSBcInZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5XCI7XG5pbXBvcnQgdGVyc2VyIGZyb20gXCJAcm9sbHVwL3BsdWdpbi10ZXJzZXJcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5pbXBvcnQgYW5hbHl6ZSBmcm9tIFwicm9sbHVwLXBsdWdpbi1hbmFseXplclwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbXG5cdFx0cmVhY3QoKSxcblx0XHRkdHMoe1xuXHRcdFx0aW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZVxuXHRcdH0pLFxuXHRcdHR5cGVzY3JpcHQyKHtcblx0XHRcdGNoZWNrOiBmYWxzZSxcblx0XHRcdGluY2x1ZGU6IFtcInNyYy9jb21wb25lbnRzLyoqLyoudHN4XCIsIFwic3JjL2NvbXBvbmVudHMvKiovKi50c1wiXSxcblx0XHRcdHRzY29uZmlnT3ZlcnJpZGU6IHtcblx0XHRcdFx0Y29tcGlsZXJPcHRpb25zOiB7XG5cdFx0XHRcdFx0b3V0RGlyOiBcImRpc3RcIixcblx0XHRcdFx0XHRzb3VyY2VNYXA6IHRydWUsXG5cdFx0XHRcdFx0ZGVjbGFyYXRpb246IHRydWUsXG5cdFx0XHRcdFx0ZGVjbGFyYXRpb25NYXA6IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4Y2x1ZGU6IFtcInZpdGUuY29uZmlnLnRzXCIsIFwic3JjL3BhZ2VzXCIsIFwic3JjL3JvdXRlclwiLCBcInNyYy9sYXlvdXRzXCIsIFwic3JjL2V4YW1wbGVzXCJdLFxuXHRcdFx0dHNjb25maWc6IFwidHNjb25maWcuanNvblwiXG5cdFx0fSksXG5cdFx0dml0ZVN0YXRpY0NvcHkoe1xuXHRcdFx0dGFyZ2V0czogW1xuXHRcdFx0XHR7IHNyYzogXCJzcmMvYXNzZXRzL3JlYWN0LXByZXR0eS1ib3guc2Nzc1wiLCBkZXN0OiBcIlwiIH0sXG5cdFx0XHRcdHsgc3JjOiBcInNyYy9hc3NldHMvc2Nzc1wiLCBkZXN0OiBcIlwiIH1cblx0XHRcdF1cblx0XHR9KSxcblx0XHR2aXN1YWxpemVyKHtcblx0XHRcdGZpbGVuYW1lOiBcInN0YXRzLmh0bWxcIixcblx0XHRcdG9wZW46IHRydWVcblx0XHR9KSxcblx0XHRhbmFseXplKHsgc3VtbWFyeU9ubHk6IHRydWUgfSlcblx0XSxcblx0c2VydmVyOiB7XG5cdFx0Ly8gb3BlbjogdHJ1ZVxuXHR9LFxuXHRjc3M6IHtcblx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG5cdFx0XHRzY3NzOiB7XG5cdFx0XHRcdGFwaTogJ21vZGVybi1jb21waWxlcicsXG5cdFx0XHRcdGFkZGl0aW9uYWxEYXRhOiBbXCJAdXNlICdzY3NzL192YXJpYWJsZXMuc2NzcycgYXMgKjtcIl1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGJ1aWxkOiB7XG5cdFx0Y3NzQ29kZVNwbGl0OiB0cnVlLFxuXHRcdGNzc01pbmlmeTogdHJ1ZSxcblx0XHRsaWI6IHtcblx0XHRcdGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzL2luZGV4LnRzXCIpLFxuXHRcdFx0bmFtZTogXCJyZWFjdFByZXR0eUJveFwiLFxuXHRcdFx0Zm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIl0sXG5cdFx0XHRmaWxlTmFtZTogKGZvcm1hdCkgPT4gYHJlYWN0LXByZXR0eS1ib3guJHtmb3JtYXR9LmpzYFxuXHRcdH0sXG5cdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0aW5wdXQ6IHtcblx0XHRcdFx0bWFpbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvY29tcG9uZW50cy9tYWluLnRzXCIpXG5cdFx0XHR9LFxuXHRcdFx0cGx1Z2luczogW3RlcnNlcigpXSxcblx0XHRcdGV4dGVybmFsOiBbXCJyZWFjdFwiXSxcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRleHBvcnRzOiBcIm5hbWVkXCIsXG5cdFx0XHRcdGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGFzc2V0SW5mby5uYW1lID09PSBcIm1haW4uY3NzXCIpIHJldHVybiBcInJlYWN0LXByZXR0eS1ib3guY3NzXCI7XG5cdFx0XHRcdFx0cmV0dXJuIGFzc2V0SW5mby5uYW1lO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnbG9iYWxzOiB7XG5cdFx0XHRcdFx0XCJyZWFjdFwiOiBcIlJlYWN0XCIsXG5cdFx0XHRcdFx0XCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHJlc29sdmU6IHtcblx0XHRleHRlbnNpb25zOiBbXCIuanNcIiwgXCIuanN4XCIsIFwiLnRzXCIsIFwiLmpzeFwiLCBcIi50c3hcIl0sIC8vIC5tYXAoKGV4dCkgPT4gYC4ke2V4dH1gKS5maWx0ZXIoKGV4dCkgPT4gZXh0ICE9PSBcIi5qc3hcIiksXG5cdFx0YWxpYXM6IHtcblx0XHRcdFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcblx0XHRcdFwiQC9jb21wb25lbnRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHNcIiksXG5cdFx0XHRcIkAvYXNzZXRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2Fzc2V0c1wiKSxcblx0XHRcdFwiQC9wYWdlc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9wYWdlc1wiKVxuXHRcdH1cblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlXLFNBQVMsb0JBQW9CO0FBQ3RZLE9BQU8sV0FBVztBQUNsQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sWUFBWTtBQUNuQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLGFBQWE7QUFScEIsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0gsa0JBQWtCO0FBQUEsSUFDbkIsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsU0FBUyxDQUFDLDJCQUEyQix3QkFBd0I7QUFBQSxNQUM3RCxrQkFBa0I7QUFBQSxRQUNqQixpQkFBaUI7QUFBQSxVQUNoQixRQUFRO0FBQUEsVUFDUixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQSxRQUNqQjtBQUFBLE1BQ0Q7QUFBQSxNQUNBLFNBQVMsQ0FBQyxrQkFBa0IsYUFBYSxjQUFjLGVBQWUsY0FBYztBQUFBLE1BQ3BGLFVBQVU7QUFBQSxJQUNYLENBQUM7QUFBQSxJQUNELGVBQWU7QUFBQSxNQUNkLFNBQVM7QUFBQSxRQUNSLEVBQUUsS0FBSyxvQ0FBb0MsTUFBTSxHQUFHO0FBQUEsUUFDcEQsRUFBRSxLQUFLLG1CQUFtQixNQUFNLEdBQUc7QUFBQSxNQUNwQztBQUFBLElBQ0QsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsUUFBUSxFQUFFLGFBQWEsS0FBSyxDQUFDO0FBQUEsRUFDOUI7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLEVBRVI7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNKLHFCQUFxQjtBQUFBLE1BQ3BCLE1BQU07QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLGdCQUFnQixDQUFDLG1DQUFtQztBQUFBLE1BQ3JEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNKLE9BQVksYUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxNQUN4RCxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsb0JBQW9CLE1BQU07QUFBQSxJQUNqRDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2QsT0FBTztBQUFBLFFBQ04sTUFBVyxhQUFRLGtDQUFXLHdCQUF3QjtBQUFBLE1BQ3ZEO0FBQUEsTUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQUEsTUFDbEIsVUFBVSxDQUFDLE9BQU87QUFBQSxNQUNsQixRQUFRO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxnQkFBZ0IsQ0FBQyxjQUFjO0FBQzlCLGNBQUksVUFBVSxTQUFTLFdBQVksUUFBTztBQUMxQyxpQkFBTyxVQUFVO0FBQUEsUUFDbEI7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNSLFNBQVM7QUFBQSxVQUNULGFBQWE7QUFBQSxRQUNkO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixZQUFZLENBQUMsT0FBTyxRQUFRLE9BQU8sUUFBUSxNQUFNO0FBQUE7QUFBQSxJQUNqRCxPQUFPO0FBQUEsTUFDTixLQUFVLGFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ2xDLGdCQUFxQixhQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3hELFlBQWlCLGFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ2hELFdBQWdCLGFBQVEsa0NBQVcsV0FBVztBQUFBLElBQy9DO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
