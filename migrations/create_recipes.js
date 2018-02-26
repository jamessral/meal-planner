const up = (knex) => {
  return knex.schema
    .createTable('recipes', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.text('description')
    })
}

const down = (knex) => {
  return knex.schema
    .dropTable('ingredients')
}

module.exports = {
  up,
  down,
}
