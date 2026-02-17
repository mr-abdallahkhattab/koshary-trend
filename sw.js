const CACHE_NAME = "koshary-final-release-v1";
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
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Activate Service Worker
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
