const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id: 1, nombre: "Chanchito Feliz"},
    ['lala'],
    true
]


function dividePorTipo(arr){
    return arr.reduce((acc, item) => {
    let llave = typeof item;

    acc[llave] = acc[llave] ? acc[llave] : [];
    acc[llave].push(item);

    // Cuando reduce no se le pasa un valor inicial, el primer item del array se convierte en el acumulador y el segundo item se convierte en el valor actual del acumulador, tambien se usa return cuando se quiere modificar el acumulador
    return acc

    // Se le pasa un objeto vacio como valor inicial al reduce para que el acumulador sea un objeto vacio y no un array vacio
}, {});
}

console.log(dividePorTipo(miArray))
