import { type AnyAction, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist-expo-filesystem";

import { authReducer } from "~features/auth/slices";
import { chatReducer } from "~features/chat/slices";

const reducers = {
  auth: authReducer,
  chat: chatReducer,
};

const combinedReducers = combineReducers(reducers);

type RootReducerState = ReturnType<typeof combinedReducers> | undefined;

export const rootReducer = (state: RootReducerState, action: AnyAction) => {
  if (action.type === "auth/signOut") {
    storage.removeItem("persist:root");
    return combinedReducers(undefined, action);
  }

  return combinedReducers(state, action);
};
