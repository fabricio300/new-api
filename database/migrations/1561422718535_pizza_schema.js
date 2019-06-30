'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PizzaSchema extends Schema {
  up () {
    this.create('pizzas', (table) => {
      table.increments()
      table.string('name')
      table.integer('precio1')
      table.integer('precio2')
      table.integer('precio3')
      table.string('ingredientes')
      table.string('imagen')
      table.boolean('visible')
      table.integer('user_id').unsigned().references('id').inTable('users'); /*llave foranea*/
      table.timestamps()
    })
  }

  down () {
    this.drop('pizzas')
  }
}

module.exports = PizzaSchema
