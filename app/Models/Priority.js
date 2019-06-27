'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class Priority extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'PriorityHook.AnswerCreated')
    this.addHook('beforeCreate', 'PriorityHook.fitKeys')
    this.addHook('afterUpdate', 'PriorityHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'PriorityHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.priority)
  }
  ticket () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = Priority
