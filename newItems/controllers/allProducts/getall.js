const { itemsSchema } = require("../../models/item")

const getall = async (req, res) => {
  const { page } = (req.query) || 1
  const { limit } = req.query || 10
  console.log(page, limit);

  const skippagesonselectPAge = (page - 1) * limit
  // const allProducts = await itemsSchema.find().skip(skippagesonselectPAge).limit(limit)
  const [allProducts, total] = await Promise.all([
    itemsSchema.find().skip(skippagesonselectPAge).limit(limit),
    itemsSchema.countDocuments()
  ]);
  // console.log(allProducts);

  return res.status(200).json({
    sucess: true, allProducts, pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  })
}

module.exports = getall