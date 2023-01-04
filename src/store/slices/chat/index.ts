import {
  createSlice,
  nanoid,
  createAsyncThunk,
  type AnyAction,
} from "@reduxjs/toolkit";
import { IMessage, MessageByUser } from "~interfaces";
import { getDate, getYanaMessage } from "~utils";

interface Chat {
  messages: IMessage[];
}

export const initialState: Chat = {
  messages: [
    {
      ...getYanaMessage(),
      time: getDate(),
    },
  ],
};

// TODO separate actions in folders

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMessage.pending, (state, action: AnyAction) => {
      state.messages.unshift({
        id: nanoid(),
        message: action.meta.arg,
        isPrimary: false,
      });
    });
    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.messages.unshift(action.payload);
    });
  },
});

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const addMessage = createAsyncThunk<IMessage, MessageByUser>(
  "chat/addMessage",
  async () => {
    await delay();

    return {
      ...getYanaMessage(),
    };
  }
);

export const chatReducer = chatSlice.reducer;
