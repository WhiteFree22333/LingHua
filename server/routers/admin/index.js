

module.exports=app=>{
    const express=require('express')
    const router=express.Router()
    const Category=require('../../model/model')
    const Meat=require("../../model/meat");

    router.post('/linghua',async (req,res)=>{
        const model=await Category.create(req.body)
        res.send({
            status:0,
            msg:'post 请求',
            data:model
        })
    })

    router.post('/list',async (req,res)=>{
        // console.log('req.body',req.body.id)
        // const model=await Category.find({"_id":req.body.id})
        if(req.body.id){
            const model=await Category.find({"_id":req.body.id})
            res.send({
                status:0,
                msg:'post 请求',
                data:model
            })
        }else{
            const model=await Category.find()
            res.send({
                status:0,
                msg:'post 请求',
                data:model
            })
        }
    })

    router.post('/addMeat',async (req,res)=>{
        // console.log('req.body',req.body.id)
        let model=await Category.find({"_id":req.body.id})
        console.log('model',model[0]._id)
        let change= {
            name: model[0].name,
            price: model[0].price,
            buyTime: model[0].buyTime,
            detail:model[0].detail,
            level:model[0].level,
        }
        const msg=await Meat.create(change)
        res.send(msg)
    })

    app.use('/admin/api',router)
}