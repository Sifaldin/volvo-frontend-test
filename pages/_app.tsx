import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Navbar from 'src/components/Navbar';
import { StyleProvider, styleRenderer, ThemePicker } from 'vcc-ui';
const renderer = styleRenderer();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Volvo Cars</title>
      </Head>
      <StyleProvider renderer={renderer}>
        <ThemePicker variant="light">
          <Navbar />
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}
