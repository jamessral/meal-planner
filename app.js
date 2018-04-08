const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const IndexRoutes = require('./routes/index')
const UsersRoutes = require('./routes/users')
const IngredientsRoutes = require('./routes/ingredients')
const RecipesRoutes = require('./routes/recipes')

mongoose.connect('mongodb://localhost/mealplanner')

const db = mongoose.connection
/* eslint-disable no-console */
db.on('error', err =>
  console.log(`Unable to connect to Mongo Server.\n Error: ${err}`)
)

db.on('open', () => console.log('Connected to Mongo\n'))

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', IndexRoutes)
app.use('/api/v1/users', UsersRoutes)
app.use('/api/v1/ingredients', IngredientsRoutes)
app.use('/api/v1/recipes', RecipesRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
