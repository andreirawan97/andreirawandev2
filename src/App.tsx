import React from "react";

import MainRoute from "./routes/MainRoute";

import "./styles/typography.css";
import "./styles/theme.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { COLORS } from "./features/Cookbook/constants/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: COLORS.PRIMARY,
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
