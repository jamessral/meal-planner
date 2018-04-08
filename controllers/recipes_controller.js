const Recipe = require('../models/recipe')
const JsonViews = require('../views/json/recipe_views')

const index = (req, res) => {
  Recipe.all()
    .then(recipes => res.json(JsonViews.getAll(recipes.models)))
    .catch(err => res.status(500).json(JsonViews.error(err)))
}

const create = (req, res) => {
  const { name, description, price } = req.body.parse

  const recipe = new Recipe({
    name,
    description,
    price,
  })

  recipe
    .save()
    .then(recipe => res.status(201).json(JsonViews.create(recipe.model)))
    .catch(err =>
      res
        .status(422)
        .json(JsonViews.error(`Recipe couldn't be saved. ${err}`, 422))
    )
}

const name = (req, res) => {
  const name = req.params.name
  Recipe.find()
    .where('name', name)
    .then(recipes => res.json(JsonViews.getAll(recipes.models)))
    .catch(() =>
      res
        .status(404)
        .json(JsonViews.error(`Recipe with name ${name} not found`, 404))
    )
}

const show = (req, res) => {
  const id = req.params.id
  Recipe.find()
    .where('id', id)
    .then(recipe => res.json(JsonViews.getOne(recipe.model)))
    .catch(() =>
      res
        .status(404)
        .json(JsonViews.error(`Recipe with id ${id} not found`, 404))
    )
}

module.exports = {
  index,
  create,
  name,
  show,
}
