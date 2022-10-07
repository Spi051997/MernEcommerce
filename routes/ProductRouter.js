const express=require('express');
const router=express.Router();
const {ProductRegistration}=require('../controller/ProductController')

router.post('/',ProductRegistration)

module.exports=router;