import "react-native-get-random-values";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<Omit<User, "id">>) => {
      state.user = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      };
    },
    signOut: () => {
      // reducer logic found on rootReducer in reducers.ts
    },
  },
});

export const { signUp, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
