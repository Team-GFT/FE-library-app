import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import { globalStyles } from "./styles/global.ts";
import { theme } from "./styles/theme.ts";
import { ThemeProvider, Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
