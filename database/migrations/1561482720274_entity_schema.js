'use strict'

const Schema = use('Schema')

class EntitySchema extends Schema {
  up () {
    this.create('entities', table => {
      table.increments()
      table.string('social_reason', 100).notNullable()
      table.string('description', 100).notNullable()
      table
        .string('cpnj', 100)
        .notNullable()
        .unique()
      table
        .integer('address_id')
        .unsigned()
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitySchema
