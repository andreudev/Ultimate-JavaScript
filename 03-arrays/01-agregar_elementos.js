const letras = ['a', 'b']


letras.push('c') // Agrega un elemento al final del array
console.log(letras) // ['a', 'b', 'c']

letras.unshift('z') // Agrega un elemento al principio del array
console.log(letras) // ['z', 'a', 'b', 'c']

letras.splice(2, 0, 'x') // Agrega un elemento en la posición 2
console.log(letras) // ['z', 'a', 'x', 'b', 'c']