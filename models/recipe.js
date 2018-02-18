const mongoose = require('mongoose')

const RecipeSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
})

module.exports = mongoose.model('Recipe', RecipeSchema)
