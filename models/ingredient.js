const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ingredient = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, min: 0 },
  recipeIds: [Schema.Types.ObjectId],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Ingredient', Ingredient)
