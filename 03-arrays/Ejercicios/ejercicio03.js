const usuarios = [
    {edad: 12, nombre: 'Nicolas', plan: 'premium'},
    {edad: 18, nombre: 'ChanchitoFeliz', plan: 'free'},
    {edad: 5, nombre: 'lala', plan: 'free'},
    {edad: 24, nombre: 'Pato', plan: 'gold'},
];

function getPaidUsers(usuarios) {
    return usuarios.filter((usuario) => usuario.plan !== 'free');
}

console.log(getPaidUsers(usuarios)); 