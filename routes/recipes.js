const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')
const RecipeController = require('../controllers/recipes_controller.js')

router.get('/', (req, res) => {
  Recipe.find()
    .exec()
    .then(recipes => res.json(RecipeController.getAll(recipes)))
    .catch(err => res.status(500).json(RecipeController.error(err)))
})

router.use('/name/:name', (req, res) => {
  const name = req.params.name
  Recipe
    .find({ name })
    .exec()
    .then(recipes => res.json(RecipeController.getAll(recipes)))
    .catch(() => res.status(404).json(
      RecipeController.error(`Recipe with name ${name} not found`, 404)
    ))
})

router.use('/:id', (req, res) => {
  const id = req.params.id
  Recipe.findById(id)
    .then(recipe => res.json(RecipeController.getOne(recipe)))
    .catch(() => res.status(404).json(
      RecipeController.error(`Recipe with id ${id} not found`, 404)
    ))
})

router.post('/', (req, res) => {
  const {
    name,
    description,
    price,
    ingredients,
  } = req.body.parse

  const recipe = new Recipe({
    name,
    description,
    price,
    ingredients
  })

  recipe.save()
    .then(recipe => res.status(201).json(
      RecipeController.create(recipe)
    ))
    .catch(err => res.status(422).json(
      RecipeController.error(`Recipe couldn't be saved. ${err}`, 422)
    ))
})

module.exports = router
