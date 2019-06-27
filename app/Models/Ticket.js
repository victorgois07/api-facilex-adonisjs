'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class Ticket extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'TicketHook.AnswerCreated')
    this.addHook('beforeCreate', 'TicketHook.fitKeys')
    this.addHook('afterUpdate', 'TicketHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'TicketHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.ticket)
  }

  priority () {
    return this.belongsTo('App/Models/Priority', 'priority_id', 'id')
  }
}

module.exports = Ticket
