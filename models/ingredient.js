const bookshelf = require('../bookshelf')
const Recipe = require('./recipe')

const Ingredient = bookshelf.Model.extend({
  tableName: 'ingredients',
  recipes () {
    return this.belongsToMany(Recipe)
  }
})

module.exports = Ingredient
