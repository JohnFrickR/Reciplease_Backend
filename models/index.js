// setting up the database model, require mongoose and our dotenv file so we can use it here
require('dotenv').config()
const mongoose = require("mongoose")
const {MONGODB_URI} = process.env


//This is to Establish Database connection and is necessary .. Why? I need to look that up again.. 
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })


// These are our Connection Events, which will let us know certain things like when we open mongoose or close it.
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error))

// export the models 
module.exports={
    Recipe: require("./Recipe.js")
}