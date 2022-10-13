const express=require("express")
const bodyParser=require('body-parser')
const app=express()

const cors=require('cors')
app.use(cors())

// 允许跨域
// app.all('*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", 'Express');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/',async (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('塔塔开')
})

require("./plugins/db")(app)
require("./routers/admin")(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000启动成功')
})