// controllers/cartController.js
const Cart = require('../models/Cart');
const { itemsSchema } = require('../models/item');

// PATCH /api/cart/item/:productId
const UpdateCartitems = async (req, res) => {
  const { id } = req.params;
  const { quantity, productId } = req.body;
  // const userId = req.user.id; // from auth middleware

  if (!quantity || quantity < 1) {
    return res.status(400).json({ success: false, message: 'Invalid quantity' });
  }

  // Find user's cart
  let cart = await Cart.Cartmodel.findOne({ user: id });
  if (!cart) {
    return res.status(404).json({ success: false, message: 'Cart not found' });
  }

  // Find item index by productId (not by item's _id)
  const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
  if (itemIndex === -1) {
    return res.status(404).json({ success: false, message: 'Item not in cart' });
  }

  // Fetch product to validate stock and recalc price (tiered)
  const product = await itemsSchema.findById(productId);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  // Stock validation with new quantity
  if (product.stock < quantity) {
    return res.status(400).json({ success: false, message: `Only ${product.stock} left` });
  }

  // Recalculate price (tiered)
  let finalPrice = product.price;
  if (product.priceTiers && product.priceTiers.length) {
    const tier = product.priceTiers.find(t => quantity >= t.minQty && (!t.maxQty || quantity <= t.maxQty));
    if (tier) finalPrice = tier.price;
  }

  // Update quantity and price
  cart.items[itemIndex].quantity = quantity;
  cart.items[itemIndex].price = finalPrice;

  // Recalculate total cart price
  cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  await cart.save();

  res.json({ success: true, cart });
};

// DELETE /api/cart/item/:productId
const RemoveCartItem = async (req, res) => {
  const userId = req.params.id;
  const { productId } = req.query;
  // const { id: userId, prodDetailsId } = req.query;
  console.log("req.params:", req.params);
  console.log("req.body:", req.body);
  console.log("req.query:", req.query);
  console.log("req.headers['content-type']:", req.headers['content-type']);

  let cart = await Cart.Cartmodel.findOne({ user: userId });
  if (!cart) {
    return res.status(404).json({ success: false, message: 'Cart not found' });
  }

  const newItems = cart.items.filter(item => item.productId.toString() !== productId); // productid
  if (newItems.length === cart.items.length) {
    return res.status(404).json({ success: false, message: 'Item not in cart' });
  }

  cart.items = newItems;
  cart.totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  await cart.save();

  res.json({ success: true, cart });
};

module.exports = { UpdateCartitems, RemoveCartItem };