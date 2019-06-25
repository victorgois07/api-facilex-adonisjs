'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FlowChartSchema extends Schema {
  up () {
    this.create('flow_charts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('flow_charts')
  }
}

module.exports = FlowChartSchema
