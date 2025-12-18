import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";

const jsxA11yRecommended = jsxA11y.configs.recommended;

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
	},
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		settings: {
			react: {
				version: "detect"
			}
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			"jsx-a11y": jsxA11y,
			prettier
		},
		rules: {
			...(jsxA11yRecommended?.rules ?? {}),
			"prettier/prettier": "error",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off"
		}
	}
];
