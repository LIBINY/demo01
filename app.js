const  express = require('express')
const  cors = require('cors')
const app = express()
app.use(cors())
app.listen(8080,()=>console.log('服务启动'))

// app.get('/',(req,res)=>{
//     res.json('hello word1')
// })

//处理跨域请求
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
//     res.header("Access-Control-Allow-Credentials",true)
//     res.header("X-Powered-By",' 3.2.1')
//     if(req.method=="OPTIONS") res.send(200)/*让options请求快速返回*/
//     else  next()
// })

let testArrayData = [{
    name:'红色',
    value:'red'
},
{
    name:'天蓝色',
    value:'skyblue'
},
{
    name:'黄色',
    value:'yellow'
},
{
    name:'绿色',
    value:'green'
},
{
    name:'粉红色',
    value:'pink'
},
{
    name:'橙色',
    value:'orange'
},
{
    name:'紫色',
    value:'purple'
},
{
    name:'棕色',
    value:'brown'
},
{
    name:'灰色',
    value:'gray'
},
{
    name:'黑色',
    value:'black'
}]

app.get('/api/test',(req,res)=>{
    // res.json('hello word2')
    res.send(randomData(testArrayData))
})

//随机函数
function randomData(data){
    return data.sort(()=>Math.random()-0.5).slice(0,10)
}