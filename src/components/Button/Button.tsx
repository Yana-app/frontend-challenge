import type { FC, ReactNode } from "react";

import { ButtonContainer, type ButtonContainerProps } from "./ButtonContainer";
import { ButtonText } from "./ButtonText";

interface ButtonProps extends ButtonContainerProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, color, variant, ...props }) => {
  return (
    <ButtonContainer activeOpacity={0.75} variant={variant} color={color} {...props}>
      {typeof children === "string" ? (
        <ButtonText variant={variant} color={color}>
          {children}
        </ButtonText>
      ) : (
        children
      )}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  variant: "solid",
  color: "primary",
};
