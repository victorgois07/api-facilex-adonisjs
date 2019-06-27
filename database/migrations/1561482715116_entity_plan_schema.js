'use strict'

const Schema = use('Schema')

class EntityPlanSchema extends Schema {
  up () {
    this.create('entity_plans', table => {
      table.increments()
      table
        .integer('entity_id')
        .unsigned()
        .notNullable()
      table
        .integer('plan_id')
        .unsigned()
        .notNullable()
      table.datetime('expiration_date').notNullable()
      table.datetime('expiration_promotion')
      table.integer('licenses_quatity').notNullable()
      table.integer('discount').notNullable()
      table.integer('active', 1).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('entity_plans')
  }
}

module.exports = EntityPlanSchema
