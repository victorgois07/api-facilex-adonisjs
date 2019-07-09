'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class GroupUser extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'GroupUserHook.AnswerCreated')
    this.addHook('beforeCreate', 'GroupUserHook.fitKeys')
    this.addHook('afterUpdate', 'GroupUserHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'GroupUserHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.group_user)
  }
  user () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = GroupUser
