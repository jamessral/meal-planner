const contains = require('ramda/src/contains')

const Recipe = require('../models/recipe')
const JsonViews = require('../views/json/recipeViews')

const index = (req, res) => {
  Recipe.find({})
    .exec()
    .then(recipes => res.json(JsonViews.getAll(recipes)))
    .catch(err => res.status(500).json(JsonViews.error(err)))
}

const create = (req, res) => {
  const {
    name,
    description
  } = req.body

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
  const id = req.params.id
  Recipe.remove({
      _id: id
    })
    .exec()
    .then(() => res.status(200).json({
      message: 'Deleted successfully'
    }))
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
  Recipe.findById(id)
    .exec()
    .then(recipe => res.json(JsonViews.getOne(recipe)))
    .catch(() =>
      res
      .status(404)
      .json(JsonViews.error(`Recipe with id ${id} not found`, 404))
    )
}

const update = (req, res) => {
  const id = req.params.id
  const {
    name,
    description
  } = req.body

  // only update params that we are given
  const updateParams = {
    name,
    description
  }

  Object.keys(updateParams).forEach(param => {
    if (updateParams[param] === undefined) {
      delete updateParams[param]
    }
  })

  Recipe.findByIdAndUpdate(
      id,
      updateParams, {
        new: true
      } // return updated record
    )
    .exec()
    .then(recipe => {
      res.status(202).json(JsonViews.getOne(recipe))
    })
    .catch(err =>
      res
      .status(400)
      .json(
        JsonViews.error(
          `Recipe with id ${id} could not be udpated. Error: ${err}`,
          400
        )
      )
    )
}

const addIngredient = (req, res) => {
  const id = req.params.id
  const ingredientId = req.params.ingredientId

  Recipe.findById(id)
    .exec()
    .then(recipe => {
      if (!contains(ingredientId, recipe.ingredientIds)) {
        recipe.ingredientIds.push(ingredientId)
      }
      return recipe.save()
    })
    .then(rec => {
      res.status(200)
        .json({
          recipe: rec,
        })
    })
}

const getIngredients = (req, res) => {
  const id = req.params.id

  Recipe.findById(id)
    .populate('ingredientI')
}

module.exports = {
  addIngredient,
  create,
  getIngredients,
  index,
  name,
  remove,
  show,
  update,
}
