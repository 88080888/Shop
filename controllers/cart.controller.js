const Cart = require('../models/cart.model');

exports.getAllCarts = async (req, res) => {
  try {
    res.json(await Cart.find());
  }
  catch(err) {
      res.status(500).json(err);
  }
};