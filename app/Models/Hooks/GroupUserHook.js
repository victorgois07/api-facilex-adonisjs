'use strict'

const GroupUserHook = exports = module.exports = {}
const Alias = use('App/Alias/alias.json')

GroupUserHook.AnswerCreated = async modelInstance => {
  Object.keys(modelInstance.$attributes).map(data => {
    if (data !== 'id') delete modelInstance.$attributes[data]
  })
  modelInstance.status = 'Created Successfully!!'
}

GroupUserHook.fitKeys = async modelInstance => {
  const key = Object.keys(modelInstance.$attributes)
  // eslint-disable-next-line camelcase
  const where_key = {}
  Alias.group_user.map(value => {
    key.map(val => {
      let data = value.split(' as ')
      if (data[1] === val && data.length === 2) {
        where_key[data[0]] = modelInstance.$attributes[val]
        delete modelInstance.$attributes[val]
      }
    })
  })
  Object.assign(modelInstance.$attributes, where_key)
}

GroupUserHook.AnswerUpdate = async modelInstance => {
  Object.keys(modelInstance.$attributes).map((data) => {
    delete modelInstance.$attributes[data]
  })
  modelInstance.status = 'Update Successfully!!'
}

GroupUserHook.fitKeysUpdate = async modelInstance => {
  const key = Object.keys(modelInstance.$attributes)
  // eslint-disable-next-line camelcase
  const where_key = {}
  Alias.group_user.map(value => {
    key.map(async val => {
      let data = value.split(' as ')
      if (data[1] === val && data.length === 2) {
        where_key[data[0]] = modelInstance.$attributes[val]
        delete modelInstance.$attributes[val]
      }
    })
  })
  Object.assign(modelInstance.$attributes, where_key)
}
