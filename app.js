const  express = require('express')
const app = express()
app.listen(8080,()=>console.log('服务启动'))

// app.get('/',(req,res)=>{
//     res.json('hello word1')
// })

//处理跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200)/*让options请求快速返回*/
    else  next()
})

let testArrayData = [1,5,6,32,45,222,554,3332,100]

app.get('/api/test',(req,res)=>{
    // res.json('hello word2')
    res.send(randomData(testArrayData))
})

//随机函数
function randomData(data){
    return data.sort(()=>Math.random()-0.5).slice(0,9)
}