const CACHE = {
  name: 'Rhythm',
  urls: ['/'],
};

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE.name];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener('install', event => {
  console.log('installing');
  event.waitUntil(
    caches.open('static').then(cache => {
      return cache.addAll(CACHE.urls);
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('fetching');
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
