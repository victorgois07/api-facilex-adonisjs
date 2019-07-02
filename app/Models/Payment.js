'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class Payment extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'PaymentHook.AnswerCreated')
    this.addHook('beforeCreate', 'PaymentHook.fitKeys')
    this.addHook('afterUpdate', 'PaymentHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'PaymentHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.payment)
  }
  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }
}

module.exports = Payment
