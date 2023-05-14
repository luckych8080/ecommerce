const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requrired: [true, "Please enter product name"],
    },
    description: {
      type: String,
      requrired: [true, "Please enter product description"],
    },
    price: {
      type: Number,
      requrired: [true, "Please enter product price"],
    },
    images: [
      {
        public_id: { type: String },
        url: { type: String },
      },
    ],
    category: {
      type: String,
      required: [true, "Please select category"],
      enum: {
        values: [
          "Electronics",
          "Cameras",
          "Laptops",
          "Accessories",
          "Headphones",
          "Sports",
          "smartphones",
          "laptops",
          "fragrances",
          "skincare",
          "groceries",
          "home-decoration",
          "furniture",
          "tops",
          "womens-dresses",
          "womens-shoes",
          "mens-shirts",
          "mens-shoes",
          "mens-watches",
          "womens-watches",
          "womens-bags",
          "womens-jewellery",
          "sunglasses",
          "automotive",
          "motorcycle",
          "lighting",
        ],
        message: "Please select correct category",
      },
    },
    seller: {
      type: String,
      required: [true, "Please enter product seller name"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
