import styled from "styled-components/native";

import { buttonVariantsToThemeColors, type ButtonStyleProps } from "./common";

type ButtonTextProps = ButtonStyleProps;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) =>
    props.theme.colors[props.color!][buttonVariantsToThemeColors[props.variant!]].contrastText};
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
