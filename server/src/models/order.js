import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    shippingInfo: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Address",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItem: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
      },
    ],
    paymentInfo: {
      id: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      GST: {
        type: Number,
        required: true,
      },
      amountPaid: {
        type: Number,
        required: true,
      },
    },
    orderStatus: {
      type: String,
      default: "Processing",
    },
  },
  {
    timestamps: true,
  }
);

module.export = mongoose.model("Order", orderSchema);
