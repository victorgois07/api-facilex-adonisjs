'use strict'

const Schema = use('Schema')

class StateSchema extends Schema {
  up () {
    this.create('states', table => {
      table.increments()
      table
        .string('description', 100)
        .notNullable()
        .unique()
      table
        .string('initials', 2)
        .notNullable()
        .unique()
      table
        .string('country', 100)
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.table('cities', function (table) {
      table.dropForeign('state_id', 'cities_state_id_foreign')
    })
    this.drop('states')
  }
}

module.exports = StateSchema
