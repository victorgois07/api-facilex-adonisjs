'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class Plan extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'PlanHook.AnswerCreated')
    this.addHook('beforeCreate', 'PlanHook.fitKeys')
    this.addHook('afterUpdate', 'PlanHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'PlanHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.plan)
  }
  entityPlan () {
    return this.hasMany('App/Models/EntityPlan')
  }
}

module.exports = Plan
