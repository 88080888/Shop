const express = require('express');
const router = express.Router();

const Product = require('../controllers/product.controller');

router.get('/product', product.getAllProducts);

router.get('/product/:id', product.getProductById);

module.exports = router;