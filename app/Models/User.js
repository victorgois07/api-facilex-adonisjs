'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'UserHook.AnswerCreated')
    this.addHook('beforeCreate', 'UserHook.fitKeys')
    this.addHook('afterUpdate', 'UserHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'UserHook.fitKeysUpdate')
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static scopeRename (query) {
    return query.select(Alias.user)
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  course () {
    return this.belongsTo('App/Models/Course', 'course_id', 'id')
  }

  groupUser () {
    return this.belongsTo('App/Models/GroupUser', 'group_user_id', 'id')
  }
}

module.exports = User
