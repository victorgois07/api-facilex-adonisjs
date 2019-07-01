'use strict'

class PagseguroController {
  async index ({ request, response, view }) {}

  async create ({ request, response, view }) {}

  async store ({ request, response }) {}

  async show ({ params, request, response, view }) {}

  async edit ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}

  async redirectPagSeguro ({ params, request, response }) {
    return response.json(request.all())
  }
}

module.exports = PagseguroController
