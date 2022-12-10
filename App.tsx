import { StatusBar } from "expo-status-bar";
import type { FC } from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components/native";

import { RootNavigator } from "~navigators";
import { persistor, store } from "~store";
import { theme } from "~theme";

const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="dark" />
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
