import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  image: {},
  productID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: {type: String, requireed: true},
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
})

const Product = mongoose.model("Product", productSchema)

export default Product
