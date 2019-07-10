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
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await Plan.find(params.id)
    update.merge(data)
    update.save()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Plan.find(params.id)
    return destroy.delete()
  }

  async tokenAuh ({ params }) {
    return 'SELECT IF(COUNT(*) > entity_plans.licenses_quality, TRUE, FALSE) as verificacao FROM entity_plans INNER JOIN entities e on entity_plans.entity_id = e.id INNER JOIN users ON users.entity_id = e.id WHERE token = \'\'\n'
  }
}

module.exports = PlanController
