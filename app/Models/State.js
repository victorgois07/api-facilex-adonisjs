'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class State extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'StateHook.AnswerCreated')
    this.addHook('beforeCreate', 'StateHook.fitKeys')
    this.addHook('afterUpdate', 'StateHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'StateHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.state)
  }

  city () {
    return this.belongsTo('App/Models/City', 'city_id', 'id')
  }
}

module.exports = State
