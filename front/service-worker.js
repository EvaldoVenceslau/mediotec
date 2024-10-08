const CACHE_NAME = 'v2';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './img/mediotec_logo.png',
    './img/backgroundmedio.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
