const Recipe = require('../models/recipe')
const JsonViews = require('../views/json/recipe_views')

const index = (req, res) => {
  Recipe.find({})
    .exec()
    .then(recipes => res.json(JsonViews.getAll(recipes)))
    .catch(err => res.status(500).json(JsonViews.error(err)))
}

const create = (req, res) => {
  const { name, description } = req.body

  const recipe = new Recipe({
    name,
    description,
  })

  recipe
    .save()
    .then(recipe => res.status(201).json(JsonViews.create(recipe)))
    .catch(err =>
      res
        .status(422)
        .json(JsonViews.error(`Recipe couldn't be saved. ${err}`, 422))
    )
}

const remove = (req, res) => {
  console.log('in remove', req.params)
  const id = req.params.id
  Recipe.remove({ _id: id })
    .exec()
    .then(() => res.status(200).json({ message: 'Deleted successfully' }))
    .catch(err =>
      res
        .status(400)
        .json(JsonViews.error(`Recipe couldn't be deleted, ${err}`, 400))
    )
}

const name = (req, res) => {
  const name = req.params.name
  Recipe.find({})
    .exec()
    .where('name', name)
    .then(recipes => res.json(JsonViews.getAll(recipes)))
    .catch(() =>
      res
        .status(404)
        .json(JsonViews.error(`Recipe with name ${name} not found`, 404))
    )
}

const show = (req, res) => {
  const id = req.params.id
  Recipe.findOne({})
    .where('_id', id)
    .exec()
    .then(recipe => res.json(JsonViews.getOne(recipe)))
    .catch(() =>
      res
        .status(404)
        .json(JsonViews.error(`Recipe with id ${id} not found`, 404))
    )
}

module.exports = {
  create,
  index,
  name,
  remove,
  show,
}
