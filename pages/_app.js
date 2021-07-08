import { SWRConfig } from 'swr';
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
