const { Cartmodel } = require("../models/Cart");
const { itemsSchema } = require("../models/item");

// controllers/cartController.js (partial)
const addToCart = async (req, res) => {
  const { id } = req.params // is ke liay always user ki id chiayy
  const { prodDetail, quantity, prod, productId } = req.body;
  console.log(req.params, 'prodDetail', prodDetail, 'body', req.body);

  let prodDetails;
  if (prodDetail == 'from wishlists') {
    console.log(id, prod);

    const prodDetail = await itemsSchema.findById(prod);
    if (!prodDetail) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    } else {
      prodDetails = prodDetail
    }
  } else {
    prodDetails = prodDetail
    console.log('else runed', prodDetails);
  }

  console.log('prodDetails af ter if-else:', prodDetails);
  if (!prodDetails) return res.status(404).json({ success: false, message: 'prodDetails not found' });

  // Stock validation
  if (prodDetails.stock < quantity) {
    return res.status(400).json({ success: false, message: `Only ${prodDetails.stock} left` });
  }

  // Determine price (tiered)
  let finalPrice = prodDetails.price;
  if (prodDetails.priceTiers && prodDetails.priceTiers.length) {
    const tier = prodDetails.priceTiers.find(t => quantity >= t.minQty && (!t.maxQty || quantity <= t.maxQty));
    if (tier) finalPrice = tier.price;
  }

  let cart = await Cartmodel.findOne({ user: id });
  if (!cart) {
    cart = await Cartmodel.create({ user: id, items: [] });
  }
  console.log('created cart ', cart);

  const existingIndex = cart.items.findIndex(item => item.id.toString() === id);
  if (existingIndex > -1) {
    // Update quantity and re‑fetch price
    const newQty = cart.items[existingIndex].quantity + quantity;
    if (prodDetails.stock < newQty) {
      return res.status(400).json({ success: false, message: `Only ${prodDetails.stock} available` });
    }
    let updatedPrice = prodDetails.price;
    if (prodDetails.priceTiers.length) {
      const tier = prodDetails.priceTiers.find(t => newQty >= t.minQty && (!t.maxQty || newQty <= t.maxQty));
      if (tier) updatedPrice = tier.price;
    }
    cart.items[existingIndex].quantity = newQty;
    cart.items[existingIndex].price = updatedPrice;
  } else {
    console.log('existing index ', prodDetails);

    cart.items.push({
      productId: prod,
      name: prodDetails.name,
      image: prodDetails.images[0] || '',
      // image: Array.isArray(prodDetails.images) && prodDetails.images[0] ? prodDetails.images[0] : '',
      quantity,
      price: finalPrice,
      oldPrice: prodDetails.oldPrice || null,
      shipping: prodDetails.shipping?.[0] || 'Standard',
    });
  }

  cart.totalPrice = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  await cart.save();

  res.json({ success: true, cart });
}

module.exports = { addToCart }