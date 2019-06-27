'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table
        .string('username', 100)
        .notNullable()
        .unique()
      table
        .string('email', 50)
        .notNullable()
        .unique()
      table.string('password', 150).notNullable()
      table.string('name', 50).notNullable()
      table.string('phone', 15).notNullable()
      table
        .integer('course_id')
        .unsigned()
        .notNullable()
      table
        .integer('group_user_id')
        .unsigned()
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
