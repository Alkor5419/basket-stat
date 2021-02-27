import React from "react";
import { render } from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/ui/global-styles";
render(
  <React.StrictMode>
    <ThemeProvider theme={}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
