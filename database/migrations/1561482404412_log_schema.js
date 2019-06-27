'use strict'

const Schema = use('Schema')

class LogSchema extends Schema {
  up () {
    this.create('logs', table => {
      table.increments()
      table.string('description', 100).notNullable()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('logs')
  }
}

module.exports = LogSchema
