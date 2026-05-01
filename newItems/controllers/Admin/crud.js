// controllers/productController.js
const { itemsSchema } = require('../../models/item');
// const TryCatch = require('../../middleWares/tryCatch');

const addProduct = async (req, res) => {
  // if (req.user.role !== 'admin') {
  //   return res.status(403).json({
  //     success: false,
  //     message: 'Only admin can add products',
  //   });
  // }


  const {
    name,
    description,
    images,
    stock,
    price,
    oldPrice,
    priceTiers,
    shipping,
    category,
    tags,
    attributes,
    features,
    specifications,
  } = req.body;

  const product = await itemsSchema.create({
    name,
    description,
    images: images || [],
    stock: stock || 0,
    price,
    shipping,
    oldPrice,
    priceTiers: priceTiers || [],
    category,
    tags: tags || [],
    attributes: attributes || {},
    features: features || [],
    specifications: new Map(Object.entries(specifications || {})),
    owner: req.params.uID, // admin's ID
    // owner: req.user.id, // admin's ID
  });

  res.status(201).json({
    success: true,
    message: 'Product added successfully',
    product,
  });
}

const products = require('../../../Buyzaar/products_bands/products')

const addManyprodAdin = async (req, res) => {
  // console.log(req.body);

  const result = await itemsSchema.insertMany(req.body);
  console.log(result);

}

module.exports = { addProduct, addManyprodAdin };