const  BASE_URL ='http://192.168.13.140:8080'
async function renderMovie () {
    const res = await fetch(BASE_URL+'/api/test')
    const json = await res.json()
    let html = ''
    json.forEach(movie => {
    //   html += `
    //       <a href="javascript:;" class="movie">
    //           <div class="img">
    //               <img src="${movie.images.medium}" alt="" />
    //           </div>
    //           <div class="text">
    //               <h3 class="title one-txt-cut">${movie.title}</h3>
    //               <p class="rating one-txt-cut">评分：${movie.rating.average}</p>
    //               <p class="genres txt-cut">类型：${movie.genres.join('/')}</p>
    //           </div>
    //       </a>    
    //   `
    html+=`
        <div class="color-item">
            <div class="color-warp" style="width:100px;height:100px;background-color:${movie.value}">
            </div>
            <div class="color-text">
            名称：${movie.name}
            </div>
        </div>
    `
      document.querySelector('.test-text').innerHTML = html
    })
  }

//由于Notification.requestPermission()在某些版本浏览器中会接收一个回调函数（Notification.requestPermission(callback)）作为参数，
//而在另一些浏览器版本中会返回一个promise，因此将该方法进行包装，统一为promise调用
function askPermission() {
    return new Promise(function (resolve, reject) {
        var permissionResult = Notification.requestPermission(function (result) {
            resolve(result);
        });
  
        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    }).then(function (permissionResult) {
        if (permissionResult !== 'granted') {
            throw new Error('We weren\'t granted permission.');
        }
    });
}
// const BASE_URL = 'http://chenlb.free.idcfengye.com'//'http://192.168.13.140:8080'

async function testApi (){
    // const res = await fetch(BASE_URL+'/api/test')
    // const data = await res.json()
    // console.log(data)
    // document.querySelector('.test-text').innerHTML = data
    renderMovie()
}

function registerSw(){
    window.addEventListener('load',async e=>{
        if('serviceWorker' in navigator){
            //消息通知
            // await askPermission()
            const reps = await navigator.serviceWorker.register('./sw.js')
            // reps.showNotification('我发的消息你看到了吗？')
            // const data = await res.json()
            // console.log(data)
        }
    })
}
//   renderMovie()
//注册serviceWorker
registerSw()
// testApi()