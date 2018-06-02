const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  estimatedTime: Number,
  estimatedCost: Number,
  ingredientIds: [Schema.Types.ObjectId],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Recipe', Recipe)
