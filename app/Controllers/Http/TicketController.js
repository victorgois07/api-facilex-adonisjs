'use strict'

const Ticket = use('App/Models/Ticket')

class TicketController {
  async index () {
    // eslint-disable-next-line no-return-await
    return await Ticket.query()
      .orderBy('id', 'desc')
      .rename()
      .fetch()
  }

  async store ({ request }) {
    const data = request.all()
    // eslint-disable-next-line no-return-await
    return await Ticket.create(data)
  }

  async show ({ params }) {
    // eslint-disable-next-line no-return-await
    return await Ticket.query()
      .orderBy('id', 'desc')
      .with('priority', builder => {
        builder.rename()
      })
      .where('id', params.id)
      .rename()
      .fetch()
  }

  async update ({ params, request }) {
    const data = request.all()
    const update = await Ticket.find(params.id)
    update.merge(data)
    update.update()
    return update
  }

  async destroy ({ params }) {
    const destroy = await Ticket.find(params.id)
    return destroy.delete()
  }
}

module.exports = TicketController
