const asyschandller=require('express-async-handler');
const UserModel=require('../model/UserModel');

const  usercontroller=asyschandller(async(req,res)=>{
    const {Firsttime}=req.body;

    console.log(Firsttime);
    res.send(Firsttime);
})

module.exports={usercontroller}