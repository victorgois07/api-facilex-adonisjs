'use strict'

const Env = use('Env')
const moment = require('moment')
const axios = require('axios')
const User = use('App/Models/User')

class PagseguroController {
  async index ({ request, response, view }) {}

  async create ({ request, response, view }) {}

  async store ({ request, response, auth }) {
    return new Promise(async (resolve, reject) => {
      const { valorBoleto, valorCreditar } = request.all()
      const user = await User.find(auth.current.user.id)
      axios({
        method: 'POST',
        url: `${Env.get(
          'BASE_URL_PRODUCTION_PAGSEGURO'
        )}/recurring-payment/boletos?email=${Env.get(
          'EMAIL_PAGSEGURO'
        )}&token=${Env.get('TOKEN_PRODUCTION_PAGSEGURO')}`,
        headers: { 'content-type': 'application/json; charset=ISO-8859-1' },
        data: {
          reference: `PEDIDO_${moment().format('DD_MM_YYYY_HH_mm_ss')}`,
          firstDueDate: moment()
            .add(3, 'd')
            .format('YYYY-MM-DD'),
          numberOfPayments: '1',
          periodicity: 'monthly',
          amount: valorCreditar,
          instructions: 'juros de 1% ao dia e mora de 5,00',
          description: 'Facilex',
          customer: {
            document: {
              type: 'CPF',
              value: user.cpf
                .replace('.', '')
                .replace('.', '')
                .replace('-', '')
            },
            name: user.name,
            email: user.email,
            phone: {
              areaCode: user.phone.substr(1, 2),
              number: user.phone.substr(5).replace('-', '')
            }
          }
        }
      })
        .then(async res => {
          const boleto = res.data.boletos
          resolve(boleto)
        })
        .catch(async e => {
          resolve(await e.response.data)
        })
    })
  }

  async show ({ params, request, response, view }) {}

  async edit ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}

  async redirectPagSeguro ({ params, request, response }) {
    const req = request.all().join(', ')
    console.log(request.all())
    const data = new Uint8Array(Buffer.from(req))
    fs.writeFile('message.txt', data, err => {
      if (err) throw err
      console.log('The file has been saved!')
    })
    return response.json(request.all())
  }
}

module.exports = PagseguroController
