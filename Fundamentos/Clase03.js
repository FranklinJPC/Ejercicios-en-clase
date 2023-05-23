// // clg --> console.log
// 'use strict';
// // Fuerza colocar de manera correcta la sintaxis de JS
// console.log("Hola Mundo");
// var unaVariable = "Stricker";
// console.log(typeof unaVariable)

// console.log(likesPost);
// var likesPost;

// if (true) {
//     var likesPost = 3;
// }
// console.log(likesPost);

// /*
//     LET
// */

// // asignar una variable
// let nicknameUsuario = "Yoshi"
// let puntosDeVida
// // no se puede declarar una variable con el mismo nombre
// // let nicknameUsuario = "Toshi"
// nicknameUsuario = "Toshi"
// puntosDeVida = 900

// console.log(nicknameUsuario+" "+puntosDeVida);

// /**
//  *  CONST
//  */

// // asignar una variable
// const nicknameUsuarioCost = "Kirbysoc"
// // siempre deben inicializar con un valor
// let puntosDeVidaA= 8000


// // no se puede declarar una variable con el mismo nombre
// // const nicknameUsuario = "Toshi"

// // no puede ser reasignado un valor
// // nicknameUsuario = "Toshi"
// // puntosDeVida = 900

// console.log(nicknameUsuarioCost+" "+puntosDeVidaA);

// // Uso del var
// // var estado = true
// if (estado) {
//     var estado = false
// }
// console.log(estado)
// for (var i = 0; i < 10; i++)
// {
//     console.log(i)
// }
// console.log(i)

// /**
//  *  ------------STRING----------------
//  */

// let nombreJuego = "Persona 5 Royal";
// let tipoDeJuego = "JRPG";
//  console.log(nombreJuego, tipoDeJuego)
//  console.log("\n")

//  console.log("Número de letras:",nombreJuego.length);
//  console.log("Encotrar alguna palabra:",nombreJuego.includes("Royal"));
//  console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase());
//  console.log("Convertir a minusculas:",nombreJuego.toLowerCase());
//  console.log("Quitar espacios adelante y atrás:",nombreJuego.trim());
//  console.log("Reemplazar una palabra:",nombreJuego.replace('Royal','The Royal'));
//  console.log("Cortar un texto:",nombreJuego.slice(1,6));
//  console.log("Cortar un texto:",nombreJuego.substring(0,9));
//  console.log("Cortar un texto:",nombreJuego.charAt(1));
//  console.log("Repetir un texto:",nombreJuego.repeat(2));
//  console.log("Dividir un texto:",nombreJuego.split(" "));

// // EMACSCRIPT estandar

// const name = "Franklin"
// const lastName= "Patiño"
// const city ="Quito"
// const age = 20
// const active = true
// console.log(name+"-"+lastName+"-"+city)
// console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);

// Es importante reconocer el tipo de valor asignado


// const numeroVidas = "20"
// const numeroPuntos = 20

// //Color tomar en cuenta

// console.log(numeroPuntos,numeroVidas);
// console.log(typeof(numeroPuntos), typeof(numeroVidas));

// console.log("suma:",numeroPuntos+20);
// console.log("resta:",numeroPuntos-20);
// console.log("multiplicación:",numeroPuntos*20);
// console.log("división:",numeroPuntos/20);
// console.log("módulo:",numeroPuntos%20);


// Importante el manejo de operadores de incremento y decremento

// let numeroPuntosActual = 20

// console.log(++numeroPuntosActual ); //<-- Incrementa y despues imprime
// console.log(numeroPuntosActual++); //<-- Imprime y despues incrmente
// console.log(numeroPuntosActual)

// let numeroVidasActual = 20

// console.log(--numeroVidasActual);
// console.log(numeroVidasActual--);
// console.log(numeroVidasActual)

// // Es importante reconocer el tipo de valor asignado
// const numeroVidas = "20"
// const numeroPuntos = 20

// console.log(numeroPuntos,numeroVidas);
// console.log(typeof(numeroPuntos), typeof(numeroVidas));

// console.log("suma:",numeroPuntos+20);
// console.log("resta:",numeroPuntos-20);
// console.log("multiplicación:",numeroPuntos*20);
// console.log("división:",numeroPuntos/20);
// console.log("módulo:",numeroPuntos%20);


// // Importante el manejo de operadores de incremento y decremento
// let numeroPuntosActualA = 20

// console.log(++numeroPuntosActualA );
// console.log(numeroPuntosActualA++);

// let numeroVidasActuala = 20

// console.log(--numeroVidasActuala);
// console.log(numeroVidasActuala--);

// console.log(3 + 4 * 5)
// console.log(4 * 3 ** 2)
// console.log(200 * 0.2)
// console.log(200 * 1.12)

// let edadJugador = "20"
// let precioJuego = "525.63"

// console.log(Number.parseInt(edadJugador));  //String --> Int
// console.log(Number.parseFloat(precioJuego));  // String --> Float

// console.log(Number.isInteger(edadJugador));  //Verifica

// console.log(`${+edadJugador + +precioJuego}`);

// operadores de asignación 

// let saldoTarjetaUsuario = 500
// let saldoTarjeta = 1000
// let estadoCuenta
// let emailConfirmado=null


// // operadores de asignación de adición
// saldoTarjetaUsuario += 100
// console.log(saldoTarjetaUsuario);

// // operadores de comparación
// saldoTarjetaUsuario="1000"
// console.log(saldoTarjeta == saldoTarjetaUsuario)
// // evalua tipo de dato y contenido
// console.log(saldoTarjeta === saldoTarjetaUsuario)

// console.log(estadoCuenta === emailConfirmado);


// // operadores aritméticos
// console.log(saldoTarjeta + Number.parseInt(saldoTarjetaUsuario));


// // operadores lógicos 
// console.log(saldoTarjeta != saldoTarjetaUsuario);
// // evalua tipo de dato y contenido
// console.log(saldoTarjeta !== Number.parseInt(saldoTarjetaUsuario));

// // operadores de asignación 
// let saldoTarjetaUsuario = 500
// let saldoTarjeta = 1000
// let estadoCuenta
// let emailConfirmado=null


// // operadores de asignación de adición
// saldoTarjetaUsuario += 100
// console.log(saldoTarjetaUsuario);

// // operadores de comparación
// saldoTarjetaUsuario="1000"
// console.log(saldoTarjeta == saldoTarjetaUsuario)
// // evalua tipo de dato y contenido
// console.log(saldoTarjeta === saldoTarjetaUsuario)

// console.log(estadoCuenta === emailConfirmado);


// // operadores aritméticos
// console.log(saldoTarjeta + Number.parseInt(saldoTarjetaUsuario));

// let saldoTarjetaUsuario = 500
// let saldoTarjeta = 1000

// const respuesta = saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo"
// console.log(respuesta);


// const tareasPendientes = ['Trabajar','Estudiar','Nadar','Viajar','Aprender Js']
// const usuario ={
//     nombre:"Byron",
//     apellido:"Loarte",
// }

// // uso del forEach 
// tareasPendientes.forEach((t,i)=> console.log(`${i+1} - ${t}`))

// // uso del for of -> usado para arreglos
// for (const t of tareasPendientes) {
//     console.log(`${t}`)
// }


// // uso del for in -> usado para objetos
// for (const clave in usuario) {
//     console.log(`${usuario[clave]}`)
// }
// for (const [clave,valor] of Object.entries(usuario)) {
//     console.log(`${clave} - ${valor}`)
// }


// // uso del map -> retorna un nuevo arreglo
// // const nuevasTareas = tareasPendientes.map((t)=> t)
// const nuevasTareas = tareasPendientes.map((i) =>  i.toUpperCase())
// console.log(nuevasTareas);
// console.log(tareasPendientes);
// // No mut a el arreglo oiginal

// /**
//  *  ---------------- OBJETOS -----------------------
//  */

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     },
//     Friends:['Peter','Mike','Camila','Joe'],
//     state:true,
//     sendMail (){ // Funcion Expresada
//         return `send mail to ${this.Friends[0]}`
//     },
//     sendNotification: function (){  // Funcion declarada
//         return `send notification to ${this.Friends[3]}`
//     }
// }
// console.log(user.state);
// console.log(user.sendMail());
// console.log(user.sendNotification());

// user.image ="t.ly/Rhgs"

// // Eliminar un par de clave y valor del objeto
// delete user.state

// console.log(user);


// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         streets:
//         {
//             principal: "Quitumbe Ñan",
//             secondary:"Huayanay Ñan"
//         }
//     }
// }

// // const {name,lastName,age,address} = user
// // console.log(name,lastName,age,address);

// // const {name,lastName,age,myAddress=user.address} = user
// // console.log(name,lastName,age,myAddress);

// // const {name,lastName,age,address:{streets}} = user
// // console.log(name,lastName,age,streets);

// // const {name,lastName,...res} = user
// // console.log(name,lastName,res);

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     }
// }

// // No se hace nada
// // Object.freeze(user)
// // console.log(Object.isFrozen(user));
// // user.image ="t.ly/Rhgs"

// // con seal no se puede agregar o eliminar propiedades, pero 
// // si se puede modificar las propiedades
// Object.seal(user)
// console.log(Object.isSealed(user))
// user.age= 35
// console.log(user);

// /**
//  *  -------- UNIR OBJETOS --------
//  */

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34
// }

// const extraInformation = {
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     },
//     Friends:['Peter','Mike','Camila','Joe'],
//     state:true,
//     sendMail (){
//         return `send mail to ${this.Friends[0]}`
//     },
//     sendNotification: function (){
//         return `send notification to ${this.Friends[3]}`
//     }
// }

// const allInformation = {...user,...extraInformation}
// console.log(allInformation)

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     },
//     Friends:['Peter','Mike','Camila','Joe'],
//     state:true,
//     // sendMail (){
//     //     return `send mail to ${this.Friends[2]}`  // "Puntero" a un bloque de codigo dentro del bloque de codigo
//     // },
//     sendNotification: ()=>{
//         return `send notification to ${this.Friends[3]}`
//     },
//     sendMail: () => 
// {
//         return `send mail to ${user.Friends[2]}`
//     }
// }

// console.log(user.sendMail());
// // Va a provocar un error cuando se trabaje con arrow functions
// // console.log(user.sendNotification())

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     },
//     Friends:['Peter','Mike','Camila','Joe'],
//     state:true,
//     sendMail (){
//         return `send mail to ${this.Friends[0]}`
//     },
//     sendNotification: ()=>{
//         return `send notification to ${this.Friends[3]}`
//     }
// }

// console.log("Obtener las claves:",Object.keys(user))
// console.log("Obtener los valores:",Object.values(user))
// console.log("Obtener las claves y valores en un array:",Object.entries(user))

// const user ="Franklin"
// const password = "123456"

// const newUser = {
//     user,
//     password
// }

// console.log(newUser);


// function hello(){
//     console.log("Bienvenidos a los fundamentos");
//     console.log("Trabjando con JS");
// }

// hello()
// hello()

// function declarada()
// {
//     console.log("soy una funcion declarada")
// }
// declarada()

// const expresada = function(){
//     console.log("Soy una funcion expresada")
// }
// expresada()

// console.log(function(){
//     return "Esto es una prueba para validar una cuenta"
// }())

// (function(){
//     console.log("función para validar datos del usuario")
// })()

// const precioFinalItems = function(a,b,...args){
//     let suma = 0;
//     var total = suma+a+b
//     if(args.length>0) args.forEach(e =>total+=e)
//         return total
// }

// console.log(precioFinalItems(10,20,40,50,10,100,50,160,250))

// function hello(nameOne,nameTwo){
    
//     return "welcome "+ nameOne + " and "+nameTwo
// }

// console.log(hello('Js','React'))

// // Paso de paramettros de una funcion por default
// function hello(nameOne,nameTwo="Node.Js"){
    
//     return "welcome "+ nameOne + " and "+nameTwo
// }

// function hello(){
    
//     // return "hola Js"
//     // return 123 
//     // return true 
//     // return ['Peter','Mike','Camila','Joe']
//     // return { // Sin saltos de parentesis unu
//     //     name:"Byron",
//     //     lastname:"Loarte",
//     //     age:34
//     // }
//     return function(){
//         return "Hello Js"
//     }
// }
// console.log(hello()())  // Parentesis en base a las funciones

// ----------- FUNCION FLECHA ----------------

// function login(user,password){
//     console.log("Usuario y password válidos");
// }

// // const validarMail = function(user,email){
// //     console.log("El emial ha sido verificado")
// // }

// const validarMail = (user,email)=>{
//     console.log("El emial ha sido verificado")
// }
// validarMail()

// const registrarAvatar = (photo)=>console.log("El avatar ha sido registrado");    // Continuacion unicamente con una sola linea de codigo
// // const registrarAvatar = (photo)=> "El avatar ha sido registrado"; 

// // const registrarAV2 = function(photo){            // Funcion Clasica
// //     console.log("El avatar registrado")
// // }

// // registrarAV2()

// login()

// validarMail()

// registrarAvatar()

// const buscador = document.querySelector('#search-178')
// const button = document.createElement("button")
// button.innerText="Hello React"
// buscador.appendChild(button);

// button.addEventListener('click',()=>{alert("Usuario registrado")})

// // button.addEventListener('click', function(){
// //     alert("Usuario registrado")
// // })

// const buscador = document.querySelector('#search-178')
// const button = document.createElement("button")
// button.innerText="Carrito de compras"
// buscador.appendChild(button);

// estado= false

// button.addEventListener('click',()=>{
//     if (estado) return alert("El carrito se encuentra lleno")
//     return alert("El carrito se encuentra sin productos")
// })

// const personaFlecha = {
//     nombre: "Byrontosh",
//     saludar: () => {
//     setTimeout(() => {
//         console.log("Hola, mi nombre es " + persona.nombre)  //<-- tomar en cuenta  si es con tipo funcion o flecha
//         }, 1000);
//     },
// }
// const persona = {
//     nombre: "Byrontosh",
//     saludar: function () {
//     setTimeout(() => {
//         console.log("Hola, mi nombre es " + this.nombre)
//         }, 1000);
//     },
// }
// personaFlecha.saludar()
// persona.saludar()

// ------- ARREGLOS -------

// Flexibilidad de datos

// const friendsUser = ["Peter","Juan","Luisa","Anahi","Mateus"]

// const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]

// const products = ["Play","Tv","Laptop","Celular"]

// const followerSocialMedia = [23,56,37,12]

// const nameFriends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
// const namePets = ["Puka","Chochitos","Peggy","Tobby","Blanqui",'Coffe']


// // spread operator
// const newNames = [...nameFriends,...namePets]  // Unir 2 arreglos en otro arreglo
// console.log(newNames);

// const friendsUser = ["Peter","Juan","Luisa","Anahi","Mateus"]
// const products = ["Play","Tv","Laptop","Celular"]
// const followerSocialMedia = [23,56,37,12]

// // Length -- Numero de arreglos

// console.log("Número de elementos:", friendsUser.length); 
// console.log("Número de elementos:", products.length);
// console.log("Número de elementos:", followerSocialMedia.length);

// const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// // primera forma de iterar sobre los elementos de un arreglo 
// // for (let i=0 ; i<friends.length ; i++){
// //     console.log(friends[i]);
// // }

// // // segunda forma de iterar sobre los elementos de un arreglo 
// // friends.forEach((e,i)=>console.log(`${i} - ${e}`))
// // friends.forEach(function(e,i){console.log(`${i} - ${e}`)})

// // // tercera forma de iterar sobre los elementos de un arreglo 
// const newFriends= friends.map((e)=> `Hola ${e}`)
// // const newFriends1 = friends.map(function(e){
// //     return `Hola ${e}`
// // })
// // console.log(newFriends1)
// console.log(friends);
// console.log(newFriends);
// En conclusión (map) no altera el arreglo original

// const user =[
//     {
//         name:"Byron",
//         lastName:"Loarte",
//         age:34
//     },
//     {
//         name:"Billy",
//         lastName:"Strick",
//         age:30
//     }
// ]

// user.forEach(u=>console.log(`${u.name} - ${u.age}`))
// // user.forEach(function(e){
// //     console.log(`${e.name} - ${e.age}`)
// // })

// const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]
// const skills = ["frontend","backend"]
// const nickname ="Byrontosh"

// // Agrega al final del arreglo
// profileUser.push(skills)
// // Agregar al inicio del arreglo
// profileUser.unshift(nickname)
// //console.log(profileUser);

// // Elimina el elemento del final del arreglo
// profileUser.pop(profileUser)
// // Elimina el elemento del inicio del arreglo
// profileUser.shift(profileUser)
// console.log(profileUser);

// const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// // método find
// const friendOne = friends.find((e)=>e==="Luisa")
// console.log(friendOne);

// const friendTwo = friends.find((e)=>e==="Luisa123")
// console.log(friendTwo);

// const friendsS = ["Peter","Juan","Luisa","Anahi","Mateus"]

// // método findIndex encuentra el indice del dato en el arreglo
// const encontrar = friendsS.findIndex((f)=>f==="Luisa")
// console.log(encontrar)

// const friendsAS = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']


// // método filter
// // Filtrar en base a una condicion
// const newfriendsOne = friendsAS.filter((e)=>e.startsWith('P'))  // Emperza con una letra o palabra
// const newfriendTwo = friendsAS.filter((e)=>e!='Pablo')
// console.log(newfriendsOne);
// console.log(newfriendTwo);

// const nameFriends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
// const namePets = ["Fuka","Chochitos","Peggy","Tobby","Blanqui",'Coffe']


// // método concat
// // No muta los arreglos originales
// const newNames = nameFriends.concat(namePets)
// console.log(newNames);


// // Funciona únicamente con arreglos de un solo valor, verifica si existe un elemento dentro del arreglo
// const profileUserR= ["Byron","Loarte",34,true,{ciudad:"quito"}]

// console.log(profileUserR.includes(34))
// console.log(profileUserR.includes(['frontend']))


// // Funciona para arreglos de un solo valor y arreglo de objetos

// const friendsSOS = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
// const users =[
//     {
//         name:"Byron",
//         lastName:"Loarte",
//         age:34
//     },
//     {
//         name:"Billy",
//         lastName:"Strick",
//         age:30
//     }
// ]
// console.log("\n\n")
// const existe = users.some(u=>u.name==="Byron")
// console.log(existe)
// const verifica = friendsSOS.some(f=>f==="Byron")
// console.log(verifica)

// const carritoCompras = [
//     {   product: "phone",
//         qty: 1,
//         price: 500
//     },
//     {   product: "Screen Protector",
//         qty: 1,
//         price: 10,
//     },
//     {
//         product: "Memory Card",
//         qty: 2,
//         price: 20,
//     }
// ]
// console.log("\n")
// // Todos los elementos deben cumplir la condición
// const result = carritoCompras.every(e=>e.price>=500)
// console.log(result);
// //  Al menos un elemento debe cumplir la condición
// const response = carritoCompras.some(e=>e.price>=500)
// console.log(response);

// // Da la vuelta al arreglo
// console.log("\n")
// const profileUserRE= ["Byron","Loarte",34,true,{ciudad:"quito"}]
// console.log(profileUserRE.reverse())

// // Ordena en base a Int/Double, String, Object, Boolean
// console.log("\n")
// const profileUserSR= ["Byron","Loarte",34,true,{ciudad:"quito"}]
// console.log(profileUserSR.sort())


// console.log("\n")
// const estudiantes = [
//     { name: "John", age: 21 },
//     { name: "Oliver", age: 55 },
//     { name: "Michael", age: 55 },
//     { name: "Dwight", age: 19 },
//     { name: "Oscar", age: 21 },
//     { name: "Kevin", age: 55 },
// ];

// const carritoComprasOB = [
//     {   product: "phone",
//         qty: 1,
//         price: 500
//     },
//     {   product: "Screen Protector",
//         qty: 1,
//         price: 10,
//     },
//     {
//         product: "Memory Card",
//         qty: 2,
//         price: 20,
//     }
// ]


// const resultado = estudiantes.reduce((pre, act) => pre + act.age, 0);
// console.log("Edad de los estudiantes: ",resultado);

// const totalProductos = carritoComprasOB.reduce((pre,act)=>pre+act.qty,0)
// console.log("Total de productos: ",totalProductos);

// const totalPagar = carritoComprasOB.reduce((pre,act)=>pre+act.price,0)
// console.log("Total a pagar con IVA: ",totalPagar+(totalPagar*0.12))

// const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]

// const [name,lastname,age,active,address,skills] = dataNewUser  // desestruraccion de arreglos
// // Se almacenan en variables independientes 

// console.log(name)
// console.log(lastname)
// console.log(age)
// console.log(active)
// console.log(address)
// console.log(skills)

// Saltar el valor en un arreglo
const [tomate, , zanahoria] = ['🍅', '🍄', '🥕']
console.log(tomate)
console.log(zanahoria)

// Desestructurando un arreglo anidado
console.log("\n")
const frutas = ['🍈', '🥕', '🍌', '🍉', ['🍅', '🍄', '🍍']]
const market = frutas[4]
const pineapple = market[2]
console.log(pineapple);
console.log(market)

// Destructuracion de objetos!!!!
// const carritoComprasOB = 
// {   product: "phone",
//     qty: 1,
//     price: 500
// }

// const {producto = carritoComprasOB.product, qty, price} = carritoComprasOB
// console.log(producto)

console.log("\n")

const [tomat, hongo, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

console.log(tomat)
console.log(hongo)
console.log(rest)

