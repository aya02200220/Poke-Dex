import logo from "./logo.svg";
import "./App.css";
import Main from "../src/Components/Main";
import "../src/Components/style.css";
import { Box } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { useTheme } from "./Components/themeContext";

function App() {
  const { darkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#333" : "#fceec8",
      },
      text: {
        primary: darkMode ? "#fff" : "#333",
      },
    },
  });

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Box
          sx={{
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          <Main />
        </Box>
      </MuiThemeProvider>
    </>
  );
}

export default App;
