'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')

class FlowChart extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'FlowChartHook.AnswerCreated')
    this.addHook('beforeCreate', 'FlowChartHook.fitKeys')
    this.addHook('afterUpdate', 'FlowChartHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'FlowChartHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.flow_chart)
  }
  article () {
    return this.belongsTo('App/Models/Article', 'article_id', 'id')
  }
}

module.exports = FlowChart
