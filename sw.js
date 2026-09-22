// Koshary Trend Service Worker

<<<<<<< Updated upstream
const CACHE_NAME = "koshary-cache-v2";
=======
const CACHE_NAME = "koshary-cache-v4";
>>>>>>> Stashed changes

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

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

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

self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.method !== "GET" || !req.url.startsWith("http")) return;

  if (req.destination === "image") {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(req, responseClone);
              });
            }
            return networkResponse;
          })
          .catch(
            () => new Response("", { status: 404, statusText: "Offline" })
          );
      })
    );
    return;
  }

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
        return caches.match(req).then((cached) => {
          if (cached) return cached;

          if (req.mode === "navigate") {
            return caches.match("/index.html");
          }

          return new Response("", { status: 404, statusText: "Not Found" });
        });
      })
  );
});
