const express = require('express')
const cors = require('cors')

const { router } = require('./Routes/productRoutes')
const { Userouter } = require('./Routes/userRoutes')
const { errorHandler } = require('./middleWares/utils/errorHandler')
const { adminRouter } = require('./Routes/adminRouter')

const App = express()

App.use(express.json())

App.use(
  cors({
    // origin: "https://mybuyzaar.com",
    origin: ["http://localhost:5173", "https://mybuyzaar.com", "https://www.mybuyzaar.com", "http://mybuyzaar.com"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);



App.get('/', (req, res) => {
  res.send(`
      <span> hi there on port ${myPort} 🖐🏻 . </span>
      </br>
      <span> ${dbConnection} . </span>
    `)
})

//!  2. calling product Routes
App.use('/users', Userouter)
App.use('/items', router)
App.use('/adminPannel', adminRouter)

//! 3. middle ware
App.use(errorHandler)

module.exports = App