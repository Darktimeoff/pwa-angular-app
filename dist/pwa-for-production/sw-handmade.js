var version = 1;
var cacheStaticName = 's-pwa-for-prod-v' + version;
var appShellStaticToCache = [
    './',
    './index.html',
    './main.js',
    './polyfills.js',
    './styles.css',
    './runtime.js',
    './favicon.ico',
    './assets/icons/icon-512x512.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheStaticName).then(cache => cache.addAll(appShellStaticToCache))
    )
})

self.addEventListener('activate', e => {
    console.log('[Service Worker]: Activated', e);
})

self.addEventListener('fetch', e => {
    console.log('[Service Worker]: Fetch', e)
    e.respondWith(
        caches.match(e.request)
            .then((response) => {
                if(response) {
                    console.log('[Service Worker]: Returning' + e.request.url + ' from cache')
                    return response;
                } else {
                    console.log('[Service Worker]: returning' + e.request.url + ' from net')
                    return fetch(e.request)
                }
            })
    )
})
