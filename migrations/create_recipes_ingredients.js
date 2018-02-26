const up = (knex) => {
  return knex.schema
    .createTable('recipes_ingredients', (table) => {
      table.integer('recipe_id').references('recipes.id')
      table.integer('ingredient_id').references('ingredients.id')
    })
}

const down = (knex) => {
  return knex.schema
    .dropTable('recipes_ingredients')
}

module.exports = {
  up,
  down,
}
