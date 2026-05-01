// const mongoose = require('mongoose')

// const User3DetailsSchema = mongoose.Schema({
//   username: {
//     type: String,
//     require: [true, 'username not filled'],
//     min: [3, 'must be char more than 3']
//   },
//   email: {
//     type: String,
//     require: [true, 'email not filled'],
//     unique: true,
//     match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
//   },
//   phonenumber: {
//     type: Number,
//     require: [true, 'your Phone Number is essential'],
//     match: [/^(\+92|0)?[3][0-9]{9}$/, 'Please enter a valid Pakistani phone number'],
//   },
  

//   User3: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Buyzar_user'
//   }]
// })

// // User3Schema.pre('save', async function (next){
// //   if(!this.isModified("password")){
// //     return next()
// //   }
// //   const salt = await bcrypt.genSalt(11);
// //   console.log(salt);
// //   const encrptPASS =  bcrypt.hashSync(this.password,11)
// //   console.log(encrptPASS);
// //   this.password = encrptPASS

// // })

// // User3Schema.methods.LoginPassConform = async function (pass) {
// //   return await bcrypt.compare(pass, this.password)
// // }

// const User3details = mongoose.model('user-details', User3DetailsSchema)

// module.exports = User3details

const mongoose = require("mongoose");

const UserDetailsSchema = mongoose.Schema(
  {
    /* ===== USER INFO ===== */
    fullName: {
      type: String,
      // required: true,
      minlength: 3,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      // required: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Invalid email",
      ],
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other", "Prefer not to say"],
      default: "Prefer not to say",
    },

    profilePicture: {
      type: String,
    },

    /* ===== ADDRESS INFO ===== */
    addressLabel: {
      type: String,
      enum: ["Home", "Office", "Other"],
      required: true,
    },

    recipientName: {
      type: String,
      // required: true,
    },

    addressLine1: {
      type: String,
      // required: true,
    },

    addressLine2: {
      type: String,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    postalCode: {
      type: String,
      // required: true,
    },

    country: {
      type: String,
      required: true,
    },

    deliveryPhone: {
      type: String,
      // required: true,
    },

    userRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyzar_user",
      required: true,
    },
  },
  { timestamps: true }
);

const User3details = mongoose.model("user-details", UserDetailsSchema);
module.exports =  User3details ;
