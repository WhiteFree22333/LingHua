const mongoose = require("mongoose");

//创建Schema实例对象，参数为字段名：字段值类型组成的对象

const ordersSchema = new mongoose.Schema({
    //标题
    name: { type: String },
    price: { type: String },
    buyTime: {type:String },
    detail:{type:String },
    level:{type:String}
})



//导出模型
module.exports = mongoose.model('LingHua',ordersSchema);
