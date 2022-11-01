const mongoose = require("mongoose");

const meatSchema = new mongoose.Schema({
    //标题
    name: { type: String },
    price: { type: String },
    buyTime: {type:String },
    detail:{type:String },
    level:{type:String}
})

module.exports = mongoose.model('Meat',meatSchema);