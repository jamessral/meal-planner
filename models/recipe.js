const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema({
  name: String,
  description: String,
  estimatedTime: Number,
  estimatedCost: Number,
  ingredientIds: [Schema.Types.ObjectId],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

module.exports = Recipe
