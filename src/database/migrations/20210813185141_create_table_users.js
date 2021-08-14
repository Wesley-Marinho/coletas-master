const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex => knex.schema.createTable('employee', table => {
  table.increments('id')
  table.text('username').unique().notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
}).then(() => knex.raw(onUpdateTrigger('employee')))

exports.down = async knex => knex.schema.dropTable('employee')
