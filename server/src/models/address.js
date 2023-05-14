import mongoose, { mongo } from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    houseNo: {
      type: String,
      required: [true, "Please enter house number"],
    },
    city: {
      type: String,
      required: [true, "Please enter city"],
    },
    state: {
      type: String,
      required: [true, "Please enter state"],
    },
    phoneNo: {
      type: String,
      required: [true, "Please enter phone number"],
    },
    zipCode: {
      type: String,
      required: [true, "Please enter zip code"],
    },
    country: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", AddressSchema);
