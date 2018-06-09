const express = require('express')
const router = express.Router()
const RecipesController = require('../controllers/recipesController')

router.get('/', RecipesController.index)
router.post('/', RecipesController.create)
router.get('/:id', RecipesController.show)
router.put('/:id', RecipesController.update)
router.delete('/:id', RecipesController.remove)
router.get('/name/:name', RecipesController.name)
router.get('/:id/ingredient', RecipesController.getIngredients)
router.post('/:id/ingredient/:ingredientId', RecipesController.addIngredient)

module.exports = router
