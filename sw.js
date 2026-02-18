const CACHE_NAME = "KILL-CACHE-V1";
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

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          console.log("Removing old cache:", key);
          return caches.delete(key);
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  return;
});
