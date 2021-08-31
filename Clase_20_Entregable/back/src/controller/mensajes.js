const mensajesServices = require('../services/mensajes')
const msg = new mensajesServices()

exports.createMsg = async (req,res,next) => {
    console.log(req.body);
    await msg.createMsg(req.body)
    res.send('ok')
}

exports.findAll =  async (req,res,next) => {
   const mensajes = await msg.getAllMsg();
   res.json(mensajes)
}

exports.createMsgIo = async (data) => {
    /* console.log(data); */
    await msg.createMsg(data)
    return 'creado'
}

exports.findMsgIo = async () => {
    return msg.getAllMsg()
}





//Ejemplo de update, sacar id de un request
/* const {body , 
      params: {parametroporUrl}
    } = req;
const updateEjemplo = await Msg.updateUser(parametroporUrl,body)
const dltEjemplo = await Msg.deleteMsg(parametroporUrl) */