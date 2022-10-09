const express=require('express');
const routes=express.Router();
const {Reviewcontroler}=require('../controller/ReviewControler')

routes.post('/',Reviewcontroler);

module.exports=routes;
