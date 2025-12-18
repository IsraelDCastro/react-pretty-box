import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["src/test/setup.ts"]
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@/components": resolve(__dirname, "src/components"),
			"@/assets": resolve(__dirname, "src/assets"),
			"@playground": resolve(__dirname, "playground/src")
		}
	}
});
