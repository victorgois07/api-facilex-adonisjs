'use strict'

const Schema = use('Schema')

class GroupUserSchema extends Schema {
  up () {
    this.create('group_users', table => {
      table.increments()
      table
        .string('description', 100)
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('group_users')
  }
}

module.exports = GroupUserSchema
