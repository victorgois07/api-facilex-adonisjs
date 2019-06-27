'use strict'

const Log = use('App/Models/Log')

class LogController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await Log.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await Log.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await Log.query()
      .orderBy('id', 'desc')
      .with('user', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await Log.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Log.find(params.id)
    return destroy.delete()
  }
}

module.exports = LogController
