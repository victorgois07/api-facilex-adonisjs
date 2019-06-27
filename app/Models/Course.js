'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class Course extends Model {
  static scopeRename (query) {
    return query.select(Alias.course)
  }

  user () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = Course
