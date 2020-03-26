exports.up = function(knex) {
    return knex.schema.createTable('todo', todo => {
      todo
        .uuid('id')
        .notNullable()
        .primary()
      todo
        .string('title')
        .notNullable()
      todo
        .boolean('complete')
        .defaultTo(false)
    })
  }
  exports.down = function(knex) {
    return knex.schema.dropTable('todo')
  }