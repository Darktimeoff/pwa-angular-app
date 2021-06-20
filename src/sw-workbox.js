importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// SETTINGS
// Turn on logging
workbox.setConfig({
    debug: true
});
  
// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([]);

// RUNTIME CACHING

// API with network-first strategy
workbox.routing.registerRoute(
    /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
    workbox.strategies.networkFirst()
)

// API with cache-first strategy
workbox.routing.registerRoute(
    /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
    workbox.strategies.cacheFirst()
)
  