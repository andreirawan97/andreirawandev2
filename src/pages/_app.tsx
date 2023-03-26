import type { AppProps } from "next/app";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";

import { COLORS } from "../features/Cookbook/constants/colors";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: COLORS.PRIMARY,
      },
    },
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
