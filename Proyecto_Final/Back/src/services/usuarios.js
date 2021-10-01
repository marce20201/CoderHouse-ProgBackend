const usuariosModel = require('../dao/models/usuarios')

//Metodos de Usuario
module.exports = class {
    async findUser(user){
        await usuariosModel.find(user)
    }
}