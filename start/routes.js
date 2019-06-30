'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.put('/api/pizzas/:id', 'PizzaController.update')
Route.delete('/api/pizzas/:id', 'PizzaController.destroy')
Route.post('/api/pizzas', 'PizzaController.store')
Route.get('/api/pizzas', 'PizzaController.index') 
Route.get('/api/pizzas/:id', 'PizzaController.show') 

Route.get('/api/pagos', 'PogoController.index') 
Route.post('/api/pagos', 'PogoController.store')
Route.get('/api/pagos/:id', 'PogoController.show') 
Route.post('/api/pay', 'PogoController.payx')