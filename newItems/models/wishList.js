const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    Owners: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyzar_user",
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "C-items",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
    },

    price: {
      type: String,
      required: [true, "Price is required"],
      min: [0, "Price must be greater than 0"],
    },

    qty: {
      type: Number,
      default: 1,
      min: [1, "Quantity must be at least 1"],
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/* Prevent same user from adding same product twice */
wishlistSchema.index({ Owners: 1, name: 1 }, { unique: true });

module.exports = mongoose.model("Wishlist", wishlistSchema);
