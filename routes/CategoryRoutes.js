const express=require('express');
const router=express.Router();
const {CategoryController}=require('../controller/CategoryController')

router.post('/',CategoryController);

module.exports=router;
