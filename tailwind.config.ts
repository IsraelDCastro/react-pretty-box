import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fbf8fc",
          "100": "#f5eef9",
          "200": "#eee0f4",
          "300": "#e0c7eb",
          "400": "#cba3dd",
          "500": "#b67fcd",
          "600": "#a66abe",
          "700": "#8b4ea2",
          "800": "#744485",
          "900": "#5f386b",
          "950": "#411f4c"
        },
        secondary: {
          "50": "#f2f8fd",
          "100": "#e4effa",
          "200": "#c2def5",
          "300": "#8dc4ec",
          "400": "#5faee3",
          "500": "#298bce",
          "600": "#1a6eaf",
          "700": "#16588e",
          "800": "#174b75",
          "900": "#184062",
          "950": "#102841"
        },
        tertiary: {
          "50": "#fffaeb",
          "100": "#fff0c6",
          "200": "#ffdf88",
          "300": "#ffce5c",
          "400": "#ffb220",
          "500": "#f98f07",
          "600": "#dd6802",
          "700": "#b74706",
          "800": "#94360c",
          "900": "#7a2e0d",
          "950": "#461502"
        }
      }
    },
    fontFamily: {
      sans: ["Nunito Sans", "Lato", "Inter", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      body: ["Raleway", "Lato", "Helvetica Neue", "Helvetica ", "Arial", "sans-serif"]
    }
  },
  plugins: []
} satisfies Config;
