const User7 = require('../models/user3')
const TokenGenration = require('../middleWares/utils/TokenGenration')

const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password
  } = req.body;

  const data = await User7.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    password
  })

  return res.status(200).json({
    sucess: true,
    message: 'registeration Done !',
    data
  })
}

const Login = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  // const isUser = await User7.findOne({ email: email }).select("-_id")
  const isUser = await User7.findOne({ email: email })
  if (isUser) {
    const matched = await isUser.LoginPassConform(password)
    console.log(matched, isUser);

    let tk;
    if (matched) {
      tk = TokenGenration(isUser)
      console.log('Tk ', tk);
    }
    return res.status(200).json({
      sucess: matched ? true : false,
      message: matched ? 'found user ⬇' : 'Not found user ⬇ with this \nPassword',
      user: [isUser.username, isUser.email, isUser._id],
      matched: matched,
      tk: tk ? tk : ''
    })

  } else {
    return res.status(201).json({
      sucess: isUser ? true : false,
      message: isUser ? 'found user ⬇' : 'Not found user ⬇ with this email',
      isUser: isUser
    })
  }
}

const UpdateUser = async (req, res) => {
  // console.log(DataTransfer);

  const id = req.params.id;
  const { username, email, password } = req.body

  // const user = await User7.findOne( id )
  const user = await User7.findById(id)
  if (user) {
    console.log(user);
    if (username) user.username = username
    if (password) user.password = password
    if (email) user.email = email
    await user.save()
  }

  res.json({
    sucess: user ? true : false,
    message: user ? 'found and changed' : 'Not found so not changed'
  })

}


const me = async (req, res) => {
  try {
    console.log('User ID:', req.user._id);

    return res.status(200).json({
      success: true,
      data: {
        _id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        phoneNumber: req.user.phoneNumber,
        username: req.user.username,
        email: req.user.email,
        // Add any other fields you want to return
        createdAt: req.user.createdAt,
        role: req.user.role,
        isActive: req.user.isActive
      }
    })


  } catch (error) {
    res.status(404);

    throw new Error('User not found');

  }
}

module.exports = { register, Login, UpdateUser, me }