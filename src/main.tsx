import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Router />
  </React.StrictMode>
);
