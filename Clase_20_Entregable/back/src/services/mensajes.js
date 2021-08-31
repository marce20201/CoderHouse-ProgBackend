//importo el modelo de mensajes
const mensajesModel = require('../dao/models/mensajes')

//Metodos
module.exports = class {

    async createMsg(msg){
        await mensajesModel.create(msg);
    }

    async getAllMsg(){
        await mensajesModel.find();
    }

}