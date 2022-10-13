const Category = require("../../model");

module.exports=app=>{
    const express=require('express')
    const router=express.Router()
    const Category=require('../../model')

    router.post('/linghua',async (req,res)=>{
         //res.header("Access-Control-Allow-Origin", "*");
        //const model=await Category.create(req.query)
        const model=await Category.create(req.body)
        res.send({
            status:0,
            msg:'get 请求',
            data:model
        })
    })
    app.use('/admin/api',router)
}