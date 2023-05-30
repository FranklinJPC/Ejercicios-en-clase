// // Creacion del servidor
// Node
// const http = require("http")
// const server = http.createServer((request, response) => {
//     user = {
//         user:"Byron",
//         email:"byron@hotmail.com"
//     }
//     response.setHeader('Content-Type', 'application/json');
//     response.write(JSON.stringify(user));
//     response.end()

//     // response.setHeader('Content-Type', 'text/html')
//     // response.write("<h1>Wenas Gente</h1>") // Respuesta del server 
//     // response.end()
    
// })
// server.listen(3000)
// console.log("Servidor bien!!")

// ---------------- Express ----------------
const express = require("express")
const app = express()
app.get('/', (request, response) => {
    response.send("Hola mundo!!")
})
app.listen(3000) // Puerto
console.log("Server iniciado")

