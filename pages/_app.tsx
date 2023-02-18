import { FavIcons } from '@volvo-cars/favicons/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Navbar from 'src/components/Navbar';
import { StyleProvider, ThemePicker } from 'vcc-ui';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Volvo Cars</title>
        <FavIcons />
      </Head>
      <React.StrictMode>
        <StyleProvider>
          <ThemePicker variant="light">
            <Navbar />
            <Component {...pageProps} />
          </ThemePicker>
        </StyleProvider>
      </React.StrictMode>
    </>
  );
}
