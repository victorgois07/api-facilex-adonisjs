'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class Entity extends Model {
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
