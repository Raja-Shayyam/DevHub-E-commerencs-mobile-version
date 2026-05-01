const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const User7Schema = mongoose.Schema({
  firstName: {
    type: String,
    require: [true, 'first name not filled'],
    min: [3, 'must be char more than 3']
  },
  lastName: {
    type: String,
    require: [true, 'last name not filled'],
    min: [3, 'must be char more than 3']
  },
  email: {
    type: String,
    require: [true, 'email not filled'],
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phoneNumber: {
    type: String,
    require: [false, 'phone number not filled'],
    unique: true,
    // match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    require: [true, 'username not filled'],
    min: [5, 'must be more than 5 char`s'],
    // validate: {
    //   validator: function (pass) {
    //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?=\S+$)/.test(pass)
    //   },
    //   message: 'must have uppercase | lowercase | special Char | no bw space '
    // },
    // select: false
  },
  ItemsU: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'C-items'
  }]
})

User7Schema.pre('save', async function (next) {
  if (!this.isModified("password")) {
    return next()
  }
  const salt = await bcrypt.genSalt(11);
  console.log(salt);
  const encrptPASS = bcrypt.hashSync(this.password, 11)
  console.log(encrptPASS);
  this.password = encrptPASS

})

User7Schema.methods.LoginPassConform = async function (pass) {
  return await bcrypt.compare(pass, this.password)
}

const User7 = mongoose.model('Buyzar_user', User7Schema)

module.exports = User7
