import "styled-components";

interface Color<T = "string"> {
  main: T;
  muted: T;
}

type ColorWithText = Color<{
  value: string;
  contrastText: string;
}>;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: ColorWithText;
      secondary: ColorWithText;
      text: Color<string>;
      background: Omit<Color<string>, "muted">;
      danger: Omit<Color<string>, "muted">;
    };
  }
}
