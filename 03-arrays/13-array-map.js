const usuarios = [
    { edad: 12, nombre: 'Nicolas'},
    { edad: 18, nombre: 'Chanchito feliz'},
    { edad: 5, nombre: 'lala'},
    { edad: 24, nombre: 'Pato'},
];

const lista = usuarios
    .filter(usuario => usuario.edad > 17)
    .map(usuario => `<li>${usuario.nombre}</li>`);
    
const html = `<ul>${lista.join('')}</ul>`;

console.log(html); 

const mapped = usuarios.map(usuario => ({ 
    ...usuario,
    mayor: usuario.edad > 17
}));

console.log(mapped);