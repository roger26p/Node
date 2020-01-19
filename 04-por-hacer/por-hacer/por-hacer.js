const fs = require('fs');
const color = require('colors')

let listadoPorHacer = [];

const guradarDB = (listadoPorHacer) => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se puedo grabar', err)

    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guradarDB(listadoPorHacer);
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guradarDB(listadoPorHacer);
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    /*  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
     if (index >= 0) {
         listadoPorHacer.splice(index, 1);
         guradarDB(listadoPorHacer);
         return true;
     } else {
         return false;
     } */
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guradarDB(listadoPorHacer);
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}