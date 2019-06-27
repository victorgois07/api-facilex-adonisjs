'use strict'

const EntityPlan = use('App/Models/EntityPlan')

class EntityPlanController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await EntityPlan.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await EntityPlan.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await EntityPlan.query()
      .orderBy('id', 'desc')
      .with('plan', builder => {
        builder.rename()
      })
      .with('entity', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await EntityPlan.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await EntityPlan.find(params.id)
    return destroy.delete()
  }
}

module.exports = EntityPlanController
