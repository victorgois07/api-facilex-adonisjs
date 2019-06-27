'use strict'

const Entity = use('App/Models/Entity')

class EntityController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await Entity.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await Entity.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await Entity.query()
      .orderBy('id', 'desc')
      .with('entityPlan', builder => {
        builder.rename()
      })
      .with('address', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await Entity.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Entity.find(params.id)
    return destroy.delete()
  }
}

module.exports = EntityController
