//Modulo para extraer variables de entorno
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

module.exports = {
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MONGO_URI,
    GMAILPASS: process.env.PASS_GMAIL,
    TWILIO_ID: process.env.TWILIO_ID,
    TWILIO_TOKEN: process.env.TWILIO_TOKEN
}