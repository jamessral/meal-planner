const express = require('express')
const router = express.Router()
const RecipesController = require('../controllers/recipes_controller')

router.get('/', RecipesController.index)
router.post('/', RecipesController.create)
router.get('/:id', RecipesController.show)
router.put('/:id', RecipesController.update)
router.delete('/:id', RecipesController.remove)
router.get('/name/:name', RecipesController.name)

module.exports = router
