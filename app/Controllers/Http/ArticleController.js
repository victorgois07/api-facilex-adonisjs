'use strict'

const Article = use('App/Models/Article')

class ArticleController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await Article.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await Article.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await Article.query()
      .orderBy('id', 'desc')
      .with('flowChart', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await Article.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Article.find(params.id)
    return destroy.delete()
  }
}

module.exports = ArticleController
