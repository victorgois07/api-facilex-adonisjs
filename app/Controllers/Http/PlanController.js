'use strict'

const Plan = use('App/Models/Plan')

class PlanController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await Plan.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await Plan.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await Plan.query()
      .orderBy('id', 'desc')
      .with('entityPlan', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await Plan.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Plan.find(params.id)
    return destroy.delete()
  }
}

module.exports = PlanController
