import type { FC } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "~store";
import { PersistGate } from "redux-persist/integration/react";
import { MainNavigator } from "~navigators";

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
