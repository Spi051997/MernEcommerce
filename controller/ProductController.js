const asynchandler=require('express-async-handler');
const Product=require('../model/ProductModel');

const ProductRegistration=asynchandler(async(req,res)=>{

    const {Prodctname}=req.body;

    if(Prodctname){
        res.send(Prodctname);
        console.log(Prodctname)
    }

})


module.exports={ProductRegistration}