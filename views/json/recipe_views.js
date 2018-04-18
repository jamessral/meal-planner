const create = recipe => {
  if (recipe) {
    const { _id, name, description, ingredientIds } = recipe

    return {
      id: _id,
      name,
      description,
      ingredientIds: ingredientIds || [],
    }
  }

  return error('Unable to create recipe', 500)
}

const getOne = recipe => {
  if (recipe) {
    const { _id, name, description, ingredientIds } = recipe

    return {
      id: _id,
      name,
      description,
      ingredientIds: ingredientIds || [],
    }
  }

  return error('Unable to find recipe', 404)
}

const getAll = (recipes = []) => {
  if (recipes.length > 0) {
    return recipes.map(recipe => ({
      id: recipe._id,
      name: recipe.name,
      description: recipe.description,
      ingredientIds: recipe.ingredientIds || [],
    }))
  }

  return { recipes: [] }
}

const error = (err, status) => ({
  message: `Error: ${err}`,
  status,
})

module.exports = {
  create,
  error,
  getOne,
  getAll,
}
