'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class Log extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'LogHook.AnswerCreated')
    this.addHook('beforeCreate', 'LogHook.fitKeys')
    this.addHook('afterUpdate', 'LogHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'LogHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.log)
  }
  user () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = Log
