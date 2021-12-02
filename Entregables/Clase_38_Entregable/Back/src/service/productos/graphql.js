const prdModel = require('../../dao/models/productos')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')

var schema = buildSchema(`
    type Query {
        getProductos: [Producto]
    },
    type Mutation {
        addProducto(nombre: String,descripcion: String,codigo: Int,precio: Int,stock: Int,imagen: String,categoria: String,usuarioId: String,vendedor: String):Producto
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

const getPrd = async () =>{
    return prdModel.find({})
}

/* Query Post
mutation{
  addProducto(
    nombre: "Silla Ultra Gamer",
    descripcion: "Silla gamer de ultima generacion",
  	codigo: 10,
  	precio: 10034,
  	stock: 12,
  	imagen: "https://http2.mlstatic.com/D_NQ_NP_893396-MLA45978328032_052021-O.webp",
    categoria: "Gamer",
    usuarioId: "615f6308b4e9ad2dcef734dc",
    vendedor: "Usuario") {
  	
    _id,
    nombre,
    descripcion
  }
}
*/

const addPrd = async ({nombre,descripcion,codigo,precio,stock,imagen,categoria,usuarioId,vendedor}) =>{
    return prdModel.create({
        nombre,
        descripcion,
        codigo,
        precio,
        stock,
        imagen,
        categoria,
        usuarioId,
        vendedor,
    })
}

const root = {
    getProductos: getPrd,
    addProducto: addPrd,
}




module.exports = {
    graphqlConnect: graphqlHTTP,
    Schema: schema,
    Root: root
}