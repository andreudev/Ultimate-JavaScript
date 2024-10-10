
let nombre = '';

let username = nombre || 'Anonimo';

console.log(username); 

function fn1() {
    console.log('Hola soy la funcion 1');
    return false;
}

function fn2() {
    console.log('Hola soy la funcion 2');
    return true;
}

let funcion = fn1() && fn2();


let edad = 10;
let acceso = edad > 18 ? 'Acceso permitido' : 'Acceso denegado';

console.log(acceso);

let texto = 'Hola mundo';

for (const caracter of texto) {
    console.log(caracter);
}

let usuario = {
    id: 1,
    nombre: 'Andrew',
    edad: 25
}

for (const prop in usuario) {
    console.log(prop,usuario[prop]);
}

