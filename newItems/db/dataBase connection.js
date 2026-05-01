const mongoose = require('mongoose')

const connDB = async () => {
  try {
    const conection = await mongoose.connect(process.env.MONGO_ATLS_2, {
      dbName: process.env.MONGOOSE_DB
    })
    console.log(`MongoDB Connected: ${conection.connection.host} to `, conection.connection.name);
    // return conection
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

module.exports = connDB;