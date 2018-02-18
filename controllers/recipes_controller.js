const create = (recipe) => {
  if (recipe) {
    const {
      name,
      description,
      price,
      ingredients,
    } = recipe

    return {
      id: recipe._id,
      name,
      description,
      price,
      ingredients: ingredients || [],
    }
  }

  return { message: 'Error, could not create recipe', status: 500 }
}

const getOne = (recipe) => {
  if (recipe) {
    const {
      name,
      description,
      price,
      ingredients,
    } = recipe

    return {
      id: recipe._id,
      name: name,
      description: description,
      price: price,
      ingredients: ingredients || [],
    }
  }

  return { message: 'Error cound not find recipe', status: 500 }
}

const getAll = (recipes) => {
  if (recipes.length > 0) {
    return recipes.map( recipe => ({
      id: recipe._id,
      name: recipe.name,
      description: recipe.description,
      price: recipe.price,
      ingredients: recipe.ingredients || [],
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
