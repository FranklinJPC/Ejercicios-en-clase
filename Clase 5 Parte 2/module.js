'use strict'

/* --------------- Modulos -------------------------- */
// const login = (username,password)=>{
//     if(!username && !password) return console.log("You are not autorized")
//     console.log(`Welcome ${username}`)
// }
// // module.exports = login //<- Default
// const likes = 150
// module.exports = {
//     login,
//     likes
// }
// module.exports.ogin = (username,password)=>{
//     if(!username && !password) return console.log("You are not autorized")
//     console.log(`Welcome ${username}`)
// }
// module.exports.likes = 150

const login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

export default login