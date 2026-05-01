const express = require('express')
const adminRouter = express.Router()
const TryCatch = require('../middleWares/tryCatch')
const { addProduct, addManyprodAdin } = require('../controllers/Admin/crud')
// const testRoute = require('../controllers/testing')
// const UpdateItem = require('../controllers/updating')
// const DeleteItem = require('../controllers/deleting')
// const getAll = require('../controllers/getAll')
// const { addToWishlist, AllWishlist } = require('../controllers/addInWish')


// adminRouter.route('/adminProductADD')
//   .post(addProduct)
adminRouter.post('/adminProductADD/:uID', addProduct)
adminRouter.post('/adminProductINbulk/:uID', addManyprodAdin)
//   .get(TryCatch(getAll))
//   .delete(TryCatch(DeleteItem))

// router.post('/AdditeminWishlist/:userId', TryCatch(addToWishlist))
// router.get('/AdditeminWishlist/:userId', TryCatch(AllWishlist))

// router.post('/test', testRoute)

// router.route(`/changeList/:id`)
//   .patch(TryCatch(UpdateItem))
//   .delete(TryCatch(DeleteItem))

module.exports = { adminRouter }