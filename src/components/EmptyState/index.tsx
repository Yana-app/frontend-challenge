import type { FC, ReactNode } from "react";
import styled from "styled-components/native";
import { useGetAvatar } from "../../hooks/useGetAvatar";

interface EmptyStateProps {
  children?: ReactNode;
  text?: string;
  bgColor?: string;
}

type MainContainerType = {
  bgColor?: string;
};

const MainContainer = styled.View<MainContainerType>`
  flex: 1;
  justify-content: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ffffff")};
`;

const BorderContainer = styled.View`
  border-width: 1px;
  border-color: #e9e9e9;
  padding: 32px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Yana = styled.Image`
  border-radius: 48px;
  height: 96px;
  width: 96px;
  margin-bottom: 16px;
`;

const TextStyled = styled.Text`
  font-size: 14px;
  justify-content: center;
  line-height: 24px;
  text-align: center;
  margin-bottom: 16px;
`;

export const EmptyState: FC<EmptyStateProps> = ({
  children,
  text,
  bgColor,
}) => {
  const yanaAvatar = useGetAvatar("yana");

  return (
    <MainContainer bgColor={bgColor}>
      <BorderContainer>
        <Yana source={yanaAvatar} />
        {text && <TextStyled>{text}</TextStyled>}
        {children}
      </BorderContainer>
    </MainContainer>
  );
};
