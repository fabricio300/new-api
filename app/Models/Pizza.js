'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pizza extends Model {
    user(){
        return this.belongsTo('App/Models/User');
    }
    /*boble relacion esto iria en user.js
    contacts () {
        return this.hasMany('App/Models/Contact')
    }*/
}

module.exports = Pizza
