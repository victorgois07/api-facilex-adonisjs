'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntityPlanSchema extends Schema {
  up () {
    this.create('entity_plans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('entity_plans')
  }
}

module.exports = EntityPlanSchema
