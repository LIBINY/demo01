const  express = require('express')
const app = express()
app.listen(8080,()=>console.log('服务启动'))

app.get('/',(req,res)=>{
    res.json('hello word1')
    next()
})

app.post('/api/test',(req,res)=>{
    res.json('hello word2')
})