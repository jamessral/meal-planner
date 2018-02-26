const create = (recipe) => {
  if (recipe) {
    const {
      id,
      name,
      description,
      price,
      ingredients,
    } = recipe.attributes

    return {
      id,
      name,
      description,
      price,
      ingredients: ingredients || [],
    }
  }
}

const getOne = (recipe) => {
  if (recipe) {
    const {
      id,
      name,
      description,
      price,
      ingredients,
    } = recipe.attributes

    return {
      id,
      name,
      description,
      price,
      ingredients: ingredients || [],
    }
  }
}

const getAll = (recipes) => {
  if (recipes.length > 0) {
    return recipes.map( recipe => ({
      id: recipe.attributes.id,
      name: recipe.attributes.name,
      description: recipe.attributes.description,
      price: recipe.attributes.price,
      ingredients: recipe.attributes.ingredients || [],
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
