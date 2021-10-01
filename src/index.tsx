import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
