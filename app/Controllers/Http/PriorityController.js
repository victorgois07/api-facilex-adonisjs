'use strict'

const Priority = use('App/Models/Priority')

class PriorityController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await Priority.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await Priority.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await Priority.query()
      .orderBy('id', 'desc')
      .with('ticket', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await Priority.find(params.id)
    update.merge(data)
    update.save()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Priority.find(params.id)
    return destroy.delete()
  }
}

module.exports = PriorityController
