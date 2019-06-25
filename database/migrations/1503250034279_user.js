'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 100).notNullable().unique()
      table.string('email', 50).notNullable().unique()
      table.string('password', 150).notNullable()
      table.string('username', 50).notNullable()
      table.string('name', 50).notNullable()
      table.string('phone', 15).notNullable()
      table.integer('phone', 15).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
