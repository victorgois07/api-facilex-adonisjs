'use strict'

const City = use('App/Models/City')

class CityController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await City.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await City.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await City.query()
      .orderBy('id', 'desc')
      .with('address', builder => {
        builder.rename()
      })
      .with('state', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await City.find(params.id)
    update.merge(data)
    update.save()
    return update
  }

  async destroy ({ params }) {
    const destroy = await City.find(params.id)
    return destroy.delete()
  }
}

module.exports = CityController
