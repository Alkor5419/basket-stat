import React from "react";
import { render } from "react-dom";
import { lightTheme } from "./shared/ui/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/ui/global-styles";
import { Routes } from "./routes";
render(
  <React.StrictMode>
    <ThemeProvider
      //TODO change theme!!!
      theme={lightTheme}
    >
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
