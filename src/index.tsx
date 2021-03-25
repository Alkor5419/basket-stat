import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./shared/ui/theme";
import { GlobalStyles } from "./shared/ui/global-styles";
import "antd/dist/antd.css";
import { Routes } from "./routes";
import store from "./store";
render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider
        //TODO change theme!!!
        theme={lightTheme}
      >
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
