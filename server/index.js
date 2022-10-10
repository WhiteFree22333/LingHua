const express=require("express")


const app=express()
const cors=require('cors')
app.use(cors())
//post请求设置
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

app.use(express.json())
app.get('/', function (req, res) {
    //your code here
    res.send('塔塔开');
})

require("./plugins/db")(app)

require("./routers/admin")(app)


app.listen(3000,()=>{
    console.log('http://localhost:3000启动成功')
})