const asynchandler=require('express-async-handler');
const Review=require('../model/Reviewmodel');

const Reviewcontroler=asynchandler(async(req,res)=>{

    const {Comment}=req.body;
    if(Comment)
    {
        res.send(Comment);
        console.log(Comment);   
    }
    

})

module.exports={Reviewcontroler};
