import styled from "styled-components/native";

type IconButtonSizes = "md" | "lg";
type IconButtonColors = "primary" | "secondary";
type IconButtonVariants = "solid" | "subtle";

export interface IconButtonContainerProps {
  size?: IconButtonSizes;
  color?: IconButtonColors;
  variant?: IconButtonVariants;
}

export const iconButtonSizes = {
  md: {
    container: 42,
    icon: 30,
  },
  lg: {
    container: 56,
    icon: 42,
  },
};

export const iconButtonVariantsToThemeColors = {
  solid: "main",
  subtle: "muted",
} as const;

export const IconButtonContainer = styled.TouchableOpacity<IconButtonContainerProps>`
  width: ${(props) => iconButtonSizes[props.size!].container + "px"};
  height: ${(props) => iconButtonSizes[props.size!].container + "px"};
  border-radius: ${(props) => iconButtonSizes[props.size!].container / 2 + "px"};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.text.muted
      : props.theme.colors[props.color!][iconButtonVariantsToThemeColors[props.variant!]].value};
  align-items: center;
  justify-content: center;
`;
