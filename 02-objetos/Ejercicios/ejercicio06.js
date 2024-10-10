let objeto = {
    id:1,
    name:"Andrew"};

function crearCopia(obj){
    let copia = {};
    for (let key in obj) {
        copia[key] = obj[key];
    }
    return copia;
}

let copia = crearCopia(objeto);

console.log(copia); // { id: 1, name: 'Andrew' }