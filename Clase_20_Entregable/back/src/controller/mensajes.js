const mensajesServices = require('../services/mensajes')
const Msg = new mensajesServices()

exports.createMsg = async (req,res,next) => {
    let {email,texto} = req.body
    await Msg.createMsg(req.body)
    res.send({
        msg: 'creado'
    })
}

exports.findAllMsg =  async (req,res,next) => {
   const mensajes = await Msg.getAllMsg()
  
   res.json(mensajes)
}





//Ejemplo de update, sacar id de un request
/* const {body , 
      params: {parametroporUrl}
    } = req;
const updateEjemplo = await Msg.updateUser(parametroporUrl,body)
const dltEjemplo = await Msg.deleteMsg(parametroporUrl) */