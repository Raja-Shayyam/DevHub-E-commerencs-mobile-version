const express = require('express')
const TryCatch = require('../middleWares/tryCatch')
const protect = require('../middleWares/Protect')
const { register, Login, UpdateUser, me } = require('../controllers/OTH')
const { userDetails, userDetalUpdate, getUserDetails } = require('../controllers/userDetails')

const Userouter = express.Router()

// Userouter.route('/athen')
//   .get(TryCatch(Login))
//   .post(TryCatch(register))

Userouter.post('/reg_user', TryCatch(register))
Userouter.post('/login', TryCatch(Login))

Userouter.route('/userDetails/:id')
  .post(TryCatch(userDetails))
  .patch(TryCatch(userDetalUpdate))
  .get(TryCatch(getUserDetails))
// Userouter.get('/myprofile',TryCatch(register))

Userouter.get('/me', TryCatch(protect), TryCatch(me))

Userouter.route('/updation/:id').patch(TryCatch(UpdateUser))

module.exports = { Userouter }