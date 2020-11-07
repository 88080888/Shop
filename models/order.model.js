const mongoose = require('mongoose');

const orderDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  comment: { type: String },
  price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  preferredContact: { type: String, required: true },
  message: { type: String },
  ordered: { type: Date, required: true },
  orderDetails: [ orderDetailsSchema ],
});

module.exports = mongoose.model('Order', orderSchema);