import type { FC, ReactNode } from "react";
import styled from "styled-components/native";

import { Text } from "~components";

type ChatBubbleTypes = "sent" | "received";

interface ChatBubbleContainerProps {
  type: ChatBubbleTypes;
}

const typesToThemeColors = {
  sent: "main",
  received: "muted",
} as const;

export const ChatBubbleContainer = styled.Text<ChatBubbleContainerProps>`
  background-color: ${(props) =>
    props.theme.colors.secondary[typesToThemeColors[props.type]].value};
  padding: 8px 16px;
  border-radius: 20px;
  overflow: hidden;
  max-width: 80%;
`;

interface ChatMessageBubbleProps extends ChatBubbleContainerProps {
  children: ReactNode;
}

interface ChatTextProps {
  type: ChatBubbleTypes;
}

const ChatText = styled(Text)<ChatTextProps>`
  color: ${(props) => props.theme.colors.secondary[typesToThemeColors[props.type]].contrastText};
`;

export const ChatBubble: FC<ChatMessageBubbleProps> = ({ children, ...props }) => {
  return (
    <ChatBubbleContainer {...props}>
      {typeof children === "string" ? (
        <ChatText type={props.type} size="sm" weight="regular">
          {children}
        </ChatText>
      ) : (
        children
      )}
    </ChatBubbleContainer>
  );
};
