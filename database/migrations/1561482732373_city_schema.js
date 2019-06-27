'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitySchema extends Schema {
  up () {
    this.create('cities', table => {
      table.increments()
      table
        .string('description', 255)
        .unique()
      table
        .integer('ibge', 20)
        .notNullable()
        .unique()
      table
        .integer('state_id')
        .unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitySchema
