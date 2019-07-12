'use strict'

const User = use('App/Models/User')
const Plan = use('App/Models/Plan')
const Log = use('App/Models/Log')
const EntityPlan = use('App/Models/EntityPlan')
const moment = require('moment')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const user = (await User.query()
      .where('email', email)
      .rename()
      .with('groupUser', builder => {
        builder.rename()
      })
      .fetch()).toJSON()

    const token = await auth.attempt(email, password)

    if (token) {
      await Log.create({
        description: 'Login',
        user_id: user[0].id
      })
    }

    return response.status(200).json({
      token: token.token,
      user: user[0]
    })
  }

  async checkToken ({ request, response, auth }) {
    const { token } = request.all()
    const ckeckExist = await EntityPlan.query().where('token', token).getCount()
    if (ckeckExist < 1) {
      return response.status(401).send({ message: 'Token inválido!!' })
    }
    const entityPlan = (await EntityPlan.query().where('token', token).fetch()).toJSON()[0]
    const venPlan = (await Plan.query().where('id', entityPlan.plan_id).fetch()).toJSON()[0]

    const venc = new Date(venPlan.expiration_date)
    const now = new Date()

    const diff = venc.getDate() - now.getDate()

    if (diff < 0) {
      return response.status(401).send({ message: 'O Plano já venceu!!' })
    }

    const planEntity = await EntityPlan.find(entityPlan.id)
    planEntity.merge({ licenses_quality: (entityPlan.licenses_quality - 1) })
    planEntity.save()

    return response.status(200).send({ message: 'Token Válido!!' })
  }
}

module.exports = SessionController
