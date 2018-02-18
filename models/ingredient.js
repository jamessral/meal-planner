const mongoose = require('mongoose')

const IngredientSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
})

module.exports = mongoose.model('Ingredient', IngredientSchema)

