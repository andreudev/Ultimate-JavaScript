const usuarios =[ 
    { nombre: 'Nico', edad: 22 },
    { nombre: 'Andrew', edad: 25 },
    { nombre: 'Andrew', edad: 30 }
]

// const resultado = usuarios.indexOf({ nombre: 'Andrew', edad: 25 });
// console.log(resultado); // -1



const resultado = usuarios.find(usuario => usuario.nombre === 'Andrew');// Predicate function

console.log(resultado); // { nombre: 'Andrew', edad: 25 }