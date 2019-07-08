'use strict'

const FlowChart = use('App/Models/FlowChart')

class FlowChartController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await FlowChart.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await FlowChart.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await FlowChart.query()
      .orderBy('id', 'desc')
      .with('article', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await FlowChart.find(params.id)
    update.merge(data)
    update.save()
    return update
  }

  async destroy ({ params }) {
    const destroy = await FlowChart.find(params.id)
    return destroy.delete()
  }
}

module.exports = FlowChartController
