import styled from "styled-components/native";

type HelperTextVariants = "error";

interface HelperTextProps {
  variant?: HelperTextVariants;
}

const helperTextVariantsToThemeColors = {
  error: "danger",
} as const;

export const HelperText = styled.Text<HelperTextProps>`
  font-size: 14px;
  color: ${(props) => props.theme.colors[helperTextVariantsToThemeColors[props.variant!]].main};
  margin-top: 8px;
  padding: 0 24px;
`;
