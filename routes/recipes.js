const express = require('express')
const router = express.Router()
const RecipesController = require('../controllers/recipes_controller')

router.get('/', RecipesController.index)
router.post('/', RecipesController.create)
router.delete('/:id', RecipesController.remove)
router.use('/name/:name', RecipesController.name)
router.use('/:id', RecipesController.show)

module.exports = router
