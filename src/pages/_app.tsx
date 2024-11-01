import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@/assets/styles/reset.css";
import "@/assets/styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
