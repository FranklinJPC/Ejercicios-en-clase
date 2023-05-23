"use strict";

/* --------------------------------- Asincronismo ---------------------------------- */
// function solicitar(tipo) {
//     for (let index = 0; index < 10000000000; index++) {}
//     return `¡Hola, ya regresé con la ${tipo}!`
// }
// console.log("Comenzar a escribir en la pizarra")
// console.log("No hay marcador azul")
// console.log("Solicitar ayuda")
// const name = 'Ralph'
// const respuestaEstudiante = solicitar("Pizza!!")
// console.log(respuestaEstudiante)
// console.log("Continuar escribiendo en la pizarra");

// function solicitar(tipo) {
//     console.log(`¡Hola, ya regresé con el ${tipo}!`)
// }

// console.log("Comenzar a escribir en la pizarra")
// console.log("No hay marcador azul")
// console.log("Solicitar ayuda")
// const name = 'Ralph'
// const data = setTimeout(()=>solicitar("Marcador-azul"),5000)
// console.log("Continuar escribiendo en la pizarra")

/* --------------- Promesas ---------------------------- */
// const conexionBDDExterna = (datosConexion)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
//         },3000)
//     })
// }
// // Manera de ver las promesas
// conexionBDDExterna(false)
//     .then((respuesta) => console.log(respuesta))
//     .catch((error) => console.log(error))
/* ---------------- Fetch ----------------------- */
// const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'); // deveuleve una promesa
// obtenerProductos
//     .then((peticion) => peticion.json())
//     .then((respuesta) => (console.log(respuesta)))
//     .catch((error) => (console.log(error)))

/* -------------- Async Await ------------------------- */
// const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// async function conectarAPI(){
//     try {
//         const peticion = await obtenerProductos
//         const respuesta = await peticion.json()
//         console.log(respuesta)
//     } catch (error) {
//         console.log(error)
//     }
// }
// const conexionBDDExterna = (datosConexion)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
//         },3000)
//     })
// }
// async function conexion(){
//     try{
//         console.log(await conexionBDDExterna(true))
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// conectarAPI()
// conexion()


/* -------------------------------------- DOM ---------------------------------------- */
// document.links[0]
// document.ima
// document.images
// document.forms
// document.forms[0].className
// const icono = document.getElementsByClassName("uk-icon-institution")
// icono
// const tarjeta = document.querySelector('.uk-width-medium-1-3')
// tarjeta
// const tarjeta3 = document.querySelector('.uk-width-medium-1-3:nth-child(3)')
// tarjeta3
// const enlace = document.querySelector('a')
// enlace
// const button = document.createElement("button")
// button.innerText="Hello React"
// const enlaces = document.querySelector('.uk-panel p')
// const enlaceNuevo = document.createElement('a')
// enlaceNuevo.textContent="Facebook"
// enlaceNuevo.style.color="blue"
// enlaces.insertBefore(enlaceNuevo,enlaces.children[1])
// const buscador = document.querySelector('#search-178')
// buscador .addEventListener('submit',(e)=> {
// 	e.preventDefault() // al enviar un formulario no recarga la pagina
// 	console.log("enviando el formulario")
// })
// const buscador = document.querySelector('#search-178')
// buscador .addEventListener('keypress',(e)=> {
//   if (event.key === "6") {
// 			e.preventDefault()
// 			console.log("enviando el formulario")
// 	}
// })