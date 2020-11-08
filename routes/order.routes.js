const express = require('express');
const router = express.Router();

const Order = require('../controllers/order.controller');

router.post('/order/add', Order.addNewOrder);

router.get('/order/all', Order.getAllOrders);

router.get('/order/:id', Order.getOrderById);

module.exports = router;