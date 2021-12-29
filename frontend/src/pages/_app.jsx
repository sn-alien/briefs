import * as React from "react";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import PropTypes from "prop-types";

import GlobalStyles from "@styles/GlobalStyle";
import createEmotionCache from "@styles/createEmotionCache";
import muiTheme from "@styles/muiTheme";

import Footer from "@components/Footer";
import BodyWrapper from "@components/layout/BodyWrapper";
import Wrapper from "@components/layout/Wrapper";
import Navbar from "@components/navbar/Navbar";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Navbar />
          <Wrapper>
            <BodyWrapper>
              <Component {...pageProps} />
            </BodyWrapper>
          </Wrapper>
          <Footer />
        </EmotionThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
