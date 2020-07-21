//缓存的名称
const CACHE_NAME='v1'
//需要缓存的URL
const URLS = [
    '/',
    'index.js',
    './image/logo.jpeg'
]
self.addEventListener('install', e => {
  console.log('install' + e)
})

self.addEventListener('activate', e => {
  console.log('activate' + e)
})

self.addEventListener('fetch', e => {
  console.log('fetch' + e)
})
