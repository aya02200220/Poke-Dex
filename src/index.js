import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Box } from "@mui/material";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./Components/themeContext";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
