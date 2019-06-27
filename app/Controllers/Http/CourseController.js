'use strict'

const Course = use('App/Models/Course')

class CourseController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await Course.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await Course.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await Course.query()
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
    const update = await Course.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Course.find(params.id)
    return destroy.delete()
  }
}

module.exports = CourseController
