const CACHE_NAME = 'demo-v1'
const CACHE_FILES = ['./index.html', './app.js', './style.css']

self.addEventListener('install', (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)

      await cache.add('./index.html')
      console.log('index.html ok')

      await cache.add('./app.js')
      console.log('app.js ok')

      await cache.add('./style.css')
      console.log('style.css ok')
    })(),
  )
})

// 激活阶段：清理旧缓存
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
        ),
      ),
  )
  self.clients.claim()
})

// 拦截请求：网络优先，失败回退缓存
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})
