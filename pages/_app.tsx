import Head from "next/head";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import Header from "@components/Header";
import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Harsh Patel - ${Component.displayName}`}</title>
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
