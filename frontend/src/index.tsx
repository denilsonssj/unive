import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import theme from "shared/styles/theme";
import GlobalStyle from "shared/styles/globalStyle";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme.main}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("wrapper")
);
