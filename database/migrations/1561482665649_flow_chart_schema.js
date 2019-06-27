'use strict'

const Schema = use('Schema')

class FlowChartSchema extends Schema {
  up () {
    this.create('flow_charts', table => {
      table.increments()
      table.string('name', 100).notNullable()
      table.string('text', 255)
      table.string('status', 50)
      table.string('code_annotation', 30)
      table
        .integer('article_id')
        .unsigned()
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('flow_charts')
  }
}

module.exports = FlowChartSchema
