const express = require('express')
const router = express.Router()
const TryCatch = require('../middleWares/tryCatch')
// const newItem = require('../controllers/AddNewOneInCART')
const { addToCart } = require('../controllers/AddNewOneInCART')
const UpdateItem = require('../controllers/updating')
const DeleteItem = require('../controllers/deleting')
const getAll = require('../controllers/getAll')
const getall = require('../controllers/allProducts/getall')
const { addToWishlist, AllWishlist } = require('../controllers/addInWish')
const { UpdateCartitems, RemoveCartItem } = require('../controllers/updatecartitems')

router.get('/allProducts', getall)

// .post(TryCatch(newItem.addToCart))
router.route('/AdditeminCART/:id')
  .post(TryCatch(addToCart))
  .patch(TryCatch(UpdateCartitems))
  .get(TryCatch(getAll))
  .delete(TryCatch(RemoveCartItem))

router.post('/AdditeminWishlist/:userId', TryCatch(addToWishlist))
router.get('/AdditeminWishlist/:userId', TryCatch(AllWishlist))

// router.post('/test', testRoute)

router.route(`/changeList/:id`)
  .patch(TryCatch(UpdateItem))
  .delete(TryCatch(DeleteItem))

module.exports = { router }