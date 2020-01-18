//callbacks es una función que se pasa a otra función como un argumento.

/*setTimeout(() => {
    console.log("hola mundo")
}, 3000)*/

let getUsuario = (id, callback) => {
    let usuario = {
        nombre: "Roger",
        id
    }

    callback(usuario)
}

getUsuario(1, (usuario) => {
    console.log('usuario de base de datos', usuario)
})