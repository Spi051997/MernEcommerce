const mongoose=require('mongoose');

const categorymodel=mongoose.Schema({

    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    image:{type:String,default:"/images/tablets-image.png"},
    attrs:[
        {key:{type:String},value:[{type:String}]}
    ]

})

const Category=mongoose.model("CategoryModel",categorymodel);

module.exports=Category