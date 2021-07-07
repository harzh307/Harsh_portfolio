import Head from "next/head";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "@components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`Harsh Patel - ${Component.displayName}`}</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
