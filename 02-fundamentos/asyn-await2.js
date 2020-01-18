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

let getEmpleado = async(id) => {

    let empleadosdb = empleados.find(empleado => empleado.id === id);
    if (!empleadosdb) {
        throw new Error('No existe el empleado')
    } else {
        return empleadosdb
    }

}


let getSalario = async(obje_empleado) => {

    let salariodb = salarios.find(salario => salario.id === obje_empleado.id)
    if (!salariodb) {
        throw new Error('No tiene salario')
    } else {
        return {
            "nombre": obje_empleado.nombre,
            "salario": salariodb.salario
        }
    }

}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de ${resp.salario}`;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));