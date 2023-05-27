// We import router here to use it in our app
const router = require('express').Router()
// this will let us declare the recipe routes we made in our recipeRoutes.js
const recipeRoute = require("./recipeRoutes")

//this will let us use the recipe routes
router.use('/reciplease', recipeRoute)


module.exports = router; 