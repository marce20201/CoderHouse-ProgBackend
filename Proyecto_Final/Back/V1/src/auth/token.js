const jwt = require('jsonwebtoken')
const tokenSecret = "secreto"

exports.generateToken = (user)=>{
    return jwt.sign({data:user},tokenSecret,{expiresIn:'24h'})
}

exports.verify = (req,res,next)=>{
    const token = req.headers.authorization
    if(!token) res.status(403).json({error: 'favor de proporcionar un token'})
    else{
        jwt.verify(token.split(" ")[1],tokenSecret,(err,val)=>{
            if(err) res.status(500).json({error: 'Fallo al autenticarse el token'})
            req.user = val.data
            next()
        })
    }
}