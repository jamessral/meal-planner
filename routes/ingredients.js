const express = require('express')
const router = express.Router()
const IngredientsController = require('../controllers/ingredientsController')

router.get('/', IngredientsController.index)
router.post('/', IngredientsController.create)
router.get('/:id', IngredientsController.show)
router.put('/:id', IngredientsController.update)
router.get('/name/:name', IngredientsController.name)
router.delete('/:id', IngredientsController.remove)

module.exports = router
