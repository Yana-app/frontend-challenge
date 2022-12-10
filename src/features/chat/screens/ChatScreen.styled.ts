import { SectionList } from "react-native";
import styled from "styled-components/native";

import { Text } from "~components";

import { ChatBubble as BaseChatBubble } from "../components";
import type { ChatMessage } from "../slices";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const SectionHeaderTitle = styled(Text)`
  padding: 16px 0;
`;

export const MessagesSectionList = styled(SectionList as typeof SectionList<ChatMessage>).attrs(
  () => ({
    contentContainerStyle: {
      flexDirection: "column-reverse",
    },
  })
)`
  padding: 0px 24px 16px 24px;
  flex: 1;
`;

export const ChatBubble = styled(BaseChatBubble)`
  margin-left: ${(props) => (props.type === "sent" ? "auto" : 0)};
  margin-right: ${(props) => (props.type === "received" ? "auto" : 0)};
  margin-bottom: 16px;
`;
