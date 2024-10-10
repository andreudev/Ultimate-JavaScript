let usuarios = [
    {id:1, activo: true},
    {id:2, activo: false},
    {id:3, activo: true}
];

let todosActivos = usuarios.every(usuario => {
    console.log('Todos activos', usuario.id);
    return usuario.activo;
});

console.log(todosActivos); // false

let algunActivo = usuarios.some(usuario => {
    console.log('Algun activo', usuario.id);
    return usuario.activo;
}
);

console.log(algunActivo); // true