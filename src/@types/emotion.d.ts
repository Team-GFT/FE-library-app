import "@emotion/react";

type palette = "keyColor" | "keyLight" | "keyDark" | "background" | "white";

declare module "@emotion/react" {
  export interface Theme {
    [key in palette]: string;
  }
}
