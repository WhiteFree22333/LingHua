const mongoose = require("mongoose");

//创建Schema实例对象，参数为字段名：字段值类型组成的对象

const ordersSchema = new mongoose.Schema({
    //标题
    title: { type: String },
})

//导出模型
module.exports = mongoose.model('Category',ordersSchema);
