'use strict'

const User = use('App/Models/User')
const Log = use('App/Models/Log')

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
}

module.exports = SessionController
