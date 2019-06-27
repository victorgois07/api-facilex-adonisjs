'use strict'

const Schema = use('Schema')

class TicketSchema extends Schema {
  up () {
    this.create('tickets', table => {
      table.increments()
      table.string('description', 100).notNullable()
      table.string('subject', 50).notNullable()
      table
        .integer('priority_id')
        .unsigned()
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tickets')
  }
}

module.exports = TicketSchema
