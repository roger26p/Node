/* let getNombre = async() => {
    return 'Roger';
};

getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(e => {
        console.log('error de asyn', e);
    }) */

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Milagros');
        }, 3000)
    })
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
})