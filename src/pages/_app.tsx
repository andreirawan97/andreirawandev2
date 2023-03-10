import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

import { COLORS } from "../features/Cookbook/constants/colors";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: COLORS.PRIMARY,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
