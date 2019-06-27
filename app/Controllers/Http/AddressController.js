'use strict'

const Address = use('App/Models/Address')

class AddressController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await Address.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await Address.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await Address.query()
      .orderBy('id', 'desc')
      .with('entity', builder => {
        builder.rename()
      })
      .with('city', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await Address.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Address.find(params.id)
    return destroy.delete()
  }
}

module.exports = AddressController
