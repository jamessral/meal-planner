const Ingredient = require('../models/ingredient')
const JsonViews = require('../views/json/ingredient_views')

const index = (req, res) => {
  Ingredient.find({})
    .exec()
    .then(ingredients => res.json(JsonViews.getAll(ingredients)))
    .catch(err => res.json(JsonViews.error(err)))
}

const create = (req, res) => {
  const { name, description, price } = req.body

  const ingredient = new Ingredient({
    name,
    description,
    price,
  })

  ingredient
    .save()
    .then(ingredient =>
      res.status(201).json(JsonViews.create(ingredient))
    )
    .catch(err =>
      res
        .status(422)
        .json(JsonViews.error(`Ingredient couldn't be saved. ${err}`, 422))
    )
}

const name = (req, res) => {
  const name = req.params.name
  Ingredient.find()
    .where('name', name)
    .exec()
    .then(ingredients => res.json(JsonViews.getAll(ingredients)))
    .catch(() =>
      res
        .status(404)
        .json(JsonViews.error(`Ingredient with name ${name} not found`, 404))
    )
}

const show = (req, res) => {
  const id = req.params.id
  Ingredient.findOne()
    .where('_id', id)
    .exec()
    .then(ingredient => res.json(JsonViews.getOne(ingredient)))
    .catch(() =>
      res
        .status(404)
        .json(JsonViews.error(`Ingredient with id ${id} not found`, 404))
    )
}

module.exports = {
  index,
  create,
  name,
  show,
}
