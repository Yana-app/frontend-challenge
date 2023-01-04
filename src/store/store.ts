import {
  configureStore,
  combineReducers,
  type AnyAction,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  REGISTER,
  REHYDRATE,
  PAUSE,
  FLUSH,
  PURGE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist-expo-filesystem";
import { authReducer, chatReducer } from "./slices";

//TODO Separate reducers & use whitelist fot middlewares

const persistConfig = {
  key: "root",
  version: 2,
  storage,
  whitelist: [],
};

const allReducers = {
  auth: authReducer,
  chat: chatReducer,
};

const combinedReducers = combineReducers(allReducers);

type StateType = ReturnType<typeof combinedReducers> | undefined;

const reducerToPersist = (state: StateType, action: AnyAction) => {
  if (action.type === "auth/closeSession") {
    storage.removeItem("persist:root");
    return combinedReducers(undefined, action);
  }

  return combinedReducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducerToPersist);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, REHYDRATE, PAUSE, FLUSH, PERSIST, PURGE],
      },
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
