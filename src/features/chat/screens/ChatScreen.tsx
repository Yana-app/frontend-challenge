import { type FC, useCallback, useMemo } from "react";
import {
  type DefaultSectionT,
  type ListRenderItem,
  Platform,
  type SectionListData,
} from "react-native";

import { useAppSelector } from "~store";

import { NewMessageForm, NoMessages } from "../components";
import type { ChatMessage } from "../slices";
import { groupMessagesByTimeStamp } from "../utils";
import * as Styled from "./ChatScreen.styled";

const keyExtractor = (item: ChatMessage) => item.id;

type SectionHeader = (info: {
  section: SectionListData<ChatMessage, DefaultSectionT>;
}) => React.ReactElement;

const renderSectionHeader: SectionHeader = ({ section }) => {
  return (
    <Styled.SectionHeaderTitle size="xs" color="muted" align="center">
      {section.title}
    </Styled.SectionHeaderTitle>
  );
};

// TODO: Use messages.isWaiting state for a visual feedback
export const ChatScreen: FC = () => {
  const { messages, user } = useAppSelector((state) => ({
    messages: state.chat.messages,
    user: state.auth.user,
  }));

  const renderItem: ListRenderItem<ChatMessage> = useCallback(
    ({ item }) => {
      return (
        <Styled.ChatBubble type={item.sender === user!.name ? "sent" : "received"}>
          {item.content}
        </Styled.ChatBubble>
      );
    },
    [user]
  );

  const sections: SectionListData<ChatMessage, DefaultSectionT>[] = useMemo(() => {
    return groupMessagesByTimeStamp(messages);
  }, [messages]);

  return (
    <Styled.Container
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={72}
    >
      <Styled.MessagesSectionList
        sections={sections}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={NoMessages}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        initialNumToRender={10}
        inverted={!!messages.length}
      />
      <NewMessageForm />
    </Styled.Container>
  );
};
