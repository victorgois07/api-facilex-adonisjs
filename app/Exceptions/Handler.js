'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Youch = require('youch')
const sentry = use('Sentry')
const Env = use('Env')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    const younch = new Youch(error, request.request)
    const errorJSON = await younch.toJSON()

    if (Env.get('NODE_ENV') === 'development') {
      return response.status(error.status).send(errorJSON)
    }
    console.log(error.Error)
    return response.status(error.status).send({ message: errorJSON.error.message.split(' - ').length === 2 ? errorJSON.error.message.split(' - ')[1] : errorJSON.error.message })
  }

  async report (error, { request }) {
    sentry.captureException(error)
  }
}

module.exports = ExceptionHandler
