import "react-native-get-random-values";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { delay, timestamp } from "~utils/time.utils";

import type { ChatMessage, ChatMessageToAdd } from "./chatSlice";

const DELAY_IN_MS = 375;

const getDummyMessage = (): ChatMessage => ({
  id: nanoid(),
  content: "Hola humano, ¿Cómo estás?",
  timestamp: timestamp(),
  sender: "yana",
});

export const addUserMessage = createAsyncThunk<ChatMessage, ChatMessageToAdd>(
  "chat/addUserMessage",
  async () => {
    return delay<ChatMessage>(getDummyMessage, DELAY_IN_MS);
  }
);
