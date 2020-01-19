const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const color = require('colors')

let comando = argv._[0]
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(err => console.log(err))
        break;

    default:
        console.log('comando no reconocido')

}

//Process es una variable de entorno de node
//let argv2 = process.argv;
//let parametro = argv[2]
//let base = parametro.split('=')[1]
//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(err => console.log(err))

//npm init funciona para crea el package.json