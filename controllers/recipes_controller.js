const Recipe = require('../models/recipe')
const Views = require('../views/recipes_view')

const index = (req, res) => {
  Recipe
    .fetchAll()
    .then(recipes => res.json(Views.getAll(recipes.models)))
    .catch(err => res.status(500).json(Views.error(err)))
}

const create = (req, res) => {
  const {
    name,
    description,
    price,
  } = req.body.parse

  const recipe = new Recipe({
    name,
    description,
    price,
  })

  recipe.save()
    .then(recipe => res.status(201).json(
      Views.create(recipe.model)
    ))
    .catch(err => res.status(422).json(
      Views.error(`Recipe couldn't be saved. ${err}`, 422)
    ))
}

const name = (req, res) => {
  const name = req.params.name
  Recipe
    .where('name', name)
    .fetch()
    .then(recipes => res.json(Views.getAll(recipes.models)))
    .catch(() => res.status(404).json(
      Views.error(`Recipe with name ${name} not found`, 404)
    ))
}

const show = (req, res) => {
  const id = req.params.id
  Recipe
    .where('id', id)
    .then(recipe => res.json(Views.getOne(recipe.model)))
    .catch(() => res.status(404).json(
      Views.error(`Recipe with id ${id} not found`, 404)
    ))
}

module.exports = {
  index,
  create,
  name,
  show,
}
