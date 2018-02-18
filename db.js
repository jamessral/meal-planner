const mongoose = require('mongoose')

const databaseUrl = process.env.DATABASE_URL ||
  'mongodb://localhost/meal_planner_development'

const db = mongoose.connect(databaseUrl)
mongoose.Promise = global.Promise

module.exports = db
