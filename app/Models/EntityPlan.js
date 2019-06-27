'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class EntityPlan extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'EntityPlanHook.AnswerCreated')
    this.addHook('beforeCreate', 'EntityPlanHook.fitKeys')
    this.addHook('afterUpdate', 'EntityPlanHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'EntityPlanHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.entity_plan)
  }
  plan () {
    return this.belongsTo('App/Models/Plan', 'plan_id', 'id')
  }

  entity () {
    return this.belongsTo('App/Models/Entity', 'entity_id', 'id')
  }
}

module.exports = EntityPlan
