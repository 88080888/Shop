const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const cartRoute = require('./routes/cart.routes');
const orderRoute = require('./routes/order.routes');
const productRoute = require('./routes/product.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productRoute);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/client/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/Shop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});