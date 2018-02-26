const Ingredient = require('../models/ingredient')
const Views = require('../views/ingredients_view')

const index = (req, res) => {
  Ingredient.fetchAll()
    .then(ingredients => res.json(Views.getAll(ingredients.models)))
    .catch(err => res.json(Views.error(err)))
}

const create = (req, res) => {
  const {
    name,
    description,
    price,
  } = req.body

  const ingredient = new Ingredient({
    name,
    description,
    price,
  })

  ingredient.save()
    .then(ingredient => res.status(201).json(
      Views.create(ingredient.model))
    )
    .catch(err => res.status(422).json(
      Views.error(`Ingredient couldn't be saved. ${err}`, 422))
    )
}

const name = (req, res) => {
  const name = req.params.name
  Ingredient
    .where('name', name)
    .fetch()
    .then(ingredients => res.json(Views.getAll(ingredients.models)))
    .catch(() => res.status(404).json(
      Views.error(`Ingredient with name ${name} not found`, 404)
    ))
}

const show = (req, res) => {
  const id = req.params.id
  Ingredient
    .where('id', id)
    .fetch()
    .then(ingredient => res.json(Views.getOne(ingredient.model)))
    .catch(() => res.status(404).json(
      Views.error(`Ingredient with id ${id} not found`, 404)
    ))
}

module.exports = {
  index,
  create,
  name,
  show
}
