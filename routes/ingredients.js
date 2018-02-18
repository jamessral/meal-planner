const express = require('express')
const router = express.Router()
const Ingredient = require('../models/ingredient')
const IngredientController = require('../controllers/ingredients_controller')

router.get('/', (req, res) => {
  Ingredient.find()
    .exec()
    .then(ingredient => res.json(IngredientController.getAll(ingredient)))
    .catch(err => res.json(IngredientController.error(err)))
})

router.use('/name/:name', (req, res) => {
  const name = req.params.name
  Ingredient
    .find({ name })
    .exec()
    .then(ingredients => res.json(IngredientController.getAll(ingredients)))
    .catch(() => res.status(404).json(
      IngredientController.error(`Ingredient with name ${name} not found`, 404)
    ))
})

router.use('/:id', (req, res) => {
  const id = req.params.id
  Ingredient.findById(id)
    .then(ingredient => res.json(IngredientController.getOne(ingredient)))
    .catch(() => res.status(404).json(
      IngredientController.error(`Ingredient with id ${id} not found`, 404)
    ))
})

router.post('/', (req, res) => {
  const {
    name,
    description,
    price,
    recipes,
  } = req.body

  const ingredient = new Ingredient({
    name,
    description,
    price,
    recipes
  })

  ingredient.save()
    .then(ingredient => res.status(201).json(
      IngredientController.create(ingredient))
    )
    .catch(err => res.status(422).json(
      IngredientController.error(`Ingredient couldn't be saved. ${err}`, 422))
    )
})

module.exports = router
