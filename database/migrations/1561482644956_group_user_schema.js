'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupUserSchema extends Schema {
  up () {
    this.create('group_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('group_users')
  }
}

module.exports = GroupUserSchema
