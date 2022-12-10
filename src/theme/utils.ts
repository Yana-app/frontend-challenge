import type { Theme as NavigationTheme } from "@react-navigation/native";
import type { DefaultTheme as StyledTheme } from "styled-components";

type ThemeToNavigationTheme = (theme: StyledTheme) => NavigationTheme;

export const themeToNavigationTheme: ThemeToNavigationTheme = (theme) => {
  return {
    dark: false,
    colors: {
      background: theme.colors.background.main,
      primary: theme.colors.primary.main.value,
      text: theme.colors.text.main,
      border: theme.colors.text.muted,
      card: theme.colors.background.main,
      notification: theme.colors.primary.main.value,
    },
  };
};
