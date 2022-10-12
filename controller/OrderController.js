const asyschandller=require('express-async-handler');
const Order=require('../model/OrderModel');

const ordercontrolller=asyschandller(async(req,res)=>{

    res.json("HElllo  Order")

});

module.exports={ordercontrolller}