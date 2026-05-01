const jwt = require('jsonwebtoken')
const User3 = require('../models/user3')


const protect = async (req, res, next) => {
  console.log('All headers:', req.headers);  // Check all headers
  console.log('Auth header:', req.headers.authorization);

  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(" ")[1]
  }

  if (token) {
    try {
      const decoDe = jwt.verify(token, process.env.SECREATE_KEY_JWT)
      console.log(decoDe);

      const u = await User3.findById(decoDe._id).select("-password")
      if (u) {
        console.log("ü ", u);
        req.user = u
        next()
      }
    } catch (error) {
      console.error("érror in protect ", error.message);
      res.status(400).json({
        sucess: false,
        message: error.message,
        detals: error
      })
    }
  }
}

module.exports = protect