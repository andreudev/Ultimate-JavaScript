const usuarios = [
    {edad: 12, nombre: 'Nicolas', plan: 'premium'},
    {edad: 18, nombre: 'ChanchitoFeliz', plan: 'premium'},
    {edad: 24, nombre: 'Pato', plan: 'gold'},
    {edad: 5, nombre: 'lala', plan: 'free'},
];

function obtenerMayor(usuarios){
    return usuarios.reduce(
        (acc,item) => item.edad > acc.edad ? item : acc , item = usuarios[0]
    );
}

function obtenerMayor1(usuarios){
    let mayor = usuarios[0];
    
    for (let usuario of usuarios) {
        mayor = usuario.edad > mayor.edad ? usuario: mayor;
    }
    return mayor
}

console.log(obtenerMayor(usuarios));
console.log(obtenerMayor1(usuarios));