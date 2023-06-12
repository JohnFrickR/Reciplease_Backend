// first we need to import mongoose
const mongoose = require('mongoose')

// This is the format for a mongoose model schema
const RecipeSchema = new mongoose.Schema({
    name: String,
    ingredients: {type: [String]},
    category: String,
    description: String,
    rating: {type: Number, min: 1, max: 5},
    tags: {type: [String]},
    directions: {type: [String]},
    servings: Number,
    img: String
}, {
    // this lets us keep a timestep for when they are created or updated
    timestamps:
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

// now we need to create a model from our schema 
const Recipe = mongoose.model("Recipe", RecipeSchema)

module.exports = Recipe