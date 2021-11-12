const express = require('express')
const cors = require('cors')
const compression = require('compression')
const { json, urlencoded } = require('body-parser')
const router = express.Router()
const app = express()
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')



//Rutas
const prdRoutes = require('./routes/productos')
app.use(prdRoutes(router))

app.use(urlencoded())
app.use(json())
app.use(cors())
app.use(compression())

const prdModel = require('../src/dao/models/productos')

// GraphQL schema
//https://graphql.org/graphql-js/basic-types/
var schema = buildSchema(`
    type Query {
        productos: [String]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Producto
    },
    type Producto {
        _id: String
        nombre: String
        descripcion: String
        codigo: Int
        precio: Int
        stock: String
        imagen: String
        categoria: String
        usuarioId: String
        vendedor: String
    }
`);




const getProductos = async () =>{
    await prdModel.find((err,data)=>{
        if (err) console.log(err);
        else{
            return data
        }
    })
}

const root = {
    productos: getProductos,
}


app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))




module.exports = app;