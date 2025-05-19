const router = require('express').Router();
require('../DB/db_connect');
const { default: slugify } = require('slugify');
const Portifolio = require ('../MODELS/Portifolio.js');




router.get('/',async(req,res)=>{

    try{
        const portifolio = await Portifolio.find();
        res.status(201);
        res.json({
            data:portifolio
        })
    }catch(err){
        res.status(500)
        res.json({
            error:err.message
        })
    }
    


});

router.post('/create',async(req,res)=>{

    try{
        const  portifolio = new Portifolio({
            titulo: req.body.titulo,
            descricao: req.body.descricao
    }) 
        const saveportifolio = await portifolio.save();
        res.status(201)
        res.json({
            status:201,
            data: saveportifolio
    })
}catch(err){
    res.status(500)
    res.json({
        status:500,
        error: err.message
    })
}
});


router.post('/delete',async(req,res)=>{

    try{
        const  portifolio = await Portifolio.deleteOne({ titulo: req.body.titulo });

         res.status(201)
        res.json({
            status:201,
            deleted: portifolio
    })
    }
    catch(err){
        res.status(500)
        res.json({
            status:500,
            error: err.message
    })
}
});


router.post('/update',async(req,res)=>{

    try{
        
        const result = await Portifolio.updateOne(
      { titulo: req.body.titulo }, 
      { $set: { 
        descricao: req.body.descricao,
        titulo: req.body.titulonovo,
        slug: slugify(req.body.titulonovo)
    } });

    res.status(201);
    res.json({
        status:201,
        updated:true
    })

 }catch(err){
        res.status(500)
        res.json({
            status:500,
            error: err.message
        })
    }
    });

 

module.exports = router;