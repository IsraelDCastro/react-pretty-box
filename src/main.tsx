import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import customTheme from "@/theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <NextUIProvider theme={customTheme}> */}
    <App />
    {/* </NextUIProvider> */}
  </React.StrictMode>
);
