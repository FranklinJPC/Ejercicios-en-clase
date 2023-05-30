// // ----------- Express ----------------
// const express = require("express")
// const app = express()
// // ---------- Archivos -----------
// app.get('/', (request, response) => { // GET - Obtener
//     response.sendFile('./take.jpg', {
//         root:__dirname // Directorio
//     })
// })
// // ------- JSON ----------
// app.get('/user', (request, response) => { // GET - Obtener
//     response.json({
//         "nombre":"Franklin",
//         "apellido":"Patiño",
//         "edad":20,
//         "direccion":{
//             "callePrincipal":"Quito",
//             "calleSecundaria":"Av, Amazonas",
//         }
//     })
// })
// app.get('/isAlive',(request,response)=>{
//     response.sendStatus(204)
// })
// // app.post('/', (request, response) => { // GET - Obtener
// //     response.send("Enviar datos del servr")
// // })
// // app.put('/', (request, response) => { // GET - Obtener
// //     response.send("Actualizar toda la info")
// // })
// // app.patch('/', (request, response) => { // GET - Obtener
// //     response.send("Actualizacion una parte/porcion de la info")
// // })
// // app.delete('/', (request, response) => { // GET - Obtener
// //     response.send("Eliminar algun dato")
// // })
// // app.get('/dashboard',(request, response) => { // GET - Obtener
// //     response.send("Principal dashBoard")
// // })
// // app.get('/contactos', (request, response) => { // GET - Obtener
// //     response.send("Contactos")
// // })
// // app.get('/take', (request, response) => { // GET - Obtener
// //     response.send("<h1>Take Your Heart!!!</h1>")
// // })
// app.use((request, response) => { // Verificacion de entrada  Siempre al final
//     response.status(404).send("Papuh no ahy!! :'v")
// })
// app.listen(3000) // Puerto
// console.log("Server iniciado") 


// ----------------- Express Handlebars --------------

const express = require('express')
const {engine} = require("express-handlebars")  // Trae el motor de plantillas
const path = require('path')

const app = express()
// app.engine('.hbs', engine({
//     extname: '.hbs' // Extension a usar
// }))
// // Rutas
// app.set('view engine', '.hbs');
// app.set('views', /*'./views'*/ path.join(__dirname, 'views'));

// app.get('/',(request,response)=>{
//     response.render('home')
// })
// app.get('/login', (request, response) =>{
//     response.render('login')
// })
// app.get('/personal', (request, response) =>{
//     response.render('personal')
// })

// app.use(express.json())
// app.post('/productos', (request, response) => {
//     const {nombre, edad} = request.body  // Valores del body
//     response.send(`Los datos enviados son: ${nombre} - ${edad}`)
//     // console.log(request.body)
// }) 

// app.get('/user/:data', (request, response) =>{
//     response.send(`Bienvenido - ${request.params.data}`)
// })

// // Extraer valores de la url
// app.get('/operacion/:num1/:num2', (request, response) =>{
//     const {num1, num2} = request.params  // Valores de una URL
//     response.send(`La suma de los numeros: ${Number(num1) + Number(num2)}`)
// })

// app.get('/user/:profile/photo', (request, response) =>{
//     if(request.params.profile === "Jhowellz")
//     {
//         response.sendFile('./take.jpg', {
//             root: __dirname
//         })
//     }
//     else{
//         response.send("Usuario invalido!!")
//     }
// })
// app.get('/user/:nombre/edad/:edad', (request, response) =>{
//     response.send(`Usuario: ${request.params.nombre} Edad: ${request.params.edad}`)
// })

// // Query Params
// app.get('/search', (request, response) =>{
//     console.log(request.query)
//     if(request.query.data === "js")
//     {
//         response.send("Libros de JS")
//     }
//     else{
//         response.send("Libros de dom")
//     }
// })

app.use((request, response, next) =>{
    console.log(`Ruta invocada ${request.path} - meotod ${request.method}`)
    next()  // Continua al siguiente metodo
})
app.get('/profile',(request, response) =>{
    response.send("Bienvenido!!")
})

app.listen(3000)
console.log('Server Bien!!')