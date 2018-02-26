const up = (knex) => {
  return knex.schema
    .createTable('ingredients', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.text('description')
      table.integer('price')
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
