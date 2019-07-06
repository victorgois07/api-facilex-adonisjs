'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class Article extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'ArticleHook.AnswerCreated')
    this.addHook('beforeCreate', 'ArticleHook.fitKeys')
    this.addHook('afterUpdate', 'ArticleHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'ArticleHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.article)
  }

  flowChart () {
    return this.hasMany('App/Models/FlowChart')
  }
}

module.exports = Article
