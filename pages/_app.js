/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
import { SWRConfig } from 'swr';
// import Head from 'next/head';
import Layout from '../container/Layout';
import '../styles/_globals.scss';
import fetcher from '../lib/fetch';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}>
      <div className="light-theme">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SWRConfig>
  );
}

export default MyApp;
