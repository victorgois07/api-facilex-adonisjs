'use strict'

const Alias = use('App/Alias/alias.json')
const Model = use('Model')

class Course extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'CourseHook.AnswerCreated')
    this.addHook('beforeCreate', 'CourseHook.fitKeys')
    this.addHook('afterUpdate', 'CourseHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'CourseHook.fitKeysUpdate')
  }
  static scopeRename (query) {
    return query.select(Alias.course)
  }

  user () {
    return this.hasMany('App/Models/User')
  }
}

module.exports = Course
