import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Navbar from 'src/components/Navbar';
import { StyleProvider, ThemePicker } from 'vcc-ui';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Volvo Cars</title>
      </Head>
      <StyleProvider>
        <ThemePicker variant="light">
          <Navbar />
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}
