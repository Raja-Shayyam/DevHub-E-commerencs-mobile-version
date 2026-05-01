const User3details = require('../models/user3Details');

const userDetails = async (req, res) => {
  console.log(req.body);
  const {
    fullName, firstName, lastName, email, phone, dateOfBirth, gender, avatar, addressLabel, recipientName, addressLine1, addressLine2, city, state, postalCode, country, deliveryPhone, userRef
  } = req.body;

  // const id = await User3.findOne({ email: email })
  // console.log('id ',id);


  const data = await User3details.create({
    fullName: fullName,

    firstName: firstName,

    lastName: lastName,

    email: email,

    phoneNumber: phone,

    dateOfBirth: dateOfBirth,

    gender: gender,

    profilePicture: avatar,

    addressLabel: addressLabel,

    recipientName: recipientName,

    addressLine1: addressLine1,

    addressLine2: addressLine2,

    city: city,

    state: state,

    postalCode: postalCode,

    country: country,

    deliveryPhone: deliveryPhone,

    userRef: userRef
  })

  // return res.status(200).json({
  //   sucess: true,
  //   message: 'registered Done !',
  //   data
  // })

}

const userDetalUpdate = async (req, res) => {
  const {
    fullName, firstName, lastName, email, phone, dateOfBirth, gender, profilePicture, addressLabel, recipientName, addressLine1, addressLine2, city, state, postalCode, country, deliveryPhone, userRef
  } = req.body;

  const updates = {};
  if (firstName) updates.firstName = firstName;
  if (lastName) updates.lastName = lastName;
  if (fullName) updates.fullName = firstName + " " + lastName;
  if (email) updates.email = email;
  if (phone) updates.phoneNumber = phone;
  if (dateOfBirth) updates.dateOfBirth = dateOfBirth;
  if (gender) updates.gender = gender;
  if (avatar) updates.profilePicture = profilePicture;
  if (userRef) {
    updates.userRef = userRef;
    updates.addressLabel = addressLabel
    updates.recipientName = recipientName
    updates.addressLine1 = addressLine1
    updates.addressLine2 = addressLine2
    updates.city = city
    updates.state = state
    updates.postalCode = postalCode
    updates.country = country
    updates.deliveryPhone = deliveryPhone
  }

  const user = await User3details.findByIdAndUpdate(
    id,
    { $set: updates },
    {
      new: true,              // Return updated document
      runValidators: true,    // Run schema validation
    }
  );

  res.status(200).json({
    success: true,
    message: 'User updated successfully',
    data: user
  });

}

const getUserDetails = async(req,res)=>{
  const { id } = req.params;  // ✅ Get from URL params, not body
    console.log('user details id : ', id);
    
    // const user = await User3details.findById(id);
    const user = await User3details.findOne({ userRef: id });
    console.log('user details user: ',user);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // ✅ Send response
    res.status(200).json({
      success: true,
      data: user
    });
}

module.exports = { userDetails, userDetalUpdate, getUserDetails }