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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadosdb = empleados.find(empleado => empleado.id === id);
        if (!empleadosdb) {
            reject('No existe el empleado')
        } else {
            resolve(empleadosdb)
        }
    })
}

getEmpleado(1).then(empleado => {
    return getSalario(empleado);
}).then(res => {
    console.log(`El salario de ${res.nombre} es de ${res.salario}`);
}).catch(err => {
    console.log(err)
});

let getSalario = (obje_empleado) => {
    return new Promise((resolve, reject) => {
        let salariodb = salarios.find(salario => salario.id === obje_empleado.id)
        if (!salariodb) {
            reject('No tiene salario')
        } else {
            resolve({
                "nombre": obje_empleado.nombre,
                "salario": salariodb.salario
            })
        }
    })
}