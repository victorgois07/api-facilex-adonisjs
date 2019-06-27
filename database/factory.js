'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/User', faker => {
  return {
    username: faker.username(),
    email: faker.username() + '@teste.com',
    password: 'facilex@123',
    phone: '(61) 99999-9999',
    name: 'Teste',
    course_id: 1,
    group_user_id: 1
  }
})
