const App = require('./app.js')
const dotenv = require('dotenv').config()
const dbConnection = require('./db/dataBase connection')

//!  1. calling db connectoin
dbConnection()

const myPort = process.env.MY_PORT
App.listen(myPort, () => {
  console.log('running on port ', myPort);
  console.log('running on db ', dbConnection);

})