const mongoose = require("mongoose");

const usermodel = mongoose.Schema({
  First_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
  Email: { type: String, requried: true },
  Address: { type: String, required: true },
  Country: { type: String, required: true },
  Zip: { type: Number, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Password: { type: String, required: true },
  is_Admin: { type: String, required: true, default: false },
});

const User=mongoose.model("User",usermodel);
module.exports=User;
