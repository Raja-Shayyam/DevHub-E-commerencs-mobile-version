const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "You can't add the same product twice"],
      required: [true, 'Please add the product name'],
      minlength: [6, 'Name must be longer than 6 characters'],
      maxlength: [47, 'Name must be shorter than 38 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a product description'],
      minlength: [6, 'Description must be longer than 6 characters'],
      maxlength: [500, 'Description must be shorter than 501 characters'],
    },
    images: {
      type: [String],
      default: [],
    },
    stock: {
      type: Number,
      required: [true, 'Please add total stock quantity'],
      min: [0, 'Stock must be at least 0'],
      max: [1000, 'Stock cannot exceed 1000'],
      validate: {
        validator: Number.isInteger,
        message: 'Stock must be an integer',
      },
    },
    price: {
      type: Number,
      required: [true, 'Please add a base price'],
      min: [0, 'Price must be greater than 0'],
    },
    oldPrice: {
      type: Number,
      required: [true, 'Please add a base price'],
      min: [0, 'Price must be greater than 0'],
    },
    priceTiers: {
      type: [
        {
          minQty: { type: Number, required: true },
          maxQty: { type: Number },
          price: { type: Number, required: true },
        },
      ],
      default: [],
    },
    category: {
      type: String,
      enum: {
        values: ['Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category'],
        message: '{VALUE} is not a valid category',
      },
      required: [true, 'Please select a category'],
    },
    tags: {
      type: [String],
      default: [],
    },
    shipping: {
      type: [String],
      default: [],
    },
    attributes: {
      productType: { type: String, default: '' },
      material: { type: String, default: '' },
      design: { type: String, default: '' },
      customization: { type: String, default: '' },
      protection: { type: String, default: '' },
      warranty: { type: String, default: '' },
    },
    features: {
      type: [String],
      default: [],
    },
    specifications: {
      type: Map,
      of: String,
      default: {},
    },
    // The single owner (admin)
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    averageRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    soldCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// ----- Order Schema (buyer = customer) -----
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        price: Number,
      },
    ],
    totalAmount: Number,
    status: {
      type: String,
      enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    paymentMethod: String,
    shippingAddress: String,
  },
  { timestamps: true }
);
productSchema.pre("save", function (next) {
  this.name = this.name.trim().replace(/\s+/g, " ");
  this.name = this.name.replace(/\b\w/g, (char) => char.toUpperCase());
  this.description = this.description.trim()
  console.log('working');

  //? this.name = this.name.charAt(0).toUppercase + this.name.slice(1 [to infinity or string length so dont use , and ending letter index]).toLowercase
  next();
})

const itemsSchema = mongoose.model('C-items', productSchema)
const Order = mongoose.model('Order', orderSchema);

module.exports = { itemsSchema, Order } 