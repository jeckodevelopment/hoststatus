importScripts('/static/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/static/02db95adac6ba7bc8fe5.js",
    "revision": "720a3008e90110fbf9ac388fb70549b9"
  },
  {
    "url": "/static/04f809f3e09938394739.js",
    "revision": "9f0e0aef46892b2636e77b54045d0a52"
  },
  {
    "url": "/static/253081c62666a8130d93.js",
    "revision": "01d06401005053ef8a4d1126413ad65b"
  },
  {
    "url": "/static/29caf19068f08f0cd980.js",
    "revision": "500fa316bef7b6d205e1b7d7d89d7ff7"
  },
  {
    "url": "/static/2b9e8629b6d2802398c2.js",
    "revision": "0423dade43b1eed6982663554e519037"
  },
  {
    "url": "/static/3e6b77d62c6fe16569f3.js",
    "revision": "ad27612a5643f037cdd2fdb25510eb3f"
  },
  {
    "url": "/static/464e477e649c40a09271.js",
    "revision": "3e517fdd7a5304b4989c9fedaec312a2"
  },
  {
    "url": "/static/4a08e7c6fe5ed78ad897.js",
    "revision": "239a966c1040355b49e33737870682c7"
  },
  {
    "url": "/static/6ac12dab23569fec9417.js",
    "revision": "3fa5245483fdbcb38ba83322bc8759ec"
  },
  {
    "url": "/static/6c0f36c29e6bd6869286.js",
    "revision": "2879e33c7d0c96ab778adc9bd9003679"
  },
  {
    "url": "/static/740271627a9cf8922b2a.js",
    "revision": "dd55c35c24efee932886f8856cada06f"
  },
  {
    "url": "/static/81c01b89b1d8313e506c.js",
    "revision": "3398143c9f108939df5957c0652245cb"
  },
  {
    "url": "/static/8c8c5d9819a34c51d09d.js",
    "revision": "553472ea7e46ee1e7184d6910b922a77"
  },
  {
    "url": "/static/b1d34c73ad3671c46b9a.js",
    "revision": "e8dd97b3eb3e4dbc78f4d7f75f2cf323"
  },
  {
    "url": "/static/b655c2e13315c5ff9224.js",
    "revision": "82cb4bfb58ce66231eda9b1c9b6fcfe9"
  },
  {
    "url": "/static/b65dc01660abcbcc3f64.js",
    "revision": "3ff1f2245409bf63c382f4cd64afceb5"
  },
  {
    "url": "/static/b86454b75e34d9f04bf4.js",
    "revision": "547e46bd1b8dd62065bc2cf0c08b38ec"
  },
  {
    "url": "/static/c34f11cfa48b8156a2b1.js",
    "revision": "9acbe16f94f382a6d3d7651ce967d7fe"
  },
  {
    "url": "/static/d4ea9b6600bfed34ac33.js",
    "revision": "463f9e1d31dcdee6bc4c43e934da3ea0"
  }
], {
  "cacheId": "host_status",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/offline'])

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/static/(?!content).*$'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('(/static/content)?/api/v0/.*'), workbox.strategies.networkFirst({"cacheName":"host_status_api","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')

// offlinePage support
const strategy = workbox.strategies.networkOnly()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('/offline'))
})
