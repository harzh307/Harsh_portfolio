if (!self.define) {
  const e = e => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async s => {
            if ('document' in self) {
              const a = document.createElement('script');
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then(e => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, i, r) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const c = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map(s => {
            switch (s) {
              case 'exports':
                return a;
              case 'module':
                return c;
              default:
                return e(s);
            }
          }),
        ).then(e => {
          const s = r(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/H.png', revision: '0d6e2364cf471864a76e07d437492dba' },
        {
          url: '/_next/static/ZE_21yzlfHe7gsOZOaKKN/_buildManifest.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/ZE_21yzlfHe7gsOZOaKKN/_ssgManifest.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.9c6b5b6b159fb2b3cc6e.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/a305aedd3246e64550768aac88d2ae9c3c59224a.160fa7fbe9d745ebf01d.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/c9c6fe98.cc56bc1c9e6494a2f5fd.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/cc6c32156283a1fc95e2b85f244ed63be6b1affc.8b135f4d06969895cc8d.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/e6a4c0126bbfa5a971cc1b2399cd47c167c93025.dd87ac020d6e409692af.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/f6d61d50ed421e5ab11c4586545936a9e1be2e13.9e90574f478381c00d53.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/framework.f8bd46fc02868c500bda.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/main-d203d2f81d8febef0d1c.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/pages/_app-4a3d451b21f3f401c781.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/pages/_error-b9315e95fbc88195f5fe.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/pages/blog-e48c41a95336d4f4b2b0.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/pages/index-f2b1640e940e412eafb7.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/pages/portfolio-45e407ed9a209f13f16c.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/pages/resume-fe6f5aa401fa7062c2f8.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/pages/work/%5Bid%5D-b43d0e1554d2d5cf7dd2.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/polyfills-040103c5c51c5268569e.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        {
          url: '/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js',
          revision: 'ZE_21yzlfHe7gsOZOaKKN',
        },
        { url: '/_next/static/css/04702f6c838555884673.css', revision: 'ZE_21yzlfHe7gsOZOaKKN' },
        { url: '/_next/static/css/1e589cc2529416256b69.css', revision: 'ZE_21yzlfHe7gsOZOaKKN' },
        { url: '/_next/static/css/2a16a197505a092e3df4.css', revision: 'ZE_21yzlfHe7gsOZOaKKN' },
        { url: '/_next/static/css/998cc055ecef10048575.css', revision: 'ZE_21yzlfHe7gsOZOaKKN' },
        { url: '/_next/static/css/badbb650b4ca0f2f1dc0.css', revision: 'ZE_21yzlfHe7gsOZOaKKN' },
        { url: '/apple-icon-180.png', revision: '818751ff187332a97c44a48b2eb5f6f3' },
        { url: '/apple-splash-1125-2436.jpg', revision: 'd1b71af8e76c506a78e26a526cb7ea44' },
        { url: '/apple-splash-1136-640.jpg', revision: 'd04d13de5b94a14855fc8974ad75f972' },
        { url: '/apple-splash-1170-2532.jpg', revision: '7944fdea9e56ea466f877a316e47ed57' },
        { url: '/apple-splash-1242-2208.jpg', revision: 'f6a63261cded6ed42f985ea211f3bff0' },
        { url: '/apple-splash-1242-2688.jpg', revision: '2ed0c81930ac163aa5a5f2f114c19c6e' },
        { url: '/apple-splash-1284-2778.jpg', revision: 'f566cab364fbf8053872cafa646ca48c' },
        { url: '/apple-splash-1334-750.jpg', revision: '969f466f02e7cde613d26f59d1a37395' },
        { url: '/apple-splash-1536-2048.jpg', revision: 'd7b9040c7c6f27bc2dc15ae365989235' },
        { url: '/apple-splash-1620-2160.jpg', revision: 'a60583cf014fdb9941a44fda89589f32' },
        { url: '/apple-splash-1668-2224.jpg', revision: '4a332b28d3d8ae9e323cdc5609fa9755' },
        { url: '/apple-splash-1668-2388.jpg', revision: 'bc93ab20383a5fb5e256aee76839af6a' },
        { url: '/apple-splash-1792-828.jpg', revision: '4fe8d379c947fc45def818f8823016dd' },
        { url: '/apple-splash-2048-1536.jpg', revision: 'b8526300dd859cc249a43eb85fb81dc6' },
        { url: '/apple-splash-2048-2732.jpg', revision: '3edc6d2863ed4f11f262395dfe209899' },
        { url: '/apple-splash-2160-1620.jpg', revision: '21bef7e14482122d150fa30c06caab24' },
        { url: '/apple-splash-2208-1242.jpg', revision: 'ab0550e726610607479c54a5b48e39af' },
        { url: '/apple-splash-2224-1668.jpg', revision: '138d51f5a36900622a5132fff4a16198' },
        { url: '/apple-splash-2388-1668.jpg', revision: 'db7980b0fec82fd413086333ccb83f46' },
        { url: '/apple-splash-2436-1125.jpg', revision: '496ec0eefef51bc0033038f2168f36f1' },
        { url: '/apple-splash-2532-1170.jpg', revision: '9de95e2effd6923795740d66f347a2ed' },
        { url: '/apple-splash-2688-1242.jpg', revision: '029aec667636f2fa415ebb1e0c33f003' },
        { url: '/apple-splash-2732-2048.jpg', revision: '27112647b0fbac4b143e592d830f4739' },
        { url: '/apple-splash-2778-1284.jpg', revision: '65a927692a285db8e05e272243612113' },
        { url: '/apple-splash-640-1136.jpg', revision: '0b0f7d376419bdc87a6aad2fd399c64c' },
        { url: '/apple-splash-750-1334.jpg', revision: '3e3765ebc61b8a82f97cc457f4276f82' },
        { url: '/apple-splash-828-1792.jpg', revision: '702352e8a111cb459b4af81da60b14eb' },
        { url: '/asets/twitter-outline.svg', revision: 'c55f0ce9647106bc8c4457a898f2bda6' },
        { url: '/image/Home/Home.jpg', revision: 'e541b0f633094f1d9b8303389ffede02' },
        { url: '/image/Home/img-1.jpg', revision: 'ef07f50fb56243bdbb1abb1007b1e975' },
        { url: '/image/Home/img-2.jpg', revision: 'c6fd5bb24aa982d79507ed20ecb898d2' },
        { url: '/image/blog/img-1.jpg', revision: '1c600be9f8e7d402e501542fc268b75e' },
        { url: '/image/blog/img-2.jpg', revision: '5e16ed1aac4afa37aa1f52d4bd73d4a1' },
        { url: '/image/blog/img-3.jpg', revision: '1e7c27b39df3cadd7534f45737074395' },
        { url: '/image/blog/img-4.jpg', revision: 'feb01f1f1a0f1f10e2f8484a3f7ee28c' },
        { url: '/image/blog/img-5.jpg', revision: '7bd7e8447b7b096130a20765133af715' },
        { url: '/image/blog/img-6.jpg', revision: 'f0c218b6fc7d83fc4f6798db8a33345b' },
        {
          url: '/image/c5d5c0e6-264b-4f70-9eba-13984433062d.jpeg',
          revision: 'ca8c9dff37a9e16bb57efb6a4767f527',
        },
        { url: '/image/portfolio/about-img-lg.jpg', revision: 'ad1e426d14f9987ee4d03f92e071270b' },
        { url: '/image/portfolio/about-img-md.jpg', revision: 'b128f832fa272bdf846df583981f499f' },
        { url: '/image/portfolio/about-img.jpeg', revision: 'c74ae4a724151675cc286ca86bd3b4de' },
        { url: '/image/portfolio/img-1.jpg', revision: '0c2df4aa6570360471f8839c90acf4e5' },
        { url: '/image/portfolio/img-2.jpg', revision: '1125a9265663f1774937019ad29369f6' },
        { url: '/image/portfolio/img-3.jpg', revision: '46a6d9515db85e15091f7b4accaced77' },
        { url: '/image/portfolio/img-4.jpg', revision: 'dc4eb5a9744121a1f2f0e26baf9f587a' },
        { url: '/image/portfolio/img-5.jpg', revision: '03e007192053b3cd68101e215aee4b9f' },
        { url: '/image/portfolio/img-6.jpg', revision: '4a2f8f16c4f5e545db548ef0ae8269bd' },
        { url: '/image/testimonial/img-1.jpg', revision: '010c9995118b210aad246c32aef0627d' },
        {
          url: '/image/testimonial/testimonials-bg.jpg',
          revision: '76e244b0ac89746fe294887a23fa18ff',
        },
        { url: '/manifest-icon-192.png', revision: '5a303c6233469a1cc1b8311c2e10d2ee' },
        { url: '/manifest-icon-512.png', revision: '8084523acd8fa5b014b97ba7cef7179e' },
        { url: '/manifest.json', revision: 'ea73fb080ee66959f062287cf1768599' },
        { url: '/svg/code-working-outline.svg', revision: 'a2c6c56cb5116fce0187f4c799edc1fd' },
        { url: '/svg/create-outline.svg', revision: 'db0b6145b5cf164fcef74ab5b0d8aad2' },
        { url: '/svg/expand_more_white_24dp.svg', revision: '434a235996c9950111e161180a6908b3' },
        { url: '/svg/help-buoy.svg', revision: 'b30c254a3a65cfa3e4f9298d0cdf8151' },
        { url: '/svg/instagram.svg', revision: '04f1d8728b781908558c8f1442c665ed' },
        { url: '/svg/laptop-outline.svg', revision: '202f9953ede4d4f2e61c56b4b1c02d12' },
        { url: '/svg/linkedin.svg', revision: 'ccb614e5585b5a0a1c574bb40a7c36c1' },
        { url: '/svg/loader.svg', revision: 'ec14c7fc980e3afb155e71da671e791d' },
        { url: '/svg/logo-facebook.svg', revision: '0f7b9ab773a936b6942c1a44214b4abf' },
        { url: '/svg/logo-github.svg', revision: 'a3a97e11bef0768004d32aace5f09b97' },
        { url: '/svg/logo-linkedin.svg', revision: '84e36408f7623fe0f450822113dbd03c' },
        { url: '/svg/logo-twitter.svg', revision: '1eb4fd43e5496b37d284adcb55065288' },
        { url: '/svg/mail.svg', revision: '543657ee6defe49dcae5f43ededa945f' },
        { url: '/svg/menu-outline.svg', revision: '86098f45cb0d0dda655503062440a6b1' },
        { url: '/svg/phone-portrait-outline.svg', revision: 'f54c2a18ede49db79503ae33525b0950' },
        { url: '/svg/rocket-outline.svg', revision: '4b65008da6e60ba6780ad7bcc0374663' },
        { url: '/svg/scroll-down.svg', revision: '9a4c4d5ac1d7845dfdcbe8137784c201' },
        { url: '/svg/search.svg', revision: '0622ab2a41e3bc38e584d7954b3214c1' },
        { url: '/svg/whatsapp.svg', revision: 'eca057824a1cbf642c7bfe892aa4ae5a' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: i }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    );
});
