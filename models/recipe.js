const bookshelf = require('../bookshelf')
const Ingredient = require('./ingredient')

const Recipe = bookshelf.Model.extend({
  tableName: 'recipes',
  ingredients() {
    return this.belongsToMany(Ingredient)
  }
})

module.exports = Recipe
