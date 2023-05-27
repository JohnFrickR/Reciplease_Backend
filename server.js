// First, we need to set up our depenedencies in our back-end
require('dotenv').config()

// We can pull PORT from the .env file, usually a better idea to keep private information in .env
const {PORT} = process.env

// we can pull in express here too
const express = require("express")
const app = express()

// import cors 
const cors = require('cors')

// Middleware
app.use(cors()) // This will prevent any errors with cors and let us use origins easily
app.use(express.urlencoded({extended:true})) // allow us to get req.body
app.use(express.json()) // parse json, which is important for getting data

//this is to import the availiable routes in routes/index.js
const routes = require('./routes/index.js')
app.use('/', routes)

// we can use this route to see if we do not hit the routes right or match what we need to 
app.use((req, res) => {res.status(404).json({message: "Not a proper route- 404 Error"})})

// this is our listener, so we can hit our PORT in our .env file.
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))