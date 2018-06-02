const Ingredient = require('../models/ingredient')
const JsonViews = require('../views/json/ingredientViews')

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
    .then(ingredient => res.status(201).json(JsonViews.create(ingredient)))
    .catch(err =>
      res
        .status(422)
        .json(JsonViews.error(`Ingredient couldn't be saved. ${err}`, 422))
    )
}

const remove = (req, res) => {
  const id = req.params.id

  Ingredient.remove({
    _id: id,
  })
    .exec()
    .then(() =>
      res.status(200).json({
        message: 'Deleted successfully',
      })
    )
    .catch(err =>
      res
        .status(400)
        .json(JsonViews.error(`Ingredient couldn't be deleted, ${err}`, 400))
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

const update = (req, res) => {
  const id = req.params.id
  const { name, description, price } = req.body
  const updateParams = {
    name,
    description,
    price,
  }

  // we only want to update provided keys
  Object.keys(updateParams).forEach(param => {
    if (updateParams[param] === undefined) {
      delete updateParams[param]
    }
  })

  Ingredient.findByIdAndUpdate(
    id,
    updateParams,
    {
      new: true,
    } // return updated record
  )
    .exec()
    .then(ingredient => {
      res.status(202).json(JsonViews.getOne(ingredient))
    })
    .catch(err =>
      res
        .status(400)
        .json(
          JsonViews.error(
            `Ingredient with id ${id} could not be udpated. Error: ${err}`,
            400
          )
        )
    )
}

module.exports = {
  create,
  index,
  name,
  remove,
  show,
  update,
}
