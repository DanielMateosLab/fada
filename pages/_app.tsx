import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import Navbar from "components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          h1: {
            color: theme.color.primary,
          },
        }}
      />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
