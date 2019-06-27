'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class Token extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'TokenHook.AnswerCreated')
    this.addHook('beforeCreate', 'TokenHook.fitKeys')
    this.addHook('afterUpdate', 'TokenHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'TokenHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.token)
  }
  // eslint-disable-next-line camelcase
  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }
}

module.exports = Token
