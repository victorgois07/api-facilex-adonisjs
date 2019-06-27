'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class City extends Model {
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
