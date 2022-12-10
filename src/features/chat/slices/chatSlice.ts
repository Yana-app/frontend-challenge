import "react-native-get-random-values";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { timestamp } from "~utils/time.utils";

import { addUserMessage } from "./chatActions";

export interface ChatMessage {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

export type ChatMessageToAdd = Omit<ChatMessage, "id" | "timestamp">;

export interface ChatState {
  messages: ChatMessage[];
  error: string;
  isWaiting: boolean;
}

const initialState: ChatState = {
  messages: [],
  error: "",
  isWaiting: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserMessage.pending, (state, action) => {
        const userMessage: ChatMessage = {
          ...action.meta.arg,
          id: nanoid(),
          timestamp: timestamp(),
        };

        state.error = "";
        state.isWaiting = true;
        state.messages.push(userMessage);
      })

      .addCase(addUserMessage.rejected, (state) => {
        // TODO: Error catalog
        state.error = "No se pudo agregar el mensaje";
        state.isWaiting = false;
        state.messages.pop();
      })

      .addCase(addUserMessage.fulfilled, (state, action) => {
        state.isWaiting = false;
        state.messages.push(action.payload);
      });
  },
});

export const chatReducer = chatSlice.reducer;
