'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PagosSchema extends Schema {
  up () {
    this.table('pagos', (table) => {
      // alter table
      table.string('statuspizza')
    })
  }

  down () {
    this.table('pagos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PagosSchema
