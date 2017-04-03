'use strict'

const Route = use('Route')

Route.get('/', 'TestController.index')
Route.post('/print1', 'TestController.print1')
Route.post('/print2', 'TestController.print2')
