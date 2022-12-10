import type { TouchableHighlightProps } from "react-native";
import styled from "styled-components/native";

import { type ButtonStyleProps, buttonVariantsToThemeColors } from "./common";

export interface ButtonContainerProps extends ButtonStyleProps, TouchableHighlightProps {
  isFullWidth?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${(props) =>
    props.theme.colors[props.color!][buttonVariantsToThemeColors[props.variant!]].value};
  padding: 20px 32px;
  border-radius: 32px;
  width: ${(props) => (props.isFullWidth ? "100%" : "auto")};
`;
