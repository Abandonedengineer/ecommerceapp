import React from "react";
import { store, persistor } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Navigator from "./src/navigation/Navigator";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};
export default App;
