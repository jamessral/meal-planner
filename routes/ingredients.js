const express = require('express')
const router = express.Router()
const IngredientsController = require('../controllers/ingredients_controller')

router.get('/', IngredientsController.index)
router.use('/name/:name', IngredientsController.name)
router.use('/:id', IngredientsController.show)
router.post('/', IngredientsController.create)

module.exports = router
