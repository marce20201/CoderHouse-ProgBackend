//inserta 10 productos
db.productos.insertMany([
	{nombre: "Papel",precio: "120",foto:"xxxxxxx"},
	{nombre: "Tijera",precio: "250",foto:"xxxxxxx"},
	{nombre: "Peugeot",precio: "580",foto:"xxxxxxx"},
	{nombre: "Tomate",precio: "1800",foto:"xxxxxxx"},
	{nombre: "Pan",precio: "1234",foto:"xxxxxxx"},
	{nombre: "Fideos",precio: "1231",foto:"xxxxxxx"},
	{nombre: "Crema",precio: "456",foto:"xxxxxxx"},
	{nombre: "Televisor",precio: "632",foto:"xxxxxxx"},
	{nombre: "Celular",precio: "5000",foto:"xxxxxxx"},
	{nombre: "Tablet",precio: "4500",foto:"xxxxxxx"},
])

//inserta 10 mensajes
db.mensajes.insertMany([
	{email: "ejemplo1@gmail.com",texto: "esto es un mensaje de ejemplo1"},
	{email: "ejemplo2@gmail.com",texto: "esto es un mensaje de ejemplo2"},
	{email: "ejemplo3@gmail.com",texto: "esto es un mensaje de ejemplo3"},
	{email: "ejemplo4@gmail.com",texto: "esto es un mensaje de ejemplo4"},
	{email: "ejemplo5@gmail.com",texto: "esto es un mensaje de ejemplo5"},
	{email: "ejemplo6@gmail.com",texto: "esto es un mensaje de ejemplo6"},
	{email: "ejemplo7@gmail.com",texto: "esto es un mensaje de ejemplo7"},
	{email: "ejemplo8@gmail.com",texto: "esto es un mensaje de ejemplo8"},
	{email: "ejemplo9@gmail.com@gmail.comel",texto: "esto es un mensaje de ejemplo9"},
	{email: "ejemplo10@gmail.com",texto: "esto es un mensaje de ejemplo10"},
])

//cuenta las cantidades en ambas colecciones
db.productos.count()
db.mensajes.count()

//inserta un producto nuevo
db.productos.insert({nombre: "Iphone",precio: "1000",foto:"xxxxxxx"})

//Lista productos con precio menor a 1000
db.productos.find({"precio":{$lt: 1000}})

//Lista productos con precio entre 1000 y 3000
db.productos.find({"precio":{$in:["1000","3000"]}})

//Lista productos con precio mayor a 3000
db.productos.find({"precio":{$gt:"3000"}})

//Trae el nombre del tercer producto mas barato
db.productos.find({},{$and:[{"nombre":1},{"precio":{$lt:"120"}}]})

//Inserta un nuevo campo
db.productos.updateMany({},{$set: {"stock": 100}})

//Cambia a 0 el stock
db.productos.updateMany({},{$set: {"stock": 0}})

//Borra los productos con precio menor a 100
db.productos.deleteMany({"precio":{$lt:"100"}})

//Crear un usuario 'pepe' clave: 'asd456'
db.createUser({user:"pepe",pwd:"asd456",roles:[{role:"read",db:"ecommerce"}]})