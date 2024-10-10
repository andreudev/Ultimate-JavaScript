// function hola () {
//   return 'Hola'
// }

// const resultado = hola();

// Fat arrow functions
const hola = nombre => 'Hola ' + nombre;
const hola2 = nombre => {
    return 'Hola ' + nombre;
};

const resultado = hola('Andrew');

console.log(resultado);