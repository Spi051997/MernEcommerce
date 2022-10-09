const express=require('express');
const router=express.Router();
const {usercontroller}=require('../controller/UserController')

router.post('/',usercontroller);


module.exports=router;