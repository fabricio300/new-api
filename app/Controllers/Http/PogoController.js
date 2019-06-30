'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pizzas
 */
const Pago = use('App/Models/Pago');
const stripe = require('stripe')('sk_test_SVml9pyUwYlVzFUUTfKeQsqx005y0NWEg5');

class PogoController {
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
    let pago = await Pago.all()
    return response.json(pago)

  }
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


    
  async store ({ request, response }) {
    const nameclient = request.input('nameclient')
    const monto = request.input('monto')
    const correo = request.input('correo')
    const tokenpago = request.input('tokenpago')
    const namepizza = request.input('namepizza')
    const cantidad = request.input('cantidad')
    const tamanio =request.input('tamanio')
   
    const pago = new Pago()
    pago.nameclient = nameclient
    pago.monto=monto
    pago.correo=correo
    pago.tokenpago=tokenpago
    pago.namepizza=namepizza
    pago.cantidad=cantidad
    pago.tamanio=tamanio

    await pago.save()
    return response.json(pago)


  }

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

  async payx({ request, response }){
    const token = request.body.token; 
    console.log("apivd ",request.body.token)

    try{
      (async () => {
      
        const charge = await stripe.charges.create({
          amount: request.body.monto*100,
          currency: 'mxn',
          description: 'pago pizza',
          source: token,
        });
      })();
    }catch(error){console.error(error);
    }
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
    const pago = await Pago.find(params.id)
    return response.json(pago)
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
    const nameclient = request.input('nameclient')
    const monto = request.input('monto')
    const correo = request.input('correo')
    const tokenpago = request.input('tokenpago')
    const namepizza = request.input('namepizza')
    const cantidad = request.input('cantidad')
    const tamanio =request.input('tamanio')

    let pago = await Pago.find(params.id)

    pago.nameclient = nameclient
    pago.monto=monto
    pago.correo=correo
    pago.tokenpago=tokenpago
    pago.namepizza=namepizza
    pago.cantidad=cantidad
    pago.tamanio=tamanio

    await pago.save()
    return response.json(pago)
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
 
    const pago = await Pago.find(params.id)
        if (!pago) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await pago.delete()

        return response.status(204).json(null)

    
  }



}

module.exports = PogoController
