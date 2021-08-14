const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex => knex.schema.createTable('company', table => {
  table.increments('id')
  table.text('title')

  table.integer('user_id')
    .references('employee.id')
    .notNullable()
    .onDelete('CASCADE')

  table.timestamps(true, true)
}).then(() => knex.raw(onUpdateTrigger('company')))

exports.down = async knex => knex.schema.dropTable('company')
