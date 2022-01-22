// let cacheVersion = 'v1';

// cacheAssets = [
//    'index.html',
//    'styles.css',
//    'app.js',
// ]

// self.addEventListener('install', e => {
//    console.log('Service Worker has been installed')
//    e.waitUntil(caches
//       .open(cacheVersion)
//       .then(cache => {
//          console.log('Service Worker is caching files')
//          cache.addAll(cacheAssets)
//       })
//       .then(() => self.skipWaiting())
//    )
// })

// self.addEventListener('activate', e => {
//    console.log('Service Worker has been activated')
// })