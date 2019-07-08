'use strict'

const State = use('App/Models/State')

class StateController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await State.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await State.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await State.query()
      .orderBy('id', 'desc')
      .with('city', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await State.find(params.id)
    update.merge(data)
    update.save()
    return update
  }

  async destroy ({ params }) {
    const destroy = await State.find(params.id)
    return destroy.delete()
  }
}

module.exports = StateController
