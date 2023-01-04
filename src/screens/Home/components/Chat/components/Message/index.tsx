import styled from "styled-components/native";
import { FC } from "react";
import { IMessage } from "~interfaces";
import { Button, EmptyState } from "~components";

interface MessageProps {
  messageData?: IMessage;
  isEmptyState: boolean;
}

type StyledProps = {
  isPrimary: boolean;
};

const Time = styled.Text`
  color: #6c8080;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 16px;
  text-align: center;
`;

const Bubble = styled.View<StyledProps>`
  align-self: ${({ isPrimary }) => (isPrimary ? "flex-start" : "flex-end")};
  background-color: ${({ isPrimary }) => (isPrimary ? "#F0F6FA" : "#3B9391")};
  border-radius: 20px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  line-height: 24px;
  margin: 8px 0;
  max-width: 55%;
  min-height: 40px;
  padding: 8px 16px;
`;

const BubbleText = styled.Text<StyledProps>`
  color: ${({ isPrimary }) => (isPrimary ? "#4b5959" : "#ffffff")};
`;

export const Message: FC<MessageProps> = ({ messageData, isEmptyState }) => {
  return (
    <>
      {isEmptyState && (
        <EmptyState text="¡Bienvenido humano! Ingresa un mensaje para hablar conmigo 🚀" />
      )}
      <Bubble isPrimary={messageData?.isPrimary ?? false}>
        <BubbleText isPrimary={messageData?.isPrimary ?? false}>
          {messageData?.message}
        </BubbleText>
      </Bubble>
      {messageData?.time && <Time>{messageData.time}</Time>}
    </>
  );
};
