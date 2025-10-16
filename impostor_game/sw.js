self.addEventListener('install', (event) => {
  console.log('Service worker installato')
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  console.log('Service worker attivo')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  )
})