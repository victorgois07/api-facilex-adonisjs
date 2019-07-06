'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class City extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'CityHook.AnswerCreated')
    this.addHook('beforeCreate', 'CityHook.fitKeys')
    this.addHook('afterUpdate', 'CityHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'CityHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.city)
  }
  address () {
    return this.hasMany('App/Models/Address')
  }

  state () {
    return this.belongsTo('App/Models/State', 'state_id', 'id')
  }
}

module.exports = City
