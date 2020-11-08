const express = require('express');
const router = express.Router();

const Cart = require('../controllers/Cart.controller');

router.get('/cart', Cart.getAllCarts);

module.exports = router;