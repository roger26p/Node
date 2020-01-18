let empleados = [{
        id: 1,
        nombre: 'Roger'
    },
    {
        id: 2,
        nombre: 'Milagros'
    }, {
        id: 3,
        nombre: 'fabian'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id, callback) => {
    let empleadosdb = empleados.find(empleado => empleado.id === id);
    if (!empleadosdb) {
        callback('No existe')
    } else {
        callback(null, empleadosdb)
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err)
    }
    console.log(empleado);
})

getSalario = (id_empleado, callback) => {
    let salariodb = salarios.find(salario => salario.id === id_empleado)

    if (!salariodb) {
        callback('No existe no tiene salario')
    } else {
        let { id: id_salario, salario: monto_salario } = salariodb
        let salaraio_nombre = empleados.find(nom_empleados => nom_empleados.id === id_salario)
        let obje = {
            "nombre": salaraio_nombre.nombre,
            "salario": monto_salario
        }

        callback(null, obje)
    }
}

getSalario(2, (err, salarioss) => {
    if (err) {
        return console.log(err)
    }
    console.log(salarioss)
})