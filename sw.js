var cacheName = 'pwa';
var filesToCache = [
    './',
    './index.html',
    './css/style.css',
    './css/bootstrap.min.css',
    './scripts/main.js',
    "./images/dice/dice1.png",
    "./images/dice/dice2.png",
    "./images/dice/dice3.png",
    "./images/dice/dice4.png",
    "./images/dice/dice5.png",
    "./images/dice/dice6.png",
    "./images/dice/apple-touch-icon.png",
    "./images/faviconDice.png",
];

// Start the service worker and cache all the app's content
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Serve cached content when offline
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});