import { css } from "@emotion/react";
import { reset } from "./reset";

export const globalStyles = css`
  ${reset}

  html, body, div#root {
    height: 100%;
  }
`;
