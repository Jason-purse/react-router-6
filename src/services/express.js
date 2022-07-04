const express = require('express')
const app = express()
app.use((request,response,next) => {
    console.log("请求服务器")
    next()
})

app.get("/datas",(request,response) => {
    response.send([
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
    ])
});

app.listen(9090,(err) => {
    if(!err) {
        console.log("服务器启动成功!!!!")
    }
})
