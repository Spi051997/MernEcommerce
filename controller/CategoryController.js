const asynchandller=require('express-async-handler')
const mongoose=require('mongoose');
const CategoryModel=require('../model/CategoryModel');

const CategoryController=asynchandller(async(req,res)=>{

    const {Productname}=req.body;

    console.log(Productname);
    res.send(Productname);

})

module.exports={CategoryController}