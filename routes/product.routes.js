const express = require('express');
const router = express.Router();

const Product = require('../controllers/product.controller');

router.get('/product', Product.getAllProducts);

router.get('/product/:id', Product.getProductById);

module.exports = router;