import { createTheme } from "@nextui-org/react";

const customTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primaryLight: "#e0c7eb",
      primary: "#a66abe",
      primaryDark: "#8b4ea2",
      primaryShadow: "#fbf8fc",

      secondaryLight: "#e4effa",
      secondary: "#5faee3",
      secondaryDark: "#1a6eaf",
      secondaryShadow: "#f2f8fd",

      tertiaryLight: "#fff0c6",
      tertiary: "#ffce5c",
      tertiaryDark: "#f98f07",
      tertiaryShadow: "#fffaeb",
      white: "#FFF"
    },
    fonts: {
      sans: "'Nunito Sans', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      mono: "Raleway, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'"
    }
  }
});

export default customTheme;
