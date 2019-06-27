'use strict'

const EntityHook = exports = module.exports = {}
const Alias = use('App/Alias/alias.json')

EntityHook.AnswerCreated = async modelInstance => {
  Object.keys(modelInstance.$attributes).map(data => {
    if (data !== 'id') delete modelInstance.$attributes[data]
  })
  modelInstance.status = 'Created Successfully!!'
}

EntityHook.fitKeys = async modelInstance => {
  const key = Object.keys(modelInstance.$attributes)
  // eslint-disable-next-line camelcase
  const where_key = {}
  Alias.entity.map(value => {
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

EntityHook.AnswerUpdate = async modelInstance => {
  Object.keys(modelInstance.$attributes).map((data) => {
    delete modelInstance.$attributes[data]
  })
  modelInstance.status = 'Update Successfully!!'
}

EntityHook.fitKeysUpdate = async modelInstance => {
  const key = Object.keys(modelInstance.$attributes)
  // eslint-disable-next-line camelcase
  const where_key = {}
  Alias.entity.map(value => {
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
