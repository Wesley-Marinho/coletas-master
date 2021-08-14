exports.up = knex => knex.schema.alterTable('employee', table => {
  table.timestamp('deleted_at')
})

exports.down = knex => knex.schema.alterTable('employee', table => {
  table.dropColumn('deleted_at')
})
