const Product = require("../models/product");

module.exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};

module.exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    products,
  });
};

module.exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json({
    product,
  });
};
