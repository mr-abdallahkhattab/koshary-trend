const CACHE_NAME = "koshary-test-storage-v3";
const ASSETS = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/index.js",
  "/js/bootstrap.bundle.min.js",
  "/css/bootstrap.min.css",
  "/images/icon-192.png",
  "/images/icon-512.png",
];

// 1. Install Service Worker
self.addEventListener("install", (e) => {
  self.skipWaiting();

  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Activate Service Worker (cleanup old cache)
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// 3. Fetch Handler (serve cached files first)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
