const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// Route for the admin to add products
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

// Route for serving the add-product page
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// Export both the routes and the products array
exports.routes = router;
exports.products = products;
