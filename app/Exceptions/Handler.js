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

    if (Env.get('NODE_ENV') === 'development') {
      const younch = new Youch(error, request.request)
      const errorJSON = await younch.toJSON()
      return response.status(error.status).send(errorJSON)
    }

    return response.status(error.status).send(error)
  }

  async report (error, { request }) {
    sentry.captureException(error)
  }
}

module.exports = ExceptionHandler
