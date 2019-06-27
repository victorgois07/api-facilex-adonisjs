'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class Address extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'AddressHook.AnswerCreated')
    this.addHook('beforeCreate', 'AddressHook.fitKeys')
    this.addHook('afterUpdate', 'AddressHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'AddressHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.address)
  }
  entity () {
    return this.hasMany('App/Models/Entity')
  }

  city () {
    return this.belongsTo('App/Models/City', 'city_id', 'id')
  }
}

module.exports = Address
