'use strict'

const Schema = use('Schema')

class PlanSchema extends Schema {
  up () {
    this.create('plans', table => {
      table.increments()
      table
        .string('description', 100)
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('plans')
  }
}

module.exports = PlanSchema
