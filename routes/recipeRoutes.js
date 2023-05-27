const router = require('express').Router();
const {recipeCtrl} = require('../controllers')


//ROUTES - METHODS For our Recipes
router.get('/', recipeCtrl.getRecipe)
router.get('/:id', recipeCtrl.showRecipe)
router.post('/',recipeCtrl.createRecipe) 
router.put('/:id', recipeCtrl.updateRecipe)
router.delete('/:id', recipeCtrl.deleteRecipe)
 
module.exports = router; 