'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrioritySchema extends Schema {
  up () {
    this.create('priorities', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('priorities')
  }
}

module.exports = PrioritySchema
