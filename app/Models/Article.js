'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class Article extends Model {
  static scopeRename (query) {
    return query.select(Alias.article)
  }

  flowChart () {
    return this.hasMany('App/Models/FlowChart')
  }
}

module.exports = Article
