import type { FC } from "react";
import { OutputMessageTab, Messages } from "./components";
import styled from "styled-components/native";
import { Platform } from "react-native";

const ChatContainer = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-between;
`;

export const Chat: FC = () => {
  return (
    <ChatContainer
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={67}
    >
      <Messages />
      <OutputMessageTab />
    </ChatContainer>
  );
};
