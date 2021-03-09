import viewports from "./viewports";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: viewports,
    defaultViewport: "lg",
  },
  layout: "fullscreen",
  options: {
    controls: true,
  },
};

export const decorators = [
  (Story) => (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </Router>
  ),
];
