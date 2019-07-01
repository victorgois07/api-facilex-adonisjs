'use strict'

const Route = use('Route')

Route.post('/api/sessions', 'SessionController.store')
Route.post('/api/redirect/pagseguro', 'PagseguroController.redirectPagSeguro')

Route.group(() => {
  Route.resource('/api/address', 'AddressController')
  Route.resource('/api/article', 'ArticleController')
  Route.resource('/api/city', 'CityController')
  Route.resource('/api/course', 'CourseController')
  Route.resource('/api/entity', 'EntityController')
  Route.resource('/api/group/user', 'GroupUserController')
  Route.resource('/api/flow/chart', 'FlowChartController')
  Route.resource('/api/entityplan', 'EntityPlanController')
  Route.resource('/api/log', 'LogController')
  Route.resource('/api/plan', 'PlanController')
  Route.resource('/api/priority', 'PriorityController')
  Route.resource('/api/state', 'StateController')
  Route.resource('/api/ticket', 'TicketController')
  Route.resource('/api/user', 'UserController')
  Route.resource('/api/pagseguro', 'PagseguroController')
}).middleware('auth')
