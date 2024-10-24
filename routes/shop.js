const path = require('path');
const express = require('express');
const adminData = require('./admin'); // Importing products array from admin.js
const rootDir = require('../util/path');
const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products; // Accessing the products array
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
