const usuariosServices = require('../services/usuarios')
const usr = new usuariosServices()
const token = require('../auth/token')
const bcrypt = require('bcrypt')

const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null)
}


exports.loginUser = (req,res) => {
    res.status(200).json({
        res:true,
        token:token.generateToken(req.user),
        usuario:req.user._id,
        message: ''
    })
}

exports.loginFail = (req,res) => {
    res.json({
        res:false,
        token:null,
        usuario:null,
        message: 'El usuario no existe o la contraseña es invalida'
    })
}

exports.registrarUsuario = async(req,res) =>{
    try {
        const user = await usr.buscaEmail(req.body.email)
        if(user){
            res.json({res: false,message:'El usuario ya existe'})
        }else{
            let contrasenia = req.body.contraseña
            let password = createHash(req.body.contraseña)
            req.body.contraseña = password
            await usr.guardarUsuario(req.body)
            res.json({
                res: true,
                email: req.body.email,
                contraseña: contrasenia,
                message:''
            })
        }
    } catch (error) {
        res.status(500).send('Ocurrio un error en el servidor')
    }
}

exports.logout = (req,res,next) =>{
    /* console.log('lllega al logout') */
    req.logout()
    res.send({mensaje: 'Usuario deslogueado'})
}

exports.buscaUsuario = async (req,res,next) =>{
    let id = req.params.id
    try {
        const data = await usr.buscaUsr(id)
        /* console.log(data) */
        if(data) res.json({res: true,data: data})
        else res.json({res:false,data:''})
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
}

exports.loginFacebook = (req,res) =>{
    console.log(req)
    res.send('ok')
}