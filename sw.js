//缓存的名称
const CACHE_NAME = 'v2'
//需要缓存的URL（注册成功后要立即缓存的资源列表）
const URLS = [
    './',
    './index.html',
    './manifest.json',
    './index.js',
    './image/logo.png',
    './image/logo2.png',
    './image/bg.png'
]
//     'http://192.168.13.140:8080/api/test'
// 当浏览器解析完sw文件时触发install事件
//缓存资源
self.addEventListener('install', async e => {
    console.log('install')
    const cached = await caches.open(CACHE_NAME)
    const result = await cached.addAll(URLS)
    //在页面更新的过程中，新的SW脚本能够立刻激活和生效
    await self.skipWaiting()
    // e.waitUntil(self.skipWating())
})
//清除旧缓存（）取消注册sw不会清除缓存
self.addEventListener('activate', async e => {
    console.log('activate' + e)
    //获取所有的缓存key
    const cachedKeys = await caches.keys()
    console.log('cachedKeys', cachedKeys)
    //清除旧的缓存
    cachedKeys.map(async cacheItem => {
        if (cacheItem !== CACHE_NAME) {
            console.log(cacheItem)
            await caches.delete(cacheItem)
        }
    })
    await self.clients.claim()
    //获取页面的控制权（不然会在下一次更新页面时才能获得控制权）
    // e.waitUntil(self.clients.claim())
})

// self.addEventListener('fetch', e => {
//     console.log('fetch' + e.request.url)
//     //   if(e.request.url==="http://192.168.13.140:8080/api/test"){
//     //     e.respondWith(
//     //         fetch(e.request.url).then(resp=>{
//     //             return resp
//     //         }).catch(err=>{
//     //             caches.match(e.request).then(response => {
//     //                   return response
//     //             }).catch(err1=>{
//     //                 console.log(err1)
//     //             })
//     //         })
//     //       )
//     //   }else{
//     e.respondWith(
//         caches.match(e.request).then(response => {
//             if (response != null) {
//                 return response
//             }
//             return fetch(e.request.url)
//         })
//     )
//     //   }
//     //   try {
//     //     const fetchList = await fetch(e.request)
//     //     console.log('fetchList',fetchList)
//     //     // e.respondWidth(fetchList)
//     //   } catch (error) {
//     //      const cached = await caches.open(CACHE_NAME)
//     //     // const resData = await cached.match(e.request)
//     //     e.respondWith(
//     //         cached.match(e.request).then(function (response) {
//     //             return response || fetch(e.request);
//     //         })
//     //     )
//     //   }
// })

//在请求发送的时候触发
self.addEventListener('fetch', async event => {
    console.log('fetch', event)
    //请求对象
    const req = event.request
    //给浏览器响应
    event.respondWith(networkFirst(req))
})

// 网络优先
async function networkFirst(req) {
    try {
        //先从网络读取最新的内容
        const fresh = await fetch(req)
        return fresh
    } catch (error) {
        //从缓存中读取
        const cache = await caches.open(CACHE_NAME)
        const cached = await cache.match(req)
        return cached
    }

}

self.addEventListener('push', function (e) {
    let data = e.data
    if (e.data) {
        data = data.json()
        console.log('push的数据为：', data)
        self.registration.showNotification(data.text)
    } else {
        self.registration.showNotification('测试通知')
        console.log('push没有任何数据')
    }
})