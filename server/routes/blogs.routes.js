const router = require('express').Router()
const {models} = require('../models')

router.get('/',async(req,res)=>{
    try{
        const data = await models.Blogs.find({});
        res.json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


router.get('/:id',async(req,res)=>{
    try{
        const data = await models.Blogs.findById(req.params.id);
        res.json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


router.post('/',async(req,res)=>{
    try{
        const data = new models.Blogs(req.body);
        await data.save()
        res.json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const data = await models.Blogs.findByIdAndUpdate(req.params.id,{title:req.body.title,content:req.body.content});
        res.json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const data = await models.Blogs.findByIdAndDelete(req.params.id);
        res.json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})





module.exports = router;

