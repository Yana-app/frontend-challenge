import { createSlice } from "@reduxjs/toolkit";
import { User } from "~interfaces";

interface Auth {
  user: User | null;
}

const initialState: Auth = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
    closeSession: (state) => {
      state.user = null;
    },
  },
});

export const { signIn, closeSession } = authSlice.actions;

export const authReducer = authSlice.reducer;
