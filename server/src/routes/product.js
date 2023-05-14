const jwt = require("jsonwebtoken")

const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
} = require("../controllers/product");

const router = Router();

router.route("/api/products").get(getProducts).post(createProduct);

router.get("/api/products/:id",getProduct);

module.exports = router;
