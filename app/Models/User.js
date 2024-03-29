'use strict'

const Model = use('Model')
const Alias = use('App/Alias/alias.json')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()
    this.addHook('afterCreate', 'UserHook.AnswerCreated')
    this.addHook('beforeCreate', 'UserHook.fitKeys')
    this.addHook('afterUpdate', 'UserHook.AnswerUpdate')
    this.addHook('beforeUpdate', 'UserHook.fitKeysUpdate')
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden () {
    return ['password', 'created_at', 'updated_at', 'group_user_id', 'course_id', 'criado', 'atualizado']
  }

  static scopeRename (query) {
    return query.select(Alias.user)
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  log () {
    return this.hasMany('App/Models/Log')
  }

  course () {
    return this.belongsTo('App/Models/Course', 'course_id', 'id')
  }

  groupUser () {
    return this.belongsTo('App/Models/GroupUser', 'group_user_id', 'id')
  }

  entity () {
    return this.belongsTo('App/Models/Entity', 'entity_id', 'id')
  }
}

module.exports = User
