let persona = {
    nombre: 'roger',
    apellido: 'perdomo',
    poder: 'nada',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

let { nombre: primernombre, apellido, poder } = persona;
console.log(primernombre, apellido, poder)