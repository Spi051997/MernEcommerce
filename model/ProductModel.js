const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    ProductName:{type:String,required:true},
    ProductDescription:{type:String,required:true},
    Category:{type:String,required:true},
    Count:{type:Number,required:true},
    Price:{type:Number,required:true},
    rating:{type:String,required:true},
    reviewnumber:{type:String,required:true},
    sales:{type:Number,default:0},
    attrs:[
        {key:{type:String},value:{type:String}}
    ],
    images:[],
    review:[]



});

const Product=mongoose.model("Product",ProductSchema);
module.exports=Product;