'use strict'

const fs = require('fs')

class PagseguroController {
  async index ({ request, response, view }) {}

  async create ({ request, response, view }) {}

  async store ({ request, response }) {}

  async show ({ params, request, response, view }) {}

  async edit ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}

  async redirectPagSeguro ({ params, request, response }) {
    const req = (request.all()).join(', ')
    console.log(request.all())
    const data = new Uint8Array(Buffer.from(req))
    fs.writeFile('message.txt', data, (err) => {
      if (err) throw err
      console.log('The file has been saved!')
    })
    return response.json(request.all())
  }
}

module.exports = PagseguroController
