'use strict'

const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', table => {
      table.increments()
      table.text('text').notNullable()
      table.string('version', 30).notNullable()
      table.string('part', 20).notNullable()
      table.string('book', 255).notNullable()
      table.string('code', 50).notNullable()
      table.string('name', 100).notNullable()
      table.string('type', 50).notNullable()
      table.string('url', 255).notNullable()
      table.integer('number', 11).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
