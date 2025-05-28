self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tahfeezak-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'dashboard.html',
        'style.css',
        'app.js',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
