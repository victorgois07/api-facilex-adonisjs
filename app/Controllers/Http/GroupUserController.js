'use strict'

const GroupUser = use('App/Models/GroupUser')

class GroupUserController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await GroupUser.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await GroupUser.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await GroupUser.query()
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
    const update = await GroupUser.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await GroupUser.find(params.id)
    return destroy.delete()
  }
}

module.exports = GroupUserController
