const saludo = 'Hola Mundo!';

const despedida = new String('   Adios Mundo!   ');

console.log(saludo.length); // 11
console.log(saludo.indexOf('Mundo')); // 5
console.log(saludo.slice(5, 10)); // Mundo
console.log(saludo.substring(5, 11)); // Mundo
console.log(saludo.replace('Mundo', 'World')); // Hola World!
console.log(saludo.toUpperCase()); // HOLA MUNDO!
console.log(saludo.toLowerCase()); // hola mundo!
console.log(despedida.trim()); // Adios Mundo!