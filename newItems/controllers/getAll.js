// const {itemsSchema} = require('../models/item')
const { Cartmodel } = require('../models/Cart');
const TryCatch = require('../middleWares/tryCatch');

const getAll = TryCatch(async (req, res, next) => {
  const owner = req.params.id;
  console.log(req.params, ' in getAll from cart');

  const data = await Cartmodel.findOne({ user: owner })
  return res.status(200).json({
    data,
    Owner: owner
  })
})

module.exports = getAll