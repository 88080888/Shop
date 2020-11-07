const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  comment: { type: String },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);