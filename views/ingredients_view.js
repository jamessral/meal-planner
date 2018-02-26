const getAll = (ingredients) => {
  if (ingredients.length > 0) {
    return ingredients.map(ingredient => ({
      id: ingredient.attributes.id,
      name: ingredient.attributes.name,
      description: ingredient.attributes.description,
      price: ingredient.attributes.price,
    }))
  }

  return { ingredients: [] }
}

const getOne = (ingredient) => {
  if (ingredient) {
    const { name, description, price, id } = ingredient.attributes
    return {
      id,
      name,
      description,
      price
    }
  }
}

const create = (ingredient) => {
  if (ingredient) {
    const {
      id,
      name,
      description,
      price,
    } = ingredient.attributes

    return {
      id,
      name,
      description,
      price,
    }
  }
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
