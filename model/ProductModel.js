const mongoose = require("mongoose");
const Review = require("../model/Reviewmodel");
const Imageschema = mongoose.Schema({
  path: { type: String, required: true },
});

const ProductSchema = mongoose.Schema({
  ProductName: { type: String, required: true },
  ProductDescription: { type: String, required: true },
  Category: { type: String, required: true },
  Count: { type: Number, required: true },
  Price: { type: Number, required: true },
  rating: { type: String, required: true },
  reviewnumber: { type: String, required: true },
  sales: { type: Number, default: 0 },
  attrs: [{ key: { type: String }, value: { type: String } }],
  images: [Imageschema],
  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Review,
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);
ProductSchema.index(
  { name: "text", description: "text" },
  { name: "TextIndex" }
);
ProductSchema.index({ "attrs.key": 1, "attrs.value": 1 });
module.exports = Product;
