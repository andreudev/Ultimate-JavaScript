const usuarios = [
    {edad: 12, nombre: 'Nicolas', plan: 'premium'},
    {edad: 18, nombre: 'ChanchitoFeliz', plan: 'premium'},
    {edad: 5, nombre: 'lala', plan: 'free'},
    {edad: 24, nombre: 'Pato', plan: 'gold'},
];


let cuantosPremium = usuarios => usuarios
    .filter((usuario) => usuario.plan === 'premium')
    .reduce((acc)=>acc+1,0);

// function cuantosPremium(usuarios){
//     return usuarios
//     .filter((usuario) => usuario.plan === 'premium')
//     .reduce((acc)=>acc+1,0);
// }

function cuantosMayores1(usuarios){
    return usuarios.reduce((acc,item) => 
        item.edad > 17 ? acc + 1: acc, 0 );
}


function cuantosMayores(usuarios){
    return usuarios
    .filter(usuario => usuario.edad > 17)
    .reduce((acc)=>acc+1,0);
}

console.log(cuantosPremium(usuarios))
console.log(cuantosMayores(usuarios))
console.log(cuantosMayores1(usuarios))