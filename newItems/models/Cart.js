// models/cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'C-items',
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        // Snapshot of product details at addition time
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,   // primary image URL
          default: '',
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,   // the price paid (after tier)
          required: true,
        },
        oldPrice: {
          type: Number,   // snapshot of product.oldPrice (if any)
          default: null,
        },
        shipping: {
          type: String,   // snapshot of shipping method or cost
          default: '',
        },
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Auto‑calculate total price before saving
cartSchema.pre('save', function (next) {
  this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  next();
});

const Cartmodel = mongoose.model('Cart', cartSchema);
module.exports = { Cartmodel }