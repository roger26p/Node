const fs = require('fs');
const color = require('colors')

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor es un string')
            return
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

let listarTabla = (base, limite = 10) => {
    let data = ''
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`
    }
    console.log(data.blue)
}

module.exports = {
    crearArchivo,
    listarTabla
}