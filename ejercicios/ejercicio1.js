let pairs = [
    [0,{nombre: 'Andrew'}],
    [1,{nombre: 'Andrea'}],
    [2,{nombre: 'Andres'}]
]

function toArray(pairs){
    let result = [];
    for (const pair of pairs) {
        result[pair[0]] = {id: pair[0], nombre: pair[1].nombre};
    }
    return result;
}

console.log(toArray(pairs));
