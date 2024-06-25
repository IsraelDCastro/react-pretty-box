import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8b4ea2",
          foreground: "#ffffff",

          50: "#fbf8fc",
          100: "#f7f1fa",
          200: "#efd9f5",
          300: "#e0c7eb",
          400: "#c69fdb",
          500: "#a66abe",
          600: "#8b4ea2",
          700: "#703d85",
          800: "#562c68",
          900: "#3d1e4b",
          950: "#2a1434"
        },
        secondary: {
          DEFAULT: "#1a6eaf",
          foreground: "#ffffff",
          50: "#f2f8fd",
          100: "#e4effa",
          200: "#c9e0f5",
          300: "#9cc8ed",
          400: "#5faee3",
          500: "#3190d3",
          600: "#1a6eaf",
          700: "#155990",
          800: "#144977",
          900: "#153d62",
          950: "#0e2848"
        },
        tertiary: {
          DEFAULT: "#ed7304",
          foreground: "#ffffff",
          50: "#fffaeb",
          100: "#fff0c6",
          200: "#ffe399",
          300: "#ffce5c",
          400: "#ffb835",
          500: "#f98f07",
          600: "#ed7304",
          700: "#c55506",
          800: "#9c420d",
          900: "#7e380f",
          950: "#461b05"
        }
      }
    },
    fontFamily: {
      sans: "'Nunito Sans', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      body: "Raleway, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'"
    }
  },
  darkMode: "class",
  plugins: [nextui()]
} satisfies Config;
