const asynchandller=require('express-async-handler')
const mongoose=require('mongoose');
const CategoryModel=require('../model/CategoryModel');

const CategoryController=asynchandller(async(req,res)=>{

    const {name,description,image,attrs}=req.body;

    const category=await CategoryModel.create({
        name,
        description,
        image,
        attrs
    })

    if(category)
    {
        res.status(201).json({

      _id:category._id,
      name:category.name,
      description:category.description,
      image:category.image,
      attrs:category.attrs

        })
    }
    else{
        res.status(400);
        throw new Error('Error while fetching  data')
    }

    console.log(`${category}`.red);
    // res.send(Productname);

})

module.exports={CategoryController}