import React from "react";
import ReactDOM from "react-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import store, { persistor } from "store/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { mainAppTheme } from "themes";
import { ConnectedRouter } from "connected-react-router";
import history from "./createHistory";
import App from "./App";
import "styles/main.scss";

const theme = createMuiTheme(mainAppTheme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
