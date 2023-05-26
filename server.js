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