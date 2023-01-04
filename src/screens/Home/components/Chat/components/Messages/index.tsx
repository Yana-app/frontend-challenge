import { FlatList, ListRenderItem } from "react-native";
import { type FC, useCallback } from "react";
import styled from "styled-components/native";
import { Message } from "../Message";
import { IMessage } from "~interfaces";
import { useAppSelector, type RootState } from "~store";

const MessagesContainer = styled.View`
  flex: 1;
  padding: 24px;
`;

const MessageList = styled.FlatList`
  display: flex;
` as unknown as typeof FlatList<IMessage>;

export const Messages: FC = () => {
  const messagesData = useAppSelector(
    (state: RootState) => state.chat.messages
  );

  const renderItem: ListRenderItem<IMessage> = useCallback(
    ({ item: message }) => (
      <Message isEmptyState={messagesData.length < 2} messageData={message} />
    ),

    [messagesData]
  );

  const flatListOptions = {
    showsVerticalScrollIndicator: false,
    data: messagesData,
    renderItem,
    keyExtractor: (message: IMessage) => message.id,
    initialNumToRender: 8,
    inverted: true,
  };

  return (
    <MessagesContainer>
      <MessageList {...flatListOptions} />
    </MessagesContainer>
  );
};
