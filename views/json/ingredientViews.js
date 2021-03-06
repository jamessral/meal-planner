const getAll = (ingredients = []) => {
  if (ingredients.length > 0) {
    return ingredients.map(ingredient => ({
      id: ingredient._id,
      name: ingredient.name,
      description: ingredient.description,
      price: ingredient.price,
    }))
  }

  return { ingredients: [] }
}

const getOne = ingredient => {
  if (ingredient) {
    const { _id, name, description, price } = ingredient
    return {
      id: _id,
      name,
      description,
      price,
    }
  }

  return error('Unable to find ingredient', 404)
}

const create = ingredient => {
  if (ingredient) {
    const { _id, name, description, price } = ingredient
    return {
      id: _id,
      name,
      description,
      price,
    }
  }

  return error('Unable to create ingredient', 500)
}

const error = (err, status) => ({
  message: `Error: ${err}`,
  status,
})

module.exports = {
  create,
  error,
  getAll,
  getOne,
}
