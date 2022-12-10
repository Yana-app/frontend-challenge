type ButtonVariants = "solid" | "subtle";
type ButtonColors = "primary" | "secondary";

export interface ButtonStyleProps {
  variant?: ButtonVariants;
  color?: ButtonColors;
}

export const buttonVariantsToThemeColors = {
  solid: "main",
  subtle: "muted",
} as const;
