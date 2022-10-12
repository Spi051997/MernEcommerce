const express=require('express');
const router=express.Router();
const {ordercontrolller}=require('../controller/OrderController')

router.post('/',ordercontrolller);

module.exports=router;