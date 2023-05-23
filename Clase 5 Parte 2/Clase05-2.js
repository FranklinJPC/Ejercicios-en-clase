'use strict'
/* ------------------------------------- Local Storage ----------------------------------------------- */
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(respuesta => console.log(respuesta))
// console.log("\n-------------------------------")

/* ----------------- API ------------------------- */
// const obtenerData = async (nombrePokemon) =>{
//     try{
//         const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
//         const response = await peticion.json()
//         console.log(response.name , response.sprites.front_default ?? "img.demo.png")
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// obtenerData('pikachu')

/* Se necesita un navegador!!! */
// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((Response) => Response.json())
//     .then(data =>{
//         let usuario ={
//             name: data.name,
//             username: data.username,
//             email: data.email
//         }
//         guardarDatos(usuario)
//     })
// const guardarDatos = (data) =>{
//     localStorage.setItem('user', JSON.stringify(data))
// }

/* -------------- Obtener Key --------------- */
// const obtenerLocaclStorage = () =>{
//     const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "No hay datos"
//     console.log(respuesta)
// }
// obtenerLocaclStorage()

/* ----------- Eliminar Local Storage -------------- */
// const eliminarLocalStorage = () =>{
//     !localStorage.key("user") ? console.log("No hay clave"): localStorage.removeItem("user")
// }
// eliminarLocalStorage()

/* ---------------------------------------- Modulos -------------------------------------------------- */
// const {login, likes} = require('./module.js')
// login() // <- default
// console.log(likes)

import login from "./module.js";
login()