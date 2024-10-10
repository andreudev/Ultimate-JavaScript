const usuarios = [
    { edad: 12, nombre: 'Nicolas'},
    { edad: 18, nombre: 'Chanchito feliz'},
    { edad: 5, nombre: 'lala'},
    { edad: 24, nombre: 'Pato'},
]

const mayores = usuarios.filter(usuario => usuario.edad > 17);
const menores = usuarios.filter(usuario => !(usuario.edad > 17));
console.log(mayores);