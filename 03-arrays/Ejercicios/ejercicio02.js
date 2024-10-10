const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id: 1, nombre: "Chanchito Feliz"},
    ['lala']
]

function dividePorTipo(array) {
    return {
        string: array.filter((n) => typeof n === "string"),
        number: array.filter((n) => typeof n === "number"),
        object: array.filter((n) => typeof n === "object"),
    }
        
}


console.log(dividePorTipo(miArray)); // {string: 2, number: 1, object: 2, array: 1}