// async function renderMovie () {
//     const res = await fetch('/api/getMovie')
//     const json = await res.json()
//     let html = ''
//     json.forEach(movie => {
//       html += `
//           <a href="javascript:;" class="movie">
//               <div class="img">
//                   <img src="${movie.images.medium}" alt="" />
//               </div>
//               <div class="text">
//                   <h3 class="title one-txt-cut">${movie.title}</h3>
//                   <p class="rating one-txt-cut">评分：${movie.rating.average}</p>
//                   <p class="genres txt-cut">类型：${movie.genres.join('/')}</p>
//               </div>
//           </a>    
//       `
//       document.querySelector('.app_content').innerHTML = html
//     })
//   }
const BASE_URL = 'http://192.168.13.140:8080'

async function testApi (){
    const res = await fetch(BASE_URL+'/api/test')
    const data = await res.json()
    console.log(data)
    document.querySelector('.test-text').innerHTML = data
}

function registerSw(){
    window.addEventListener('load',async e=>{
        if('serviceWorker' in navigator){
            await navigator.serviceWorker.register('./sw.js')
            // const data = await res.json()
            // console.log(data)
        }
    })
}
//   renderMovie()
//注册serviceWorker
registerSw()
testApi()