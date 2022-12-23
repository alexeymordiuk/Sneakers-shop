import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </HashRouter>
);
