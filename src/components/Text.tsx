import styled, { type DefaultTheme } from "styled-components/native";

type TextSizes = "xs" | "sm" | "md" | "lg";
type TextColors = keyof DefaultTheme["colors"]["text"];
type TextAlignments = "left" | "center" | "right";
type TextWeights = "regular" | "bold";

interface TextProps {
  size?: TextSizes;
  color?: TextColors;
  align?: TextAlignments;
  weight?: TextWeights;
}

const textSizes = {
  xs: {
    fontSize: "12px",
    lineHeight: "24px",
  },
  sm: {
    fontSize: "14px",
    lineHeight: "24px",
  },
  md: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  lg: {
    fontSize: "24px",
    lineHeight: "24px",
  },
} as const;

const textWeights = {
  regular: 400,
  bold: 700,
};

export const Text = styled.Text<TextProps>`
  font-style: normal;
  font-weight: ${(props) => textWeights[props.weight!]};
  font-size: ${(props) => textSizes[props.size!].fontSize};
  line-height: ${(props) => textSizes[props.size!].lineHeight};
  color: ${(props) => props.theme.colors.text[props.color!]};
  text-align: ${(props) => props.align};
`;

Text.defaultProps = {
  size: "md",
  color: "main",
  align: "left",
  weight: "regular",
};
