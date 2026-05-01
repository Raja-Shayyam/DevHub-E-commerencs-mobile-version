const jwt = require('jsonwebtoken')

const TokenGenration = (value) => {
  const { _id, username, email } = value
// console.log('EXPIRE_JWT ', process.env.EXPIRE_JWT);

  return jwt.sign({ _id, username, email }, process.env.SECREATE_KEY_JWT, {
    expiresIn: process.env.EXPIRE_JWT
  })
}

module.exports = TokenGenration