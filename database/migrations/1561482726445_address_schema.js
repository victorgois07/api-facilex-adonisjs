'use strict'

const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', table => {
      table.increments()
      table.string('description', 255).notNullable()
      table.string('neighborhood', 255).notNullable()
      table
        .string('cep', 9)
        .notNullable()
        .unique()
      table.integer('number', 11).notNullable()
      table
        .integer('city_id')
        .unsigned()
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
