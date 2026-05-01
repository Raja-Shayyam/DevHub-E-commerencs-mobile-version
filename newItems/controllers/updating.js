const itemsSchema = require('../models/item')
const TryCatch = require('../middleWares/tryCatch')

const UpdateItem = TryCatch(async (req, res) => {
  console.log(req.body);
//  throw new Error('Test error from UpdateItem controller');
  const data = await itemsSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
  
  res.json({
    sucess: true,
    message: 'data update',
    data: [data, "my updated data"]
  })
}
)
module.exports = UpdateItem