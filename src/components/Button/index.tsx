import type { FC } from "react";
import { TouchableHighlightProps } from "react-native";
import styled from "styled-components/native";

interface CustomButtonProps extends TouchableHighlightProps {
  bgColor?: string;
  textColor?: string;
  text?: string;
}

type StyledProps = {
  bgColor?: string;
  textColor?: string;
};

export const Button: FC<CustomButtonProps> = ({
  bgColor,
  textColor,
  text,
  ...props
}) => {
  const PrimaryButtonStyled = styled.TouchableOpacity<StyledProps>`
    align-items: center;
    background: ${(props) => props.bgColor};
    border-radius: 32px;
    display: flex;
    height: 64px;
    justify-content: center;
    padding: 20px 0;
    width: 100%;
  `;

  const PrimaryButtonTextStyled = styled.Text<StyledProps>`
    color: ${(props) => props.textColor};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  `;

  return (
    <PrimaryButtonStyled {...(props as any)} bgColor={bgColor}>
      <PrimaryButtonTextStyled textColor={textColor}>
        {text}
      </PrimaryButtonTextStyled>
    </PrimaryButtonStyled>
  );
};
