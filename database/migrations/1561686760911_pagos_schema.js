'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PagosSchema extends Schema {
  up () {
    this.create('pagos', (table) => {
      table.increments()
      table.string('nameclient')
      table.integer('monto')
      table.string('correo')
      table.string('tokenpago')
      table.string('namepizza')
      table.integer('cantidad')
      table.string('tamanio')
      table.string('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('pagos')
  }
}

module.exports = PagosSchema
