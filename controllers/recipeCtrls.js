// lets import our models
const db = require('../models')


// INDUCES model here below / this will help us achieve CRUD functionality.
// Index
// This will get us all of the recipes
const getRecipe = (req, res) => {
    db.Recipe.find({})
      .then((foundRecipe) => {
        if (!foundRecipe) {
          res.status(404).json({ message: "Cannot find the Recipes" })
        } else {
          res.status(200).json({ data: foundRecipe })
        }
      })
  }

// Show
// show route for the SPECIFIC recipe
const showRecipe = (req,res) =>{
    db.Recipe.findById(req.params.id)
    .then((foundRecipe)=>{
        if(!foundRecipe){
            res.status(404).json({message: 'cannot find the Recipe'})
        } else {
            res.status(200).json({data: foundRecipe})
        }
    })
}

// Create
// This will let us create a new recipe
const createRecipe = (req,res) =>{
    db.Recipe.create(req.body)
    .then((createdRecipe)=>{
        if(!createdRecipe){
            res.status(400).json({message:'cannot create Recipe'})
        } else {
            res.status(201).json({data: createdRecipe, message:'Recipe created'})
        }
    })
}

// Update
// This will let us update a recipe
const updateRecipe = (req, res) =>{
    db.Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedRecipe) => {
        if(!updatedRecipe){
            res.status(400).json({Message: 'Could not update Recipe'})
        } else {
            res.status(200).json({Data: updatedRecipe, Message: "Recipe updated"})
        }
    })
}

// Delete
// this will let us delete the recipe
const deleteRecipe = (req,res) => {
    db.Recipe.findByIdAndDelete(req.params.id)
    .then((deletedRecipe) => {
        if(!deletedRecipe){
            res.status(400).json({Message: 'Could not delete Fund'})
        } else {
            res.status(200).json({Data: deletedRecipe, Message: "Recipe deleted"})
        }
    })
}

// this will export our routes/controllers
module.exports = {
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    showRecipe
}