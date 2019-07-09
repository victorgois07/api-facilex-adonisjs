'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await User.query()
      .orderBy('id', 'desc')
      .rename()
      .with('groupUser', builder => {
        builder.rename()
      })
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await User.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await User.query()
      .orderBy('id', 'desc')
      .with('tokens', builder => {
        builder.rename()
      })
      .with('course', builder => {
        builder.rename()
      })
      .with('groupUser', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await User.find(params.id)
    update.merge(data)
    update.save()
    return update
  }

  async destroy ({ params }) {
    const destroy = await User.find(params.id)
    return destroy.delete()
  }
}

module.exports = UserController
