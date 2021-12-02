const express = require('express')
const cors = require('cors')
const compression = require('compression')
const { json, urlencoded } = require('body-parser')
const router = express.Router()
const app = express()
const {graphqlConnect,Schema,Root} = require('./service/productos/graphql')
//Rutas
const prdRoutes = require('./routes/productos')
app.use(prdRoutes(router))

//Configuraciones
app.use(urlencoded())
app.use(json())
app.use(cors())
app.use(compression())
//Graphql
app.use('/graphql',graphqlConnect({
    schema: Schema,
    rootValue: Root,
    graphiql: true
}))




module.exports = app;