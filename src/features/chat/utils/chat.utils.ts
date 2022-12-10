import groupBy from "lodash/groupBy";
import type { DefaultSectionT, SectionListData } from "react-native";

import { getDateInLocaleString } from "~utils/time.utils";

import type { ChatMessage } from "../slices";

type GroupMessagesByTimeStamp = (
  messages: ChatMessage[]
) => SectionListData<ChatMessage, DefaultSectionT>[];

export const groupMessagesByTimeStamp: GroupMessagesByTimeStamp = (messages) => {
  const grouped = groupBy(messages, (message) => {
    return getDateInLocaleString(new Date(message.timestamp));
  });

  return Object.entries(grouped).map(([key, value]) => ({
    title: key,
    data: value,
  }));
};
