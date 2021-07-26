import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <meta name="application-name" content="Harsh Patel" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Harsh Patel" />
      <meta name="description" content="Harsh Patel Personal Portfolio" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      {/* github */}
      <meta name="github:title" content="Harsh Patel" />
      <meta name="github:description" content="Harsh Patel personal portfolio" />
      <meta name="github:card" content="summary" />
      <meta name="github:creator" content="@harzh307" />
      {/* lonked in */}
      <meta name="linkedin:title" content="Harsh Patel" />
      <meta name="linkedin:description" content="Harsh Patel personal portfolio" />
      <meta name="linkedin:card" content="summary" />
      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Harsh Patel" />
      <meta name="twitter:description" content="Harsh Patel personal portfolio" />
      <meta name="twitter:creator" content="@patelharsh307" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Harsh Patel" />
      <meta property="og:description" content="Harsh Patel personal portfolio" />
      <meta property="og:site_name" content="Harsh Patel" />
    </Head>
  );
}
