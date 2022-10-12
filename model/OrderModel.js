const mongoose = require("mongoose");
const User = require("../model/UserModel");

const OrderModel = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  OrderTotoal: {
    itemcount: { type: Number, required: true },
    CartSubtotal: {
      type: Number,
      required: true,
    }
  },
  Cartitems:[
    {
        name:{type:String,required:true},
        price:{type:Number,required:true},
        image:{path:{type:String,required:true}},
        quantity:{type:Number,required:true},
        count:{type:Number,required:true}
     }
    
  ],
 transtionResult:{
    status:{type:String},
    createTime:{type:String},
    amount:{type:Number}
 },
 isPaid:
{
    type:Boolean,
    required:true,
    default:false
},
paidAt:{
    type:Date
},
isDelivered:{
    type:Boolean,
    required:true,
    default:false
},
deleivedAt:{
    type:Date,
}

}
);

const Order=mongoose.model("Order",OrderModel);

module.exports=Order;
