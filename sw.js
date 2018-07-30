self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('photosynthesis-board-game').then(function(cache) {
     return cache.addAll([
       '/photosynthesis-board-game',
       '/photosynthesis-board-game/index.html',
       '/photosynthesis-board-game/index.html?launcher=true',
       '/photosynthesis-board-game/linden.jpg',
       '/photosynthesis-board-game/oak.jpg',
       '/photosynthesis-board-game/pine.jpg',
       '/photosynthesis-board-game/maple.jpg',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
