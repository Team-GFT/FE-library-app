import "@emotion/react";

type palette = "keyColor" | "keyLight" | "keyDark";

declare module "@emotion/react" {
  export interface Theme {
    [key in palette]: string;
  }
}
