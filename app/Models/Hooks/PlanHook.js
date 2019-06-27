'use strict'

const PlanHook = exports = module.exports = {}
const Alias = use('App/Alias/alias.json')

PlanHook.AnswerCreated = async modelInstance => {
  Object.keys(modelInstance.$attributes).map(data => {
    if (data !== 'id') delete modelInstance.$attributes[data]
  })
  modelInstance.status = 'Created Successfully!!'
}

PlanHook.fitKeys = async modelInstance => {
  const key = Object.keys(modelInstance.$attributes)
  // eslint-disable-next-line camelcase
  const where_key = {}
  Alias.plan.map(value => {
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

PlanHook.AnswerUpdate = async modelInstance => {
  Object.keys(modelInstance.$attributes).map((data) => {
    delete modelInstance.$attributes[data]
  })
  modelInstance.status = 'Update Successfully!!'
}

PlanHook.fitKeysUpdate = async modelInstance => {
  const key = Object.keys(modelInstance.$attributes)
  // eslint-disable-next-line camelcase
  const where_key = {}
  Alias.plan.map(value => {
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
