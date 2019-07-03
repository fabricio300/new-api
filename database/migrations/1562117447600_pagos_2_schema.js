'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Pagos2Schema extends Schema {
  up () {
    this.create('pagos_2_s', (table) => {
      table.increments()
      table.string('nameclient')
      table.integer('monto')
      table.string('correo')
      table.string('tokenpago')
      table.string('namepizza')
      table.integer('cantidad')
      table.string('tamanio')
      table.string('statuspizza')
      table.timestamps()
    })
  }

  down () {
    this.drop('pagos_2_s')
  }
}

module.exports = Pagos2Schema
