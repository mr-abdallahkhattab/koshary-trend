// Koshary Trend Service Worker

const CACHE_NAME = "koshary-cache-v2";

// Cache only basic static assets on install
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

// Install Cache assets
self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Fetch Strategy
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // 1. Cache-First Strategy for Images
  // Downloads once, then caches locally to make the menu load instantly on next visits.
  if (req.destination === "image") {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // 2. Network-First Strategy for HTML, JS, CSS
  // Ensures returning users always receive the latest version of the website.
  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache if offline
        return caches.match(req).then((cached) => {
          if (!cached && req.mode === "navigate") {
            return caches.match("/index.html");
          }
          return cached;
        });
      })
  );
});
