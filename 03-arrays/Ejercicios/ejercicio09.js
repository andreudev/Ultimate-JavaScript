const usuarios = [
    {edad: 12, nombre: 'Nicolas', plan: 'premium'},
    {edad: 18, nombre: 'ChanchitoFeliz', plan: 'premium'},
    {edad: 24, nombre: 'Pato', plan: 'gold'},
    {edad: 5, nombre: 'lala', plan: 'free'},
];

const users = [
    { age: 12, name: 'Michael', membership: 'premium' },
    { age: 27, name: 'John', membership: 'free' },
    { age: 18, name: 'Happy pig', membership: 'free' },
]

const usersEnglish = usuarios.map(usuario =>({
    age: usuario.edad,
    name: usuario.nombre,
    membership: usuario.plan
}));

const allUsers = [...users,...usersEnglish]

allUsers.sort((a,b) => b.age - a.age);



const lista = allUsers.map(usuario => `<li>Nombre: ${usuario.age}, Edad: ${usuario.age}</li>`);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`

console.log(html)