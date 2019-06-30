'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pizzas
 */
const Pizza = use('App/Models/Pizza');
class PizzaController {
  /**
   * Show a list of all pizzas.
   * GET pizzas
   *
   * 
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  
  async index ({ request, response, view }) {
    let pizzas = await Pizza.query().with('user').fetch()
    return response.json(pizzas)

  }

  /**
   * Render a form to be used for creating a new pizza.
   * GET pizzas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new pizza.
   * POST pizzas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const name = request.input('name')
    const precio1 = request.input('precio1')
    const precio2 = request.input('precio2')
    const precio3 = request.input('precio3')
    const ingredientes = request.input('ingredientes')
    const imagen = request.input('imagen')
    const visible = request.input('visible')

    const pizza = new Pizza()
    pizza.name = name
    pizza.precio1 = precio1
    pizza.precio2 = precio2
    pizza.precio3 = precio3
    pizza.ingredientes = ingredientes 
    pizza.imagen = imagen
    pizza.visible=visible
    await pizza.save()
    return response.json(pizza)


  }

  /**
   * Display a single pizza.
   * GET pizzas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const pizza = await Pizza.find(params.id)
    return response.json(pizza)
  }

  /**
   * Render a form to update an existing pizza.
   * GET pizzas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update pizza details.
   * PUT or PATCH pizzas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const name = request.input('name')
    const precio1 = request.input('precio1')
    const precio2 = request.input('precio2')
    const precio3 = request.input('precio3')
    const ingredientes = request.input('ingredientes')
    const imagen = request.input('imagen')
    const visible = request.input('visible')
    let pizza = await Pizza.find(params.id)

    pizza.name = name
    pizza.precio1 = precio1
    pizza.precio2 = precio2
    pizza.precio3 = precio3
    pizza.ingredientes = ingredientes 
    pizza.imagen = imagen
    pizza.visible = visible
    pizza.visible = visible
    await pizza.save()
    return response.json(pizza)
  }

  /**
   * Delete a pizza with id.
   * DELETE pizzas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
 
    const pizza = await Pizza.find(params.id)
        if (!pizza) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await pizza.delete()

        return response.status(204).json(null)

    
  }
}

module.exports = PizzaController
