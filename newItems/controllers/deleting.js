const itemsSchema = require('../models/item')
const TryCatch = require('../middleWares/tryCatch')

const DeleteItem = TryCatch(async (req, res) => {
  console.log('deliting ',req.params , req.body);

  const data = await itemsSchema.findByIdAndDelete(req.params.id)
  // await data.remove()
  res.json({
    sucess: true,
    message: 'data deleted',
    data: ["my deleted data : ",data]
  })
}
)
module.exports = DeleteItem