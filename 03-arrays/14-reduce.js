const numeros= [1,2,3,4];

const suma = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0);

console.log(suma); // 10

const anidado = [[1,2],3,[4,5]];

const plano = anidado.reduce((acumulador, valorActual) => acumulador.concat(valorActual),[]).reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(plano); // [1,2,3,4,5]

const usuarios = [
    { edad: 12, nombre: 'Nicolas'},
    { edad: 18, nombre: 'ChanchitoFeliz'},
    { edad: 5, nombre: 'lala'},
    { edad: 24, nombre: 'Pato'},
];
// Se hace cuando hay muchos datos y se quiere acceder a ellos de manera mas rapida
const indexado = usuarios.reduce((acumulador, usuario) => ({
    ...acumulador,
    [usuario.nombre]: usuario,
}), {});

console.log(indexado);