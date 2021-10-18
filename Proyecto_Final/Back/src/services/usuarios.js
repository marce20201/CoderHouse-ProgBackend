const usuariosModel = require('../dao/models/usuarios')

//Metodos de Usuario
module.exports = class {
    async buscaEmail(usermail){
        return usuariosModel.findOne({'email':usermail})
    }

    async guardarUsuario(usuario){
        await usuariosModel.create(usuario)
    }

    async buscaUsr(id){
        try {
            return usuariosModel.findById({'_id':id})
        } catch (error) {
            return error
        }
    }


}