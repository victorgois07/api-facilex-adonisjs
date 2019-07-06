'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class Entity extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'EntityHook.AnswerCreated')
    this.addHook('beforeCreate', 'EntityHook.fitKeys')
    this.addHook('afterUpdate', 'EntityHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'EntityHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.entity)
  }

  entityPlan () {
    return this.hasMany('App/Models/EntityPlan')
  }

  address () {
    return this.belongsTo('App/Models/Address', 'address_id', 'id')
  }
}

module.exports = Entity
