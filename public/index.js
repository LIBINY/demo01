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
async function testApi (){
    const res = await fetch('/api/test')
    console.log(res)
}

function registerSw(){
    window.addEventListener('load',async e=>{
        if('serviceWorker' in navigator){
            const res = await navigator.serviceWorker.register('./sw.js')
            console.log(res)
        }
    })
}
//   renderMovie()
registerSw()
testApi()