const usuariosServices = require('../services/usuarios')
const usr = new usuariosServices()
const token = require('../auth/token')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const {GMAILPASS,TWILIO_ID,TWILIO_TOKEN} = require('../config/globals')
const twilioClient = require("twilio")(TWILIO_ID,TWILIO_TOKEN)

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

exports.sendEmail = async (req,res) =>{
    let {email} = req.body
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: "tomascostillachavez@gmail.com",
            pass: GMAILPASS,
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    await transporter.sendMail({
        from: "Servidor de nodejs",
        to: email,
        subject:"Mail desde pruebas",
        html:`<h2>La clave es 12345</h2>`
    })

    res.status(200).json({res:true,msg: "Se ha enviado una clave de verificacion a tu mail"})

}

exports.verificaClave = (req,res) =>{
    let {clave} = req.params
    if(clave==='12345'){
        res.status(200).json({res:true,msg: "Se verifico la clave con exito"})
    }else{
        res.json({res:false,msg:"La clave es incorrecta"})
    }
}

exports.sendMsg = async (req,res) =>{
    let {phone} = req.body
    await twilioClient.messages.create({
        body: "La clave es 12345",
        from: "+12562429859",
        to: phone
    })
    res.status(200).json({res:true,msg:'Se ha enviado una clave de verificacion a tu celular'})
}