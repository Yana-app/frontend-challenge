import type { DefaultTheme } from "styled-components";

// TODO: Add a new theme for dark mode
export const theme: DefaultTheme = {
  colors: {
    primary: {
      main: {
        value: "#FF8755",
        contrastText: "#672A11",
      },
      muted: {
        value: "#FFC5C5",
        contrastText: "#671111",
      },
    },
    secondary: {
      main: {
        value: "#3B9391",
        contrastText: "#FFFFFF",
      },
      muted: {
        value: "#F0F6FA",
        contrastText: "#4B5959",
      },
    },
    background: {
      main: "#FFFFFF",
    },
    text: {
      main: "#000000",
      muted: "#6C8080",
    },
    danger: {
      main: "#DC2626",
    },
  },
};
