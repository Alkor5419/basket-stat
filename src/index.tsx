import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/ui/global-styles";
import { lightTheme, darkTheme } from "./shared/ui/theme";
import "antd/dist/antd.css";
import { Routes } from "./routes";
import store from "./store";
import { useTheme } from "./shared/hooks/use-theme";

const Root: React.FC = () => {
  const { theme, changeTheme } = useTheme();
  const themeConfig =
    theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={themeConfig}>
          <GlobalStyles />
          <Routes changeTheme={changeTheme} />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

render(<Root />, document.getElementById("root"));
