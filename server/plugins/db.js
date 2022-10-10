
//定义数据库名
const dbName = "BlaDataBase";
//定义数据库路径端口
const path = "127.0.0.1:27017";

const dbUrl = `mongodb://${path}/${dbName}`;

module.exports =app=>{
    const mongoose = require("mongoose");
    //连接数据库
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        //useUnifiedTopology: true
    });

    //连接成功时
    mongoose.connection.once("open", () => {
        console.log(dbName + "数据库连接成功，端口27017");
    });
//连接失败时
    mongoose.connection.once("error", () => {
        console.log(dbName + "数据库连接失败！");
    });
}

